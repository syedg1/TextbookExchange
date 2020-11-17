import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Review from './Review.js';
import { useStateValue } from './StateProvider';
import './ViewProduct.css';

function ViewProduct({id, title, price, rating, image }) {
    
    const [{viewProduct}, dispatch] = useStateValue();
    const [reviewDesc, setReviewDesc] = useState('');
    const [newReviews, setNewReviews] = useState([]);

    useEffect(() => {
        setNewReviews([]);
    }, [viewProduct])
    
    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: viewProduct.id, 
                title: viewProduct.title,
                price: viewProduct.price,
                rating: viewProduct.rating,
                image: viewProduct.image
            }
        })
    }

    const submitReview = () => {
        setNewReviews(currentValue => [{
            rating: 5,
            description: reviewDesc
        }, ...currentValue])
        setReviewDesc('');
    }

    return (
        <div className='view'>
            <Row className=''>
                <Col lg={9} md={12} className='mt-3'>
                    <Row className=' mx-0 my-0 px-0 view__product'>
                        <Col lg={3} md={10} className="mx-5 px-0 view__imageContainer">
                            <img src={viewProduct?.image} />
                        </Col>
                        <Col lg={6} md={10} className="mx-3 px-0 view__productInfo">
                            <h1>{viewProduct?.title}</h1>
                            <div className="view__productRating">
                                {Array(viewProduct?.rating)
                                    .fill()
                                    // eslint-disable-next-line
                                    .map((_) => (<span role='img'>⭐</span>))
                                }
                            </div>
                            <h2>${viewProduct?.price}</h2>
                        </Col>
                    </Row>  
                </Col>
                <Col lg={3} md={12} className='mt-3'>
                    <div className="view__shipping">
                        <div className="view__shippingDate">
                            <b>Order now to receive by...</b>
                            <p>Wednesday, December 9th</p>
                        </div>

                        <div className="view__shippingCost">
                            <b>Shipping Costs: &nbsp;</b>
                            <p>$3.99</p> 
                        </div>
                        <p className="view__shippingInfo">Receive FREE shipping on all items when you purchase over $200!</p>                          
                        <b className="view__stock">In Stock</b>
                        <button onClick={addToBasket}>Add to Cart</button>
                    </div>  
                </Col>
                <Col md={12} className='mt-3'>
                    <div className="view__review">
                        <h3>Review Product</h3>
                        <textarea placeholder='Write a review...' value={reviewDesc} onChange={(e) => setReviewDesc(e.target.value)} />
                        <button onClick={submitReview}>Submit</button>
                    </div>     
                </Col>
                <Col md={12} className='mt-3'>
                    <div className="view__userReviews">
                        <h3>Reviews</h3>
                        {newReviews.map(review => (
                            <div>
                            <Review rating={review.rating} review={review.description}/>
                            <hr/>
                            </div>
                        ))}
                        <Review rating={5} review='Amazing product, I learned so muchh!!'/>
                        <hr/>
                        <Review rating={3} review='Textbook was not in mint condition'/>
                        <hr/>
                        <Review rating={4} review='So much content for so little, Love it!'/>
                    </div>
                </Col>
            </Row>
 
        </div>
    )
}

export default ViewProduct
