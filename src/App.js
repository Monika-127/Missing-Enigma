
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
import {GetCustomer} from './Components/Admin_Module/GetCustomer';
import { Admin } from './Components/Admin';
import GetOrder from './Components/Admin_Module/GetOrder';
import GetSeller from './Components/Admin_Module/GetSeller';
import GetTotalOrders from './Components/Admin_Module/GetTotalOrders';
import HomeComp from './Components/Home/HomeComp';
const firebaseConfig = {
  apiKey: "AIzaSyBdUUhgtYyu_XXNnBwyCarRku2aOuS3F6Y",
  authDomain: "missing-enigma-final.firebaseapp.com",
  projectId: "missing-enigma-final",
  storageBucket: "missing-enigma-final.appspot.com",
  messagingSenderId: "296510192167",
  appId: "1:296510192167:web:c194aee1a7465304b9ac02",
  measurementId: "G-BRL5QFW18M"
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
            <Route path="/GetCustomer" component={GetCustomer}>
            <Header/>           
            <GetCustomer/>
            </Route>
            <Route path="/GetOrder" component={GetOrder}>
            <Header/>           
            <GetOrder/>
            </Route>
            <Route path="/GetSeller" component={GetSeller}>
            <Header/>           
            <GetSeller/>
            </Route>
            <Route path="/GetTotalOrders" component={GetTotalOrders}>
            <Header/>           
            <GetTotalOrders/>
            </Route>
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
            <Route path="/" component={HomeComp}>

              <Layout/>
            </Route>
          </Switch>
        </div>

      </BrowserRouter>
      
  </div>
  );
}

export default App;

