import Nav from './Nav'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import Home from './nav-component/Home'
import AddProduct from './nav-component/AddProduct'
import UpdateProduct from './nav-component/UpdateProducts'
import Profile from './nav-component/Profile'
import SignUp from './nav-component/SignUp'
import Footer from './Footer'
import Logout from './nav-component/Logout'
import Login from './nav-component/Login'
import PrivateComponent from './nav-component/PrivateComponent'
import ProductList from './nav-component/ProductList' 
import './App.css'


function Layout() {

  return (
    <>
      <div className='nav-container'>
        <Nav />
      </div>
      <Outlet />

    </>
  )

}
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        },

        {
          path: "SignUp",
          element: <SignUp />
        },
        
{
 path: "Login",
 element: <Login />
},
        {
          path: "/",
          element: <PrivateComponent />,
          children: [{
            path: "ProductList",
            element: <ProductList />
          },
          {
            path: "Add-Product",
            element: <AddProduct />
          },
          {
            path: "Update-Product/:id", // using dynamic route to pass the product id for updating
            element: <UpdateProduct />
          },
          {
            path: "Profile",
            element: <Profile />
          },
          {
            path: "Logout",
            element: <Logout />

          }],
        }
      ]
    }
  ]
)

function App() {


  return (
    <>
      <div className="App">

        <RouterProvider router={router} />
        <h1>E-Dashboard</h1>

        <div>

        </div>
        <Footer />


      </div>

    </>
  )
}

export default App
