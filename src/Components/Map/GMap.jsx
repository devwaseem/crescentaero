import React, { Component } from 'react';
import ReactMapGL from 'react-map-gl';
const Marker = ({ text }) => <div>{text}</div>;
 
class GMap extends Component {
  state = {
    viewport: {
      width: 600,
      height: 500,
      latitude: 12.8767,
      longitude: 80.0847,
      zoom: 14,
      style: 'bright'
    }
  };
 
  render() {
    return (
      <div className="map" id="map">
        <ReactMapGL mapboxApiAccessToken={'pk.eyJ1IjoiZHZscGVyIiwiYSI6ImNqa3libnVmYzBnOGEzd29jc2puM2FueXkifQ.veSJ1WZgCgxHFw555WWdMg'}
        {...this.state.viewport}
        onViewportChange={(viewport) => this.setState({viewport})}
        />
          {/* <Marker
            lat={12.8767}
            lng={80.0847}
            text={'Crescent Institute of science and technology'}
          /> */}
      
      </div>
    );
  }
}
 
export default GMap;