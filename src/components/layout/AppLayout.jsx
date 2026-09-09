import {Outlet} from "react-router-dom";
import Sidebar from "./Sidebar";
import styles from './AppLayout.module.css';

function AppLayout() {
    return (
        <div className={styles.appShell}>
            <Sidebar />
            <main className={styles.content}>
                <Outlet />
            </main>
        </div>
    );
}

export default AppLayout;