'use client'
import { useParams } from "next/navigation";



const NumPage = () => {
    const { param } = useParams();
    return (
        <h1>
            {
                isNaN(param) ?
                    "The word is: "
                    :
                    "The number is: "
            }
            {param}

        </h1>

    )
}

export default NumPage;