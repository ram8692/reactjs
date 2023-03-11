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
        this.state = {
            name:"rammm"
        }
    }

    changename(){
        console.log(this.state);
        this.setState({name:"harion"},()=>{
            console.log(this.state);

        });
    }

   render(){
       return(
           <div>
               <h4>name {this.state.name}</h4>
               <h3>Name {Math.random()}{this.props.name} and age is {this.props.age}</h3><h3>wscube tech</h3>
               <h3>age</h3><h3>11 years</h3>

               <Man/>
               <br/>
               <button onClick={this.changename.bind(this)}>change name</button>

               
           </div>
       );
   }
    
}

export default Person;