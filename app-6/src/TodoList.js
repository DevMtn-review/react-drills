import React from 'react'

export default function TodoList(props) {
    return (
        <div>
            <ul>
                {props.tasks.map((task, i) => <li key={i}>{task}</li>)}
            </ul>
        </div>
    )
}
