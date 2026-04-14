// Frontend (React)                    Backend (Express)
// ────────────────                    ─────────────────

// 1. Button click
//    e.preventDefault()

// 2. Validation check
//    (!name || !price...)

// 3. axios.post() bheja  ─────────→  4. req.body se data mila
//    {name, price,                       {name, price,
//    category, company}                  category, company}

//                                     5. new Product(req.body)
//                                        MongoDB object bana

//                                     6. product.save()
//                                        DB mein save kiya

//                         ←─────────  7. res.send(result)
//                                        saved product wapas bheja

// 8. result.data mila
//    {_id, name, price,
//    category, company}

// 9. product._id check
//    localStorage mein save