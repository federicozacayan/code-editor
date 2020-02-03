import React from 'react'
import Tag from './Tag'
import Code from './Code'

export default function Render(props) {
    let tags = ['h1', 'h2', 'p'];
    let code = ['html', 'css', 'javascript'];

    return (
        <div>
            {props.data.map(function(arr){
                if (tags.indexOf(arr[1]) > -1) {
                    return <Tag tag={arr[1]} val={arr[2]} key={arr[0]} id={arr[0]} click={props.click}/>
                }
                if (code.indexOf(arr[1]) > -1) {
                    return <Code code={arr[1]} value={arr[2]} key={arr[0]} id={arr[0]} click={props.click} />
                }
            })}
        </div>
    )
}
