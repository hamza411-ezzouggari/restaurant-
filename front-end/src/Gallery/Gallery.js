import React from 'react';
import './Gallery.css';
import Navbar from 'react-bootstrap/Navbar';
import Logo from './Logo.png';
import Gallery from 'react-photo-gallery';
import img1 from './img/img1.jpg';
import img2 from './img/img2.jpg';
import img3 from './img/img3.jpg';
import img4 from './img/img4.jpg';
import img5 from './img/img5.jpg';
import img6 from './img/img6.jpg';
import img7 from './img/img7.jpg';
import img8 from './img/img8.jpg';
import img9 from './img/img9.jpg';
import img10 from './img/img10.jpg';
import img11 from './img/img11.jpg';
import img12 from './img/img12.jpg';
import img13 from './img/img13.jpg';
import img14 from './img/img14.jpg';
import img15 from './img/img15.jpg';
import img16 from './img/img16.jpg';
import img17 from './img/img17.jpg';
import img18 from './img/img18.jpg';
import img19 from './img/img19.jpg';
import img20 from './img/img20.jpg';
import img21 from './img/img21.jpeg';
import img22 from './img/img22.jpeg';
import img23 from './img/img23.jpeg';
import img24 from './img/img24.jpeg';
import img25 from './img/img25.jpg';
import img26 from './img/img26.jpeg';
import img27 from './img/img27.jpeg';
import wood from './Light-Wood-Background-Texture-1.jpg';
function  Galleryi (){
        const PHOTO_SET = [
            {
                src: img1,
                width: 4,
                height: 5,
                className:"PHOTO_SET",
            },
            {
                src: img2,
                width: 3,
                height: 4,
                className:"PHOTO_SET",
            },
            {
                className:"PHOTO_SET",
                src: img3,
                width: 3,
                height: 3,
            },
            {
                className:"PHOTO_SET",
                src: img4,
                width: 2,
                height: 3,
            },
            {
                src: img5,
                className:"PHOTO_SET",
                width: 7,
                height: 8,
            },
            {
                src: img6,
                width: 5,
                height: 4,
                className:"PHOTO_SET",
            },
            {
                src: img7,
                className:"PHOTO_SET",
                width: 4,
                height: 3,
            },
            {
                src: img8,
                width: 4,
                className:"PHOTO_SET",
                height: 3,
            },
            {
                src: img9,
                className:"PHOTO_SET",
                width: 3,
                height: 3,
            },
            {
                src: img10,
                className:"PHOTO_SET",
                width: 3,
                height: 3,
            },
            {
                src: img11,
                width: 4,
                className:"PHOTO_SET",
                height: 5,
            },
            {
                src: img12,
                width: 4,
                className:"PHOTO_SET",
                height: 4,
            },
            {
                src: img21,
                width: 4,
                className:"PHOTO_SET",
                height: 5,
            },
            {
                src: img13,
                width: 3,
                className:"PHOTO_SET",
                height: 3,
            },
            {
                src: img24,
                width: 4,
                className:"PHOTO_SET",
                height: 5,
            },
            {
                src: img14,
                width: 4,
                className:"PHOTO_SET",
                height: 3,
            },
            {
                src: img22,
                width: 4,
                height: 5,
                className:"PHOTO_SET",
            },
            {
                src: img15,
                width: 4,
                className:"PHOTO_SET",
                height: 4,
            },
            {
                src: img23,
                width: 4,
                height: 5,
                className:"PHOTO_SET",
            },
            {
                src: img16,
                width: 4,
                height: 7,
                className:"PHOTO_SET",
            },
            {
                src: img17,
                width: 4,
                className:"PHOTO_SET",
                height: 7,
            },
            {
                src: img27,
                width: 4,
                className:"PHOTO_SET",
                height: 5,
            },
            {
                src: img18,
                width: 4,
                className:"PHOTO_SET",
                height: 7,
            },
            {
                src: img25,
                width: 4,
                className:"PHOTO_SET",
                height: 5,
            },
            {
                src: img19,
                width: 4,
                height: 6,
                className:"PHOTO_SET",
            },
            {
                src: img20,
                width: 4,
                height: 3,
                className:"PHOTO_SET",
            },
            {
                src: img26,
                width: 4,
                className:"PHOTO_SET",
                height: 5,
            },
          ];
        return (
            <div className="Galleryi">
                <div className="navbar2">
                    <Navbar className="Navbar1" bg="light">
                        <div className="left">
                            <Navbar.Brand className='Brand' href='/'>MAIN</Navbar.Brand>
                            <Navbar.Brand className='Brand' href='/Menu'>MENU</Navbar.Brand>
                            <Navbar.Brand className='Brand' href='/Gallery'>GALLERY</Navbar.Brand>
                        </div>
                        <div className="Logonavp">
                            <img src={Logo} alt='Logo' className="Logonav"/>
                        </div>
                        <div className="right">
                            <Navbar.Brand className='Brand' href='/Event'>EVENTS</Navbar.Brand>
                            <Navbar.Brand className='Brand' href='/Contact'>CONTACT</Navbar.Brand>
                            <Navbar.Brand className='Brand' href='https://www.opentable.ca/start/home'>RESERVATION</Navbar.Brand>
                        </div>
                    </Navbar>
                </div>
                <div className="PHOTOx">
                    <div className="PHOTO_SET2">
                        <Gallery className="photo-gal" photos={PHOTO_SET} />
                    </div>
                </div>  
                <div className='wood-background'> 
                    <img src={wood} alt='wood' className="img-wood" />
                </div> 
            </div>
        )
      }
export default Galleryi
