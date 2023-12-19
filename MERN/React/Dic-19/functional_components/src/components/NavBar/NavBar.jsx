import styles from "./Navbar.module.css"


const NavBar = () => {


    return (
        <nav className={styles.NavBar}>
            <h2> My NavBar</h2>
            <input type="text" name="" id="" />
            <button type="button" className={styles.btn}>Buscar</button>
        </nav>
    )

}


export default NavBar;