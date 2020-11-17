import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Review from './Review.js';
import Form from 'react-bootstrap/Form';
import Toast, { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from "react-hook-form";
import { useStateValue } from './StateProvider';
import './ViewProduct.css';

function ViewProduct({id, title, price, rating, image }) {
    toast.configure();
    const [{viewProduct}, dispatch] = useStateValue();
    const [newReviews, setNewReviews] = useState([]);
    const { register, handleSubmit, errors, reset } = useForm();

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

    const handleAdd = () => {
        addToBasket();
        toast('Added to Cart!', {position: toast.POSITION.TOP_CENTER, autoClose: 2000});
    }

    const onSubmit = (data, e) => {
        console.log(data);
        setNewReviews(currentValue => [{
            rating: parseInt(data.rating),
            description: data.reviewDesc
        }, ...currentValue]);
        e.target.reset();
    }

    useEffect(async () => {
        const result = await fetch('./api/formValues.json'); // result: { firstName: 'test', lastName: 'test2' }
        reset(result); // asynchronously reset your form values
    }, [reset])

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
                        <button onClick={handleAdd}>Add to Cart</button>
                    </div>  
                </Col>
                <Col md={12} className='mt-3'>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <div className="view__review">
                        <h3>Review Product</h3>
                        {(errors.rating || errors.reviewDesc) && <p className='payment__error'>Rating and Review required!</p>}                  
                        <Form.Control name='rating' as='select' ref={register({ required: true })} defaultValue='Select condition rating...'>
                            <option value=''>Select rating...</option>
                            <option value={1}>1 - Very Bad</option>
                            <option value={2}>2 - Bad</option>
                            <option value={3}>3 - Average</option>
                            <option value={4}>4 - Good</option>
                            <option value={5}>5 - Great</option>
                        </Form.Control>
                        <textarea placeholder='Write a review...' name='reviewDesc' ref={register({ required: true })} />
                        <button type='submit'>Submit</button>                      
                    </div> 
                    </Form>    
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
