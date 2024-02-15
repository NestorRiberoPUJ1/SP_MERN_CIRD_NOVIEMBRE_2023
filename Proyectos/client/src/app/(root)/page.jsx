'use client'
import UsageLineChart from "@/components/charts/UsageLineChart";
import MapView from "@/components/maps/core/MapView";
import { PersonMarker } from "@/components/maps/core/PersonMarker";
import { Fragment } from "react";


export default function Home() {
  return (
    <Fragment>
      <UsageLineChart />
      <MapView>
        <PersonMarker latitude={7.1} longitude={-73.1}/>
      </MapView>
    </Fragment>
  );
}
