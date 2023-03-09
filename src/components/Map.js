import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
    width: '100vw',
    height: '400px'
};

const center = {
    lat: 30.266666,
    lng: -97.733330
};

function Map() {
    const { isLoaded } = useJsApiLoader({
      id: 'google-map-script',
      googleMapsApiKey: 'AIzaSyAJgW0JwpC8icg0Up4cIh4ubLjBnI6jznc'
    })
  
    const [map, setMap] = React.useState(null)
  
    const onLoad = React.useCallback(function callback(map) {
      // This is just an example of getting and using the map instance!!! don't just blindly copy!
      const bounds = new window.google.maps.LatLngBounds(center);
      map.fitBounds(bounds);
      setMap(map)
    }, [])
  
    const onUnmount = React.useCallback(function callback(map) {
      setMap(null)
    }, [])
  
    return isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={12}
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
          { /* Child components, such as markers, info windows, etc. */ }
          <></>
        </GoogleMap>
    ) : <></>
  }
  
  export default React.memo(Map)