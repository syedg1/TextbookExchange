import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';

function CheckoutProduct({ id, title, price, rating, image, hideButton }) {
    // eslint-disable-next-line
    const [state, dispatch] = useStateValue();
    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id
        })
    }
    return (
        <Row className='checkoutProduct'>
            <Col lg={2} md={12}> 
            <img className='checkoutProduct__image' src={image} alt="item"/>
            </Col>
            <Col lg={10} md={12} className="checkoutProduct__info">
                <p className='checkoutProduct__title'>{title}</p>
                <p className='checkoutProduct__price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(rating)
                        .fill()
                        // eslint-disable-next-line
                        .map((_) => (<span role='img'>⭐</span>))
                    }
                </div>
                {!hideButton && (
                    <button onClick={removeFromBasket}>Remove from Basket</button>
                )}
            </Col>
        </Row>
    )
}

export default CheckoutProduct