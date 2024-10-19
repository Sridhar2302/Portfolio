import websiteImg1 from '../assets/ecommerce-websites.jpg'
import websiteImg2 from '../assets/food-ecommerce.jpg'
import websiteImg3 from '../assets/website-blog.jpg'

export default function Project(){

    const config = {
        project : [
            {
                image: websiteImg1,
                description: 'A Ecommerce Website. Built with MERN Stack.',
                link: 'https//github.com'
            },
            {
                image: websiteImg2,
                description: 'Food Ecommerce website like Swiggy.',
                link: 'https//github.com'
            },
            {
                image: websiteImg3,
                description: 'Basic Blog website. Built with Next JS and MangoDB',
                link: 'https//github.com'
            },
        ]
    }
    return <section id='project' className = "flex flex-col py-5 px-5 justify-center bg-primary text-white">
        <div className                 = "w-full">
            <div className             = "flex flex-col px-10 py-5">
                 <h1 className         = "text-4xl border-b-4 mb-5 w-[140px] font-bold text-white">Projects</h1>
                 <p>These are some of my best projects. I have built these with React, MERN and CSS. Check them out</p>
            </div>
           
        </div>
        <div className                 = "w-full ">
        <div className                 = 'flex flex-col md:flex-row px-10 gap-6'>
            {config.project.map((project)=> (
                
                <div className = 'relative'>
            <img className = 'h-[200px] w-[500px]' src = {project.image}/>
                    <div className='project-desc'>
                        <p className='text-center px-5 py-5'>{project.description}</p>
                        
                    <div className='flex justify-center'>
                    <a className='btn' target='_blank' href={project.link}>View project</a>
                    </div>
                        
                    </div>
                </div>
                
            ))}



                    </div>

        </div>
    
    </section>
}