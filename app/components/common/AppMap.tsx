"use client";

import { Feature, LineString } from "geojson";
import Image from "next/image";
import * as React from "react";
import Map, { Layer, LineLayer, Marker, Source } from "react-map-gl";
import { useState } from "react";

type MapProps = {
  width: number;
  height: number;
};

function App({ width, height }: MapProps) {
  const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN as string;

  const [viewState, setViewState] = useState({
    latitude: 53.55387404461884,
    longitude: 10.005792979135935,
    zoom: 9,
  });

  const geojson: Feature<LineString> = {
    type: "Feature",
    properties: {},
    geometry: {
      type: "LineString",
      coordinates: [
        [18.41802, -33.934069],
        [18.418038, -33.934069],
        [18.415931, -33.933923],
        [18.415232, -33.933709],
        [18.414605, -33.93299],
        [18.413515, -33.931668],
        [18.411704, -33.93373],
        [18.408799, -33.932071],
        [18.409, -33.9319],
      ],
    },
  };

  const routeLayer: LineLayer = {
    id: "route",
    type: "line",
    source: "route",
    layout: {
      "line-join": "round",
      "line-cap": "round",
    },
    paint: {
      "line-color": "#0ea5e9",
      "line-width": 5,
    },
  };

  return (
    <Map
      mapboxAccessToken={token}
      {...viewState}
      onMove={(evt) => setViewState(evt.viewState)}
      style={{ width, height }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
    >
      <Marker
        longitude={53.55387404461884}
        latitude={10.005792979135935}
        anchor="bottom"
      >
        <Image src="/img/logo.png" alt="mappin" width={30} height={30} />
      </Marker>

      <Source id="route" type="geojson" data={geojson}>
        <Layer {...routeLayer} />
      </Source>
    </Map>
  );
}

export default App;
