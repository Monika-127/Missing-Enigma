import React from "react";
import {Link,Switch,Route} from 'react-router-dom';
import { Nav } from 'react-bootstrap';
//import {Customers} from './Customers';
import './Styling/Link.css'
import axios from "axios";
import data from "./Home/data";
import 'bootstrap/dist/css/bootstrap.min.css';
import {GetCustomer} from "./Admin_Module/GetCustomer";
import GetOrder from "./Admin_Module/GetOrder";
import GetSeller from "./Admin_Module/GetSeller";
import GetTotalOrders from "./Admin_Module/GetTotalOrders"
export class Admin extends React.Component{
  constructor(){
      super();
     
   
  }
  
  
  

    render(){
        
   return <div>
        <div class="btn-group text-center">
       
          <Nav.Link as={Link} to={'/GetCustomer'} className="btn btn-success">GEt All Customer</Nav.Link>
          <Nav.Link as={Link} to={'/GetOrder'} className="btn btn-success ">GEt All Order</Nav.Link>
          <Nav.Link as={Link} to={'/GetSeller'} className="btn btn-success ">GEt All Seller</Nav.Link>
          <Nav.Link as={Link} to={'/GetTotalOrders'} className="btn btn-success ">GEt Total Orders</Nav.Link>
         
        

          </div>


        
    
    
   
           

    
    </div>
   }
}
export default Admin;