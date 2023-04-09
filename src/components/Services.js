import React from 'react'
import styled from 'styled-components'
import {TbTruckDelivery} from "react-icons/tb";
import {MdSecurity} from "react-icons/md";
import {GiReceiveMoney} from "react-icons/gi";
import {RiSecurePaymentLine} from "react-icons/ri";

const Services = () => {
  return (
    <Wrapper>
        <div className="container">
            <div className="grid grid-three-column">
                <div className="services1">
                    <TbTruckDelivery className="icon"/>
                    <h3>Super Fast and Free Delivery</h3>
                </div>                
                <div className="services2">
                    <div className="services-col-1">
                        <MdSecurity className="icon"/>
                        <h3>Non-contact Shipping</h3>
                    </div>
                    <div className="services-col-2">
                        <GiReceiveMoney className="icon"/>
                        <h3>Money-back Guaranteed</h3>
                    </div>
                </div>                
                <div className="services1">
                  <RiSecurePaymentLine className="icon"/>
                  <h3>Super Secure Payment System</h3>
                </div>                
            </div>
        </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
.icon, .icon{
  font-size:2.5rem;
  color:#00ffff;
}
.container{
    width:100%;
    display:flex;
    justify-content:center;
    margin-top:10rem ;
}
.grid {
    display: grid;
    gap: 1rem;
  }
  .grid-three-column {
    grid-template-columns: repeat(3, 1fr);
  }
  .services1{
    widht:100%;
    height:20rem;
    background-color:${({theme})=>theme.colors.bg};
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    padding:0 10%;
  }
  .services2 .services-col-1{
    widht:100%;
    height:9.5rem;
    background-color:${({theme})=>theme.colors.bg};
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    padding:0 10%;
    margin-bottom:1rem;
  }
  .services2 .services-col-2{
    widht:100%;
    height:9.5rem;
    background-color:${({theme})=>theme.colors.bg};
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    padding:0 10%;
    margin-top:1rem
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}){
    .grid{
      width:100%;
      display:flex;
      justify-content:center;
      flex-direction:column;
    }
  }
`;

export default Services