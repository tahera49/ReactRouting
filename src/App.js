import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Album from './components/Album';


import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from './components/Home';

import { loadAlbums } from './actions/albums';
import store from './store'


const NoMatch = ({ location }) => (
  <div>
    <h3>
      No match for <code>{location.pathname}</code>
    </h3>
  </div>
);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
      albums: []
    }
  }

  componentDidMount() {

    store.subscribe(() => {
      console.log('App component : subscribing albums');
      let albums = store.getState();
    
      this.setState({ albums})
    });

    store.dispatch(loadAlbums())
  }

  renderAlbums() {
    let { albums } = this.state;
    
    return albums.albums.map((p, idx) => {
      return (
        <Album value={p} key={idx} />
      )
    })
  }
  render() {
    if(this.state.albums.albums && this.state.albums.albums.length>0){
    return (
      <div className="container" >
        <Router>
          <div>
            <NavBar title="Album List" />
           
            <ul className="nav nav-pills">
              <li className="nav-item">
                <Link className="nav-link" to="albums">View Albums</Link>
              </li>
             
            </ul>
            <hr />

            <Switch>
              <Route path={"/"} exact={true} component={Home} />
              <Route path={"/albums"} render={() => this.renderAlbums()} />
             
              <Route exact={true} component={NoMatch} />
            </Switch>

          </div>
        </Router>
      </div>
    );
  }else{
    return <div>Loading....</div>
 }
  }
}

export default App;
