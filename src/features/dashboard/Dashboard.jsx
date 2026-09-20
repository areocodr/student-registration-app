import {useState} from "react";
import {useStudents} from "../../context/StudentsContext.jsx";
import mockStudents from "../../data/mockStudents.js";
import StatCard from "./StatCard.jsx";
import SearchBar from "./SearchBar.jsx";
import RecentStudentsList from "./RecentStudentsList.jsx";
import {Link} from "react-router-dom";
import styles from './Dashboard.module.css';

// no use state or useEffect needed here since we are not fetching data from an API or managing any state in this component. 
// We are simply displaying the data from the mockStudents array.
function Dashboard() {
    const { students } = useStudents(); // Access the students data from the StudentsContext using the useStudents hook.
    const [searchTerm, setSearchTerm] = useState(''); // State to hold the search term entered by the user, lifted up from SearchBar into Dashboard to manage the state of the search term and pass it down to the SearchBar component as a prop.

    const totalStudents = students.length;
    const activeCount = students.filter((s) => s.status === "active").length;
    const blacklistedCount = students.filter((s) => s.status === "blacklisted").length;

    const recentStudents = [...students].sort((a, b) => new Date(b.registrationDate) - new Date(a.registrationDate)).slice(0, 5);

    const filteredStudents = recentStudents.filter((student) => student.name.toLowerCase().includes(searchTerm.toLowerCase()));

    return (
        <div className={styles.dashboard}>
            <div className={styles.headerRow}>
                <h2 className={styles.heading}>Dashboard</h2>
                <Link to="/students/register" className={styles.quickAction}> + Register New Student</Link>
            </div>

            <div className={styles.statsGrid}>
                <StatCard label="Total Students" value={totalStudents} />
                <StatCard label="Active Students" value={activeCount} />
                <StatCard label="Blacklisted Students" value={blacklistedCount} />
            </div>

            <div className={styles.recentSection}>
                <div className={styles.recentHeader}>
                    <h3>Recently Registered</h3>
                    <SearchBar value={searchTerm} onChange={setSearchTerm} />
                </div>
                <RecentStudentsList students={filteredStudents} />
                </div>
            </div>
       );  
}

export default Dashboard;
