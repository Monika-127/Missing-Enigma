
// import {BrowserRouter, Route, Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './Components/Header'
// import {NavBar} from './Components/NavBar'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
//import { Container } from 'react-bootstrap'
//import { BrowserRouter as Router } from 'react-router-dom'
import {Layout} from './Components/Layout';
import Login from './Components/Login';
import Checkout from './Components/Cart';
import {Sell} from './Components/Sell';
import { Footer } from './Components/Footer';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import { Navigation } from './Components/Styling/Navigation';
import React from 'react';
import { initializeApp } from "firebase/app";
//import { BrowserRouter, Switch, Route} from 'react-router-dom';
//import Login from './component/Login';
import Signup from './Components/Signup';
import proceedToCheckout from './Components/ProceedToCheckout';
import {Order} from './Components/Order'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import {useEffect} from 'react';
import { useStateValue } from './Components/StateProvider';
import { Admin } from './Components/Admin';
const firebaseConfig = {
  apiKey: "AIzaSyA1jzxYWJy-QV-7ihr91ZsrVBUb1HqxHvA",
  authDomain: "missingenigma-fd8c0.firebaseapp.com",
  projectId: "missingenigma-fd8c0",
  storageBucket: "missingenigma-fd8c0.appspot.com",
  messagingSenderId: "145996697946",
  appId: "1:145996697946:web:e86e64787bdb3717bf2363",
  measurementId: "G-CLVPET2GRS"
};
initializeApp(firebaseConfig);

function App() {
  const [{user}, dispatch] = useStateValue();
  const auth=getAuth();

  useEffect (() =>{
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if(authUser){

        dispatch({
          type: "SET_USER",
          user: authUser,
        });

      }
      else{
        dispatch({
          type:"SET_USER",
          user: null,
        });
      }
    });

    return () =>{
      unsubscribe();
    };

  }, []);
  console.log('User Is', user);
  return (
    <div>
      <BrowserRouter>
      {/* <Route path="/" component={}/> */}
        {/* <Header/>
        <NavBar/> */}
        <div className="app">
          <Switch>
            {/* <Route path="/checkout">
              <Header/>
              <h1>Hey this is checkout</h1>
            </Route> */}
            <Route path="/login" component={Login}>
            </Route>
            <Route path="/signup" component={Signup}/>
            <Route path="/Admin" component={Admin}>
              <Header/>
              <Admin/>
            </Route>
            <Route path="/ProceedToCheckout" component={proceedToCheckout}/>
            <Route path="/Order" component={Order}/>
            <Route path="/Cart"> 
            {/* component={Cart}> */}
              <Header/>
              {/* <Cart/> */}
              <Checkout/>
             
            </Route>
            <Route path="/Sell" component={Sell}>
              <Header/>
              <Sell/>
            </Route>
            <Route path="/">
              <Layout/>
            </Route>
          </Switch>
        </div>

      </BrowserRouter>
      
  </div>
  );
}

export default App;

