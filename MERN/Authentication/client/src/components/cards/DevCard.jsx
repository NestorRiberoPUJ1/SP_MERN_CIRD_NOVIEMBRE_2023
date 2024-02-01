import { Avatar, Button, ButtonGroup, ListItem, ListItemAvatar, ListItemButton, ListItemText } from "@mui/material";
import axios from "axios";

const { Fragment } = require("react")




const DevCard = ({ _id, email, level,onUpdate }) => {


    const handleUpgrade = async () => {
        try {
            const data = {
                level: level === "junior" ? "mid" : "senior"
            }
            const response = await axios.put(`${process.env.REACT_APP_API_DOMAIN}/user/${_id}`, data, { withCredentials: true });
            const result = await response.data;
            console.log(result);
            onUpdate(result);

        } catch (error) {
            console.log(error);
        }
    }

    const handleDowngrade = async () => {
        try {
            const data = {
                level: level === "senior" ? "mid" : "junior"
            }
            const response = await axios.put(`${process.env.REACT_APP_API_DOMAIN}/user/${_id}`, data, { withCredentials: true });
            const result = await response.data;
            console.log(result);
            onUpdate(result);

        } catch (error) {
            console.log(error);
        }
    }


    return (
        <Fragment>
            <ListItem
                secondaryAction={
                    <Fragment>
                        <ButtonGroup variant="contained">
                            {
                                level !== "junior" &&
                                <Button variant="contained" color="error" onClick={handleDowngrade} >{"<<"}</Button>
                            }
                            {
                                level !== "senior" &&
                                <Button variant="contained" color="success" onClick={handleUpgrade} >{">>"}</Button>
                            }
                        </ButtonGroup>
                    </Fragment>
                }
                disablePadding
            >

                <ListItemAvatar>
                    <Avatar>{email[0]}</Avatar>
                </ListItemAvatar>
                <ListItemText primary={email} />

            </ListItem>
        </Fragment>
    )
};

export default DevCard;