import React from 'react';
import HTMLFlipBook from "react-pageflip";
import './Menu.css';
import Img from './wood.jpg';
import Logo from './Logo.png';
import bar from "./bar.png";
import ches from "./Chefs.jpg";
import Ches1 from "./Chefs1.jpg";
import pizza from "./pizza.jpg";
import piza1 from "./piza1.jpg";
import grills from "./grills.jpg";
import grills1 from "./grills1.jpg";
import salad from "./salad.jpg";
import salad1 from "./salad1.jpg";
import Breakfast from "./Breakfast.jpg";
import Breakfast1 from "./Breakfast1.jpg";
import dessert1 from './dessert1.jpg';
import dessert from "./dessert.jpg";
function Menu() {
    return (
        <div className="menu">
            <img src={Img} alt='wood' className="wood"/>
            <div className="HTMLFlipBook1">
            <HTMLFlipBook className="HTMLFlipBook2" width={500} height={850}  showCover={true} >
                <div className="demoPage">
                    <div className="img">
                        <img src={Logo} alt='Logo' className="Logo-book"/>
                        <div class="dark fire">
                            <h1 class="Blazing" contenteditable="true">Menu</h1>
                        </div>
                        <div className="BAR">
                        <img src={bar} alt='bar' className="bar"/>
                        </div>
                    </div>
                </div>
                <div className="demoPage">
                    <img src={ches} alt='Logo' className="ches"/>
                </div>
                <div className="demoPage">
                    <img src={Ches1} alt='Logo' className="ches"/>
                </div>
                <div className="demoPage">
                    <img src={pizza} alt='Logo' className="ches"/>
                </div>
                <div className="demoPage">
                    <img src={piza1} alt='Logo' className="ches"/>
                </div>
                <div className="demoPage">
                    <img src={grills} alt='Logo' className="ches"/>
                </div>
                <div className="demoPage">
                    <img src={grills1} alt='Logo' className="ches"/>
                </div>
                <div className="demoPage">
                    <img src={salad} alt='Logo' className="ches"/>
                </div>
                <div className="demoPage">
                    <img src={salad1} alt='Logo' className="ches"/>
                </div>
                <div className="demoPage">
                    <img src={Breakfast} alt='Logo' className="ches"/>
                </div>
                <div className="demoPage">
                    <img src={Breakfast1} alt='Logo' className="ches"/>
                </div>
                <div className="demoPage">
                    <img src={dessert1} alt='Logo' className="ches"/>
                </div>
                <div className="demoPage">
                    <img src={dessert} alt='Logo' className="ches"/>
                </div>
                <div className="demoPage">
                    <div className="last-page">
                        <img src={Logo} alt='Logo' className="Logo-book"/>
                    </div>
                    <div className="nave">
                    <nav>
                        <ul >
                            <li>
                            <a href='/'>
                            MAIN
                            <span></span><span></span><span></span><span></span>
                            </a>
                            </li>
                            <li>
                            <a href='/Menu'>
                            MENU
                            <span></span><span></span><span></span><span></span>
                            </a>
                            </li>
                            <li>
                            <a href='/GALLERY'>
                            GALLERY
                            <span></span><span></span><span></span><span></span>
                            </a>
                            </li>
                            <li>
                            <a href='/Event'>    
                            EVENTS
                            <span></span><span></span><span></span><span></span>
                            </a>
                            </li>
                            <li>
                            <a href='/Contact'>   
                            CONTACT
                            <span></span><span></span><span></span><span></span>
                            </a>
                            </li>
                            <li>
                            <a href='https://www.opentable.ca/start/home'>
                            RESERVATION
                            <span></span><span></span><span></span><span></span>
                            </a>
                            </li>
                        </ul>
                        </nav>
                    </div>
                </div>    
            </HTMLFlipBook>
            </div>
        </div>    
    )
}

export default Menu
