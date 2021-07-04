import React, { useState } from "react";
import { Col, Container, Row } from "reactstrap"
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import "./App.css"
import { toast, ToastContainer, } from "react-toastify";
import BuyPage from "./Components/BuyPage";
import Cart from "./Components/Cart";
import Header from "./Components/Header";



function App() {
  const [cartItem, setCartItem] = useState([]);

  const addInCart = item => {
    const isAlreadyAdded = cartItem.findIndex(function(array) {
      return array.id === item.id;
    });

    if (isAlreadyAdded !== -1) {
      toast("already added in cart", {
        type: "error"
      });
    return;
    }

    setCartItem([...cartItem, item]);
  };

  const buyNow = () => {
    setCartItem([]);

    toast("Purchase Complete THANKS to visit us..", {
      type: "success"
    });
  };

  const removeItem = item => {
    setCartItem(cartItem.filter(singleItem => singleItem.id !== item.id));
  };

  return (
    <Container fluid className="app">
    <div>
    <h1 className="text-center" style={{color:"#AE45FF"}}>Shopping cart</h1>
    </div>
    <hr />
    <ToastContainer />
    <Row>
    <Col md={8}>
    <BuyPage addInCart={addInCart} />
    </Col>
    <Col md={4}>
    <Cart cartItem={cartItem} removeItem={removeItem} buyNow={buyNow} />
    </Col>
    </Row>
    <br/>

    <Container fluid tag="footer" className="text-center  text-white bg-0 p-3" style={{backgroundColor:"#1E1427"}}>
    ShoppingApp@Copyright
</Container>
    </Container>
  );
}

export default App;
