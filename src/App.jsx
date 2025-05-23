import { useState, useEffect, createContext } from 'react'
import { Routes, Route } from 'react-router';
import './CSS/App.css';
import Layout from './JSX/Layout.jsx';
import Home from './JSX/Pages/Home.jsx';
import About from './JSX/Pages/About.jsx';

export const Context = createContext(null);

export default function App() {
    const [darkTheme, setDarkTheme] = useState(true);
    function changeTheme() {setDarkTheme(!darkTheme)}

    useEffect(() => {
        document.body.className = darkTheme ? 'dark-theme' : 'light-theme';
        //Save this in cookies or something, haven't quite figured it out yet 
    }, [darkTheme]);

    return (
        <Context.Provider value={{darkTheme, changeTheme}} >
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                </Route>
            </Routes>
        </Context.Provider>
    )
}
