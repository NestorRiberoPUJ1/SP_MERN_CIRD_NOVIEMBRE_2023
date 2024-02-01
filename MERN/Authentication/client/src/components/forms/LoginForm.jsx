'use client'
import { Button, Paper, Stack, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Fragment, useState } from "react";



const LoginForm = () => {

    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [errors, setErrors] = useState({});

    const handleLogin = async () => {
        try {
            const data = {
                email,
                password
            }
            const response = await axios.post(`${process.env.REACT_APP_API_DOMAIN}/user/session`, data, { withCredentials: true });
            const result = await response.data;
            console.log(result);
            setErrors({});
            router.push("/dashboard");
        } catch (error) {
            console.log(error);
            console.log(error.response?.data?.errors);
            setErrors(error.response?.data?.errors);
        }


    }

    return (
        <Fragment>
            <Paper sx={{ padding: 2 }}>
                <Stack direction="column" spacing={2} alignItems="flex-start">
                    <Typography variant="h4">Login</Typography>
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
                    <Button variant="contained" color="primary" onClick={handleLogin} >Submit</Button>
                </Stack>
            </Paper>
        </Fragment>
    )
}

export default LoginForm;