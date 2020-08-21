<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import '../styles/Giphy.scss';
import axios from 'axios';
//variable key word, try with hard code first then add the weather connect 
const Giphy = (props) => {
    const [weatherGif, setWeatherGif] = useState(null);

    useEffect(() => {
      const { keyword }= props;
      if (keyword){
        axios.get(`http://api.giphy.com/v1/gifs/translate?s=${keyword.split('_').join(' ')}&api_key=xgQ2r5ca2ohkkDNIzYD1nOgji38B7g4b`)
          .then(res=> {
            console.log(res);
              setWeatherGif(`https://media.giphy.com/media/${res.data.data.id}/giphy.gif`)
          })
      }
    }, [props.keyword])

    return(
      weatherGif ? 
        <div className="gif-container">
            <img className="gif" src={weatherGif}/>  
        </div> : null
    )
}
=======
import React from 'react';
import '../styles/Giphy.scss';
import axios from 'axios';
//variable key word, try with hard code first then add the weather connect 
class Giphy extends React.Component{
    state={
        weathergif:null
    }
        componentDidMount(){
        const { keyword }= this.props;
        if (keyword){
            axios.get(`http://api.giphy.com/v1/gifs/translate?s=${keyword.split('_').join(' ')}&api_key=xgQ2r5ca2ohkkDNIzYD1nOgji38B7g4b`)
                .then(res=> {
                    this.setState({
                        weathergif:`https://media.giphy.com/media/${res.data.data.id}/giphy.gif`
                       
                    })
                })
            }
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
>>>>>>> 407e948... last commit
export default Giphy;
