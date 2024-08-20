


'use strict'

import { fetchData } from "./api.js"
import * as module from "./module.js"
/**
 * 
 * @param {NodeList} elements 
 * @param {string} eventType 
 * @param {Function} callback 
 */

const addEventListener = function(elements, eventType, callback){
    for(const element of elements) element.addEventListener(eventType, callback);
}

/**
 * 
 */

const searchView = document.querySelector("[data-search-view]");
const searchTogglers = document.querySelector("[data-search-toggler]");

const togglesearch = () => searchView.classList.toggle("active");
addEventOnElements(searchTogglers, "click" , togglesearch)



const searchField = document.querySelector("[data-search-field]");
const searchResult = document.querySelector("[data-search-result]");

let searchTimeout = null;
const serachTimeoutDuration = 500;

searchField.addEventListener("input", function(){
    searchTimeout ?? clearTimeout(searchTimeout);

    if(!searchField.value){
        searchResult.classList.remove("active")
        searchResult.innerHTML = "";
        searchField.classList.add("searching")
    }else{
        searchField.classList.add("searching")
    }

    if(searchField.value){
        searchTimeout = setTimeout(()=>{
            fetchData(url.geo(searchField.value), function(locations){
                searchField.classList.remove("searching");
                searchResult.classList.add("active");
                searchResult.innerHTML=`
                     <ul class="view-list" data-search-list>
            
                    </ul>
                    `;

                    const items = [];

                    for (const{name,lat,lon,country,stat} of locations){
                        const searchItem = document.createElement("li")

                        searchItem.classList.add("view-item");
                        searchItem.innerHTML = `

                            <span class="m-icon">location_on</span>
        
                                <div >
                                    <p class="item-title">${name}</p>
                                    <p class="label item-subtitle">${state || ""}${country}</p>
                                </div>
            
                            <a href="#/weather?lat=${lat}&lon=${lon}" class="item-link has-state" aria-label="${name} weather" data-search-toggler></a>
                        
                        `;

                        searchResult.querySelector("[data-search-list]").appendChild(searchItem);
                        items.push(searchItem.querySelector("[data-search-toggler]"))


                    }
            });
        }, serachTimeoutDuration)
    
    }  
});
