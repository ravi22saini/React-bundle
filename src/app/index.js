import React from "react";
import { render } from "react-dom";

import {Header} from "./components/header";
import {Home} from "./components/home"


class App extends React.Component{
    render(){
        return (
            <div>
                <Header userName='Ravi' />
                <br/>
                <Home />
            </div>
        );
    }
}

render(<App/>, window.document.getElementById("app"));