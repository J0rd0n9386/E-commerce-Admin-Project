//  if (user) {
//       jwt.sign({ user }, jwtSecretKey, { expiresIn: "2h" }, (err, token) => {
//         if (err) {
//           res.send({ result: "Something went wrong, Please try again" });
//         } else {
//           res.send({ result: token });
//         }
//       });

// jwt.sign({ user }, jwtSecretKey, { expiresIn: "2h" }, (err, token) => {})

// { user }        → token ke andar user ka data store hoga
// jwtSecretKey    → secret key (.env mein hoti hai)
// { expiresIn:"2h" } → 2 ghante baad token expire hoga
// (err, token)    → callback function
//                   err   → kuch galat hua
//                   token → token ban gaya




// Client → email + password bheja
//               ↓
//     dono fields hain? 
//        ↓ haan           ↓ nahi
//   DB mein dhundo    "Wrong Credentials"
//        ↓
//    User mila?
//    ↓ haan        ↓ nahi
// Token banao   "No User Found"
//    ↓
// Token bana?
// ↓ haan     ↓ nahi
// Token    "Something
// bhejo    went wrong"