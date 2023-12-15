import { Component } from "react";

import styles from "./CardContainer.module.css";


class CardContainer extends Component {

    render() {
        const { children } = this.props;
        console.log(this.props);
        return (
            <div>
                <h1>Cartas de Usuarios</h1>
                <div className={styles.cardContainer}>
                    {children}
                </div>
            </div>
        )
    }
}

export default CardContainer;