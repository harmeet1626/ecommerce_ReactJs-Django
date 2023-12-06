// import '../theme/images'
import a1 from '../theme/images/a-1.jpg'
import a2 from '../theme/images/a-2.jpg'
import address_icon from '../theme/images/location-white.png'
import pNo_icon from '../theme/images/telephone-white.png'
import email_icon from '../theme/images/envelope-white.png'


const About = () => {
    return (<div>
        <section className="about_section layout_padding">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6">
                        <div className="img_container">
                            <div className="img-box b1">
                                <img src={a1} alt="" />
                            </div>
                            <div className="img-box b2">
                                <img src={a2} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="detail-box">
                            <h2>
                                About Our Shop
                            </h2>
                            <p>
                                There are many variations of different products categories we have,
                                we ensures that anything you will buy from us will be genunine.
                            </p>
                            <a href="">
                                Read More
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="info_section layout_padding2">
            <div className="container">
                <div className="info_logo">
                    <h2>
                        HandTime
                    </h2>
                </div>
                <div className="row">

                    <div className="col-md-3">
                        <div className="info_contact">
                            <h5>
                                About Shop
                            </h5>
                            <div>
                                <div className="img-box">
                                    <img src={address_icon} width="18px" alt="" />
                                </div>
                                <p>
                                    Address
                                </p>
                            </div>
                            <div>
                                <div className="img-box">
                                    <img src={pNo_icon} width="12px" alt="" />
                                </div>
                                <p>
                                    +01 1234567890
                                </p>
                            </div>
                            <div>
                                <div className="img-box">
                                    <img src={email_icon} width="18px" alt="" />
                                </div>
                                <p>
                                    demo@gmail.com
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="info_info">
                            <h5>
                                Informations
                            </h5>
                            <p>
                                ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            </p>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="info_insta">
                            <h5>
                                Instagram
                            </h5>
                            <p>
                                shop_now214
                            </p>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="info_form ">
                            <h5>
                                Newsletter
                            </h5>
                            <form action="">
                                <input type="email" placeholder="Enter your email" />
                                <button>
                                    Subscribe
                                </button>
                            </form>
                            <div className="social_box">
                                <a href="">
                                    <img src="images/fb.png" alt="" />
                                </a>
                                <a href="">
                                    <img src="images/twitter.png" alt="" />
                                </a>
                                <a href="">
                                    <img src="images/linkedin.png" alt="" />
                                </a>
                                <a href="">
                                    <img src="images/youtube.png" alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="footer_section">
            <div className="container">
                <p>
                    &copy; <span id="displayYear"></span> All Rights Reserved By
                    <a href="https://html.design/">Free Html Templates</a>
                </p>
            </div>
        </section>
    </div>
    )
}
export default About