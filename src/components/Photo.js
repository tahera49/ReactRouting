import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Comments from './Comments';

class Photo extends Component {
    constructor(props) {
        super(props)
        this.state = {
           
            comments: []
        }
    }
    componentDidMount() {
       
    }

    handleComments(e,id) {
        e.preventDefault();
       let comments=this.state;
        let temp=this;
        let api = `http://jsonplaceholder.typicode.com/comments?postId=${id}`;
        fetch(api) 
        .then((resp) => resp.json())
        .then(function(data) {
            comments=data;
            temp.setState({comments});
            
        });
       
    }

    renderComments() {
        let { comments } = this.state;
       
         return <Comments comments={comments} />       
       
    }

    handleValue(e,id){
      e.preventDefault();
      let name=e.target.value;
      console.log("name"+name);
    }

    render() {
    
    let photo = this.props.photo
    
    return photo.map((val, idx) => {
    return (
        <div className="row" key={idx}>
            <div className="col-md-12">
                <div className="alert alert-info">
                    Photo Title: {val.title}
                    
                    <hr />
                    <a className='nav-link active' onClick={e => this.handleComments(e,val.id)} href="/">View Comments</a>  
                </div>
                {this.renderComments()}
            </div>
        </div>
    )
    });

}
}

Photo.propTypes = {
    photo: PropTypes.array
}

export default Photo;