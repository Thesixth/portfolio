import React from 'react'
import Footer from './Footer';
import GlobalHeader from './GlobalHeader';
import Doctor from '../images/doctor-x.jpg';
import '../styles/GlobalStyles.css';

const DoctorX = () => {
    return (
        <div>
            <GlobalHeader />
            <div className='individualMain'>
                <h1>Doctor X</h1>
                <section className='individualSectionContainer'>
                    <div className="project-scope">
                        <p>This is the classic wack-a-mole game. I gave it a personal touch as a attribute to our healthcare workers</p>
                    </div>
                    <div>
                        <img className="individualPageImg" src={Doctor} alt="A screenshot of the game intro"/>
                    </div>
                    <div >
                        <h2>Resources and Tools Used</h2>
                        <p>HTML, CSS, Photoshop and Javascript </p>
                    </div>
                    <a href="https://www.paliemmanuel.com/doctor-x" className="live" target="_blank" rel="noreferrer noopener">Live Site</a>
                </section>
            </div>
            <Footer />
        </div>
    )
}

export default DoctorX;
