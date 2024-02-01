'use client'
import { Button, Paper, Stack, TextField, Typography } from "@mui/material";
import axios from "axios";
import { Fragment, useState } from "react";



const RegisterForm = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [errors, setErrors] = useState({});


    const handleRegister = async () => {
        try {
            const data = {
                email,
                password,
                confirmPassword
            }
            const response = await axios.post(`${process.env.REACT_APP_API_DOMAIN}/user`, data);
            const result = await response.data;
            console.log(result);
            setErrors({});
        } catch (error) {
            console.log(error.response.data.errors);
            setErrors(error.response.data.errors);
        }


    }



    return (
        <Fragment>
            <Paper sx={{ padding: 2 }}>
                <Stack direction="column" spacing={2} alignItems="flex-start">
                    <Typography variant="h4">Register</Typography>
                    <TextField
                        label="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        error={Boolean(errors.email)}
                        helperText={errors.email?.message}
                        autoComplete="false"
                    />
                    <TextField
                        label="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        error={Boolean(errors.password)}
                        helperText={errors.password?.message}
                        autoComplete="false"
                    />
                    <TextField
                        label="confirmPassword"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        error={Boolean(errors.confirmPassword)}
                        helperText={errors.confirmPassword?.message}
                    />
                    <Button variant="contained" color="primary" onClick={handleRegister} >Submit</Button>
                </Stack>
            </Paper>
        </Fragment>
    )
}

export default RegisterForm;