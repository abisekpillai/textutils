import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('');

    const handleUpClick = ()=>{ 
        console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLowClick = ()=> {
        console.log("Lowercase was clicked");
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleClearClick = ()=> {
        console.log("Clear Text was clicked");
        setText("");
    }

    const handleCopyClick = ()=> {
        console.log("Copy Text was clicked");
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const handleOnChange = (event)=>{
        console.log("OnChange");
        setText(event.target.value);
    }

    return (
    <>
    <div className="container" style={{color: props.mode==='light'?'black':'white'}}>
        <h2>{props.heading}</h2>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='light'?'white':'#443C68',color: props.mode==='light'?'black':'white'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-1" onClick={handleCopyClick}>Copy Text</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='light'?'black':'white'}}>
        <h2 style={{}}>Your text summary</h2>
        <p>{text.split(".").length} sentences, {text.split(" ").length} words and {text.length} characters</p>

        <h3>Preview</h3>
        <p>{text.length>0?text:'Enter something to preview it here'}</p>
    </div>
    </>
  )
}
 