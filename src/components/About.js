import AboutImg from '../assets/about.png'
export default function About(){
    const config = {
        line1: 'I am Sridhar S. I am a Full-stack Web developer. i built a beatiful website using with React.js and TAilwind CSS.',
        line2: 'I am proficient in frontend skills like React.js, Redux, Redux Tool kit, Axios, Tailwind CSS, SaSS, Css3 and many more.',
        line3: 'In backend I know node.js, Express.js, MangoDB, and Mongoose.'
    }
    return <section id='about' className='flex flex-col md:flex-row bg-secondary px-5'>
        <div className='md:w-1/2 py-5'>
            <img src={AboutImg}/>
        </div>

        <div className='md:w-1/2 flex justify-center text-white'>
        <div className='flex flex-col justify-center'>
            <h1 className='text-4xl border-b-4 mb-5 w-[170px] font-bold'>About Me</h1>
            <p className='pb-5'>{config.line1}</p>
            <p className='pb-5'>{config.line2}</p>
            <p className='pb-5'>{config.line3}</p>
        </div>
           
        </div>
    </section>
}