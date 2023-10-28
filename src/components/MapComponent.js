import React, { useState } from "react";
import Map from "react-map-gl";

function MapComponent() {
  const [viewPort, setViewport] = useState({
    latitude: 28.6448,
    longitude: 77.216,
    zoom: 6,
  });
  return (
    <div>
      <Map
        {...viewPort}
        mapLib={import("mapbox-gl")}
        initialViewState={{
          longitude: -100,
          latitude: 40,
          zoom: 3.5,
        }}
        width="100vw"
        height="100vh"
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        style={{ width: 600, height: 400 }}
      />
    </div>
  );
}

export default MapComponent;
