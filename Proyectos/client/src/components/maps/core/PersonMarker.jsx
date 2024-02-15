import { Box, Typography } from "@mui/material"
import { Marker } from 'react-map-gl';
import PersonIcon from "./markerIcons/PersonIcon";

export const PersonMarker = ({ longitude, latitude, ...props }) => {
    return (
        <Marker
            longitude={longitude}
            latitude={latitude}
            anchor="bottom"
            onClick={e => {
                // If we let the click event propagates to the map, it will immediately close the popup
                // with `closeOnClick: true`
                e.originalEvent.stopPropagation();
                console.log("clicked");
            }}
        >
            <Box sx={{ cursor: "pointer", position: "relative", height: "36px", width: "36px", overflow: "hidden" }}>
                <PersonIcon />
            </Box>
        </Marker>

    )
}