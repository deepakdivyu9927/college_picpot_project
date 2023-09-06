import React from "react";
import LocationItem from "../components/LocationItem"
import "./LocationsList.css"

const LocationList=(props)=>{
    if(props.items.length===0)
    {
        return (
            <div className="center">
                <h3>No Locations exists</h3>
            </div>
        );
    }
    return(
        <ul className="locationlist">
            {props.items.map((location)=>{
              return(
                <LocationItem
                key={location.id}
                id={location.id}
                title={location.title}
                pic={location.pic}
                address={location.address}
                desc={location.desc}
                />
              )
            })}
        </ul>
    )
        };
export default LocationList;