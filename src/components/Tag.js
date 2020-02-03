import React from 'react'

export default function Tag(props) {
    return (
        React.createElement(props.tag, { 
            onClick: ()=>{props.click(props.id)}
        },props.val)
    )
}
