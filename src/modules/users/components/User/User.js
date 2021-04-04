import React from 'react'

export default function User({ user }) {
    return (
        <li style={style}>
            Name: {user.name}<br/>
            User Name: {user.username}<br/>
            E-mail: {user.email}<br/>
            Phone: {user.phone}

        </li>
    )
}

const style = {
    border: 'solid 2px #000',
    borderRadius: '5px',
    width: '350px',
    marginBottom: '5px'
}
