import React, { useState, useRef, useCallback } from "react";
import {
  useLoadScript,
  Marker,
  StandaloneSearchBox,
  StreetViewService,
  GoogleMap
} from "@react-google-maps/api";
import LazyLoad from "react-lazyload";

const loaderId = "ownersTownGoogleMapApiId";
const config = {
  googleMapsApiKey: "AIzaSyDJ8uTFj6943jB6JmStfHma3--E0eqTk5w",
  language: "en",
  region: "IN",
  version: "weekly",
  libraries: ["places"],
  preventGoogleFontsLoading: true,
  id: loaderId
};

function MatagrLocation({latt}) {
  const { isLoaded, loadError } = useLoadScript(config);
  const Loading = <div>Loader</div>;
  const center = { lat:latt?.lat , lng: latt?.lng };
  const [location, setLocation] = useState(center);
  const markerRef = useRef(null);
  const mapRef = useRef(null);
  function onClick(...args) {
  }

  function setNewLocation() {
  }

  function onPlacesChanged(...args) {
    setNewLocation();
  }

  function onDragEnd(...args) {
    setLocation({
      lat: markerRef.current.position.lat(),
      lng: markerRef.current.position.lng()
    });
  }

  const onLoad = useCallback(
    map => {
      mapRef.current = map;
    },
    []
  );

  const onMarkerLoad = useCallback(
    marker => {
      markerRef.current = marker;
      // const path = marker.getPath();
    },
    []
  );

  const renderMap = (
    <GoogleMap
      id="searchbox-example"
      mapContainerStyle={{
        height: "500px",
        width: "100%"
      }}
      zoom={15}
      center={center}
      onClick={onClick}
    >

      {/* {searchEnabled ? (
        <StandaloneSearchBox onLoad={onLoad} onPlacesChanged={onPlacesChanged}>
          <input
            type="text"
            placeholder="Find your place"
            style={{
              boxSizing: "border-box",
              border: "1px solid transparent",
              width: "240px",
              backgroundColor: "#fff",
              height: "32px",
              padding: "0 12px",
              borderRadius: "3px",
              boxShadow: "0 2px 6px rgba(0, 0, 0, 0.3)",
              fontSize: "14px",
              outline: "none",
              textOverflow: "ellipses",
              position: "absolute",
              left: 0,
              right: 0,
              margin: "0 auto"
            }}
          />
        </StandaloneSearchBox>
      ) : (
        <StreetViewService />
      )} */}

      <Marker
        position={location}
        draggable
        onDragEnd={onDragEnd}
        onLoad={onMarkerLoad}
      />
    </GoogleMap>
  );

  if (loadError) {
    return <div>Map cannot be loaded right now, sorry.</div>;
  }

  return isLoaded ? 
   <LazyLoad height='100%' once>
    {renderMap}
   </LazyLoad>
  : Loading;
}

export default MatagrLocation