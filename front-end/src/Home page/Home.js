
/* eslint-disable no-unused-vars */
import React from 'react';
import restaurant from './resto 1.jpg';
import restaurant1 from './resto 2.jpg';
import restaurant2 from './resto 3.jpg';
import Logo from './Logo.png';
import './Carouse.css';
import AwesomeSliderStyles from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import facebook from './facebook.png';
import instegram from './instegram.png';
import twitter from './twitter.png';
import youtube from './youtube.png';
import Navbar from 'react-bootstrap/Navbar';
import  'react-router-dom';
class Home extends React.Component {
  youtube(event){
    event.preventDefault();
    window.location.href = "https://www.youtube.com";
  };
  facebook(event){
    event.preventDefault();
    window.location.href = "https://www.facebook.com";
  };
  instegram(event){
    event.preventDefault();
    window.location.href = "https://www.instagram.com";
  };
  twitter(event){
    event.preventDefault();
    window.location.href = "https://twitter.com";
  };
  
  render(){
    const AutoplaySlider = withAutoplay(AwesomeSliderStyles);
      return (
        //center//
        <div className='AutoplaySlider-center'>
          <AutoplaySlider
              className='AutoplaySlider'
              play={true}
              cancelOnInteraction={false} 
              interval={10000}
              bullets={false}
              organicArrows={true}
          >
              <div data-src={restaurant2} />
              <div data-src={restaurant1} />
              <div data-src={ restaurant} />
          </AutoplaySlider> 
            <div className="below">
              <h1 className="about">
              
              </h1>
            </div> 
            <div className='footer'>
              <img src={Logo} alt='Logo' className="Logo2"/> 
                <div className="SocialIcon">
                  <img src={facebook} alt='facebook' onClick={this.facebook} className="face"/>
                  <img src={instegram} alt='instegram' onClick={this.instegram} className="face"/>
                  <img src={twitter} alt='twitter' onClick={this.twitter} className="face" />
                  <img src={youtube} alt='youtube' onClick={this.youtube} className="face" />
                </div>
                <div className="text">
                  <div className="sign">
                    <span className="fast-flicker">U</span>weigen<span class="flicker">C</span>hef
                  </div>
                </div>  
            </div>
            <div className="nav">
            <Navbar className="Navbar" bg="light">
            <div className="left">
            <Navbar.Brand className='Brand' href='/'>MAIN</Navbar.Brand>
            <Navbar.Brand className='Brand' href='/Menu'>MENU</Navbar.Brand>
            <Navbar.Brand className='Brand' href='/GALLERY'>GALLERY</Navbar.Brand>
            </div>
            <div className="right">
            <Navbar.Brand className='Brand' href='/Event'>EVENTS</Navbar.Brand>
            <Navbar.Brand className='Brand' href='/CONTACT'>CONTACT</Navbar.Brand>
            <Navbar.Brand className='Brand' href='https://www.opentable.ca/start/home'>RESERVATION</Navbar.Brand>
            </div>
            </Navbar>
            <div className="hovereffect">
            <img src={Logo} alt='Logo' className="Logo"/>
            </div>
            </div>
        </div>
      )
    }
    }
export default Home
