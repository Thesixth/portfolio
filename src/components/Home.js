import React from 'react';
import { Link } from 'react-router-dom';
import Doctor from '../images/doctor-x.jpg';
import cibo from '../images/cibo.png';
import movie from '../images/movie.png';
import Footer from './Footer';
import GlobalHeader from './GlobalHeader';
import '../styles/Home.css';
import '../styles/GlobalStyles.css';

function Home() {

    function changeBackground(e) {
        e.target.style.background = '#03071e';
      } 

    return (
       <>
       <GlobalHeader />
       <main>
                <section className="mainInfo">
                    <h1>
                        Hello! welcome to my site.
                    </h1>
                    <p className="lineBreak">. . .</p>
                    <h2>
                      My Projects 
                    </h2>
                    
                </section>
            <div className="MaindisplayGrid">
                <section onMouseOver={changeBackground}  className="mainCenter">
                    <Link to="/movie-search">
                        <h2>
                            Movie Search
                        </h2>
                        <div className="imagewrapper">
                            <img className="thumbnails" src={movie} alt="Screenshot of the application"/>
                            <div className="showonHover">
                                <ul>
                                    <li> React App </li>
                                    <li> TMDB API </li>
                                    <li> Styled Components </li>
                                    <li> Local Storage </li>
                                </ul>
                            </div>
                        </div>
                    </Link>
                </section>
                <section onMouseOver={changeBackground} className="mainRight">
                    <Link to="/cibo-delizioso">
                        <h2>
                            Cibo Delizioso
                        </h2>
                        <div className="imagewrapper">
                            <img className="thumbnails" src={cibo} alt="Screenshot of the application"/>
                            <div className="showonHover">
                                <ul>
                                    <li> SASS </li>
                                    <li> Github </li>
                                    <li> Adobe XD </li>
                                    <li> JavaScript </li>
                                </ul>
                            </div>
                        </div>
                    </Link>
                </section>
                <section onMouseOver={changeBackground}  className="forSectionLeft">
                    <Link to="/doctorX">
                        <h2>
                            Doctor X
                        </h2>
                        <div className="imagewrapper">
                            <img className="thumbnails" src={Doctor} alt="Screenshot of the application"/>
                            <div className="showonHover">
                                <ul>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>Photoshop</li>
                                    <li>JavaScript</li>
                                </ul>
                            </div>
                        </div>
                    </Link>
                </section>
            </div>
       </main>
       <Footer />
        

       </>
    )
}

export default Home
