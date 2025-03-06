import { useEffect, useState } from 'react';

function AdminRequests() {
    const [requests, setRequests] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/students/requests')
            .then(res => res.json())
            .then(data => setRequests(data));
    }, []);

    const handleAccept = async (id) => {
        await fetch(`http://localhost:5000/students/accept/${id}`, { method: 'POST' });
        setRequests(requests.filter(request => request._id !== id));
    };

    return (
        <div className="min-h-screen flex flex-col items-center bg-gray-900 text-white py-10">
            <h1 className="text-3xl font-bold mb-6">Student Registration Requests</h1>
            <div className="w-full max-w-2xl space-y-4">
                {requests.length > 0 ? requests.map(request => (
                    <div key={request._id} className="flex items-center justify-between bg-gray-800 p-4 rounded-lg shadow-md">
                        <div>
                            <p className="text-lg font-semibold">{request.name}</p>
                            <p className="text-sm text-gray-400">{request.course}</p>
                        </div>
                        <button 
                            className="bg-blue-500 px-4 py-2 rounded-full hover:bg-blue-600 transition" 
                            onClick={() => handleAccept(request._id)}
                        >
                            Accept
                        </button>
                    </div>
                )) : (
                    <p className="text-gray-400">No new requests</p>
                )}
            </div>
        </div>
    );
}

export default AdminRequests;
