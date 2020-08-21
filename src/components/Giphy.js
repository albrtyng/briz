import React, { Component } from 'react';
import './Giphy.scss';
import axios from 'axios';

class Giphy extends React.Component{

    state={
        giphy:null
    }
        componentDidMount(){

        axios.get('https://api.giphy.com/v1/gifs/search?api_key=xgQ2r5ca2ohkkDNIzYD1nOgji38B7g4b&q=clouds&limit=25&offset=0&rating=g&lang=en')
            .then(res=> {
                console.log(res.data)
                let giph = res.data.url;

                this.setState({
                    weathergiph:giph,
                    // alttag : descr
                })
            })
        }
        
        render(){
            if(!this.state.weathergiph){
                return null
            }
            return(
                <div className="giphy-container">
                    <img className="giphy" src={this.state.weathergiph} alt="giphy"/>
                </div>
            )
        }
    }
export default Giphy;
