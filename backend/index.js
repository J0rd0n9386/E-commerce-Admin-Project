import express from "express";
import connectDB from "./db/db.js";
import dotenv from "dotenv";
import User from "./User.js";
import Product from "./products.model.js";
import cors from "cors";
import productsModel from "./products.model.js";
import jwt from "jsonwebtoken";

dotenv.config();

const jwtSecretKey = process.env.JWT_SECRET_KEY; // Isko aap apne secret key se replace kar sakte hain,
//  aur ise environment variable mein store karna behtar hota hai.

const app = express();
// cors middleware use karna padega taki client se aane wale request ko allow kar sake


app.use(cors({
  origin: process.env.FRONTEND_URL || "*",
  credentials: true
}));

// jo bhi data client se aayega either from react or postman
// usko json me convert karne ke liye ye middleware use karna padega
app.use(express.json());

// Yeh code aapke E-commerce app ke liye ek "User Registration" (Sign Up) ka logic hai.
//  Iska kaam hai Postman (ya aage chal kar frontend) se user ka data lena aur use aapke MongoDB database mein save karna.

app.post("/register", async (req, res) => {
  try {
    //res.body mein wo data hota hai jo client se aaya hai, jaise ki name, email, password, etc.
    let user = new User(req.body); // Ye line ek naya User object create karti hai
    // jo ki aapke User model se bana hai. "req.body" mein wo data hota hai jo client se aaya hai,
    // jaise ki name, email, password, etc.
    let result = await user.save();
    // Ye line user ke data ko MongoDB database mein save karne ke liye hai. "save()" method asynchronous hota hai,
    // isliye "await" ka use kiya gaya hai.
    result = result.toObject(); // Ye line result ko JavaScript object mein convert karne ke liye hai,
    // taki hum usme se password field ko delete kar sake.
    delete result.password; // Ye line password field ko result object se delete karne ke liye hai,
    // taki wo response mein na aaye aur security badh jaye.
    // Iske baad, jo result object banta hai usme user ka data hota hai, lekin password field nahi hoti.
    jwt.sign(
      { user: result },
      jwtSecretKey,
      { expiresIn: "2h" },
      (err, token) => {
        if (err) {
          res.status(500).send({ result: "Something went wrong" });
        } else {
          res.send({ user: result, auth: token });
        }
      },
    );
  } catch (error) {
    res.status(500).send({ result: "Error in registration", error });
  }
});
//res.send(result); // Ye line database mein save hone ke baad user ke data ko response ke roop mein bhejti hai.

app.post("/login",  async (req, res) => {
  console.log(req.body);
  if (req.body.password && req.body.email) {
    let user = await User.findOne({ email: req.body.email });
    // User ko email se find karo, phir password match karo
    if (user) {
      // Password check — plain text comparison (production mein bcrypt use karna chahiye)
      if (user.password !== req.body.password) {
        return res.send({ result: "Wrong Password" });
      }
      // Password match hua, ab token generate karo
      let userData = user.toObject();
      delete userData.password; // Password response mein nahi bhejenge
      jwt.sign(
        { user: userData },
        jwtSecretKey,
        { expiresIn: "2h" },
        (err, token) => {
          if (err) {
            res
              .status(500)
              .send({ result: "Something went wrong, Please try again" });
          } else {
            // Frontend expects { auth: token } along with user data
            res.send({ ...userData, auth: token });
          }
        },
      );
    } else {
      res.send({ result: "No User Found" });
    }
  } else {
    res.send({ result: "Wrong Credentials" });
  }
});

app.post("/add-products", verifyToken, async (req, res) => {
  let product = await new Product(req.body); //new product create karne ke liye hai, jo ki aapke Product model se bana hai.
  //  "req.body" mein wo data hota hai jo client se aaya hai, jaise ki name, description, price, etc.
  //object create karne ke baad, usko database mein save karna hota hai, jiske liye "save()" method ka use kiya jata hai.
  let result = await product.save(); // ye line product ke data ko MongoDB database mein save karne ke liye hai.
  // "save()" method asynchronous hota hai, isliye "await" ka use kiya gaya hai.

  res.send(result);
});

app.get("/products", verifyToken, async (req, res) => {
  let products = await Product.find();
  if (products.length > 0) {
    res.send(products);
  } else {
    res.send("No Products Found");
  }
});

app.delete("/products/:id", verifyToken, async (req, res) => {
  const result = await Product.deleteOne({ _id: req.params.id.trim() });
  res.send(result);
});

app.get("/products/:id", verifyToken, async (req, res) => {
  const product = await Product.findById({ _id: req.params.id });
  if (product) {
    res.send(product);
  } else {
    res.send("No Record Found");
  }
});
app.put("/products/:id", verifyToken, async (req, res) => {
  let result = await Product.updateOne(
    { _id: req.params.id },
    {
      //         $set — MongoDB ka operator hai
      // Sirf woh fields update karta hai jo req.body mein bheje gaye hain
      $set: req.body,
    },
  );
  res.send(result);
});

app.get("/search/:key", verifyToken, async (req, res) => {
  let result = await Product.find({
    $or: [
      { name: { $regex: req.params.key } },
      { company: { $regex: req.params.key } },
      { category: { $regex: req.params.key } },
    ],
  });
  res.send(result);
});

function verifyToken(req, res, next) {
  const authHeader = req.headers["authorization"];

  if (authHeader) {
    const token = authHeader.split(" ")[1];
    // Bearer token ko split karke token nikalne ke liye
    jwt.verify(token, jwtSecretKey, (err, decoded) => {
      // token ko verify karne ke liye
      if (err) {
        res.status(403).send({ result: "Failed to authenticate token" });
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    res.status(403).send({ result: "No token provided" });
  }
}

const startServer = async () => {
  try {
    await connectDB();
    app.listen(process.env.PORT, () => {
      console.log(`app is listening at ${process.env.PORT}`);
    });
  } catch (error) {
    console.log("DB Error:", error);
    process.exit(1);
  }
};

startServer();

// Postman/Frontend
//       ↓
// POST /add-products → req.body = { name: "shoes", price: 999 }
//       ↓
// new Product(req.body) → JavaScript object bana
//       ↓
// product.save() → Mongoose ne MongoDB ko query bheji
//       ↓
// MongoDB mein document save hua
//       ↓
// res.send(result) → response wapas aaya

// Express ──── Mongoose ──── MongoDB
// (req)        (save())      (DB mein store)

///////// most Impoortant//////////
// db.js mein yeh hoga

//mongoose.connect(process.env.MONGO_URI)

// ↑ yahi connection hai jo sab kuch jodta hai
