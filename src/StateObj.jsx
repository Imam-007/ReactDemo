import React from "react";

export default class StateObj extends React.Component{
    constructor(){
        super();
        this.state={
            data:"any type of data you will store",
            num:2,
            boolean:true,
            obj:{
                name:"imam",
                age:23
            }
        };
    }
    render(){
        return(
            <div>
                <h1>values coming from state object</h1>
                <p>{this.state.data}</p>
                <p>Number values: {this.state.num}</p>
                <p>Boolean Value: {JSON.stringify(this.state.boolean)}</p>
                <p>Object is : {JSON.stringify(this.state.obj)}</p>
            </div>
        )
    }
}