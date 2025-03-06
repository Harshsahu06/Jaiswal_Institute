// src/components/StudentRegistrationForm.js
import { useState, useEffect } from 'react';

function StudentRegistrationForm() {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', course: '' });
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const savedMode = localStorage.getItem('darkMode');
        if (savedMode === 'true') setDarkMode(true);
    }, []);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        localStorage.setItem('darkMode', !darkMode);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:5000/students/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        });
        const data = await response.json();
        alert(data.message);
    };

    return (
        <div className={`min-h-screen flex items-center justify-center px-5 py-10 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
            <div className='w-full max-w-md p-6 rounded-lg shadow-lg' style={{ backgroundColor: darkMode ? '#1a1a2e' : 'white' }}>
                <button onClick={toggleDarkMode} className='mb-4 px-3 py-1 rounded bg-blue-500 text-white hover:bg-blue-600'>
                    {darkMode ? 'Light Mode' : 'Dark Mode'}
                </button>
                <h1 className='text-2xl font-bold text-center mb-5'>Student Registration</h1>
                <form onSubmit={handleSubmit} className='space-y-3'>
                    <input className='border p-2 w-full rounded bg-transparent focus:outline-none' type='text' name='name' placeholder='Name' value={formData.name} onChange={handleChange} required />
                    <input className='border p-2 w-full rounded bg-transparent focus:outline-none' type='email' name='email' placeholder='Email' value={formData.email} onChange={handleChange} required />
                    <input className='border p-2 w-full rounded bg-transparent focus:outline-none' type='tel' name='phone' placeholder='Phone' value={formData.phone} onChange={handleChange} required />
                    <select className='border p-2 w-full rounded bg-transparent focus:outline-none' name='course' value={formData.course} onChange={handleChange} required>
                        <option value='' disabled>Select a course</option>
                        <option value='Math'>Math</option>
                        <option value='Physics + Chemistry'>Physics + Chemistry</option>
                        <option value='P+C+M'>P+C+M</option>
                    </select>
                    <button className='bg-green-500 text-white p-2 w-full rounded hover:bg-green-600 transition duration-300' type='submit'>Register</button>
                </form>
            </div>
        </div>
    );
}

export default StudentRegistrationForm;
