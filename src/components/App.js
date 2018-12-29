import React, { Component } from 'react';

import Leaflet from './LeafletMap'

class App extends Component {
    render() { 
        return (
            <React.Fragment>
                <div> React Leaflet</div>
                <Leaflet />
            </React.Fragment>
        );
    }
}

export default App;