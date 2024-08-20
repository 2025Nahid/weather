

'use strict';

const api_key = "c63fe718ffca7c0f6a473a4557a51647"
/**
 * 
 * @param {string} URL API url
 * @param {Function} callback callback
 */

export const fetchData = function(URL,callback){
    fetch(`${URL}&appid=${api_key}`)
       .then(res=>res.json())
       .then(data=>callback(data));
}

export const url = {
    currentWeather(lat,lon){
        return `https://api.openweathermap.org/data/2.5/weather?${lat}&${lon}&appid=7&units=metrics`
    },

    forecast(lat,lon){
        return`https://api.openweathermap.org/data/2.5/weather?${lat}&${lon}`
    },

    airPollution(lat,lon){
        return`http://api.openweathermap.org/data/2.5/air_pollution?${lon}&${lon}`
    },
    reverseGeo(lat,lon){
        return`https://api.openweathermap.org/geo/1.0/reverse?${lat}&${lon}&limit=5`
    },

    /**
     * 
     * @param {string} query 
     */

    geo(query){
        return`http://api.openweathermap.org/geo/1.0/direct?q=${london}&limit=5`
    }
}