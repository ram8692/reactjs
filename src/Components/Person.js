import React, { Component } from "react";
//below code is for 1 way default export
//import Man from "./Man";
//import M from "./Man";


//below code is for 2 nd way named export
import {Man} from "./Man";

//file name and class name should be same
class Person extends Component {
   // constructor() { }
   render(){
       return(
           <div>
               <h3>Name</h3><h3>wscube tech</h3>
               <h3>age</h3><h3>11 years</h3>
               <Man/>
               
           </div>
       );
   }
    
}

export default Person;