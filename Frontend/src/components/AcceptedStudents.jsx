// src/components/AcceptedStudents.js
import { useState, useEffect } from 'react';

function AcceptedStudents() {
    const [students, setStudents] = useState([]);
    const [search, setSearch] = useState('');
    const [course, setCourse] = useState('');
    const [due, setDue] = useState('');
    const [village, setVillage] = useState('');

    useEffect(() => {
        fetch(`http://localhost:5000/students/accepted?search=${search}&course=${course}&due=${due}&village=${village}`)
            .then(res => res.json())
            .then(data => setStudents(data));
    }, [search, course, due, village]);

    return (
        <div className='p-6 bg-gray-900 text-white min-h-screen'>
            <h1 className='text-2xl font-bold mb-4'>Accepted Students</h1>
            
            {/* Filters */}
            <div className="flex flex-wrap gap-4 mb-4">
                <input 
                    className='border p-2 w-full max-w-sm rounded bg-gray-800 text-white focus:outline-none' 
                    placeholder='Search by Student ID' 
                    onChange={(e) => setSearch(e.target.value)} 
                />
                <select 
                    className='border p-2 rounded bg-gray-800 text-white' 
                    onChange={(e) => setCourse(e.target.value)}
                >
                    <option value=''>All Courses</option>
                    <option value='B.Tech'>B.Tech</option>
                    <option value='MCA'>MCA</option>
                </select>
                <select 
                    className='border p-2 rounded bg-gray-800 text-white' 
                    onChange={(e) => setDue(e.target.value)}
                >
                    <option value=''>All</option>
                    <option value='due'>Due</option>
                    <option value='no-due'>No Due</option>
                </select>
                <input 
                    className='border p-2 rounded bg-gray-800 text-white' 
                    placeholder='Filter by Village' 
                    onChange={(e) => setVillage(e.target.value)}
                />
            </div>

            {/* Student Table */}
            <table className='w-full border rounded-lg bg-gray-800 text-white'>
                <thead>
                    <tr className='bg-gray-700'>
                        <th className='p-3'>Student ID</th>
                        <th className='p-3'>Name</th>
                        <th className='p-3'>Village</th>
                        <th className='p-3'>Total Fees</th>
                        <th className='p-3'>Fee Paid</th>
                        <th className='p-3'>Due Fees</th>
                        <th className='p-3'>Payment Status</th>
                        <th className='p-3'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map(student => (
                        <tr key={student.studentId} className='border-t border-gray-600'>
                            <td className='p-3'>{student.studentId}</td>
                            <td className='p-3'>{student.name}</td>
                            <td className='p-3'>{student.village}</td>
                            <td className='p-3'>₹{student.totalFees}</td>
                            <td className='p-3 text-green-400'>₹{student.feePaid}</td>
                            <td className={`p-3 ${student.dueFees > 0 ? 'text-red-400' : 'text-green-400'}`}>₹{student.dueFees}</td>
                            <td className={`p-3 ${student.paymentStatus === 'Pending' ? 'text-yellow-400' : 'text-green-400'}`}>{student.paymentStatus}</td>
                            <td className='p-3'>
                                <button className='bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600' 
                                    onClick={() => window.location.href=`/student/${student.studentId}`}
                                >
                                    View
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default AcceptedStudents;
