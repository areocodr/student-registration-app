import styles from './SearchBar.module.css';

function SearchBar({value, onChange}) {
    return (
        <input
            type="text"
            className={styles.searchInput}
            placeholder="Search students by name..."
            value={value}
            onChange={(e) => onChange(e.target.value)}
            aria-label="Search students"
        />
    );
}

export default SearchBar;