import styled from 'styled-components';
import {NavLink}  from 'react-router-dom';
import {Button} from"../styles/Button";

const HeroSection = (props) => {
  return     <Wrapper>
        <div className='container'>
            <div className="grid grid-two-column">
                <div className="hero-section-data">
                    <p className="intro-data">
                     Welcom to
                    </p>
                    <h2>{props.myData}</h2>
                    <p>When shopping online, you will often find more details about a business's products than you would get in physical stores. Instead of speaking to one or two sales associates in person, you can peruse product descriptions, recommendations of similar products, and reviews from other shoppers online that may help you make a more informed purchasing decision.</p>
                    <NavLink to="/">
                        <Button>Show NoW</Button>
                    </NavLink>
                </div>
                <div className="hero-section-image">
                    <figure>
                        <img src="images/hero.jpg" alt="" />
                    </figure>
                </div>
            </div>
        </div>
    </Wrapper>

 
}
const Wrapper = styled.section`
  padding: 12rem 0;
  .container{
    width:60%;
  }
  .grid {
    display: grid;
    gap: 3rem;
  }
  .grid-two-column {
    grid-template-columns: repeat(2, 1fr);
  }
  img {
    width:100%;
    height:100%;
    min-width: 10rem;
    
  }
  .hero-section-data {
    
    p {
      margin: 2rem 0;
    }
    h1 {
      text-transform: capitalize;
      font-weight: bold;
    }
    .intro-data {
      margin-bottom: 0;
      color:#00ffff;
    }
  }
  .hero-section-image {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: left;
    align-items: center;
  }
  figure {
    position: relative;
    &::after {
      content: "";
      width: 70%;
      height: 70%;
      background-color: #00ffff;
      position: absolute;
      left: 50%;
      top: -5rem;
      z-index: -1;
    }
  }
  .img-style {
    width: 100%;
    height: auto;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .container{
        width:90%;
      }
    .grid {
      gap: 10rem;
      display:flex;
      flex-direction:column;
    }
    figure::after {
      content: "";
      width: 50%;
      height: 100%;
      left: 0;
      top: 10%;
      /* bottom: 10%; */
      background-color:#00ffff;
    }
  @media (max-width: ${({ theme }) => theme.media.tab}) {
    .container{
        width:90%;
      }
    .grid {
      gap: 10rem;
      display:flex;
      flex-direction:column;
    }
    figure::after {
      content: "";
      width: 50%;
      height: 100%;
      left: 0;
      top: 10%;
      /* bottom: 10%; */
      background-color: #00ffff;
    }
  }
`;
export default HeroSection;