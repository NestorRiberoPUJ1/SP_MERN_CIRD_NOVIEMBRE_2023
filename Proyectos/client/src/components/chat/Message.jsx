import { selectUser } from "@/lib/features/users/userSlice";
import { useAppSelector } from "@/lib/hooks";
import { Box, Typography } from "@mui/material";
import { Fragment } from "react"



const outgoingStyle = {
    bgcolor: "#cfe7e8",
    maxWidth: "80%",
    alignSelf: "end",
    position: "relative",
    borderRadius: "8px 8px 0px 8px",
    padding: 1
}
const incomingStyle = {
    bgcolor: "white",
    maxWidth: "80%",
    alignSelf: "start",
    position: "relative",
    borderRadius: "8px 8px 8px 0px",
    padding: 1
}
const outgoingTriangleStyle = {
    width: 0,
    height: 0,
    borderLeft: "0px solid transparent",
    borderRight: "5px solid transparent",
    borderBottom: "10px solid #cfe7e8",
    position: "absolute",
    bottom: 0,
    right: -4
}
const incomingTriangleStyle = {
    width: 0,
    height: 0,
    borderLeft: "5px solid transparent",
    borderRight: "0px solid transparent",
    borderBottom: "10px solid white",
    position: "absolute",
    bottom: 0,
    left: -4
}

const Message = ({ content, sender, media }) => {
    const currentUser = useAppSelector(selectUser);
    const myMessage = sender._id === currentUser._id;



    return (
        <Fragment>
            <Box sx={myMessage ? outgoingStyle : incomingStyle} >
                <Box sx={myMessage ? outgoingTriangleStyle : incomingTriangleStyle} />
                {/* <Typography>You:</Typography> */}
                {
                    media &&
                    <Box sx={{ height: 300, width: "100%" }}>
                        <img
                            style={{ maxHeight: "100%", maxWidth: "100%" }}
                            src={`${process.env.REACT_APP_IMG_DOMAIN}/${media}`}
                            alt="mediaIMG"
                        />
                    </Box>
                }

                <Typography variant="body2">{content}</Typography>

            </Box>
        </Fragment>
    )
}

export default Message;