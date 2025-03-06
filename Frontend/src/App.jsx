import StudentRegistrationForm from './components/RegistrationForm';
import StudentTable from './components/Stdtale';
// src/App.js
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import AdminDashboard from './components/AdminDashboard';
import PublicHome from './components/PublicRoute';
import NotFound from './components/NotFound';
import Login from './components/Login';
import AdminRequests from './components/AdminRequest';
import AcceptedStudents from './components/AcceptedStudents';
function App() {
    const [user, setUser] = useState(null);

    const login = (role) => {
        setUser({ role });
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <Router>
            <Routes>
                <Route path='/' element={<PublicHome />} />
                <Route path='/register' element={<StudentRegistrationForm />} />
                <Route path='/login' element={<Login login={login} />} />
                <Route path='/admin' element={user?.role === 'admin' ? <AdminDashboard logout={logout} /> : <Navigate to='/login' />} />
                <Route path='/admin/requests' element={user?.role === 'admin' ? <AdminRequests /> : <Navigate to='/login' />} />
<Route path='/admin/students' element={user?.role === 'admin' ? <AcceptedStudents /> : <Navigate to='/login' />} />
            </Routes>
        </Router>
    );
}

export default App;

// Add route
