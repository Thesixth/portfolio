import React from 'react';
import { Link } from 'react-router-dom';
import emmanuel from '../images/emmanuel-pali.png';
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
                    <p>Hello, I am a Front-End Developer currently based in Vancouver.
                    </p>
                    <span className="lineBreak">. . .</span>
                    <h2 id="work">My Work</h2>
                    <span className="lineBreak">. . .</span>
                    
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
                    <Link to="/portfolio">
                        <h2>
                            Portfolio
                        </h2>
                        <div className="imagewrapper">
                            <img className="thumbnails" src={emmanuel} alt="Screenshot of the application"/>
                            <div className="showonHover">
                                <ul>
                                    <li>React App</li>
                                    <li>Firebase</li>
                                    <li>Photoshop</li>
                                    <li>Bootstrap</li>
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
