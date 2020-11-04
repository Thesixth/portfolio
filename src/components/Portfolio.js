import React from 'react'
import Footer from './Footer';
import GlobalHeader from './GlobalHeader';
import fireBase from '../images/fireBase.png';
import contactForm from '../images/contactForm.png';
import '../styles/GlobalStyles.css';

const Portfolio = () => {
    return (
        <div>
            <GlobalHeader />
            <div className='individualMain'>
                <h1>Portfolio</h1>
                <div className='individualSectionContainer'>
                    <section className="project-scope">
                        <p>I enjoy planning and developing client-side interfaces/applications. I also want to understand and master backend web development. With this application I used firebase to feed my backend curiosity, this has lead me to MongoDB</p>
                    </section>
                    <section>
                        <img className="individualPageImg" src={contactForm} alt=""/>
                        <img className="individualPageImg" src={fireBase} alt=""/>
                    </section>
                    <section >
                        <h2>Resources and Tools Used</h2>
                        <p>React App, Firebase, Bootstrap, Photoshop and Illustrator </p>
                    </section>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Portfolio;
