/** @type {import('next').NextConfig} */
const nextConfig = {
    /* env: {
        REACT_APP_API_DOMAIN: "http://localhost:8000/api",
        REACT_APP_IMG_DOMAIN: "http://localhost:8000/img",
        REACT_APP_SOCKET_DOMAIN: "http://localhost:8000",
    }, */
    env: {
        REACT_APP_API_DOMAIN: "https://3w908qbl-8000.use2.devtunnels.ms/api",
        REACT_APP_IMG_DOMAIN: "https://3w908qbl-8000.use2.devtunnels.ms/img",
        REACT_APP_SOCKET_DOMAIN: "https://3w908qbl-8000.use2.devtunnels.ms",
    },
};

export default nextConfig;
