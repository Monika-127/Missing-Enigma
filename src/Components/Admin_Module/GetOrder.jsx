import React from "react";
import {Link,Switch,Route} from 'react-router-dom';
import { Nav } from 'react-bootstrap';
//import {Customers} from './Customers';
//import './Styling/Link.css'
import axios from "axios";
//import data from "./Home/data";
import 'bootstrap/dist/css/bootstrap.min.css';

export class GetOrder extends React.Component{
  constructor(){
      super();
      this.state={
        
          orders:[],
        
      }
  
     //this.handleOrder=this.handleOrder.bind(this);
    
  }
  
  componentDidMount(){
    axios.get('http://localhost:4000/app/allOrders').then(
        response=>
       // console.log(response.data),
        this.setState({orders:response.data})
     //   alert({user})
    ).catch(err=>
        console.log("error: "+err)
    )
  }
  
 
    render(){
      
        const {orders}=this.state;
       
   return <div>
        
   
           

<table class="table">
<thead>
        <td></td>
        <td><th>ID</th></td>
        <td><th>First Name</th></td>
        <td><th>Email</th></td>
        <td><th>Phone</th></td>
        <td><th>Total</th></td>
        <td><th>items</th></td>
        <td><th>date</th></td>

    </thead>
<tbody>
  {orders.map(item => (
    <tr>
             <th scope="row">1</th>
     
             
               
               <td>id: {item._id}</td>
              <td>firstname: {item.firstname}</td>
              <td>email: {item.email}</td>
              <td>phone: {item.phone}</td>
              <td>Total: {item.Total}</td>
              <td>items: {item.NumOfItems}</td>
              <td>date: {item.date}</td>
            

            
        
    </tr> ))} 
    </tbody>
   
</table>
</div>

   }
}
export default GetOrder;