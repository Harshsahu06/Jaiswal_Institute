import { useEffect, useState } from 'react';
import AcceptedStudents from './AcceptedStudents';

function AdminDashboard({ logout }) {
    const [requests, setRequests] = useState([]);
    const [students, setStudents] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/students/requests')
            .then(res => res.json())
            .then(data => setRequests(data));

        // fetch('http://localhost:5000/students')
        //     .then(res => res.json())
        //     .then(data => setStudents(data));
    }, []);

    const handleAccept = async (id) => {
        await fetch(`http://localhost:5000/students/accept/${id}`, { method: 'POST' });
        setRequests(requests.filter(request => request._id !== id));
        setStudents([...students, requests.find(request => request._id === id)]);
    };

    return (
        <div className='min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white'>
            <h1 className='text-3xl font-bold mb-4'>Admin Dashboard</h1>
            {requests.map(request => (
                <div key={request._id} className='bg-gray-800 p-4 rounded mb-2'>
                    <p>{request.name} - {request.course}</p>
                    <button className='bg-green-500 px-4 py-2 rounded' onClick={() => handleAccept(request._id)}>Accept</button>
                </div>
            ))}
            <button className='bg-red-500 px-4 py-2 rounded mt-4' onClick={logout}>Logout</button>

            <AcceptedStudents />
        </div>
    );
}

export default AdminDashboard;
