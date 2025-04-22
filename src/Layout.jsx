import { Outlet } from 'react-router';

export default function Layout() {
    return (
        <div>
            <nav> Placeholder navbar </nav>
            <Outlet />
            <footer> Placeholder footer </footer>
        </div>
    );
}