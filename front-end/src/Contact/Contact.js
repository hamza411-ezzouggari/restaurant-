/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import "./Contact.css";
import Navbar from 'react-bootstrap/Navbar';
import Logo from './Logo.png';
import decorationt from "./decorationt.png";
import { Map, GoogleApiWrapper,Marker } from 'google-maps-react';
import wood from "./wood2.jpg";
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import firebase from './firebase';
const mapStyles = {
    width: '70%',
    height: '100%',
    display: 'flex',
    margin:'28rem 0px 0px 19rem',
    };
    class Demo1 extends React.Component {
        constructor() {
            super();
            this.state = {
            Name: '',
            Email:'',
            Message:'',
            phone:'',
            hidden: false,
        };
        }
        handelNameChange=(e)=>{
            this.setState({Name:e.target.value})
        }
        handelEmailChange=(e)=>{
            this.setState({Email:e.target.value})
        }
        handelMessageChange=(e)=>{
            this.setState({Message:e.target.value})
        }
        handleClick = (e) =>{
            const Data ={
                Name: this.state.Name,
                Email: this.state.Email,
                Message:this.state.Message,
                phone:this.state.phone,
            }
            e.preventDefault();
            firebase.post('/marks.json', Data).then(response=>{
                console.log(response);
            })
            this.handleReset();
        }
        handleReset=()=>{
            Array.from(document.querySelectorAll("input")).forEach(
                input => (input.value = "")
            );
            Array.from(document.querySelectorAll("textarea")).forEach(
                textarea => (textarea.value = "")
            );
        }
    render(){
        return (
        <div className="page-contact">
                <img src={wood} alt="wood" className="wood2"/>
                <div className="nave2">
                        <Navbar className="Nave3" bg="light">
                    <div className="left">
                        <Navbar.Brand className='Brand' href='/'>MAIN</Navbar.Brand>
                        <Navbar.Brand className='Brand' href='/Menu'>MENU</Navbar.Brand>
                        <Navbar.Brand className='Brand' href='/Gallery'>GALLERY</Navbar.Brand>
                    </div>
                    <div className="ho">
                        <img src={Logo} alt='Logo' className="Log"/>
                    </div>
                    <div className="right">
                        <Navbar.Brand className='Brand' href='/Event'>EVENTS</Navbar.Brand>
                        <Navbar.Brand className='Brand' href='/CONTACT'>CONTACT</Navbar.Brand>
                        <Navbar.Brand className='Brand' href='https://www.opentable.ca/start/home'>RESERVATION</Navbar.Brand>
                    </div>
                        </Navbar>
                </div>
                <div className="Contact">
                    <div className="information-local">
                        <h2 className="h2">+38 099 23 30 547</h2>
                        <h3 className="h2">hamzatari200@gmail.com</h3>
                        <img src={decorationt} alt="decorationt" className="dec"/>
                        <h2 className="h2">Kharkiv</h2>
                        <h3 className="h2">st. Bakulina Street ,16</h3>
                        <img src={decorationt} alt="decorationt" className="de"/>
                    </div>
                    <div className="information">
                        <h1 className="h2">CONTACT INFORMATION</h1>
                        <div className="decoration">
                            <img src={decorationt} alt="decorationt" className="decoration2"/>
                        </div>
                    </div>
                    <div className="mapx">
                    <Map 
                        google={this.props.google}
                        zoom={14}
                        style={mapStyles}
                        className="Maps"
                        initialCenter={{ lat: 50.016273399999996, lng: 36.2304088}}
                    >
                        <Marker position={{ lat: 50.016273399999996, lng: 36.2304088}} />
                    </Map>
                    </div>
                </div>
                <div className="msg">
                        <img src={decorationt} alt="decoration" className="decorationt4" />
                    <div className="Email-us">
                        <h1 className="h2">EMAIL US</h1>
                    </div> 
                </div>
                <div className="Message">
                    <div className="styled-input1">
                        <form>
                            <div className="all-parti">
                            <div className='part1'> 
                            <div className="styled-input">
                                <PhoneInput
                                defaultCountry="UA"
                                required = {true}
                                autoFocus = {true} 
                                value={this.state.phone}
                                onChange={phone => this.setState({ phone })}
                                refs='phone'
                                />
                                <label>Phone</label>
                                <span></span>
                            </div>
                            <div className="styled-input">
                                <input type="text" required value={this.state.name} refs='Name' onChange={this.handelNameChange}/>
                                <label>Name</label>
                                <span></span>
                            </div>
                            <div className="styled-input">
                                <input type="email" required value={this.state.email} refs='Email' onChange={this.handelEmailChange}/>
                                <label>Email</label>
                                <span></span>
                            </div>
                            </div>
                            <div className="part2">
                            <div className="styled-input wide">
                                <textarea required value={this.state.message} refs='Message' onChange={this.handelMessageChange}></textarea>
                                <label>Message</label>
                                <span></span>
                            </div>
                            <div className="button">
                                <section className="container">
                                    <button data-hover="thank you" onClick={this.handleClick} ><div>submit !</div></button>
                                </section>
                            </div>
                            </div>
                            </div>
                        </form>
                    </div>        
                </div>
        </div>
        )
    }
}
export default  GoogleApiWrapper({
    apiKey: 'AIzaSyCY1Czr77w_zpCS63vrZRAanWXkaTfBUQU'
  })(Demo1);
