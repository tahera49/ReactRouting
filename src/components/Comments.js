import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Comments extends Component {
    constructor(props) {
        super(props)
        this.state = {
            
            commentName: ''
        }
    }
    componentDidMount() {
       
    }

    render() {
    
    let comments = this.props.comments
    
    return comments.map((comm, idx) => {
    return (
        <div className="row" key={idx}>
            <div className="col-md-12">
                <div className="alert alert-info">
                    Comment Name: {comm.name}
                    <hr />
                   
                </div>
            </div>
        </div>
    )
    });

}
}

Comments.propTypes = {
    comments: PropTypes.array
}

export default Comments;