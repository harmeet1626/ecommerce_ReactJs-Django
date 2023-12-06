import slidebar from "../theme/images/slider-bg.jpg"
import fastDelivery from '../theme/images/feature-1.png'
import freeShipping from '../theme/images/feature-2.png'
import bestBuildquality from '../theme/images/feature-3.png'
import customerServicce from '../theme/images/feature-4.png'
import { useNavigate } from "react-router-dom"

const Home = () => {
    const navigate = useNavigate()
    return (
        <div>
            <div className="hero_area">
                <section className="slider_section ">
                    <div className="slider_bg_box">
                        <img src={slidebar} alt="" />
                    </div>
                    <div id="customCarousel1" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="container ">
                                    <div className="row">
                                        <div className="col-md-7">
                                            <div className="detail-box">
                                                <h1>
                                                    Best products
                                                </h1>
                                                <p>
                                                    For best offers checkout our products page!
                                                </p>
                                                <div className="btn-box">
                                                    <a onClick={() => navigate('/contact')} className="btn1">
                                                        Contact Us
                                                    </a>
                                                    <a onClick={() => navigate('/about')} className="btn2">
                                                        About Us
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="container ">
                                    <div className="row">
                                        <div className="col-md-7">
                                            <div className="detail-box">
                                                <h1>
                                                    Stylish Watches
                                                </h1>
                                                <p>
                                                    We will provide all genuine products here
                                                </p>
                                                <div className="btn-box">
                                                    <a className="btn1">
                                                        Contact Us
                                                    </a>
                                                    <a href="" className="btn2">
                                                        About Us
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="container ">
                                    <div className="row">
                                        <div className="col-md-7">
                                            <div className="detail-box">
                                                <h1>
                                                    Stylish Watches
                                                </h1>
                                                <p>
                                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus quidem maiores perspiciatis, illo maxime voluptatem a itaque suscipit.
                                                </p>
                                                <div className="btn-box">
                                                    <a href="" className="btn1">
                                                        Contact Us
                                                    </a>
                                                    <a href="" className="btn2">
                                                        About Us
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="container ">
                                    <div className="row">
                                        <div className="col-md-7">
                                            <div className="detail-box">
                                                <h1>
                                                    Stylish Watches
                                                </h1>
                                                <p>
                                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus quidem maiores perspiciatis, illo maxime voluptatem a itaque suscipit.
                                                </p>
                                                <div className="btn-box">
                                                    <a href="" className="btn1">
                                                        Contact Us
                                                    </a>
                                                    <a href="" className="btn2">
                                                        About Us
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="container ">
                                    <div className="row">
                                        <div className="col-md-7">
                                            <div className="detail-box">
                                                <h1>
                                                    Stylish Watches
                                                </h1>
                                                <p>
                                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus quidem maiores perspiciatis, illo maxime voluptatem a itaque suscipit.
                                                </p>
                                                <div className="btn-box">
                                                    <a href="" className="btn1">
                                                        Contact Us
                                                    </a>
                                                    <a href="" className="btn2">
                                                        About Us
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>



            <section className="service_section">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6 col-lg-3">
                            <div className="box ">
                                <div className="img-box">
                                    <img src={fastDelivery} alt="" />
                                </div>
                                <div className="detail-box">
                                    <h5>
                                        Fast Delivery
                                    </h5>
                                    <p>
                                        variations of passages of Lorem Ipsum available
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="box ">
                                <div className="img-box">
                                    <img src={freeShipping} alt="" />
                                </div>
                                <div className="detail-box">
                                    <h5>
                                        Free Shiping
                                    </h5>
                                    <p>
                                        variations of passages of Lorem Ipsum available
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="box ">
                                <div className="img-box">
                                    <img src={bestBuildquality} alt="" />
                                </div>
                                <div className="detail-box">
                                    <h5>
                                        Best Quality
                                    </h5>
                                    <p>
                                        variations of passages of Lorem Ipsum available
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="box ">
                                <div className="img-box">
                                    <img src={customerServicce} alt="" />
                                </div>
                                <div className="detail-box">
                                    <h5>
                                        24x7 Customer support
                                    </h5>
                                    <p>
                                        variations of passages of Lorem Ipsum available
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Home