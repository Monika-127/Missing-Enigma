import React from "react";
import {Link,Switch,Route} from 'react-router-dom';
import { Nav } from 'react-bootstrap';
//import {Customers} from './Customers';
//import './Styling/Link.css'
import axios from "axios";
//import data from "./Home/data";
import 'bootstrap/dist/css/bootstrap.min.css';
//import {GetCustomer} from "./Admin_Module/GetCustomer";
//import GetOrder from "./Admin_Module/GetOrder";
export class GetSeller extends React.Component{
  constructor(){
      super();
      this.state={
          
          Sell:[],
         
      }
   //  this.handleChange=this.handleChange.bind(this);
 
  }
  
  componentDidMount(){
    axios.get('http://localhost:4000/app/allSeller').then(
        response=>
       // console.log(response.data),
        this.setState({Sell:response.data})
     //   alert({user})
    ).catch(err=>
        console.log("error: "+err)
    )
  }
 
 
    render(){
      
        const {Sell}=this.state;
     
   return <div>
<table class="table">
<thead>
        <td></td>
        <td><th>ID</th></td>
        <td><th>category</th></td>
        <td><th>Title: </th></td>
        <td><th>Price: </th></td>
        <td><th>contact:</th></td>
        <td><th>date:</th></td>

    </thead>
<tbody>
  {Sell.map(item => (
    <tr>
             <th scope="row">1</th>
     
             
               
               <td>{item._id}</td>
              <td> {item.category}</td>
              <td>{item.Title}</td>
              <td>{item.price}</td>
              <td> {item.contact}</td>
              <td> {item.date}</td>
            
        
    </tr> ))} 
    </tbody>
   
</table>


    </div>
   }
}
export default GetSeller;