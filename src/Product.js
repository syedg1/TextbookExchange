import React from 'react';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import './Product.css';

function Product({ id, title, price, rating, image }) {

    const [state, dispatch] = useStateValue();
    const view = () => {
        dispatch({
            type: 'VIEW_PRODUCT',
            item: {
                id: id, 
                title: title,
                price: price,
                rating: rating,
                image: image
            }
        })
    }
    
    return (
        <div className='product'>    
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>                
                </p>
                <div className="product__rating">
                    {Array(rating)
                        .fill()
                        // eslint-disable-next-line
                        .map((_) => (<span role='img'>⭐</span>))
                    }
                </div>
            </div>
            
            <img src={image} alt=''/>
            <Link to='/product'>
                <button className='product__button' onClick={view}>View Product</button>
            </Link>
        </div>
    )
}

export default Product
