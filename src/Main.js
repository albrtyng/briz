import React from 'react';
import './Main.scss';
import Giphy from './components/Giphy';
import briz from './styles/images/wind-cartoon.png'

class Main extends React.Component{
    render(){
        return(
            <div className="block">
                <div className="header">
                    <img className="header-logo" src={briz} alt="briz logo"/>
                    <h1 className="logo">brīz</h1>
                </div>
                <div className="daily">
                    </div>
                <Giphy/>
                <div className="weekly">
                    </div>
            </div>
        )
    }
}

export default Main;