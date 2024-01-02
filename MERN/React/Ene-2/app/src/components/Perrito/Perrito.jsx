import { useEffect, useState } from "react";



const Perrito = () => {

    const [perritoImg, setPerritoImg] = useState("");

    const requestDog = () => {
        fetch("https://dog.ceo/api/breed/hound/afghan/images/random", {
            method: 'GET',
            redirect: 'follow'
        })
            .then(response => response.json())
            .then(result => {
                console.log(result);
                setPerritoImg(result.message);
            })
            .catch(error => console.log('error', error));
    }

    useEffect(() => {
        requestDog();

    }, [])

    return (
        <div>
            <h1>Perrito</h1>
            {
                perritoImg !== "" &&
                <img src={perritoImg} alt="imgPerrito" />
            }

        </div>
    )
}

export default Perrito;