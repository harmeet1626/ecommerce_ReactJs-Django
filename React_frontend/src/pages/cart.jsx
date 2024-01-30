import { useEffect, useState } from 'react';
import { Col, Row, ListGroup, Container, Card, Button, Image } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCart } from '../store/cart';
import { toast } from 'react-toastify';
const Cart = () => {
    const cart = useSelector((state) => state.cart)
    const [cartLength, setCartlength] = useState(0)
    const [cartData, setCartData] = useState()
    const dispatch = useDispatch()
    const apiUrl = process.env.REACT_APP_API_KEY
    const user = useSelector(state => state.login.user_id)
    useEffect(() => {
        if (cart?.data?.data) {
            setCartData(cart)
            setCartlength(cart.data.data.length)
        }
    }, [cart])
    function clearCart() {
        const data = fetch(`${apiUrl}/clearCart/`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                user_id: user
            }),
        }).then(() => {
            toast.success('cart cleared')
            dispatch(fetchCart(user))
        })
    }

    const items = cart.data.data && cartData?.data.data.map((item) => {
        return (
            <ListGroup.Item key={item?.id} style={{ marginBottom: '20px' }}>
                <Row>
                    <Col>
                        <div>
                            <Image src={item.product_in_cart.thumbnail} style={{ width: '40%', height: '40%' }} />
                        </div>
                    </Col>
                    <Col style={{ marginRight: '20px' }}>
                        {item.name}
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'end',
                                justifyContent: 'space-between',
                            }}
                        >
                            <p>
                                Price - $<span>{item.product_in_cart.price}</span>
                            </p>
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'end',
                                    width: '10%',
                                    justifyContent: 'space-between',
                                    padding: '10px',
                                }}
                            >
                                <div>
                                    <i
                                        className="fas fa-minus-circle"
                                        style={{ color: 'blue', cursor: 'pointer' }}
                                    // onClick={() => decrementHandler(item)}
                                    ></i>
                                </div>
                                <p>{item.qty}</p>
                                <div>
                                    <i
                                        className="fas fa-plus-circle"
                                        style={{ color: 'blue', cursor: 'pointer' }}
                                    // onClick={() => incrementHandler(item)}
                                    ></i>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </ListGroup.Item>
        );
    });
    return (
        <>
            <div style={{ width: '100%', textAlign: 'center', marginTop: '40px' }}>
                <h2>
                    My Cart <span>{`(${cartLength} Items)`}</span>

                </h2>
            </div>

            <Container style={{ alignItems: 'center' }}>
                <Row>
                    <ListGroup style={{ width: '50%', marginLeft: '80px', marginTop: '40px' }}>{items}</ListGroup>

                    <Col style={{ width: '50%', marginLeft: '80px', marginTop: '40px' }}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>
                                    Total Amount - <span>${cartData?.data?.carts && cartData.data.carts[0].total}</span>
                                </Card.Title>

                                <Button
                                    variant="primary"
                                    style={{ marginTop: '20px' }}
                                // onClick={() => history.push('/cart/checkout')}
                                // disabled={cartItems.length === 0}
                                >
                                    Proceed To Checkout
                                </Button>
                                <Button
                                    variant="primary"
                                    style={{ marginTop: '20px' }}
                                    onClick={() => clearCart()}
                                    disabled={cartLength == 0}
                                >
                                    Clear Cart
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default Cart