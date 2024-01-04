'use client'
import { useSearchParams } from "next/navigation";
import { Fragment } from "react";



const UsersPage = () => {

    const params = useSearchParams();
    const user = params.get('user');
    const product = params.get('k');

    return (
        <Fragment>
            <h2>USUARIOS</h2>
            <h3>{user}</h3>
            <h3>{product}</h3>
        </Fragment>
    )
}

export default UsersPage;