import React, { useState } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import styles from "@/app/page.module.css"
import { useDispatch } from "react-redux";
import { setMapLocation } from "@/store/ControlPanalSlice";
const MapContact = (props) => {
  const dispatch = useDispatch();
  const [selected, setSelected] = useState(null);
  const handelLocation = (t, map, coord) => {
    const { latLng } = coord;
    const lat = latLng.lat();
    const lng = latLng.lng();
    const loc = { lat, lng };
    setSelected(loc);
    dispatch(setMapLocation(loc));
  };

  return (
    <div className={styles.MapContainer} >
      <Map
        google={props.google}
        style={{ width: "100%", height: "500px", top: "0", left: "0" }}
        zoom={18}
        onClick={handelLocation}
        initialCenter={{
          lat:
            parseFloat(props.latPro) === 0 || !parseFloat(props.latPro)
              ? 30.9690618
              : parseFloat(props.latPro),
          lng:
            parseFloat(props.lngPro) === 0 || !parseFloat(props.lngPro)
              ? 31.1669545
              : parseFloat(props.lngPro),
        }}
      >
        {selected ? (
          <Marker name={"Your position"} position={selected} />
        ) : (
          <Marker
            name={"Your position"}
            position={{
              lat:
                parseFloat(props.latPro) === 0 || !parseFloat(props.latPro)
                  ? 30.9690618
                  : parseFloat(props.latPro),
              lng:
                parseFloat(props.lngPro) === 0 || !parseFloat(props.lngPro)
                  ? 31.1669545
                  : parseFloat(props.lngPro),
            }}
          />
        )}
      </Map>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyCrEMyvWNgSvodvWV9fSGyFOig_NtUEsmk",
})(MapContact);
