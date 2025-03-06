// src/components/Login.js
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login({ login }) {
    const [role, setRole] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        if (role === 'admin') {
            login(role);
            navigate('/admin');
        } else {
            alert('Invalid role');
        }
    };

    return (
        <div className='min-h-screen flex items-center justify-center bg-gray-100 text-gray-900'>
            <div className='w-full max-w-md p-6 rounded-lg shadow-lg bg-white'>
                <h1 className='text-2xl font-bold text-center mb-5'>Admin Login</h1>
                <input
                    className='border p-2 w-full rounded bg-transparent focus:outline-none mb-4'
                    type='text'
                    placeholder='Enter Role (admin)'
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                />
                <button className='bg-blue-500 text-white p-2 w-full rounded hover:bg-blue-600' onClick={handleLogin}>Login</button>
            </div>
        </div>
    );
}

export default Login;