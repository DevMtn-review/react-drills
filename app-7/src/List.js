import React from 'react'
import Todo from './Todo'

export default function List(props) {
    return (
        <ul>
            {props.list.map((task, i) => <Todo key={i} task={task}/>)}
        </ul>
    )
}
