import { NavDropdown, Button } from 'react-bootstrap';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './navbar.css'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../store/categories';
import { logout } from '../store/login';
import { fetchCart } from '../store/cart';
const NavbarComponent = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const listCategory = useSelector((state) => state.category)
    const user = useSelector((state) => state.login.user_id)
    const cart = useSelector((state) => state.cart)
    const cartStyle = {
        color: 'purple'
    }

    const [currentPath, setCurrentPath] = useState()
    useEffect(() => {
        setCurrentPath(location.pathname)
    }, [location])
    useEffect(() => {
        getCartLength()
    }, [cart])
    useEffect(() => {
        dispatch(fetchData())
    }, [])
    function getCartLength() {
        if (cart.data?.data) {
            return cart.data.data.carts[0].products.length
        } else {
            return 0
        }
    }
    function dispatchCartData() {

        if (user != null) {
            dispatch(fetchCart(user))
        }
    }
    useEffect(() => {
        dispatchCartData()
    }, [user])
    function logoutStore() {
        dispatch(logout())
        navigate('/login')
    }
    function openCategory(item) {
        navigate(`/productsbycategories/${item}`)
    }
    return (
        <>
            <div>
                <header className="header_section navbar_style">
                    <div className="container-fluid">
                        <nav className="navbar navbar-expand-lg custom_nav-container ">
                            <a className="navbar-brand" href="index.html">
                                <span>
                                    Shop Now
                                </span>
                            </a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className=""> </span>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav  ">
                                    <li className={currentPath == '/' ? 'nav-item active' : 'nav-item'}>
                                        <span className="nav-link" onClick={() => navigate('/')}>Home </span>
                                    </li>
                                    <li className={currentPath == '/about' ? 'nav-item active' : 'nav-item'}>
                                        <span className="nav-link" onClick={() => navigate('/about')} > About</span>
                                    </li>

                                    <li className={currentPath == '/productList' ? 'nav-item active' : 'nav-item'}>
                                        <span className="nav-link" onClick={() => navigate('/productList')}>Products</span>
                                    </li>

                                    {/* <li className="nav-item">
                                        <a className="nav-link" href="testimonial.html">Testimonial</a>
                                    </li> */}
                                    <NavDropdown
                                        id="nav-dropdown-dark-example"
                                        title="Categories"
                                        menuVariant="dark"
                                    >
                                        {listCategory && listCategory.data.map((list) =>
                                            <NavDropdown.Item onClick={() => openCategory(list)} key={list}>{list}</NavDropdown.Item>
                                        )}
                                    </NavDropdown>
                                    <li className={currentPath == '/contact' ? 'nav-item active' : 'nav-item'}>
                                        <span className="nav-link" onClick={() => navigate('/contact')}>Contact Us</span>
                                    </li>
                                </ul>
                                <div className="ms-auto d-none d-lg-block">
                                    <Link to="/cart" className="nav-item nav-link" style={cartStyle}>

                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            className="bi bi-cart"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                                        </svg>(
                                        {getCartLength()}
                                        )
                                    </Link>
                                </div>
                                {user && user ? 
                                <Button onClick={() => logoutStore()}>Logout&nbsp; &nbsp;<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-right" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z" />
                                    <path fillRule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />
                                </svg> </Button>
                                :
                                <Button onClick={() => logoutStore()}>Login&nbsp; &nbsp;</Button>
                                }
                                <div className="user_optio_box">
                                    <a href="">
                                        <i className="fa fa-user" aria-hidden="true"></i>
                                    </a>
                                    <a href="">
                                        <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                                    </a>
                                </div>

                            </div>
                        </nav>
                    </div>
                </header>
            </div>
        </>
    );
};

export default NavbarComponent;
