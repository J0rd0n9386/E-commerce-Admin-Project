import axios from "axios";
import { useState, useEffect, } from "react";
import { NavLink } from "react-router-dom";
import '../App.css'

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {

        getProducts();  // khud hi call kiya kyunki useEffect ke andar hai, jab component mount hoga tab ye function call hoga

    }, []);

    const getProducts = async () => {
        try {
            let result = await axios.get(`${import.meta.env.VITE_API_URL}/products`, {
                headers: {
                    authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
                },
            });
            console.log(result.data, "is products");
            setProducts(result.data);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    const deleteProduct = async (id) => {
        try {
            await axios.delete(`${import.meta.env.VITE_API_URL}/products/${id}`, {
                headers: {
                    authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
                },
            });
            // Delete response is a MongoDB acknowledgment, not product list
            // So filter the current state to remove the deleted product
            const updatedProducts = products.filter(item => item._id !== id);
            setProducts(updatedProducts);
        } catch (error) {
            console.error("Error deleting product:", error);
        }
    };

    const SearchProduct = async (event) => {
        try {
            let key = event.target.value;
            if (key) {
                let result = await axios.get(`${import.meta.env.VITE_API_URL}/search/${key}`, {
                    headers: {
                        authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
                    },
                });
                setProducts(result.data);
            } else {
                getProducts();
            }
        } catch (error) {
            console.error("Error searching products:", error);
        }
    }

    return (

        <div className="ProductList">
            <h1>Product-List</h1>
            <div className="search-container">
                <input
                    type="text"
                    className="search-box"
                    placeholder="Search for products..."
                    onChange={SearchProduct}
                />
            </div>
            <div className="product-list-container">
                <table>
                    <thead>
                        <tr>
                            <th>Serial</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Category</th>
                            <th>Company</th>
                            <th>Delete</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.length > 0 ? products.map((item, index) => (
                            <tr key={item._id}>
                                <td>{index + 1}</td>
                                <td>{item.name}</td>
                                <td>${item.price}</td>
                                <td>{item.category}</td>
                                <td>{item.company}</td>
                                <td>
                                    <button onClick={() => deleteProduct(item._id)} className="btn-9" type="button">DELETE</button>
                                </td>
                                <td>
                                    <NavLink to={`/Update-Product/${item._id}`}>
                                        <button className="btn-9" type="button">UPDATE</button>
                                    </NavLink>
                                </td>

                            </tr>
                        )) : <tr><td colSpan="7">No Products Found</td></tr>}
                    </tbody>
                </table>
            </div>
            {products.length === 0 && <h2>No Products Found</h2>}
        </div>
    )
}

export default ProductList