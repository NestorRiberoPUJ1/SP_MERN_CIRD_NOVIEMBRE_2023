import styles from './dashboard.module.css'

const DashboardLayout = ({ children }) => {

    return (
        <div className={styles.layoutContainer}>
            <div className={styles.leftNav}>LeftNav</div>
            <div className={styles.content}>{children}</div>
        </div>
    )
}

export default DashboardLayout;