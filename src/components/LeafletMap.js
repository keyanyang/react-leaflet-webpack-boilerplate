import React, { Component } from 'react';

import { Map, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

const mapUrl = 'http://{s}.tile.osm.org/{z}/{x}/{y}.png';
const stamenTonerAttr = 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>';
const mapCenter = [33.4468, -112.0739];
const zoomLevel = 12;

class Leaflet extends Component {
    state = { currentZoomLevel: zoomLevel };

    componentDidMount() {
        const leafletMap = this.leafletMap.leafletElement;
        leafletMap.on('zoomend', () => {
            const updatedZoomLevel = leafletMap.getZoom();
            this.handleZoomLevelChange(updatedZoomLevel);
        });
    }

    handleZoomLevelChange(newZoomLevel) {
        this.setState({ currentZoomLevel: newZoomLevel });
    }

    render() {
        window.console.log('this.state.currentZoomLevel ->',
        this.state.currentZoomLevel);

        return (
            <div>
                <Map
                    ref={m => { this.leafletMap = m; }}
                    center={mapCenter}
                    zoom={zoomLevel}
                >
                <TileLayer
                    attribution={stamenTonerAttr}
                    url={mapUrl}
                />
                </Map>
            </div>
        );
    }
};

export default Leaflet;
