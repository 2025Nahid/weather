

'use strict';

export const weekDayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

export const MonthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
];

/**
 * 
 * @param {number} dateUnix 
 * @param {number} timezone 
 * @returns {string}
 */

export const getDate = function(dateUnix, timezone){
    const date = new Date((dateUnix + timezone) * 1000);
    const weekDayName = weekDayNames[date.getUTCday()];
    const monthName = monthNames[date.getUTCMonth()];

    return `${weekDayName} ${date.getUTCDate()}, ${monthName} `;

}

/**
 * 
 * @param {number} timeUnix 
 * @param {number} timezone 
 * @returns {string}
 */

export const getTime = function(timeUnix, timezone){
    const date = new Date((timeUnix + timezone) * 1000);
    const hours = date.getUTCHours();
    const minuts = date.getUTCMinutes();
    const period = hours > 12 ? "PM" : "AM";

    return `${hours % 12 || 12}:${minutes}${period}`
    

    

}

/**
 * 
 * @param {number} timeUnix 
 * @param {number} timezone 
 * @returns {string}
 */

export const getHourse = function(timeUnix, timezone){
    const date = new Date((timeUnix + timezone) * 1000);
    const hours = date.getUTCHours();
    const period = hours > 12 ? "PM" : "AM";

    return `${hours % 12 || 12}${period}`
    
}

/**
 * 
 * @param {number} mps 
 * @returns {number}
 */

export const mps_to_kmh = mps =>{
    const mph = mps * 3600;
    return mph / 1000;
}

export const aqiText = {
    1:{
        leve:"Good",
        message:"Air condition is relatively good"
    },

    2:{
        leve:"Fair",
        message:"Air quality is Acceptable"
    },


    3:{
        level:"Moderate",
        message:"the weather is not bad enough to affect public"
    },

    4:{
        leve:"Poor",
        message:"for some people the weather may pose problems "
    },

    5:{
        leve:"very poor",
        message:"health warnings "
    }
}