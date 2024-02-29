'use client'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider, IconButton } from "@mui/material";
import { useRouter } from "next/navigation";
import CloseIcon from '@mui/icons-material/Close';

const { Fragment, useState } = require("react");



const InterceptionModal = ({ title, children }) => {

    const [open, setOpen] = useState(true);
    const router = useRouter();

    const handleClose = () => {
        setOpen(false);
        router.back();
    };

    return (
        <Fragment>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                maxWidth="lg"
                fullWidth
            >
                {
                    title &&
                    <Fragment>
                        <DialogTitle id="alert-dialog-title" sx={{ fontWeight: "bold" }}>
                            {title}
                        </DialogTitle>
                        <Divider />
                    </Fragment>
                }
                <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
                <DialogContent>
                    {children}
                </DialogContent>
                <DialogActions>
                    <Button variant="contained" color="primary" onClick={handleClose}>
                        Volver
                    </Button>
                </DialogActions>
            </Dialog>
        </Fragment>
    );
}

export default InterceptionModal;