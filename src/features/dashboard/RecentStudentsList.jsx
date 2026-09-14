import styles from './RecentStudentsList.module.css'

function RecentStudentsList({students}) {
    if (students.length === 0) {
        return <p className={styles.emptyState}>No students match your search</p>
    }

    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Department</th>
                    <th>Status</th>
                    <th>Registered</th>
                </tr>
            </thead>
            <tbody>
                {students.map((student) => (
                    <tr key={student.id}>
                        <td>{student.name}</td>
                        <td>{student.department}</td>
                        <td>
                            <span className={student.status === 'active' ? styles.statusActive : styles.statusBlacklisted}>
                                {student.status}
                            </span>
                        </td>
                        <td>{student.registrationDate}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default RecentStudentsList