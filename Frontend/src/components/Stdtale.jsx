
// src/components/StudentTable.js
import { useEffect, useState } from 'react';

function StudentTable() {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/students')
            .then(res => res.json())
            .then(data => setStudents(data));
    }, []);

    return (
        <div className='container mx-auto p-5'>
            <h1 className='text-2xl font-bold'>Coaching Management</h1>
            <table className='w-full border mt-5'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Course</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student, index) => (
                        <tr key={index} className='border'>
                            <td>{student.name}</td>
                            <td>{student.email}</td>
                            <td>{student.phone}</td>
                            <td>{student.course}</td>
                            <td>{student.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default StudentTable;