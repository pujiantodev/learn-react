import { Routes, Route } from 'react-router-dom';

//element
import Home from '../views/Home';
import About from '../views/About';
import Dashboard from '../views/Dashboard';

//element auth
import SignIn from '../views/auth/SignIn';
export default function index() {
    return (
        <>
            <Routes>
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/home' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/signin' element={<SignIn />} />
            </Routes>
        </>
    );
}
