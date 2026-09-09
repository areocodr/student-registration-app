import { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.css";

const navItems = [
    {label: "Dashboard", path: "/"},
        {label: "Students", path: "/students"},
        {label: "Register", path: "/students/register"},
        {label: "Analytics", path: "/analytics"}
]

function Sidebar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className={styles.sidebar}>
            <div className={styles.topBar}>
                <h1 className={styles.logo}>StudentReg</h1>
                <button className={styles.menuButton} onClick={() => setIsOpen(!isOpen)}
                    //note that an arrow function is used instead of calling setIsOpen directly to avoid immediate execution during render (an infinite loop). The arrow function ensures that setIsOpen is only called when the button is clicked.
                    aria-expanded={isOpen}
                    aria-label="Toggle navigation menu"
                >
                    ☰
                </button>
            </div>
            <ul className={`${styles.navList} ${isOpen ? styles.navListOpen : ''}`}>
                {navItems.map((item) => (
                    <li key={item.path}>
                        <NavLink
                            to={item.path}
                        className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}
                    end={item.path === "/"}
                    onClick={() => setIsOpen(false)} // Close the menu when a link is clicked
                    >
                        {item.label}
                    </NavLink>
                </li>
            ))}
        </ul>
    </nav>
    )
}

export default Sidebar;