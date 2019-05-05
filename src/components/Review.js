import React from 'react';
import PropTypes from 'prop-types';



let Review = (props) => {
    // let { review } = props
    //or
    let review = props.review
    return (
        <div className="row">
            <div className="col-md-12">
                <div className="alert alert-info">
                    Photo Title: {review.title}
                    <hr />
                   
                </div>
            </div>
        </div>
    );
}

Review.propTypes = {
    review: PropTypes.object.isRequired
}

export default Review;