// # Express.js Routing & CRUD Quick Revision Notes 🚀

// ## 1. Core HTTP Methods (CRUD)
// Express.js mein 4 main methods hote hain jo Database operations (CRUD) ko handle karte hain:

// * **C - Create** 👉 `app.post` (Naya data add karna)
// * **R - Read** 👉 `app.get` (Data fetch karna/dekhna)
// * **U - Update** 👉 `app.put` (Pehle se maujood data edit karna)
// * **D - Delete** 👉 `app.delete` (Data remove karna)

// ---

// ## 2. Key Concepts: `req` aur `res`
// Har route ke callback function `(req, res) => {}` mein do main cheezein hoti hain:

// * **`req` (Request):** Client (browser/Postman) ne server ko kya bheja hai.
//   * `req.body`: POST/PUT requests mein bheja gaya hidden data (jaise form ka data).
//   * `req.params`: URL ke andar variables (jaise `/users/:id` mein `id`).
// * **`res` (Response):** Server client ko kya wapas bhejega.
//   * `res.send('Text')`: Normal text bhejne ke liye.
//   * `res.json({ data: "here" })`: JSON object bhejne ke liye.

// ---

// ## 3. GET vs POST (Sabse Bada Difference)

// | Feature | `app.get` (Read) | `app.post` (Create) |
// | :--- | :--- | :--- |
// | **Kaam** | Server se data mangwana. | Server par naya data bhejna/save karna. |
// | **Data Kahan Hai?**| URL bar mein (visible). | Request ki Body (`req.body`) mein (hidden). |
// | **Security** | Kam (Sensitive data nahi bhejte).| Zyada (Passwords waghera ke liye safe). |
// | **Browser Test** | Direct browser URL se test hota hai.| Browser se seedha test nahi hota (Postman/Form chahiye). |

// ---

// ## 4. Complete CRUD API Boilerplate (Copy-Paste Template)
// Yeh ek basic template hai jisme Express server setup aur saare 4 CRUD operations maujood hain:

// ```javascript
// import express from 'express';
// // const express = require('express'); // Agar ES6 modules use nahi kar rahe

// const app = express();
// const PORT = 3000;

// // Middleware: Taki server req.body se JSON data samajh sake
// app.use(express.json()); 

// // Temporary Dummy Database
// let users = [
//     { id: 1, name: "Ankit", role: "Developer" }
// ];

// // ==========================
// // 🛣️ ROUTES (CRUD Operations)
// // ==========================

// // 1. READ (GET) - Saare users dekhna
// app.get('/users', (req, res) => {
//     res.json(users);
// });

// // 2. CREATE (POST) - Naya user add karna
// app.post('/users', (req, res) => {
//     // req.body se user ka data nikalna
//     const newUser = {
//         id: users.length + 1,
//         name: req.body.name,
//         role: req.body.role
//     };
//     users.push(newUser);
//     res.status(201).send("Naya user ban gaya!");
// });

// // 3. UPDATE (PUT) - Kisi user ka data edit karna
// app.put('/users/:id', (req, res) => {
//     const userId = parseInt(req.params.id);
//     const user = users.find(u => u.id === userId);
    
//     if (user) {
//         user.name = req.body.name; // Data update kiya
//         user.role = req.body.role;
//         res.send("User update ho gaya!");
//     } else {
//         res.status(404).send("User nahi mila!");
//     }
// });

// // 4. DELETE (DELETE) - Kisi user ko hatana
// app.delete('/users/:id', (req, res) => {
//     const userId = parseInt(req.params.id);
//     users = users.filter(u => u.id !== userId); // Us ID ko list se filter out kar diya
//     res.send("User delete ho gaya!");
// });

// // ==========================
// // 🚀 SERVER START
// // ==========================
// app.listen(PORT, () => {
//     console.log(`Server is running smoothly on port ${PORT}`);
// });


////////////////////////////////////
// pehle install karo:
// npm install axios

// const axios = require('axios');
// yha pe order

// axios.put('http://localhost:3000/orders/2', {
//   pizza: 'Farmhouse',
//   size: 'Large'
// })
// .then(res => console.log(res.data))
// .catch(err => console.log(err.message));