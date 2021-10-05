import React from "react";
import {Link,Switch,Route} from 'react-router-dom';
import { Nav } from 'react-bootstrap';
//import {Customers} from './Customers';
//import './Styling/Link.css'
import axios from "axios";
//import data from "./Home/data";
import 'bootstrap/dist/css/bootstrap.min.css';

export class GetCustomer extends React.Component{
  constructor(){
      super();
      this.state={
          user:[],
         
      }
    // this.handleChange=this.handleChange.bind(this);
    
  }
  componentDidMount(){
     // handleChange(){
    axios.get('http://localhost:4000/app/alluser').then(
        response=>
       // console.log(response.data),
        this.setState({user:response.data})
     //   alert({user})
    ).catch(err=>
        console.log("error: "+err)
    )
  }
 
    render(){
        const { user } = this.state;
        
   return <div>
       
<table class="table">

    <thead>
        <td></td>
        <td><th>ID</th></td>
        <td><th>Name</th></td>
        <td><th>email</th></td>

    </thead>
    
<tbody>
   
  {user.map(item => (
    <tr>
             <th scope="row"></th>
     
             
               
               <td>{item._id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
            
        
    </tr> ))} 
    </tbody>
   
</table>
</div>
    }
}

//export default GetCustomer