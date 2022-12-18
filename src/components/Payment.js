import React from "react";

export default function Payment(props){

    const disableDates = () => {
        var today, mm, yyyy;
        today = new Date();
        mm=today.getMonth()+1;
        yyyy=today.getFullYear();
        return  yyyy + "-" + mm;
        
    };

    return(
        <div className="mainSectionDiv">
            <div className="paymentDiv">
                <div className="paymentItems">
                    <div className="costDiv">
                        <p>{`Total cost:`}</p>
                        <p>{`${props.totalCost}€`}</p>
                    </div>
                    <input type="text" className="creditCard" placeholder="Card Number" onChange={props.handleCardChange}></input>
                    <div>{
                        props.errors.cardNumber === true && <p className="error">Enter a valid card number</p>
                        }</div>
                    <input type="text" className="nameOnCard" placeholder="Name on Card" onChange={props.handleNameChange}></input>
                    <div>{
                        props.errors.name === true && <p className="error">Enter a valid name</p>
                        }</div>
                    <div className="cardSmall">
                        <div>
                        <input type="month" min={disableDates()} className="expCard" placeholder="Expiration Date" onChange={props.handleDateChange}></input>
                         <div>{
                        props.errors.expDate === true && <p className="errorLast">Enter a valid date</p>
                        }</div>   
                        </div>
                        <div>
                        <input type="text" maxLength="4" className="securityCard" placeholder="Security Code" onChange={props.handleSecurityChange}></input>
                        <div>{
                        props.errors.cvv === true && <p className="errorLast">Enter a valid cvv</p>
                        }</div>
                        </div> 
                        
                    </div>
                    <div className="confirmButton" onClick={props.handlePayClick}>Confirm payment</div>
                </div>
            </div>
        </div>
    )
}