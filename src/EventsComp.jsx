import React from "react";

export default class EventsComp extends React.Component{
    funOne() {
        console.log("Imam tech");
    }
    render(){
        return(
            <div>
                <button onClick={this.funOne}>Click me</button>
            </div>
        );
    }
}