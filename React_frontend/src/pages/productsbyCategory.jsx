import { useEffect, useState } from "react";
import '../App.css'
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { FormControl, Button } from 'react-bootstrap';
const Productsbycategory = () => {
    const navigate = useNavigate()
    const [productList, setProductList] = useState('')
    const params = useParams()
    const location = useLocation()
    const [loading, setLoading] = useState(true)
    const [searchInput, setSearchInput] = useState('')
    useEffect(() => {
        getProducts()
    }, [location.pathname])


    async function getProducts() {
        setLoading(true)
        if (searchInput == '') {
            setProductList([])
            const data = await (await fetch(`https://dummyjson.com/products/category/${params.category}/`)).json()
                .then((res) => {
                    setProductList(res)
                    console.log(res, "test")
                    setLoading(false)
                })
        } else {
            const data = await (await fetch(`https://dummyjson.com/products/search?q=${searchInput}`)).json()
                .then((res) => {
                    setProductList(res)
                    setLoading(false)
                })

        }

    }
    // const [api, setApi] = useState('http://127.0.0.1:8000/allProducts/')
    // const getProducts = async () => {
    //     if (searchInput != '') {
    //         const data = await (await fetch(`${api}?search=${searchInput}`)).json()
    //         setProductList(data)
    //         setLoading(false)
    //     }
    //     else {
    //         const data = await (await fetch(`${api}?category=${params.category}`)).json()
    //         setProductList(data)
    //         setLoading(false)
    //     }
    // }
    // useEffect(() => {
    //     getProducts()
    // }, [])
    return (
        <div >
            <div style={{ width: ' 30% ' }}>
                <FormControl

                    type="text"
                    placeholder="Search"
                    className="mr-sm-2"
                    onChange={(e) => {
                        setSearchInput(e.target.value)
                        getProducts()
                    }}
                />
            </div>

            <section className="product_section " >
                <div className="container" style={{ marginTop: 5 }} >
                    <div className="product_container">

                        {loading ? <p>loading...</p> :

                            productList && productList?.products
                                .map((item) => (

                                    <div className="box" key={item.id}>
                                        <div className="box-content" >
                                            <div className="img-box">
                                                <img src={item.thumbnail} alt="" />
                                            </div>
                                            <div className="detail-box">
                                                <div className="text">
                                                    <h6>
                                                        {item.title}
                                                    </h6>
                                                    <h5>
                                                        <span>$</span> {item.price}
                                                    </h5>
                                                </div>
                                                <div className="like">
                                                    <h6>
                                                        Like
                                                    </h6>
                                                    <div className="star_container">
                                                        <i className="fa fa-star" aria-hidden="true"></i>
                                                        <i className="fa fa-star" aria-hidden="true"></i>
                                                        <i className="fa fa-star" aria-hidden="true"></i>
                                                        <i className="fa fa-star" aria-hidden="true"></i>
                                                        <i className="fa fa-star" aria-hidden="true"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="btn-box">
                                            <Button className="button-background" onClick={() => navigate(`/productDetails/${item.id}`)}>
                                                Open Details
                                            </Button>
                                        </div>
                                    </div>))
                        }<br />
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Productsbycategory