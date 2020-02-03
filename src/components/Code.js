import React from 'react'

export default function Code(props) {
    return (
        <pre onClick={()=>{props.click(props.id)}}>
            <code className={"language-" + props.code}>{props.value}</code>
        </pre>
    )
}
