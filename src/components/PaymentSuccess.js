import React from "react";

export default function PaymentSuccess(props){



    return(
        <div className="mainSectionDiv">
            <div className="paymentDiv">
            <div className="paymentItems">
                    <div className="costDiv">
                        <p>Payment Successful!</p>
                    </div>
                    <div className="returnButton" onClick={props.returnClick}>Return to main page!</div>
            </div>
            </div>
        </div>
    )
}