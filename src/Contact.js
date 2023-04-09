import styled from "styled-components";
import React from "react";
import { Button } from "./styles/Button";

const Contact = () => {
  

  return <Wrapper>
    <h2 className="common-heading">Contact page</h2>
    <iframe
     src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d11785.725896237464!2d80.00668249482472!3d26.873338141942455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1679219636569!5m2!1sen!2sin"
      width="100%" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
    </iframe>
    <div className="container">
      <div className="contact-form">
       <form action="https://formspree.io/f/xnqybqpg"method="POST" className="contact-inputs">
        <input type="text" placeholder="username"name="username"required autoComplete="off"/>
        <input type="email"name="email"placeholder="Email"autoComplete="off"required />
        <textarea type="text"name="message"placeholder="Enter your message"autoComplete="off"required rows="10" cols="30"/>
        <Button type="submit"value="Send">Send</Button>
        </form> 
      </div>
    </div>
  </Wrapper>;
};
const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

export default Contact;
