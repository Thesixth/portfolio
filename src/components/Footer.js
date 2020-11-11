import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/Footer.css';
import '../styles/GlobalStyles.css';

const Footer = () => {
    return (
        <footer>
            <section>
                <h2>Get In Touch</h2>
                <a href="https://www.linkedin.com/in/emmanuel-pali-a73b9b86/"><i class="fab fa-linkedin"></i></a>
                <a href="https://github.com/Thesixth"><i class="fab fa-github"></i></a>
            </section>

            <section>
                <p> &copy; Emmanuel Pali 2020</p>
                <p><Link to="/">Home</Link></p>
            </section>
            
            <section>
                <h2>Ouick Links</h2>
                 <ul>
                     <li>
                         <Link to="/movie-search">Movie Search</Link>
                     </li>
                     <li>
                         <Link to="/cibo-delizioso">Cibo Delizioso</Link>
                     </li>
                     <li>
                        <Link to="/portfolio">Portfolio</Link>
                     </li>
                 </ul>
            </section>
           
        </footer>
    )
}

export default Footer
