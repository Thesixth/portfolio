import React from 'react';
import Footer from './Footer';
import GlobalHeader from './GlobalHeader';
import cibo from '../images/cibo.png';
import '../styles/Home.css';
import '../styles/GlobalStyles.css';

const Cibo = () => {
    return (
        <div>
            <GlobalHeader />
            <div className='individualMain'>
                <h1>CIBO DELIZIOSO</h1> 
                <section className='individualSectionContainer'>
                    <div className="project-scope">
                        <p>This project is was developed early on in my career. We worked in a team of three, never had we met, and had no web development background.</p>
                    </div>
                    <div>
                        <img className="individualPageImg" src={cibo} alt="Screenshot of the site's homepage"/>
                    </div>
                    <div>
                        <h2>Resources and Tools Used</h2>
                        <p>We used Github, SASS, JavaScript, Photoshop and Adobe XD </p>
                    </div>
                    <a href="https://www.paliemmanuel.com/cibo-delizioso" className="live" target="_blank" rel="noreferrer noopener">Live Site</a>
                </section>
            </div>
            <Footer />
        </div>
    )
}

export default Cibo;