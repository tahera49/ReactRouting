
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Review from './Review';
import { loadReviews } from '../actions/reviews';
import store from '../store';

class Album extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tab: 1,
            reviews: []
        }
    }
    componentDidMount() {
        let album = this.props.value;
        store.subscribe(() => {
            console.log('Album component : subscribing photos');
            let reviews = store.getState().reviews[album.id] || [];
            this.setState({ reviews })
        })
    }
  
    changeTab(idx, e) {
        e.preventDefault();
        this.setState({ tab: idx }, () => {
            let album = this.props.value;
            store.dispatch(loadReviews(album.id));
        });
    }
   
   
    renderPhotos() {
        let { reviews } = this.state;
        return reviews.map((rev, idx) => {
            return <Review review={rev} key={idx} />
        })
    }
    renderTabPanel(albums) {
        let { tab } = this.state;
        
        switch (tab) {
            
            case 1: return (
                <div>
                    {this.renderPhotos()}
                    <hr />
                   
                </div>
            )
            default: return null;
        }
    }
    render() {
       
        let albums = this.props.value;
        let { tab } = this.state;
        return (
            <div>
                <div className="list-group-item">
                    <div className="row">
                       
                        <div className="col-9 col-sm-9 col-md-9">
                            <h5>ID: {albums.id}</h5>
                            <h5>Title : {albums.title}</h5>
                           
                            <hr />
                            <ul className="nav nav-tabs">
                                <li className="nav-item">
                                    <a className={tab === 1 ? 'nav-link active' : 'nav-link'} onClick={e => this.changeTab(1, e)} href="/">Photos</a>
                                </li>
                               
                            </ul>
                            {this.renderTabPanel(albums)}
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