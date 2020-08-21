import React, { Component } from 'react';
import './Main.scss';
import Giphy from './components/Giphy';

class Main extends React.Component{
    render(){
        return(
            <>
            <div className="header">
                <h1 className="logo">brīz</h1>
            </div>
            <main>
                <Giphy/>
            </main>
            </>
        )
    }
}

export default Main;