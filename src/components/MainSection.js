import React from "react";
import Cart from "../images/basket.png";

export default function MainSection(props){
    return(
        <div className="mainSectionDiv">
            <div>
                {props.items.map((item, index) => (
                        <div key={index} className = "mainCartItems">
                            <h3 className="mainTitle">{`${item.name}`}</h3>
                            <div className="buyThings">
                                <p>{`${item.price/100} €/kg`}</p>
                                <input 
                                    type="text" 
                                    className="buyText"
                                    onChange={(event) => props.handleChange(event, index)}
                                    value={props.stateValues[index] || ''}
                                />
                                <div className="buyButton" onClick={(event) => props.handleClick(event, index)}>
                                    <img src={Cart} className="buyImage"></img>
                                </div>
                            </div>
                        </div>
                ))}
            </div>
            <div className="cartOptions">
                <div className="costMainDiv">
                            <p>{"Total cost: "}</p>
                            <p>{`${props.totalCost}€`}</p>
                </div>
            </div>
        </div>
        
    )
}