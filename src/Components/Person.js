import React, { Component } from "react";
//below code is for 1 way default export
//import Man from "./Man";
//import M from "./Man";


//below code is for 2 nd way named export
import {Man} from "./Man";

//file name and class name should be same
class Person extends Component {
    constructor(props) { 
        super(props);
        this.props = props;
    }
   render(){
       return(
           <div>
               <h3>Name {Math.random()}{this.props.name} and age is {this.props.age}</h3><h3>wscube tech</h3>
               <h3>age</h3><h3>11 years</h3>
               <Man/>
               
           </div>
       );
   }
    
}

export default Person;