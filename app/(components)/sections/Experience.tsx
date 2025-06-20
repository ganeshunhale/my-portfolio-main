import React from 'react';

const experiences = [
    {
        "company": "Finrise Softech Pvt Ltd",
        "role": "Software Developer",
        "date": "Dec 2022 — Present",
        "responsibilities": [
            "Built responsive, high-performance web applications using React.js and Next.js, ensuring optimal performance and SEO compatibility.",
            "Built real-time charts and graphs with WebSocket integration to visualize live trading data.",
            "Developed advanced data tables using Ag-Grid with fast sorting, filtering, and dynamic updates.",
            "Created interactive dashboards with resizable and rearrangeable components for a seamless user experience.",
          "Collaborated closely with UI/UX teams and backend engineers to implement clean architecture and seamless RESTful API integrations.",
            "Maintained scalable and clean codebase with TypeScript and followed best practices through code reviews, component reusability, and testing."
        ],
        "skills": [
            "JavaScript (ES6+)",
            "TypeScript",
            "React.js",
            "Next.js",
            "Redux",
            "Ag-Grid",
            "WebSocket",
            "Node.js",
            "Express.js",
            "MongoDB",
            "RESTful APIs"
        ]
    },
    // {
    //     company: "SRHFT",
    //     role: "Frontend Developer",
    //     date: "2023 — 2023",
    //     responsibilities: [
    //         "Implemented a dynamic form builder for customizable inputs.",
    //         "Built real-time graphs and charts with WebSocket integration.",
    //         "Developed advanced tables with sorting, filtering, grouping, and dataset handling.",
    //         "Created an interactive dashboard with resizable and rearrangeable components.",
    //         "Set up CI/CD pipelines using Jenkins for automated deployments.",
    //         "Deployed the application on a VPS with Nginx, SSL, and reverse proxy configuration."
    //     ],
    //     skills: ["React", "WebSockets", "Node.js", "CI/CD", "Nginx"]
    // },
    // {
    //     company: "Freelance Web Development",
    //     role: "Web Developer",
    //     date: "2021 — 2023",
    //     responsibilities: [
    //         "Created modern UIs and dynamic content management systems for Ebulient Securities.",
    //         "Implemented real-time features and live data streams, ensuring seamless updates.",
    //         "Deployed applications on AWS using Nginx and Docker for scalability.",
    //         "Built CI/CD pipelines to streamline and automate deployments.",
    //         "Designed high-performance React interfaces with dynamic and interactive features.",
    //         "Developed secure REST APIs using Django for efficient data communication and authentication.",
    //         "Successfully deployed scalable applications with AWS and Docker integration."
    //     ],
    //     skills: ["AWS", "Docker", "Django", "React", "CI/CD", "nodeJs"]
    // }
];

const Experience = () => {
    return (
        <section className=" text-foreground py-20 px-10 md:px-20 max-w-[1000px] mx-auto group pt-28" id='experience'>
            <p className='hover:text-primary transition-color duration-300 text-3xl font-semibold'>
                <span className='text-primary mr-1 font-mono ' >02. </span>
                {`Where I've Worked`}
            </p>
            <div className="mt-3 space-y-10 " >
                {experiences.map((exp, index) => (
                    <div key={index} className='p-4 rounded-lg flex gap-8 group-hover:opacity-50 hover:!opacity-100 transition-all duration-300 border border-white/0
                    hover:bg-[#172445]/30 hover:backdrop-blur-3xl  hover:border-white/20 
                    md:flex-row flex-col
                    '>
                        <p className="text-muted text-sm mt-1 min-w-[20%]">{exp.date}</p>
                        <div className='w-[80%]'>
                            <h3 className="text-l font-semibold ">{exp.role} · {exp.company}</h3>
                            <ul className="mt-4 text-muted text-sm space-y-2">
                                {exp.responsibilities.map((task, idx) => (
                                    <li key={idx} className="flex items-start">
                                        <span className="text-primary mr-2"></span>{task}
                                    </li>
                                ))}
                            </ul>
                            <div className="flex flex-wrap gap-2 mt-4">
                                {exp.skills.map((skill, idx) => (
                                    <span key={idx} className="px-3 py-1 rounded-full text-xs text-primary bg-teal-300/10 font-medium ">{skill}</span>
                                ))}
                            </div>
                        </div>

                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;