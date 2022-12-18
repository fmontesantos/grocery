import React from "react";
import Logo from "../images/LogoLettersBig2.png"
import Cart from "../images/basket.png";

export default function Header(props){
    return(
        <div className="headerDiv">
            <img src={Logo} className = "logo" onClick={props.logoClick}/>
            <div className="cartButton" onClick={props.cartClick}>
                My Cart
                <img src={Cart} className="buyImage"></img>
            </div>
        </div>
    )
}