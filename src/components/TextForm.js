import React,{useState} from 'react'

// what is react hook?
// provides the features of a class without using a class


export default function TextForm(props) {
  const [text,setText] = useState("");
  
function handleUpClick(){
    // console.log("Uppercase was clicked");
    let newText=text.toUpperCase();
    setText(newText);
    props.setAlert("Converted to UpperCase!","success");
}

function handleLowClick(){
    // console.log("Uppercase was clicked");
    let newText=text.toLowerCase();
    setText(newText);
    props.setAlert("Converted to LowerCase!","success");
}

function handleClearClick(){
    setText("");
    props.setAlert("Cleared text!","success");
}

function handleCopy(){
    let text = document.getElementById('my-box');
    text.select();
    navigator.clipboard.writeText(text.value);
    props.setAlert("Copied to Clipboard!","success");
}

function handleExtraSpaces(){
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "));
    props.setAlert("Removed Extra Spaces!","success");
}

function handleOnChange(event){
    // console.log("On change")
    setText(event.target.value);
}

function showWords(){
    let newText=text.split(/[ ]+/);
    newText.join(" ");
    return newText.length;
}

  return (
    <>
        <div className='container'>
            <h4 style={{color: props.mode==='light'?'black':'white'}}>{props.heading}</h4>    
            <div className="mb-3">
            <textarea className="form-control" id="my-box" rows="10" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#212529':'white',color: props.mode==='light'?'black':'white'}}></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to LowerCase</button>
            <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
        </div>
        <div className="container my-2" style={{color: props.mode==='light'?'black':'white'}}>
            <h5>Your text summary</h5>
            <p>{text.length>0?showWords():0} words and {text.length} characters</p>
            <p>It will take you about {0.008*text.split(" ").length} minutes to read the above text</p>
            <h6>Preview</h6>
            <p>{text.length>0?text:"Enter something in the above text box to preview it here"}</p>
        </div>
    </>
  );
}
