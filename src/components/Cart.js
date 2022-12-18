import React from "react";
import CartIMG from "../images/basket.png";

export default function Cart(props){

    //console.log("This is cart component and I am recieveing " + props.cart)

    return(
        <div className="CartDiv">
            <div>
                {props.cart.map((item, index) => (
                    <div>
                        {item.quantity !== 0 && <div key={index} className = "mainItems">
                            <h3 className="mainTitle">{`${item.name}`}</h3>
                            
                            <div className="buyThings">
                                <p className="cartQuantity">{`${item.quantity}kg`}</p>
                                <p className="cartPrice">{`${((item.price/100)*item.quantity).toFixed(2)}€`}</p>
                                <div className="removeButton" onClick={(event) => props.handleRemoveClick(event, index)}>
                                    <img src={CartIMG} className="buyImage"></img>
                                </div>
                            </div>
                        </div>}
                        
                    </div>
                ))}
                
            </div>
            <div className="cartOptions">
                    <div>
                        <div className="costDiv">
                            <p>{`Total cost:`}</p>
                            <p>{`${props.totalCost}€`}</p>
                        </div>
                        <div className="paymentButton" onClick={props.paymentClick}>Continue to payment</div>
                        <div className="couponDiv">
                            <input type="text" className="couponText" placeholder="Insert a coupn" onChange={props.handleCouponChange}></input>
                            <div className="couponButton" onClick={props.handleCouponClick}>Apply</div>
                        </div>
                        {
                            props.currentCoupon !== "none" && <div>{`Current Coupon: ${props.currentCoupon}`}</div>
                        }
                        
                    </div>
                </div>
        </div>
    )
}