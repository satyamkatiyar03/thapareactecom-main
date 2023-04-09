import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../styles/Button';
import {FaDiscord,FaInstagram,FaYoutube} from "react-icons/fa";

const Footer = () => {
  return (
    <Wrapper>
        <section className="contact-short">
            <div className="grid grid-two-column">
                <div>
                    <h3>Ready to get Started</h3>
                    <h3>Talk to us today</h3>
                </div>
                <div>
                    <Button>
                        <NavLink to="/contact">
                            Get Started
                        </NavLink>
                    </Button>
                </div>
            </div>
        </section>
        <footer>
            <div className="container grid grid-four-column">
                <div className="footer-about">
                    <h3>CoolDev Thechnical</h3>
                    <p>lorem ipsum dolor, sit </p>
                </div>
                <div className="footer-subscribe">
                    <h3>Subscribe to get important updates</h3>
                    <from action="#">
                        <input type="email"placeholder='Your Email'/>
                        <input type="submit"value="Send"/>
                    </from>
                </div>
                <div className="footer-social">
                        <h3>Follow us</h3>
                        <div className="footer-social--icons">
                            <div>
                                <a href='/'target="_blank"><FaDiscord className="icons"/></a>
                                
                            </div>
                            <div>
                                <a href='/'target="_blank"><FaInstagram className="icons"/></a>
                                
                            </div>
                            <div>
                                <a href='/'target="_blank"><FaYoutube className="icons"/></a>
                                
                            </div>
                        </div>
                </div>
                <div className="footer-contact">
                    <h3>Call Us</h3>
                    <a href="tel:6388711107">
                        <h3>+91 6388711107</h3>
                    </a>
                </div>
            </div>
            <div className="footer-bottom--section">
                <hr />
                <div className="container grid grid-three-column">
                   <p>@{new Date().getFullYear()} CoolDev. All Rights Reserved</p> 
                   <div>
                    <p>Privacy Policy</p>
                    <p>Terms & Conditions</p>
                   </div>
                   <div><h3>Developed By Satyam Katiyar</h3></div>
                </div>
            </div>
        </footer>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  .iSIFGq {
    margin: 0;
  }
  .grid {
    display: grid;
    gap: 9rem;
  }
  
  .grid-two-column {
    grid-template-columns: repeat(2, 1fr);
  }
  .grid-four-column{
    grid-template-columns: 1fr 1.2fr .5fr .8fr ;
 }
  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);
    .grid div:last-child {
      justify-self: end;
      align-self: center;
    }
  }
  footer {
    padding: 14rem 0 9rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};
    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
    }
    p {
      color: ${({ theme }) => theme.colors.white};
    }
    .footer-social--icons {
      display:flex;
      gap: 2rem;
      div {
        width:5rem;
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.white};
        .icons {
          color: ${({ theme }) => theme.colors.white};
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
        }
      }
    }
  }
  .footer-bottom--section {
    padding-top: 9rem;
    hr {
    
      margin-bottom: 2rem;
      color: ${({ theme }) => theme.colors.hr};
      height: 0.1px;
    }
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      max-width: 80vw;
      margin: 4.8rem auto;
      transform: translateY(0%);
      text-align: center;
      .grid div:last-child {
        justify-self: center;
      }
    }
    footer {
      padding: 9rem 0 9rem 0;
    }
    .footer-bottom--section {
      padding-top: 4.8rem;
    }
    .grid{
        gap: 3.2rem;
      }
            .grid-two-column , .grid-three-column, .grid-four-column{
                grid-template-columns: 1fr;
              }
          }
  }
  
`;

export default Footer