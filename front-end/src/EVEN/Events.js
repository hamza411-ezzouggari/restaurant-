/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './Events.css';
import Navbar from 'react-bootstrap/Navbar';
import logo from './Logo.png';
import wood from './Light-Wood-Background-Texture-1.jpeg';
import wine from './wine.jpg';
import openmic from './openmic.jpg';
function Events(){
    return (
        <div className="Events">
            <div className="navbar2">
                <img src={wood} alt="wood" className="wood"/>
                    <Navbar className="Navbar2" bg="light">
                        <div className="left">
                            <Navbar.Brand className='Brand' href='/'>MAIN</Navbar.Brand>
                            <Navbar.Brand className='Brand' href='/Menu'>MENU</Navbar.Brand>
                            <Navbar.Brand className='Brand' href='/Gallery'>GALLERY</Navbar.Brand>
                        </div>
                        <div className="Logonavp">
                            <img src={logo} alt='Logo' className="Log"/>
                        </div>
                        <div className="right">
                            <Navbar.Brand className='Brand' href='/Event'>EVENTS</Navbar.Brand>
                            <Navbar.Brand className='Brand' href='/CONTACT'>CONTACT</Navbar.Brand>
                            <Navbar.Brand className='Brand' href='https://www.opentable.ca/start/home'>RESERVATION</Navbar.Brand>
                        </div>
                    </Navbar>
                    <div className="liquid">
                    </div>
            </div>
            <div className="liquidSwipe">
                <div className='win'>
                    <h1 className="h1">WINE TASTINGS</h1>
                    <img src={wine} alt="win" className="img-win" />
                    <div className='bg-text'>
                        <p>People will turn out in droves for wine tastings. You don’t even have to close the restaurant as a special occasion. simply advertise good deals on wines during specific nights or make it easy for customers to sample multiple bottles at a discounted rate.</p>
                    </div>
                </div>
                <div className='openmic'>
                    <h1 className="h1">OPEN MIC NIGHT</h1>
                    <img src={openmic} alt="openmic" className="img-openmic" />
                    <div className='bg'>
                        <p>Don’t just let the professionals run the show, consider having an open mic night. Anyone in your local area that’s looking to get practice and more exposure would jump at the opportunity to play at your restaurant. Whether it’s music, comedy or poetry, your customers will enjoy the authenticity of the local talent.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Events
