import { useState, useEffect } from 'react'
import '../App.css'
import { useParams } from 'react-router-dom';
import axios from 'axios';

const UpdateProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const [originalData, setOriginalData] = useState({});
  const params = useParams();

  useEffect(() => {
    const getProduct = async () => {
      let result = await axios.get(
        `${import.meta.env.VITE_API_URL}/Products/${params.id}`,
        
        
      );
      setName(result.data.name);
      setPrice(result.data.price);
      setCategory(result.data.category);
      setCompany(result.data.company);
      setOriginalData(result.data);
    };
    getProduct();
  }, [params.id]);

  const updateProduct = async (e) => {
    e.preventDefault();

    let updatedData = {};
    if (name !== originalData.name) updatedData.name = name;
    if (price !== originalData.price) updatedData.price = price;
    if (category !== originalData.category) updatedData.category = category;
    if (company !== originalData.company) updatedData.company = company;

    if (Object.keys(updatedData).length === 0) {
      alert("No changes made to update");
      return;
    }

    let result = await axios.put(
      `${import.meta.env.VITE_API_URL}/Products/${params.id}`,
      updatedData,
      {
        headers: {
          authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
      }
    );
    console.log(result);
  };

  return (
    <div className="add-product-container">
      <h1>Update Product</h1>
      <div>
        <label>Product Name</label>
        <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Enter product name" />
      </div>
      <div>
        <label>Product Price</label>
        <input value={price} onChange={(e) => setPrice(e.target.value)} type="text" placeholder="Enter product price" />
      </div>
      <div>
        <label>Product Category</label>
        <input value={category} onChange={(e) => setCategory(e.target.value)} type="text" placeholder="Enter product category" />
      </div>
      <div>
        <label>Product Company</label>
        <input value={company} onChange={(e) => setCompany(e.target.value)} type="text" placeholder="Enter product company" />
      </div>
      <div>
        <button onClick={updateProduct} className="submit-btn">
          Update-Product
        </button>
      </div>
    </div>
  );
};

export default UpdateProduct;