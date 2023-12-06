
import { Route, Routes, useNavigate, useLocation } from "react-router-dom"
import Home from "../pages/home"
import ProductList from "../pages/productsList"
import Cart from "../pages/cart"
import About from "../pages/about"
import Contact from "../pages/contactUs"
import Login from "../pages/login"
import ProductDetails from "../pages/productDetails"
import { useSelector } from "react-redux"
import { useEffect } from "react"
import Productsbycategory from "../pages/productsbyCategory"
function Router_view() {
    const user = useSelector((state) => state.login.user_id)
    const location = useLocation()
    const navigate = useNavigate()
    // useEffect(() => {
    //     if (user == null && location.pathname !== '/login') {
    //         navigate('/login')
    //     }
    // }, [user, location])
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/productList" element={< ProductList />} />
                <Route path="/cart" element={< Cart />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={< Contact />} />
                <Route path="/productDetails/:id" element={<ProductDetails />} />
                <Route path="/productsbycategories/:category" element={<Productsbycategory />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </>
    )
}
export default Router_view