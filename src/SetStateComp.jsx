import React from "react";

export default class SetStateComp extends React.Component{
    constructor(){
        super();
        this.state={
            sub:"Backend Developer",
        }
    }

    changeSub=()=>{
        this.setState({
            sub:"MERN stack Developer",
        });
    };

    render(){
        return(
            <div>
                <h1>{this.state.sub}</h1>
                <button onClick={this.changeSub}>Change State</button>
            </div>
        )
    }
}