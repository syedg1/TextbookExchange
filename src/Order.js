import React from 'react';
import './Order.css';
import moment from 'moment';
import CheckoutProduct from './CheckoutProduct';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';

function Order() {
    const[{latestOrder, latestTotal, shippingType}] = useStateValue();

    return (
        <div className='order'>
            <h2>Order Confirmation</h2>
            <p>{moment().format('MMMM Do YYYY, h:mma')}</p>
            <p>{shippingType}</p>
            {latestOrder?.map(item => (
                <CheckoutProduct
                    id = {item.id}
                    title = {item.title}
                    image ={item.image}
                    price = {item.price}
                    rating = {item.rating}
                    hideButton = {true}
                />
            ))}
            <CurrencyFormat
                renderText={(value) => (
                    <h3 className='order__total'>Order Total: {value}</h3>
                )}
                decimalScale={2}
                value={latestTotal}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'$'}
            />
        </div>
    )
}

export default Order