import React from "react";
import Facebook from '../images/facebook.png';
import Github from '../images/github.png'
import Instagram from '../images/instagram.png';
import Twitter from '../images/twitter.png';
import Linkedin from '../images/linkedin.png';

export default function Footer() {
    return (
        <footer id='footer'>
            <p>Contact me using</p>
            <ul className='social-links'>
                <li><a href="https://www.facebook.com/jemimah.mmboga/" rel='noreferrer' target='_blank'><img src={Facebook} alt='facebook-logo' width='20px'/>Facebook</a></li>
                <li><a href="https://github.com/mmbogajemimah" rel='noreferrer' target='_blank'><img src={Github} alt='github-logo' width='20px'/>Github</a></li>
                <li><a href="https://www.instagram.com/jemmy_green/" rel='noreferrer' target='_blank'><img src={Instagram} alt='instagram-logo' width='20px'/>Instagram</a></li>
                <li><a href="https://twitter.com/JemimahMmboga" rel='noreferrer' target='_blank'><img src={Twitter} alt='twitter-logo' width='20px'/>Twitter</a></li>
                <li><a href="https://www.linkedin.com/in/jemimah-mmboga-aab075187/" rel='noreferrer' target='_blank'><img src={Linkedin} alt='linkedin-logo' width='20px'/>Linkedin</a></li>
            </ul>
        </footer>
    )
}