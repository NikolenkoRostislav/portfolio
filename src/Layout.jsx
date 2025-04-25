import { Outlet } from 'react-router';

import Navbar from './Sections/Navbar';
import Footer from './Sections/Footer';

export default function Layout() {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
}