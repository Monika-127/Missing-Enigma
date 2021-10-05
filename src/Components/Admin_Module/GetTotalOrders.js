import React from "react";
import {Link,Switch,Route} from 'react-router-dom';
import { Nav } from 'react-bootstrap';

import axios from "axios";
//import data from "./Home/data";
import 'bootstrap/dist/css/bootstrap.min.css';

export class GetTotalOrders extends React.Component{
  constructor(){
      super();
      this.state={
         
          totaluser:0
      }
 
  }
 
  
  
  componentDidMount(){
    axios.get('http://localhost:4000/app/totalOrders').then(
        response=>
       // console.log(response.data),
        this.setState({totaluser:response.data})
     //   alert({user})
    ).catch(err=>
        console.log("error: "+err)
    )
  }
 
    render(){
        const { user } = this.state;
        const {orders}=this.state;
        const {Sell}=this.state;
        const {totaluser}=this.state;
   return <div>
       
<table class="table">
<thead>
        <td><th>Index</th></td>
      
        <td><th>Count</th></td>

    </thead>
<tbody>
    <tr><th scope="row">1</th>
     <td>{totaluser}</td>   
        
    </tr> 
    </tbody>
   
</table>
     </div>
    
   }
}
export default GetTotalOrders;