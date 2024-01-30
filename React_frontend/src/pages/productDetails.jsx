import React, { useEffect, useState } from 'react';
import '../App.css';
import '../style/productDetails.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { redirect, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from "react-toastify";
import { fetchCart } from '../store/cart';

function ProductDetails() {
    const dispatch = useDispatch()
    const params = useParams()
    const navigate = useNavigate()
    const apiUrl = process.env.REACT_APP_API_KEY
    const style = {
        display: 'flex',
    }
    const imgStyle = {
        height: '50px',
        width: '120px'
    }
    const [loading, setLoading] = useState(true)
    const [product, setProduct] = useState()
    const [image, setImage] = useState()
    const user = useSelector((state) => state.login.user_id)
    const [qty, setQTY] = useState(1)
    const [API_URL, setAPI_URL] = useState(`${apiUrl}/allProducts/`)
    async function getproducts() {
        setLoading(true)
        const data = await fetch(`${API_URL}?product_id=${params.id}`)
            .then(res => res.json())
            .then(res => {
                setImage(res.results[0].thumbnail)
                setProduct(res)
                setLoading(false)
            });
    }
    const addToCart = async () => {
        if (qty == 0) {
            toast.error('please select quantity')
            return
        }
        if (!user) {
            navigate('/login')
        }
        // await fetch('https://dummyjson.com/carts/add', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({
        //         userId: user.id,
        //         products: [
        //             {
        //                 id: params.id,
        //                 quantity: qty,
        //             }
        //         ]
        //     })
        // })
        const data = await fetch(`${apiUrl}/addToCart/`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                user_id: user,
                product_id: params.id,
                quantity: qty,

            })
        })
            .then(res => res.json())
            .then(console.log);
        toast.success('item added to cart')
        dispatch(fetchCart(user))

    }
    useEffect(() => {
        getproducts()
    }, [])

    return (
        <div>
            <div className="container bootdey" >
                <div className="col-md-12">
                    <section className="panel">
                        <div className="panel-body">
                            {loading ? <p>Loading...</p> :
                                <div>
                                    <div className="col-md-6" style={style}>
                                        <div className="pro-img-details">
                                            <img height={300} width={500} src={image} alt="" />
                                        </div>&nbsp;&nbsp;&nbsp;&nbsp;
                                        <div className="pro-img-list">
                                            {product && product.results[0].productimage_set.map((item, index) =>
                                                <div key={index}>
                                                    <a>
                                                        <img onClick={() => setImage(item)} src={item} alt="" style={imgStyle} />

                                                    </a>
                                                </div>
                                            )}
                                        </div>

                                    </div>
                                    <div className="col-md-6">
                                        <h4 className="pro-d-title">
                                            <a href="#/" className="">
                                                {product && product.title}
                                            </a>
                                        </h4>
                                        <p>
                                            {product && product.description}
                                        </p>
                                        <div className="product_meta">
                                            <span className="posted_in"> <strong>Categories:</strong> {product && product.category}</span>

                                        </div>
                                        <div className="m-bot15"> <strong>Price : </strong> <span className="amount-old">${product && product.price}</span> </div>
                                        <div className="form-group">
                                            <label>Quantity</label>
                                            <input value={qty} onChange={(e) => setQTY(e.target.value)} type="quantiy" placeholder="1" className="form-control quantity" />
                                        </div>
                                        <p>
                                            <button onClick={() => addToCart()} className="btn btn-round btn-danger" type="button"><i className="fa fa-shopping-cart"></i> Add to Cart</button>
                                        </p>
                                    </div>
                                </div>
                            }
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
export default ProductDetails;