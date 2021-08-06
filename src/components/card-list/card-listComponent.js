import React from 'react'
import './card-listStyle.css'
import { Card } from '../card/cardComponent'
export const CardList = (props) => {
    return (
        <div className="card-list">
            {
                props.persons.map(person => (
                    <Card key={person.id} person={person} />
                ))
            }
        </div>
    )
}
