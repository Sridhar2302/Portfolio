import HeroImg from '../assets/hero.png'
import { FaXTwitter, FaInstagram,FaFacebook, FaLinkedin } from "react-icons/fa6";

export default function Hero(){
    const config = {
        subtitle: 'Im a Frontend developer',
        social: {
            x: 'https://x.com/Sridhar_23?t=S_ADFBQL1sTR9xKjrpteTg&s=08',
            facebook: 'https://www.facebook.com/share/Hd5cPVWKGqrTQLv3/',
            instagram: 'https://www.instagram.com/its_sridhar_23',
            linkedin: 'www.linkedin.com/in/sridhar-s-26ab39249'
        }
    }
    return <section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center'>
        <div className='md w-1/2 flex flex-col'>
            <h1 className=' text-white text-6xl font-hero-font' >Hi,<br/>Im<span className='text-black'> Sridhar S</span> 
                <p className='text-2xl'>{config.subtitle}</p>
            </h1>
            <div className='flex py-4'>
                <a href={config.social.x} className='pr-5 hover:text-white'><FaXTwitter size={30}/></a>
                <a href={config.social.instagram} className='pr-5 hover:text-white'><FaInstagram size={30}/></a>
                <a href={config.social.facebook} className='pr-5 hover:text-white'><FaFacebook size={30}/></a>
                <a href={config.social.linkedin} className='pr-5 hover:text-white'><FaLinkedin size={30}/></a>
            </div>

        </div>

        <img className='md:w-1/3' src={HeroImg}/>

    </section>
}