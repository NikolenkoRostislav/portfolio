export default function Header(){
    const icons = [
        {link: "link.com", icon: "icon.png"},
        {link: "link.com", icon: "icon.png"},
        {link: "link.com", icon: "icon.png"},
    ];

    return(
        <header>
                <div className='basic-info'> 
                    <h1>Rostislav Nikolenko</h1>
                    <h2>Frankfurt, Germany</h2> 
                </div>
                <div className='contact-icons'> 
                    {icons.map((icon, index) => (
                        <a key={index} href={icon.link}><img src={icon.img} alt='contact icon'/></a>
                    ))}
                </div>
                <p>I'm an 18 year old Front-End web developer. I have been programming for more than 4 years. 
                I have experience in working both independantly and collaboratively within a small team</p>
        </header>
    )
}