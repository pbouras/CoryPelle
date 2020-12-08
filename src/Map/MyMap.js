import React, { Component } from 'react';
import { MapContainer , TileLayer, Marker} from 'react-leaflet';
import '../theCSS.css'
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';

var myIcon = L.icon({
    iconUrl: icon,
    iconSize: [25,41],
    iconAnchor: [12.5,41],
    popupAnchor: [0,-41]
})

class MyMap extends Component {

  state = {
    lat: 37.998009,
    lng: 23.741100,
    zoom: 25
  };

  render() {
    const position = [this.state.lat,this.state.lng]
    return (
    <div className="my-2">
      <MapContainer  className="mymap" center={position} zoom={this.state.zoom} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={myIcon}></Marker>
      </MapContainer >
    </div>
    )
  }
}

export default MyMap;