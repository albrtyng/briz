import React from 'react';
import './Giphy.scss';
import axios from 'axios';
//variable key word, try with hard code first then add the weather connect 
const gifchoice = "clouds";


class Giphy extends React.Component{
    state={
        giphy:null
    }
        componentDidMount(){
        axios.get(`http://api.giphy.com/v1/gifs/translate?s=${gifchoice}&api_key=xgQ2r5ca2ohkkDNIzYD1nOgji38B7g4b`)
            .then(res=> {
                this.setState({
                    weathergif:`https://media.giphy.com/media/${res.data.data.id}/giphy.gif`
                   
                })
            })
        }
        
        render(){
            if(!this.state.weathergif){
                return null
            }
            return(
                <div className="gif-container">
                    <img className="gif" src={this.state.weathergif}/>  
                </div>
            )
        }
    }
export default Giphy;
