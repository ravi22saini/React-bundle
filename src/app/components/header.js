import React from "react";

export class Header extends React.Component{    
    render(){        
        return(
            <div>Hi {this.props.userName}</div>
        );
    }
}