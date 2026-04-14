import { useState } from 'react'
import '../App.css'
import axios from 'axios';
const Addproduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const [error, setError] = useState(false);

  const handleAddproduct = async (e) => {
      e.preventDefault();
  if (!name || !price || !category || !company) {
     setError(true);
     return false;
  }
    
    const result = await axios.post(`${import.meta.env.VITE_API_URL}/add-products`,
      { name, price, category, company },
      { headers: { 'Content-Type': 'application/json' } }
    );
    let product = result.data
    if (product._id) {
      localStorage.setItem("Product", JSON.stringify(product))
      console.log("Product Saved:", JSON.parse(localStorage.getItem("Product")))

    } else {
      alert('invalid product')
    }
  }


  return (
    <div className="add-product-container">
      <h1>Addproduct</h1>
      <div>
        <label htmlFor="product-name">Product-Name</label>
        <input value={name} onChange={(e) => { setName(e.target.value) }} type="text" id="product-name" name="product-name" placeholder="Enter product name" />
        {error && !name && <span>⚠ Please enter a valid product name</span>}
      </div>
      <div>
        <label htmlFor="product-Price">Product-Price</label>
        <input value={price} onChange={(e) => { setPrice(e.target.value) }} type="text" id="product-Price" name="product-price" placeholder="Enter product Price" />
        {error && !price && <span>⚠ Please enter a valid product price</span>}
      </div>
      <div>
        <label htmlFor="product-Category">Product-Category</label>
        <input value={category} onChange={(e) => { setCategory(e.target.value) }} type="text" id="product-category" name="product-Category" placeholder="Enter product category" />
        {error && !category && <span>⚠ Please enter a valid product category</span>}
      </div>
      <div>
        <label htmlFor="product-Company">Product-Company</label>
        <input value={company} onChange={(e) => { setCompany(e.target.value) }} type="text" id="product-Company" name="product-Company" placeholder="Enter product Company" />
        {error && !company && <span>⚠ Please enter a valid product company</span>}
      </div>
      <div>
        <button onClick={handleAddproduct} className="submit-btn" >
          Add Product
        </button>
      </div>
    </div>
  )
}

export default Addproduct