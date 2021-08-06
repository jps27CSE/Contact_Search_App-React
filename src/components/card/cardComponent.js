import React from 'react'
import './cardStyle.css'
export const Card =(props)=> (
    <div className="card-container">
        <img alt='persons' src={`https://robohash.org/${props.person.id}?set=set4 `}/>
        <h1>{props.person.name}</h1>
    </div>
)