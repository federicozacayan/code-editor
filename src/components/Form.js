import React from 'react';

import Render from './Render'
import Export from './Export'
import Import from './Import'


export default function Form() {

    
    const [db, setDb] = React.useState(JSON.parse(localStorage.getItem('data')) || []);
    React.useEffect(() => {
        localStorage.setItem('data', JSON.stringify(db));
    }, [db]);
    const [value, setValue] = React.useState('Title');
    const [ID, setID] = React.useState('1');
    const [type, setType] = React.useState('h1');



    const handleChange = (event) => {
        setValue(event.target.value);
        let db2 = db.map(element => {
            if (element[0] === ID) {
                element[2] = event.target.value
            }
            return element;
        });
        setDb(db2)
    };




    let tags = ['h1', 'h2', 'p'];
    let code = ['html', 'css', 'javascript'];
    let buttons = tags.concat(code);



    let process = (btn) => {
        setType(btn)
        setDb(db.map(element => {
            if (element[0] === ID) {
                return [ID, type, value]
            }
            return element;
        }))
    }

    let setId = (id) => {
        db.forEach(element => {
            if (element[0] === id) {
                setValue(element[2])
                setType(element[1])
                setID(element[0])
            }
        });
    }

    let duplicate = () => {
        let tmp;
        let db2 = db.map((a, i) => {
            if (a[0] === ID) {
                tmp = i;
            }
            return a
        })
        db2.splice(tmp, 0, [new Date().getTime(), type, value]);
        setDb(db2);
    }

    let deleteElement = () => {
        let tmp;
        let db2 = db.map((a, i) => {
            if (a[0] === ID) {
                tmp = i;
            }
            return a
        })
        db2.splice(tmp, 1);
        setDb(db2);
    }

    setTimeout(() => {
        window.Prism.highlightAll();
    }, 50)

    let render = (json) => {
        setDb(JSON.parse(json));
    }

    return (
        <div>
            <Render data={db} click={setId} />
            <div className="styler">
                <div className="background"></div>
                <textarea value={value} onChange={handleChange} /><br />
                <button onClick={duplicate}>Duplicate</button>
                <button onClick={deleteElement}>Delete</button><br />
                <div className="buttons">
                    {buttons.map(button => <button onClick={() => process(button)} key={button}>{button} </button>)}
                </div>
                <label htmlFor="up" className="btn btn-primary btn-block btn-outlined">Upload Json</label>
                <input id="up" style={{display: "none"}} type='file' accept='text/plain' onChange={(e)=>{Import.upload(e, render)}}/>
                
                <label htmlFor="down" className="btn btn-primary btn-block btn-outlined">Download Json</label>
                <button id="down" style={{display: "none"}} onClick={()=>{Export.download()}}>Export</button>

                <label htmlFor="html" className="btn btn-primary btn-block btn-outlined">Download HTML</label>
                <button id="html" style={{display: "none"}} onClick={()=>{Export.downloadHTML()}}>Export</button>
                
            </div>
        </div>
    )
}

