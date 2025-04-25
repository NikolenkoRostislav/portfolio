import { useContext } from 'react';
import { Link } from "react-router";

import { Context } from '../App.jsx';

export default function Navbar() {
    const context = useContext(Context);

    const links = [ //I should redo the languages implementation with 118n, this is for testing and not final
        { nameDE: "Startseite", nameEN: "Home", link: "/"},
        { nameDE: "Über mich", nameEN: "About", link: "/about"},
        { nameDE: "Kontakt", nameEN: "Contact Me", link: "/contacts"},
    ];

    return (
        <nav>
            <>{context.language === "English" ? <>       
                <h1>Rostislav Nikolenko</h1>

                <ul>
                    {links.map((link, index) => (
                        <li key={index}><Link to={link.link}>{link.nameEN}</Link></li>
                    ))}
                </ul>

                <button onClick={context.changeTheme}>{context.darkTheme ? "Dark" : "Light"}</button> 
                <button onClick={context.changeLang}>{context.language}</button> 
            </> : <>       
                <h1>Rostislav Nikolenko</h1>

                <ul>
                    {links.map((link, index) => (
                        <li key={index}><Link to={link.link}>{link.nameDE}</Link></li>
                    ))}
                </ul>

                <button onClick={context.changeTheme}>{context.darkTheme ? "Dunkel" : "Hell"}</button> 
                <button onClick={context.changeLang}>{context.language}</button> </>}
            </>
        </nav>
    )
}