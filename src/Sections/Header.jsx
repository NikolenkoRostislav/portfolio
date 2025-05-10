import email from '../assets/email.png';
import phone from '../assets/phone.png';
import github from '../assets/github.png';

export default function Header(){
    const icons = [
        {link: "mailto:rostislavnikolenkowork@gmail.com", img: email, alt: "email icon"},
        {link: "tel:+49123456789", img: phone, alt: "phone icon"},
        {link: "https://github.com/NikolenkoRostislav", img: github, alt: "github icon"},
    ];

    return(
        <header>
                <div className='basic-info'> 
                    <h1>Rostislav Nikolenko</h1>
                    <h2>Frankfurt, Germany</h2> 
                </div>
                <div className='contact-icons'> 
                    {icons.map((icon, index) => (
                        <a key={index} href={icon.link} target="_blank" rel="noopener noreferrer">
                            <img src={icon.img} alt={icon.alt} />
                        </a>
                    ))}
                </div>
                <p>I'm an 18 year old Front-End web developer. I have been programming for more than 4 years. 
                I have experience in working both independantly and collaboratively within a small team</p>
        </header>
    )
}