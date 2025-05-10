import { useState, useEffect, createContext } from 'react'
import { Routes, Route } from 'react-router';
import './App.css';
import Layout from './Layout.jsx';
import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';

export const Context = createContext(null);

export default function App() {
    const [darkTheme, setDarkTheme] = useState(true);
    const [language, setLanguage] = useState("English");
    function changeTheme() {setDarkTheme(!darkTheme)}
    function changeLang() {setLanguage(language === "English" ? "Deutsch" : "English")}

    useEffect(() => {
    //Save this in cookies or something, haven't quite figured it out yet 
    }, [language, darkTheme]);

    return (
        <Context.Provider value={{darkTheme, language, changeTheme, changeLang}} >
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                </Route>
            </Routes>
        </Context.Provider>
    )
}
