import React from 'react';
import { Link } from 'react-router-dom';
import emmanuel from '../images/emmanuel-pali.png';
import pali from '../images/pali.png';
import '../styles/GlobalHeader.css';
import '../styles/GlobalStyles.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Footer from './Footer';
import '../styles/About.css';
import {db} from './Firebase';

class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
            disabled: false,
            emailSent: null
        }
    }


    handleChange = (event) => {
        console.log(event);
        const target = event.target;
        const value = target.value;
        const name = target.name

        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        db.collection('contacts').add({
            name: this.state.name,
            email: this.state.email,
            message: this.state.message,
        })
        .catch((error) => {
            alert(error.message);
        });

        this.setState({
            disabled: true,
            emailSent: true,
            name: '',
            email: '',
            message: '',
        });
        
    }


    render() {
        return (
            <div>
                <header className="globaHeader">
                    <nav>
                        <ul id="container">
                            <li>
                                <Link to="/" className="logoContent">
                                <img className="logo" src={emmanuel} alt=""></img>
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className="logoContent">
                                    Portfolio
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </header>
                <section className="intro">
                    <h2 className="sectionTitle sectionTitleIntro">
                        I am <em>Emmanuel Pali</em>    
                    </h2>
                    <p className="sectionSubtitle">Front-End Developer</p>
                    <img className="introImage" src={pali} alt="Emmanuel Pali smiling" />
                    <h2 className="sectionTitle">Tools</h2>
                    <p className="project-scope"><i class="fab fa-html5"></i> | <i class="fab fa-css3"></i> | <i class="fab fa-js"></i> | <i class="fab fa-node"></i> | <i class="fab fa-react"></i> | <i class="fab fa-wordpress"></i>
                    <span className="lineBreak">. . .</span>
                    Hardwork and dedication pays, but I strongly believe that working in a multicultural environment brings out the best in us. Currently open to working and collaborating with developers or firms .<br /> Away from my computer, I am an amateur athlete, a  fictional writer and an avid dancer. Curious and eager to learn. 
                    </p>
                </section>

                <Form onSubmit={this.handleSubmit} >
                    <Form.Group>
                        <h2 className="formTitle">Let's Talk</h2>
                        <Form.Label htmlFor="full-name">Full Name</Form.Label>
                        <Form.Control id="full-name" name="name" type="text" value={this.state.name} onChange={this.handleChange} required/>
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label htmlFor="email">Email</Form.Label>
                        <Form.Control id="email" name="email" type="email" value={this.state.email} onChange={this.handleChange} required/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label htmlFor="message">Message</Form.Label>
                        <Form.Control id="message" name="message" as="textarea"rows="5" value={this.state.message} onChange={this.handleChange} required/>
                    </Form.Group>

                    <Button className="d-inline-block" variant="primary" type="submit" disabled={this.state.disabled}>
                        Send
                        </Button>

                        {this.state.emailSent === true && <p className="d-inline success-msg">Sent</p>}
                        {this.state.emailSent === false && <p className="d-inline err-msg">Message Not Sent</p>}
                </Form>
                <Footer />
            </div>
         );
    }
}

export default About
