import React from "react";

export default class MapComp extends React.Component{
    constructor(){
        super();
        this.state={
            mern_Stack:["MongoDB","ExpressJs","ReactJs","NodeJS"],
        };
    }
    render(){
        return(
            <div>
                <h3>
                    {this.state.mern_Stack.map((element,index)=>(
                        <li key={index}>{element}</li>
                    ))}
                </h3>
            </div>
        );
    }
}