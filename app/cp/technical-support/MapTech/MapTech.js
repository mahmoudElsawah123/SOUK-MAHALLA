import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import styles from "@/app/page.module.css";

const MapTech = (props) => {
  return (
    <div className={styles.MapContainer}>
      <Map
        google={props.google}
        style={{ width: "100%", height: "500px", top: "0", left: "0" }}
        zoom={18}
        initialCenter={{
          lat: 30.9690618,
          lng: 31.1669545,
        }}
      >
        <Marker
          name={"Your position"}
          position={{
            lat: 30.9690618,
            lng: 31.1669545,
          }}
        />
      </Map>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyCrEMyvWNgSvodvWV9fSGyFOig_NtUEsmk",
})(MapTech);

// MapContact
