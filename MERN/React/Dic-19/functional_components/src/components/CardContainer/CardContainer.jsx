

import styles from "./CardContainer.module.css";


const CardContainer = ({ children,setPreferido }) => {

    const handleClick=()=>{
        setPreferido("");
    }

    return (
        <div>
            <h1>Cartas de Usuarios</h1>
            <div className={styles.cardContainer}>
                {children}
            </div>
            <button onClick={handleClick}>Sin favoritos</button>
        </div>
    )

}

export default CardContainer;