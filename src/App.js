import Header from "./components/Header";
import Cart from "./components/Cart"
import MainSection from './components/MainSection';
import { useState } from "react";
import { useEffect } from "react";
import Payment from "./components/Payment";
import PaymentSuccess from "./components/PaymentSuccess"

function App() {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [itemState, setItemState] = useState("");
  const [stateValues, setStateValues] = useState({});
  const [isCartShown, setIsCartShown] = useState(false);
  const [isPaymentShown, setIsPaymentShown] = useState(false);
  const [totalCost, setTotalCost] = useState("0");
  const [CouponState, setCouponState] = useState("");
  const [currentCoupon, setCurrentCoupon] = useState("none");
  const [isPaymentDone, setIsPaymentDone] = useState(false);
  const [errors, setErrors] = useState({
    cardNumber: false,
    expDate: false,
    cvv: false,
    name: false
  });
  const [cardInfo, setCardInfo] = useState({
    cardNumber: "",
    expDate: "",
    cvv: "",
    name: ""
  });
  
  
  useEffect(() => {
    fetch("https://demo7478931.mockable.io/products")
      .then(res => res.json())
      .then(
        (result) => {
          setItems(result.products);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  
  const handleChange = (event, index) => {

    const currentObject = items[index];
    const currentStateValues = {...stateValues};
    currentStateValues[index] = event.target.value;
    
    setStateValues(currentStateValues);
  };

  const handleClick = (event, index) => {

    let cost = "0";
    const currentObject = items[index];
    if((stateValues[index] !== undefined) && (stateValues[index] !== "0")){
      cartItems.push({
        "name": currentObject.name,
        "quantity": stateValues[index],
        "price": currentObject.price,
        "id": currentObject.id
      })
      if(currentCoupon === "HAPPYBIRTHDAY"){
        let cost=0;
        for(let i=0; i<cartItems.length; i++){
          cost = cost + (((cartItems[i].price)/100)*cartItems[i].quantity);
        }
  
        setTotalCost((cost*0.8).toFixed(2));
      }
      else if(currentCoupon === "50OFF"){
        let cost=0;
        for(let i=0; i<cartItems.length; i++){
          cost = cost + (((cartItems[i].price)/100)*cartItems[i].quantity);
        }
  
        setTotalCost((cost*0.5).toFixed(2));
      }
      else if(currentCoupon === "ILIKEAPPLES"){
        let cost=0;
        for(let i=0; i<cartItems.length; i++){
          if(cartItems[i].id === "6feb4d0e-97d3-4502-ba98-15b72d638ce2"){
            cost = cost + ((((cartItems[i].price)*0.4)/100)*cartItems[i].quantity);
          }
          else{
            cost = cost + (((cartItems[i].price)/100)*cartItems[i].quantity);
          }
          
        }
  
        setTotalCost(cost.toFixed(2));
      }
      else{
        let cost=0;
        for(let i=0; i<cartItems.length; i++){
          cost = cost + (((cartItems[i].price)/100)*cartItems[i].quantity);
        }
  
        setTotalCost(cost.toFixed(2));
      }
    }
  };

  const handleCouponChange = event => {
    setCouponState(event.target.value);
  };

  const handleCouponClick = event => {

    setCurrentCoupon(CouponState);

    if(CouponState === "HAPPYBIRTHDAY"){
      let cost=0;
      for(let i=0; i<cartItems.length; i++){
        cost = cost + (((cartItems[i].price)/100)*cartItems[i].quantity);
      }

      setTotalCost((cost*0.8).toFixed(2));
    }
    else if(CouponState === "50OFF"){
      let cost=0;
      for(let i=0; i<cartItems.length; i++){
        cost = cost + (((cartItems[i].price)/100)*cartItems[i].quantity);
      }

      setTotalCost((cost*0.5).toFixed(2));
    }
    else if(CouponState === "ILIKEAPPLES"){
      let cost=0;
      for(let i=0; i<cartItems.length; i++){
        if(cartItems[i].id === "6feb4d0e-97d3-4502-ba98-15b72d638ce2"){
          cost = cost + ((((cartItems[i].price)*0.4)/100)*cartItems[i].quantity);
        }
        else{
          cost = cost + (((cartItems[i].price)/100)*cartItems[i].quantity);
        }
        
      }

      setTotalCost(cost.toFixed(2));
    }
  };

  const cartClick = () => {
    setIsPaymentShown(false);
    setIsCartShown(true);
    setIsPaymentDone(false);
    setErrors({
      ...errors,
      cardNumber: false,
      expDate: false,
      cvv: false,
      name: false
    });
    setCardInfo({
      ...cardInfo,
      cardNumber: "",
      expDate: "",
      cvv: "",
      name: ""
    })
    if(currentCoupon === "HAPPYBIRTHDAY"){
      let cost=0;
      for(let i=0; i<cartItems.length; i++){
        cost = cost + (((cartItems[i].price)/100)*cartItems[i].quantity);
      }

      setTotalCost((cost*0.8).toFixed(2));
    }
    else if(currentCoupon === "50OFF"){
      let cost=0;
      for(let i=0; i<cartItems.length; i++){
        cost = cost + (((cartItems[i].price)/100)*cartItems[i].quantity);
      }

      setTotalCost((cost*0.5).toFixed(2));
    }
    else if(currentCoupon === "ILIKEAPPLES"){
      let cost=0;
      for(let i=0; i<cartItems.length; i++){
        if(cartItems[i].id === "6feb4d0e-97d3-4502-ba98-15b72d638ce2"){
          cost = cost + ((((cartItems[i].price)*0.4)/100)*cartItems[i].quantity);
        }
        else{
          cost = cost + (((cartItems[i].price)/100)*cartItems[i].quantity);
        }
        
      }

      setTotalCost(cost.toFixed(2));
    }
    else{
      let cost=0;
      for(let i=0; i<cartItems.length; i++){
        cost = cost + (((cartItems[i].price)/100)*cartItems[i].quantity);
      }

      setTotalCost(cost.toFixed(2));
    }
  };

  const logoClick = () => {
    setIsPaymentDone(false);
    setIsCartShown(false);
    setIsPaymentShown(false);
    setErrors({
      ...errors,
      cardNumber: false,
      expDate: false,
      cvv: false,
      name: false
    });
    setCardInfo({
      ...cardInfo,
      cardNumber: "",
      expDate: "",
      cvv: "",
      name: ""
    })
  };

  const returnClick = () => {
    setIsPaymentDone(false);
    setIsCartShown(false);
    setIsPaymentShown(false);
    setCartItems([]);
    setTotalCost("0");
    setCurrentCoupon("none");
    setErrors({
      ...errors,
      cardNumber: false,
      expDate: false,
      cvv: false,
      name: false
    });
    setCardInfo({
      ...cardInfo,
      cardNumber: "",
      expDate: "",
      cvv: "",
      name: ""
    })
  };

  const paymentClick = () => {
    if(totalCost > 0){
      setErrors({
        ...errors,
        cardNumber: false,
        expDate: false,
        cvv: false,
        name: false
      });
      setCardInfo({
        ...cardInfo,
        cardNumber: "",
        expDate: "",
        cvv: "",
        name: ""
      })
      setIsCartShown(false);
      setIsPaymentShown(true);
    }
    
  };

  const handleRemoveClick = (event, index) => {

    
    const currentObject = cartItems[index];
    currentObject.quantity=0;
    if(currentCoupon === "HAPPYBIRTHDAY"){
      let cost=0;
      for(let i=0; i<cartItems.length; i++){
        cost = cost + (((cartItems[i].price)/100)*cartItems[i].quantity);
      }

      setTotalCost((cost*0.8).toFixed(2));
    }
    else if(currentCoupon === "50OFF"){
      let cost=0;
      for(let i=0; i<cartItems.length; i++){
        cost = cost + (((cartItems[i].price)/100)*cartItems[i].quantity);
      }

      setTotalCost((cost*0.5).toFixed(2));
    }
    else if(currentCoupon === "ILIKEAPPLES"){
      let cost=0;
      for(let i=0; i<cartItems.length; i++){
        if(cartItems[i].id === "6feb4d0e-97d3-4502-ba98-15b72d638ce2"){
          cost = cost + ((((cartItems[i].price)*0.4)/100)*cartItems[i].quantity);
        }
        else{
          cost = cost + (((cartItems[i].price)/100)*cartItems[i].quantity);
        }
        
      }

      setTotalCost(cost.toFixed(2));
    }
    else{
      let cost=0;
      for(let i=0; i<cartItems.length; i++){
        cost = cost + (((cartItems[i].price)/100)*cartItems[i].quantity);
      }

      setTotalCost(cost.toFixed(2));
    }
  };

  const handleCardChange = event => {
    if(event.target.value.match("^((?:[0-9]+ ?)+)$") !== null){
      setCardInfo({
        ...cardInfo,
        cardNumber: event.target.value
      });
    }
    else{
      setCardInfo({
        ...cardInfo,
        cardNumber: ""
      });
    }   
  };

  const handleNameChange = event => {
    if(event.target.value.match("^((?:[A-Za-z]+ ?){1,3})$")){
      setCardInfo({
        ...cardInfo,
        name: event.target.value
      });
    }
    else{
      setCardInfo({
        ...cardInfo,
        name: ""
      });
    }
  };

  const handleSecurityChange = event => {
    if(event.target.value.match("^[0-9]{3,4}$")){
      setCardInfo({
        ...cardInfo,
        cvv: event.target.value
      });
    }
    else{
      setCardInfo({
        ...cardInfo,
        cvv: ""
      });
    }
  };

  const handleDateChange = event => {
    var today, mm, yyyy, now;
        today = new Date();
        mm=today.getMonth()+1;
        yyyy=today.getFullYear();
        now = yyyy + "-" + mm;
    if(Date.parse(event.target.value) >= Date.parse(now)){
      setCardInfo({
        ...cardInfo,
        expDate: event.target.value
      });
    }
    else{
      setCardInfo({
        ...cardInfo,
        expDate: ""
      });
    }
    
  };

  const handlePayClick = event => {
    let dateError, nameError, cvvError, numberError = false;
    if(cardInfo.expDate !=="" && cardInfo.cardNumber !=="" && cardInfo.cvv !=="" && cardInfo.name !==""){
      setIsPaymentDone(true);
      setErrors({
        ...errors,
        cardNumber: false,
        expDate: false,
        cvv: false,
        name: false
      });
    }
    else{
      if(cardInfo.expDate ===""){
        dateError=true;
      }
      if(cardInfo.cardNumber ===""){
        numberError=true;
      }
      if(cardInfo.cvv ===""){
        cvvError=true;
      }
      if(cardInfo.name ===""){
        nameError=true;
      }
      setErrors({
        ...errors,
        cardNumber: numberError,
        expDate: dateError,
        cvv: cvvError,
        name: nameError
      })
    }
    

  }

  if(isPaymentDone === true){
    return (
      <div>
        <Header logoClick = {logoClick} cartClick={cartClick}/>
        <PaymentSuccess returnClick={returnClick}/>
      </div>
    );
  }
  else if(isCartShown === false && isPaymentShown === false){
    return (
      <div>
        <Header logoClick = {logoClick} cartClick={cartClick}/>
        <MainSection totalCost={totalCost} items={items} handleChange={handleChange} value={itemState} stateValues={stateValues} handleClick={handleClick}/>
      </div>
    );
  }
  else if(isCartShown === true && isPaymentShown === false){
    return (
      <div>
        <Header logoClick = {logoClick} cartClick={cartClick}/>
        <Cart paymentClick={paymentClick} handleRemoveClick={handleRemoveClick} currentCoupon={currentCoupon} cart={cartItems} totalCost={totalCost} handleCouponChange={handleCouponChange} handleCouponClick={handleCouponClick}/>
      </div>
    );
  }
  else{
    return (
      <div>
        <Header logoClick = {logoClick} cartClick={cartClick}/>
        <Payment errors={errors} handleDateChange={handleDateChange} handlePayClick={handlePayClick} handleCardChange={handleCardChange} handleNameChange={handleNameChange} handleSecurityChange={handleSecurityChange} totalCost={totalCost}/>
      </div>
    );
  }

  
}

export default App;
