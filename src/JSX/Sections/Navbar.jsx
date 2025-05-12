import { useContext } from 'react';
import { Link } from "react-router";
import { Context } from '../../App.jsx';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import '../../CSS/Navbar.css';

export default function Navbar() {
    const context = useContext(Context);
    const { t } = useTranslation();

    const links = [
        {name: "Home", link: "/"},
        {name: "About", link: "/about"},
        {name: "Contact Me", link: "/contacts"},
    ];

    function changeLang() { i18next.changeLanguage(i18next.language === "en" ? "de" : "en")}

    return (
        <nav>
            <div className="nav-left">    
                <h1>Rostislav Nikolenko</h1>
                <ul>
                    {links.map((link, index) => (
                        <li key={index}><Link to={link.link}>{link.name}</Link></li>
                    ))}
                </ul>
            </div>
            <div className="nav-right">
                <button onClick={context.changeTheme}>{context.darkTheme ? "Dark" : "Light"}</button> 
                <button onClick={changeLang}>{t('otherLanguage')}</button>  
            </div>
        </nav>
    )
}