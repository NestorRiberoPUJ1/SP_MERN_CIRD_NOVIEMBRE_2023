'use client'
import { useParams } from "next/navigation";



const ViewUserPage = () => {

    const {id} = useParams();
    console.log(id);
    return (
        <div></div>
    )
}

export default ViewUserPage;