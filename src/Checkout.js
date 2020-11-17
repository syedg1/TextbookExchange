import React from 'react';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import './Checkout.css';
import Subtotal from './Subtotal';
import Slider from 'react-slick';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Checkout() {
    const [{ basket, user }] = useStateValue();

    const settings = {
        dots: false,
        fade: true,
        suipe: false,
        touchMove: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 1, 
        arrows: false, 
        slidesToScroll: 1, 
        className: 'checkout__ad'
    }

    return (
        <div className='checkout'>
            <div className="checkout__left" style={{width: '100%'}}>              
                {basket?.length > 0 && (
                    <Subtotal/>
                )}
                {basket?.length === 0 ? (
                    <div className='checkout__title'>
                        <h2>Your Shopping Basket is Empty</h2>
                        <p>You have no items in your basket. To buy items, click "Add to Basket" next to your item.</p>
                    </div>
                ) : (
                    <div className='checkout__items'>
                        <h2 className='checkout__title'>Your Shopping Basket</h2>

                        {basket?.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                rating={item.rating}
                                price={item.price}
                                image={item.image}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Checkout
