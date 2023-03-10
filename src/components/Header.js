import React from 'react';
import profilePhoto from '../images/profile.png';
import bannerPhoto from '../images/banner.jpeg';

export default function Header() {
    return (
        <>
            <nav className='navigation-bar'>
                <img src={profilePhoto} alt='profile' width='40px'/>
                <ul className='nav-list'>
                    <li><a href='#about'>About</a></li>
                    <li><a href='#intrests'>Interests</a></li>
                    <li><a href='#footer'>Contact</a></li>
                </ul>
            </nav>
            <img src={bannerPhoto} alt='banner' width='300px' className='banner-image' />
        </>
    )
}
