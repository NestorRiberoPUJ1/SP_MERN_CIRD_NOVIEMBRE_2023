'use client'

import { Box } from "@mui/material"
import { Fragment } from "react"
import Map, { FullscreenControl, GeolocateControl, NavigationControl, ScaleControl } from 'react-map-gl/maplibre';

const mapStyle = {
    'version': 8,
    'sources': {
        'raster-tiles': {
            'type': 'raster',
            'tiles': [0, 1, 2, 3].map((i) => `https://mt${i}.google.com/vt/lyrs=m&hl=en&x={x}&y={y}&z={z}&s=Ga`),
            'tileSize': 256,
        }
    },
    'layers': [{
        'id': 'simple-tiles',
        'type': 'raster',
        'source': 'raster-tiles',
        'minzoom': 0,
        'maxzoom': 22
    }]
}


const MapView = ({ children }) => {

    return (
        <Fragment>
            <Box sx={{ width: "100%", height: 400, }} >
                <Map
                    initialViewState={{
                        longitude: -73.1,
                        latitude: 7.1,
                        zoom: 12
                    }}
                    style={{ width: "100%", height: 400 }}
                    mapStyle={mapStyle}
                    attributionControl={false}
                    maxZoom={21}
                >
                    <GeolocateControl position="top-left" />
                    <FullscreenControl position="top-left" />
                    <NavigationControl position="top-left" />
                    <ScaleControl />

                    {children}

                </Map>
            </Box>
        </Fragment>
    )
}

export default MapView;