// React (Frontend)          Express (Backend)         MongoDB (Database)
// ─────────────────         ─────────────────         ─────────────────

// 1. ADD PRODUCT FLOW:

// [Add Product Form]  ──→  app.post("/add-products")  ──→  product.save()
// axios.post()             req.body se data leta hai        DB mein store
// sends {name,price,       new Product() banata hai         karta hai
// category,company}        result wapas bhejta hai
//                     ←──  res.send(result)
// localStorage mein
// save karta hai

// 2. GET PRODUCTS FLOW:

// useEffect() chalta  ──→  app.get("/products")       ──→  Product.find()
// hai page load pe         request aati hai                 DB se saare
// axios.get()              products dhundhta hai            products laata
//                     ←──  res.send(products)               hai
// setProducts()
// state update hoti
// table mein render
// hota hai

// Step  | Kaun      | Kya karta hai
// ------|-----------|----------------------------------------
// 1     | React     | Form data axios se backend ko bhejta hai
// 2     | Express   | Data leta hai, MongoDB mein save karta hai
// 3     | MongoDB   | Data store karta hai
// 4     | React     | useEffect se axios.get() call karta hai
// 5     | Express   | MongoDB se saara data laata hai
// 6     | React     | Data table mein render karta hai