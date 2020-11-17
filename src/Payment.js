import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import './Payment.css';
import { Card } from '@material-ui/core';
import { CardElement } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import { useForm } from "react-hook-form";

function Payment() {
    // eslint-disable-next-line
    const [{ basket, user }, dispatch] = useStateValue();
    const history = useHistory();
    const [disabled, setDisabled] = useState(true);
    const [paymentError, setError] = useState(null);
    const [shippingVal, setShippingVal] = useState('Standard Shipping');
    const [shippingCost, setShippingCost] = useState(0);
    const { register, handleSubmit, errors, reset } = useForm();


    const handleChange = e => {
        setDisabled(e.empty);
        setError(e.error ? e.error.message: null);
    }

    const updateShipping = (cost, type) => {
        setShippingCost(cost);
        setShippingVal(type);
    }

    const onSubmit = data => {
        console.log(data);
        dispatch({
            type: 'CONFIRM_ORDER',
            total: getBasketTotal(basket) + shippingCost,
            shipping: shippingVal
        })
        history.replace('/order');
    }

    return (
        <div className='payment'>
            <h1>Checkout</h1>
            <div className="payment__container">
                {/* Delivery Address */}
                    <Form onSubmit={handleSubmit(onSubmit)}>
                    <div className="payment__section">
                        <div className="payment__title">
                            <h4>Delivery Address</h4>
                        </div>
                        <div className="payment__address">
                                <Form.Row>
                                    <Form.Group as={Col} lg="4" md="12" controlId="shippingStreet">
                                    <Form.Label className='payment__required'>Street Address</Form.Label>
                                    <Form.Control
                                    name='street'
                                    ref={register({ required: true })}
                                    type="text"
                                    placeholder="eg. 1280 Main Street West"
                                    />
                                    {errors.street && <p className='payment__error'>This field is required!</p>}
                                    </Form.Group>
                                    <Form.Group as={Col} lg="4" md="12" controlId="shippingPostal">
                                    <Form.Label className='payment__required'>Postal Code</Form.Label>
                                    <Form.Control
                                    name='postal'
                                    ref={register({ required: true })}
                                    type="text"
                                    placeholder="eg. L1Z 4K2"

                                    />
                                    {errors.postal && <p className='payment__error'>This field is required!</p>}
                                    </Form.Group>
                                    <Form.Group as={Col} lg="4" md="12" controlId="shippingCity">
                                    <Form.Label className='payment__required'>City</Form.Label>
                                    <Form.Control
                                    name='city'
                                    ref={register({ required: true })}
                                    type="text"
                                    placeholder="eg. Toronto"
                                    />
                                    {errors.city && <p className='payment__error'>This field is required!</p>}
                                    </Form.Group>
                                </Form.Row>
                        </div>
                    </div>
                    <div className="payment__section">
                        <div className="payment__title">
                            <h4>Shipping Type</h4>
                        </div>
                        <div className="payment__address">
                            <div key='default-radio' className="mb-3">
                                <Form.Check 
                                    type='radio'
                                    name='shipping'
                                    value='Standard Shipping'
                                    label='Standard Shipping'
                                    className='payment__radio'
                                    ref={register({ required: true })}
                                    checked={shippingVal == 'Standard Shipping'}
                                    onClick={() => updateShipping( 0, 'Standard Shipping')}
                                />

                                <Form.Check 
                                    type='radio'
                                    name='shipping'
                                    value='Express Shipping (3-5 Business Days) - $9.99'
                                    label='Express Shipping (3-5 Business Days) - $9.99'
                                    className='payment__radio'
                                    ref={register({ required: true })}
                                    checked={shippingVal == 'Express Shipping (3-5 Business Days) - $9.99'}
                                    onClick={() => updateShipping( 9.99, 'Express Shipping (3-5 Business Days) - $9.99')}
                                />
                                <Form.Check 
                                    type='radio'
                                    name='shipping'
                                    value='Next Day Shipping (1 Business Day) - $11.99'
                                    label='Next Day Shipping (1 Business Day) - $11.99'
                                    className='payment__radio'
                                    ref={register({ required: true })}
                                    checked={shippingVal == 'Next Day Shipping (1 Business Day) - $11.99'}
                                    onClick={() => updateShipping( 11.99, 'Next Day Shipping (1 Business Day) - $11.99')}
                                />
                            </div>
                        </div>
                    </div>
                {/* Review Items */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h4>Review Items and Delivery</h4>
                    </div>
                    <div className="payment__items">
                        {basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                price={item.price}
                                rating={item.rating}
                                image={item.image}
                            />
                        ))}
                    </div>
                </div>
                {/* Payment method */}
                    <div className="payment__section">
                        <div className="payment__title">
                            <h4>Payment Method</h4>
                        </div>
                        <div className="payment__method">
                                <CardElement onChange={handleChange} name='payment' ref={register({ required: true })}/>
                                <div className="payment__priceContainer">
                                    <CurrencyFormat
                                        renderText={(value) => (
                                            <h5>Order Total: {value}</h5>
                                        )}
                                        decimalScale={2}
                                        value={getBasketTotal(basket) + shippingCost}
                                        displayType={'text'}
                                        thousandSeparator={true}
                                        prefix={'$'}
                                    />
                                    <button disabled={disabled || basket?.length == 0} type='submit'>
                                        <span>Buy Now</span>
                                    </button>
                                </div>

                                {/* Error */}
                                { basket?.length > 0 && paymentError && <p className='payment__error'>{paymentError}</p>}
                                { basket?.length == 0 && <p className='payment__error'>Your cart is empty!</p>}
                        </div>
                    </div>
                </Form>
            </div>
        </div>
    )
}

export default Payment
