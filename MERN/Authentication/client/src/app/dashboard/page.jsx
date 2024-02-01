'use client'
import DevCard from "@/components/cards/DevCard";
import { Button, Divider, Grid, List, Paper, Stack, Typography } from "@mui/material";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/navigation";
import { Cookies, CookiesProvider, useCookies } from "react-cookie";


const { Fragment, useState, useEffect } = require("react")




const DashboardPage = () => {

    const router = useRouter();

    const [cookies, setCookies] = useCookies(['userToken']);


    const [users, setUsers] = useState([]);

    const handleUserUpdate = (item) => {
        setUsers((prevValue) => {
            const index = prevValue.findIndex((user) => user._id === item._id);
            prevValue[index] = item;
            return [...prevValue];
        })
    }



    const getUsers = async () => {

        try {
            const response = await axios.get(`${process.env.REACT_APP_API_DOMAIN}/user`, { withCredentials: true });
            const result = await response.data;
            console.log(cookies);
            setUsers(result);
           
            const myCookie = cookies.get('userToken');
            console.log(myCookie);
            /* const userToken=getCookie("userToken",{cookies})
            console.log(userToken);
            const actualUser = jwtDecode(userToken);
            console.log(actualUser); */

        } catch (error) {
            console.log(error);
            if (error.response.status === 401) {
                router.push("/");

            }
        }
    }

    const logout = async () => {

        try {
            const response = await axios.delete(`${process.env.REACT_APP_API_DOMAIN}/user/session`, { withCredentials: true });
            const result = await response.data;
            console.log(result);
            router.push("/");
        } catch (error) {
            console.log(error);
            if (error.response.status === 401) {
                router.push("/");
            }
        }
    }


    useEffect(() => {
        getUsers();
    }, [])


    return (
        <CookiesProvider>
            <Fragment>
                <Stack direction="row" justifyContent="space-between" sx={{ mb: 2 }} alignItems="center">
                    <Typography variant="h3">Dashboard</Typography>
                    <Button onClick={logout} variant="contained" color="error">
                        Logout
                    </Button>
                </Stack>
                <Grid container columnSpacing={2} >
                    <Grid item sm={4} sx={{ height: "100%", minHeight: 300 }}>
                        <Paper sx={{ height: "100%", padding: 2, }}>
                            <Stack>
                                <Typography variant="h5" textAlign="center">Juniors</Typography>
                                <Divider />
                                <Stack spacing={2} sx={{ mt: 2 }} >
                                    {
                                        users.filter((item) => item.level === "junior").map((item, idx) => {
                                            return (
                                                <DevCard {...item} key={idx} onUpdate={handleUserUpdate} />
                                            )
                                        })
                                    }
                                </Stack>
                            </Stack>
                        </Paper>
                    </Grid>
                    <Grid item sm={4} sx={{ height: "100%", minHeight: 300 }}>
                        <Paper sx={{ height: "100%", padding: 2, }}>
                            <Stack>
                                <Typography variant="h5" textAlign="center">Mids</Typography>
                                <Divider />
                                <Stack spacing={2} sx={{ mt: 2 }} >
                                    {
                                        users.filter((item) => item.level === "mid").map((item, idx) => {
                                            return (
                                                <DevCard {...item} key={idx} onUpdate={handleUserUpdate} />
                                            )
                                        })
                                    }
                                </Stack>
                            </Stack>
                        </Paper>
                    </Grid>
                    <Grid item sm={4} sx={{ height: "100%", minHeight: 300 }}>
                        <Paper sx={{ height: "100%", padding: 2, }}>
                            <Stack>
                                <Typography variant="h5" textAlign="center">Seniors</Typography>
                                <Divider />
                                <Stack spacing={2} sx={{ mt: 2 }} >
                                    {
                                        users.filter((item) => item.level === "senior").map((item, idx) => {
                                            return (
                                                <DevCard {...item} key={idx} onUpdate={handleUserUpdate} />
                                            )
                                        })
                                    }
                                </Stack>
                            </Stack>
                        </Paper>
                    </Grid>

                </Grid>
            </Fragment>
        </CookiesProvider>
    )
}

export default DashboardPage;