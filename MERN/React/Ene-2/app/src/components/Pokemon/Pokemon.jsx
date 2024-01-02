import { useEffect, useState } from "react";

import axios from 'axios';

const Pokemon = () => {

    const [poke, setPoke] = useState({});

    const getPokemon = async () => {

        try {
            const response = await axios.get('https://pokeapi.co/api/v2/pokemon/ditto');
            const result = await response.data;
            console.log(result);
            setPoke(result);
        } catch (error) {
            console.log(error);
        }
    }


    useEffect(() => {
        getPokemon();
    }, [])



    return (
        <div>
            <h1>Pokemon:{poke.name}</h1>
            <h2>Habilidades</h2>
            <ul>
                {

                    poke.abilities?.map((item, idx) => {
                        console.log(item);
                        return (
                            <li key={idx}>
                                {item.ability.name}
                            </li>
                        )
                    })
                }

            </ul>
        </div>
    )
}


export default Pokemon;
