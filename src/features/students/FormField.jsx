import styles from './FormField.module.css';

function FormField({ label, name, type = 'text', value, onChange, error, required = false, options }) {
    return (
        <div className={styles.field}>
            <label htmlFor={name} className={styles.label}>
                {label} {required && <span className={styles.required}>*</span>}
            </label>
            {options ? (
                <select id={name} name={name} value={value} onChange={onChange} className={error ? styles.inputError : styles.input}>
                    <option value="">Select {label}</option>
                    {options.map((opt) => (
                        <option key={opt} value={opt}>
                            {opt}
                        </option>
                    ))}
                </select>
            ) : (
                <input
                    id={name}
                    name={name}
                    type={type}
                    value={value}
                    onChange={onChange}
                    required={required}
                    className={error ? styles.inputError : styles.input}
                />
            )}
            {error && <p className={styles.errorText}>{error}</p>}
        </div>
    )
}
export default FormField;