import React from "react";
import {useParams} from "react-router-dom";
import LocationsList from "../components/LocationsList";
const UserLocations=()=>{
    const USER_LOCATIONS=[
        {
            id:"loc1",
            title:"Red Fort",
            desc:"The Red Fort or Lal Qila ( Hindustani  is a historic fort in the Old Delhi neighbourhood of Delhi, India,",
            pic:"https://assets-news.housing.com/news/wp-content/uploads/2021/07/20184714/All-about-the-Delhi-Red-Fort-or-Lal-Kila-FB-1200x700-compressed-2.jpg",
            address:"W82F+4C, Adarsh Meena Colony,Dausa Rajasthan 303303",
            userid:"u1"
        },
        {
            id:"loc2",
            title:"Taj Mahal",
            desc:"sThe Taj Mahal is an ivory-white marble mausoleum on the right bank of the river Yamuna in Agra, Uttar Pradesh",
            pic:"https://whc.unesco.org/uploads/thumbs/site_0252_0008-750-750-20151104113424.jpg",
            address:"Dharmapuri, Forest Colony, Tajganj, Agra, Uttar Pradesh 282001",
            userid:"u1"
        },
        {
            id:"loc3",
            title:"Jatayu park",
            desc:"atayu Earth Center, also known as Jatayu Nature Park or Jatayu Rock, is a park and tourism centre at Chadayamangalam in Kollam district of Kerala,",
            pic:"https://static.toiimg.com/photo/101487707.cms",
            address:"fJatayu Nature Park Rd, Jatayu Junction, Chadayamangalam, Kerala 691534",
            userid:"u2"
        },
        
            ];
            const userid=useParams().userid;
            const FILTERED_LOCATIONS=USER_LOCATIONS.filter(location=>location.userid===userid )
        return <LocationsList items={FILTERED_LOCATIONS} />
        };


export default UserLocations;