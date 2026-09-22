import {useState} from "react";
import FormField from "./FormField"
import styles from './StudentRegistration.module.css';

const initialFormState = {
    name: '',
    dob: '',
    gender: '',
    email: '',
    phone: '',
    address: '',
    department: '',
    programme: '',
    level: '',
}

const departments = ['Computer Science', 'Mechanical Engineering', 'Economics', 'Law']
const genders = ['male', 'female', 'other']
const levels = ['100', '200', '300', '400']

function StudentRegistration() {
    const [formData, setFormData] = useState(initialFormState)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log('Form submitted:', formData)
        // Here you can add logic to send the form data to a server or API
    }

    return (
        <div className={styles.registration}>
            <h2 className={styles.heading}>Student Registration</h2>

            <form onSubmit={handleSubmit} className={styles.form}>
                <FormField
                    label="Full Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <FormField
                    label="Date of Birth"
                    name="dob"
                    type="date"
                    value={formData.dob}
                    onChange={handleChange}
                    required
                />
                <FormField
                    label="Gender"
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    options={genders}
                    required
                />
                <FormField
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <FormField
                    label="Phone Number"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                />
                <FormField
                    label="Address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                />
                <FormField
                    label="Department"
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                    options={departments}
                    required
                />
                <FormField
                    label="Programme"
                    name="programme"
                    value={formData.programme}
                    onChange={handleChange}
                    required
                />
                <FormField
                    label="Level"
                    name="level"
                    value={formData.level}
                    onChange={handleChange}
                    options={levels}
                    required
                />

                <button type="submit" className={styles.submitButton}>Register Student</button>
            </form>
        </div>
    )
}

export default StudentRegistration;