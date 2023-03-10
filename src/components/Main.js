import React from "react";

export default function Main() {
    return(
        <main className="main-body">
            <div>
                <h2>Jemimah Mmboga</h2>
                <h4>Frontend Developer</h4>
                <h5>mmbogajemimah@gmail.com</h5>
            </div>
            <div className="buttons">
                <button className="email-button" type="email" ><a href='https://github.com/mmbogajemimah' rel='noreferrer' target='_blank'>Github</a></button>
                <button className='linkedin-button' type='linkedin'><a href="https://www.linkedin.com/in/jemimah-mmboga-aab075187/" rel='noreferrer' target='_blank'>Linkedin</a></button>
            </div>
            
            <section className="about-section" id="about">
                <h3>About</h3>
                <p>I am a frontend web developer with extensive experience in designing and implementing web applications using modern web development technologies and frameworks, including HTML, CSS, JavaScript and React. I am detail-oriented and committed to delivering high-quality, user-centric applications that are intuitive, efficient, and visually appealing. With strong communication and collaboration skills, I work closely with clients and team members to ensure project goals are met on time and within budget. I approach each project with a focus on quality, usability, and performance and I am dedicated to continuously expanding my skills and knowledge to deliver cutting-edge solutions to clients.</p>
            </section>
            <section className="interests-section" id="intrests">
                <h3>Interests</h3>
                <p>I am passionate about exploring the intersection of design and technology and staying up-to-date with the latest trends in user experience and interface design. I enjoy learning about new tools and techniques that can help me create more engaging and interactive applications.</p>
            </section>
        </main>
    )
}