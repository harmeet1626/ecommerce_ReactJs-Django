import { useEffect, useState } from "react";
import { FormControl, Button } from 'react-bootstrap';
import '../App.css'
import { useNavigate } from "react-router-dom";
const ProductList = () => {
    const apiUrl = process.env.REACT_APP_API_KEY
    const navigate = useNavigate()
    const [productList, setProductList] = useState('')
    const [loading, setLoading] = useState(true)
    const [limit, setLimit] = useState(9)
    const [skip, setSkip] = useState(0)
    const [searchInput, setSearchInput] = useState('')
    const skipVal = () => skip
    useEffect(() => {
        // getProducts()
    }, [skip])
    // function next() {
    //     if (productList.total < skip) {
    //         console.warn("no more records")
    //     } else {
    //         setSkip((prevSkip) => prevSkip + limit)
    //     }
    // }
    // function previous() {
    //     if (skip < 0) {
    //         console.warn('no more previous records')
    //     }
    //     else {
    //         setSkip((preSkip) => preSkip - limit)
    //     }
    // }
    // async function getProducts() {
    //     setLoading(true)
    //     if (searchInput == '') {
    //         setProductList([])
    //         const data = await (await fetch(`https://dummyjson.com/products/?limit=${limit}&skip=${skipVal()}`)).json()
    //             .then((res) => {
    //                 setProductList(res)
    //                 setLoading(false)
    //             })
    //     } else {
    //         const data = await (await fetch(`https://dummyjson.com/products/search?q=${searchInput}`)).json()
    //             .then((res) => {
    //                 setProductList(res)
    //                 setLoading(false)
    //             })

    //     }
    // }
    useEffect(() => {
        getAllProducts()
    }, [])
    const [api, setApi] = useState(`${apiUrl}/allProducts/`)
    const getAllProducts = async () => {
        if (searchInput != '') {
            const data = await (await fetch(`${api}?search=${searchInput}`)).json()
            setProductList(data)
            setLoading(false)
        }
        else {
            try {

                const data = await (await fetch(`${api}`)).json()
                setProductList(data)
                setLoading(false)
            }
            catch (e) {
                console.log(e)
            }
        }
    }
    const next = () => {
        setApi(productList.next)
    }
    useEffect(() => {
        getAllProducts()
    }, [api, searchInput])
    const previous = () => {
        setApi(productList.previous)
    }
    return (
        <div>
            <div style={{ width: ' 30% ' }}>
                <FormControl
                    type="text"
                    placeholder="Search"
                    className="mr-sm-2"
                    onChange={(e) => {
                        setSearchInput(e.target.value)

                    }}
                />
            </div>

            <section className="product_section " >
                <div className="container" style={{ marginTop: 5 }} >
                    {/* <div className="product_heading">
                        <h2>
                            Top Sale Watches
                        </h2>
                    </div> */}
                    <div className="product_container">

                        {loading ? <p>loading...</p> :

                            productList && productList?.results.map((item) => (

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
                    <div className="pagination_button">
                        <Button className="button-background" disabled={productList && productList.previous == null} style={{ width: '100px' }} onClick={() => previous()}>Previous</Button>&nbsp;&nbsp;
                        <Button className="button-background" disabled={productList && productList.next == null} style={{ width: '100px' }} onClick={() => next()}>Next</Button>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default ProductList