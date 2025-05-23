import email from '../../assets/email.png';
import phone from '../../assets/phone.png';
import github from '../../assets/github.png';
import { useTranslation } from 'react-i18next';

export default function Header(){
    const { t } = useTranslation();
    const icons = [
        {link: "mailto:rostislavnikolenkowork@gmail.com", img: email, alt: "email icon"},
        {link: "tel:+49123456789", img: phone, alt: "phone icon"},
        {link: "https://github.com/NikolenkoRostislav", img: github, alt: "github icon"},
    ];

    return(
        <header>
                <h1>Rostislav Nikolenko</h1>
                <h2>{t('locationHeader')}</h2> 
                <div className='contact-icons'> 
                    {icons.map((icon, index) => (
                        <a key={index} href={icon.link} target="_blank" rel="noopener noreferrer">
                            <img className='pure-black-image' src={icon.img} alt={icon.alt} />
                        </a>
                    ))}
                </div>
                <p>{t('aboutMeHeader')}</p>
        </header>
    )
}