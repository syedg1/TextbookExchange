import React from 'react';
import './Review.css';

function Review({rating, review}) {
    return (
        <div className='review'>
            <div className="review__rating">
                    {Array(rating)
                        .fill()
                        // eslint-disable-next-line
                        .map((_) => (<span role='img'>⭐</span>))
                    }
            </div>
            <div>{review}</div>
        </div>
    )
}

export default Review
