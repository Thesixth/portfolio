import React from 'react'
import Footer from './Footer';
import GlobalHeader from './GlobalHeader';
import reactLike from '../images/reactLike.png';
import movie from '../images/movie.png';
import '../styles/GlobalStyles.css';
import '../styles/individualPage.css';

const ReactApp = () => {
    return (
        <div>
            <GlobalHeader />
            <div className='individualMain'>
                <h1>Movie Search</h1>
                <div className='individualSectionContainer'>
                    <section>
                        <p className="project-scope">This application displays the most popular movies and allows the user to search for any movie of choice. The user can like a movie which gets added to their favourites. Disliking it does the opposite.</p>
                    </section>
                    <section>
                        <img className="individualPageImg" src={movie} alt="Screenshot of the application"/>
                        <img className="individualPageImg" src={reactLike} alt="Screenshot of the application"/>
                    </section>
                    <section>
                        <h2>Resources and Tools Used</h2>
                        <p className="project-scope">Photoshop, React App, The Movie Database API, Local storage and global hooks </p>
                    </section>
                    <a href="https://www.paliemmanuel.com/movie-search" className="live" >Live Site</a>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ReactApp;
