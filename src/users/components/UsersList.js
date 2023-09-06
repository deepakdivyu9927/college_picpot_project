import React from "react";
import UsersItem from "./UsersItem";
import "./UsersList.css";
const UsersList=(props)=>{
    if(props.items.length===0)
    {
        return (
            <div className="center">
                <h3>No users exists</h3>
            </div>
        );
    }
    return(
        <ul className="userlist">
            {props.items.map((user) =>{
               return(
                <UsersItem
               key={user.id}
               id={user.id}
               name={user.name}
               pic={user.pic}
               locationcount={user.numberoflocations} 
               />
               );
            })}
        </ul>
    )
};

export default UsersList;