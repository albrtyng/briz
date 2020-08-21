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
export default Giphy;
