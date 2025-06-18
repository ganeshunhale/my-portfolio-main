import React from 'react'
import CharectorSvg from '../CharectorSvg';

const About = () => {
    return (
        <section className=" text-foreground  px-10 md:px-20  container m-auto max-w-[1000px] h-screen flex items-center " id='about'>
            <div className='flex flex-col md:flex-row items-center md:items-start w-full' >
                <div className="md:w-2/3">
                    <p className='hover:text-primary transition-color duration-300 text-3xl font-semibold'>
                        <span className='text-primary mr-1 font-mono ' >01. </span>
                        About Me
                    </p>
                    <p className="text-muted mt-4 text-sm md:text-base max-w-2xl">
                        Hello! My name is Ganesh, and I'm passionate about building scalable, high-performance web applications. My strengths lie in both frontend and backend development, with a strong foundation in full-stack technologies. I've worked on real-time trading platforms, dashboards, and communication tools, always focused on clean architecture and performance.

                      
                    </p>
                    <p className="text-muted mt-4 text-sm md:text-base max-w-2xl">
                    I specialize in React.js and the MERN stack, and also work with Next.js to deliver modern, optimized solutions. I'm constantly exploring new technologies to grow as a developer and contribute to impactful projects.
                    </p>
                    <p className="text-primary font-semibold mt-6">Technologies I work with:</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
                        <div>
                            <p className="text-primary font-medium mb-2">Frontend Technologies</p>
                            <ul className="text-muted text-sm md:text-base space-y-1">
                                <li>&#9656; JavaScript (ES6+)</li>
                                <li>&#9656; React.js</li>
                                <li>&#9656; TypeScript</li>
                                <li>&#9656; Next.js</li>
                                <li>&#9656; Redux</li>
                                <li>&#9656; HTML5 & CSS3</li>
                            </ul>
                        </div>
                        <div>
                            <p className="text-primary font-medium mb-2">Backend & APIs</p>
                            <ul className="text-muted text-sm md:text-base space-y-1">
                                <li>&#9656; Node.js</li>
                                <li>&#9656; Express.js</li>
                                <li>&#9656; WebSocket</li>
                                <li>&#9656; RESTful APIs</li>
                                <li>&#9656; MongoDB</li>
                            </ul>
                        </div>
                        {/* <div>
                            <p className="text-primary font-medium mb-2">Tools & Version Control</p>
                            <ul className="text-muted text-sm md:text-base space-y-1">
                                <li>&#9656; Git</li>
                                <li>&#9656; Docker</li>
                                <li>&#9656; Netlify</li>
                                <li>&#9656; Vercel</li>
                            </ul>
                        </div> */}
                    </div>
                </div>
                <div className="md:w-1/3 mt-10 md:mt-0 flex justify-center md:justify-end items-end ">
                    <CharectorSvg />
                </div>
            </div>

        </section>
    );
};

export default About