import styles from './StatCard.module.css';

function StatCard({label, value}) { //Destructured Props
    return (
        <div className={styles.card}>
            <p className={styles.label}>{label}</p>
            <p className={styles.value}>{value}</p>
        </div>
    )
}

export default StatCard