import mockStudents from "../../data/mockStudents.js";
import StatCard from "./StatCard.jsx"
import styles from './Dashboard.module.css';

function Dashboard() {
    const totalStudents = mockStudents.length;
    const activeCount = mockStudents.filter((s) => s.status === "active").length;
    const blacklistedCount = mockStudents.filter((s) => s.status === "blacklisted").length;
    
    return (
        <div className={styles.dashboard}>
            <h2 className={styles.heading}>Dashboard</h2>

            <div className={styles.statsGrid}>
                <StatCard label="Total Students" value={totalStudents} />
                <StatCard label="Active Students" value={activeCount} />
                <StatCard label="Blacklisted Students" value={blacklistedCount} />
            </div>
        </div>
    );  
}

export default Dashboard;
