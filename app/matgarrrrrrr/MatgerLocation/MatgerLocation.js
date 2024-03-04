import React, { useState } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
// import { Wrapper, Status } from "@googlemaps/react-wrapper";
import styles from "../../page.module.css";
// import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

// const MatgerLocation = (props) => {
//   const { isLoaded } = useLoadScript({
//     googleMapsApiKey: "AIzaSyDhUg0AWkT9CxPNL2j3kwvR8lJY3Tx58RU",
//   });

//   if (!isLoaded) return <div>notLoaded</div>;
//   return (
//     <div className="MapContainer">
//       <Map />
//       {/* <Map
//         google={props.google}
//         style={{ width: "100%", height: "500px", top: "0", left: "0" }}
//         zoom={18}
//         initialCenter={{
//           lat: props.lat === 0 ? 30.9690618 : props.lat,
//           lng: props.lng === 0 ? 31.1669545 : props.lng,
//         }}
//         onClick={(e) => {
//           console.log("latitude = ", e.lat);
//           console.log("longtitude = ", e.lng);
//         }}
//       >
//         <Marker
//           name={"Your position"}
//           // onClick={onMapClicked}
//           position={{
//             lat: props.lat === 0 ? 30.9690618 : props.lat,
//             lng: props.lng === 0 ? 31.1669545 : props.lng,
//           }}
//           // icon={{
//           //   url: { logo },
//           //   anchor: new props.google.maps.Point(32, 32),
//           //   scaledSize: new props.google.maps.Size(64, 64),
//           // }}
//         />
//       </Map> */}
//     </div>
//   );
// };
// // AIzaSyBJ_XlxltqRMHEaqUxKak6LkIb0jt4qRWM
// // AIzaSyCrEMyvWNgSvodvWV9fSGyFOig_NtUEsmk
// export default MatgerLocation;
// // ({
// //   apiKey: "AIzaSyAoZHDIG-2mkxapjTMVEYQBFjpHGbFxvVE",
// // })(MatgerLocation);

const MatgerLocation = (props) => {
  const [selected, setSelected] = useState(null);
  const handelLocation = (t, map, coord) => {
    const { latLng } = coord;
    const lat = latLng.lat();
    const lng = latLng.lng();
    const loc = { lat, lng };
    setSelected(loc);
  };
  return (
    <div className={styles.MapContainer}>
      <Map
        google={props.google}
        style={{ width: "100%", height: "500px", top: "0", left: "0" }}
        zoom={18}
        onClick={handelLocation}
        initialCenter={{
          lat: props.lat === 0 ? 30.9690618 : props.lat,
          lng: props.lng === 0 ? 31.1669545 : props.lng,
        }}
      >
        {selected ? (
          <Marker name={"Your position"} position={selected} />
        ) : (
          <Marker
            name={"Your position"}
            position={{
              lat: props.lat === 0 ? 30.9690618 : props.lat,
              lng: props.lng === 0 ? 31.1669545 : props.lng,
            }}
          />
        )}
      </Map>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyCrEMyvWNgSvodvWV9fSGyFOig_NtUEsmk",
})(MatgerLocation);

// function Map() {
//   const handelMap = (t, map, coord) => {
//     const { latLng } = coord;
//     const lat = latLng.lat();
//     const lng = latLng.lng();
//     console.log(lat, lng);
//   };
//   const center = useMemo(() => ({ lat: 30.9690618, lng: 31.1669545 }), []);
//   return (
//     <GoogleMap
//       onClick={handelMap}
//       zoom={18}
//       center={center}
//       mapContainerClassName="map-container"
//     >
//       <Marker position={{ lat: 30.9690618, lng: 31.1669545 }} />
//     </GoogleMap>
//   );
// }
