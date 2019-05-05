
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Photo from './Photo';

import store from '../store';

class Album extends Component {
    constructor(props) {
        super(props)
        this.state = {
            albumTitle:'',
            photos: []
        }
    }
    componentDidMount() {
        let album = this.props.value;
        store.subscribe(() => {
            console.log('Product component : subscribing photos');
            let photos = store.getState().photos[album.id] || [];
            this.setState({ photos })
        })
    }
    
    handlePhotos(e) {
        e.preventDefault();
       let photos=this.state;
        let album = this.props.value;
        let temp=this;
      
        let api = `http://jsonplaceholder.typicode.com/photos?albumId=${album.id}`;
        fetch(api) 
        .then((resp) => resp.json())
        .then(function(data) {
            photos=data;
            temp.setState({photos});
            
        });
       
    }

    renderPhotos() {
        let { photos } = this.state;
       
         return <Photo photo={photos} />       
       
    }
   
    render() {
       
        let album = this.props.value;
       
        return (
            <div>
            
                <div className="list-group-item">
                    <div className="row">
                       
                        <div className="col-9 col-sm-9 col-md-9">
                            <h5>ID:{album.id}</h5>
                            <h5>Title:{album.title}</h5>
                            
                            <hr />
                          
                            <ul className="nav nav-tabs">
                                <li className="nav-item">
                                
                                    <a className='nav-link active' onClick={e => this.handlePhotos(e)} href="/">View Photos</a>
                               
                                </li>
                             
                            </ul>
                            {this.renderPhotos()}
                            
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}

Album.propTypes = {
    value: PropTypes.object
}

export default Album;