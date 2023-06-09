import React from 'react';

export default function About(props) {

    // const [myStyle,setmyStyle] = useState({
    //     color: "black",
    //     backgroundColor: "white",
    // })
    
    let myStyle = {
        color: props.mode==='dark'?'white':'#212529',
        backgroundColor: props.mode==='dark'?'#212529':'white'
    }

  return (
    <div className='container' style={myStyle}>
        <h3>About Us</h3>
            <div className="accordion" id="accordionExample"  style={myStyle}>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button"  style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                   <strong>Analyse your text</strong> 
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body"  style={myStyle}>
                    TextUtils gives you a way to analyse your text quickly.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed"  style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                   <strong>Free to use</strong> 
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body"  style={myStyle}>
                    TextUtils is a free character counter tool that provides instant character count and word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is available for writing text with word/character limit.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed"  style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                   <strong> Browser Compatible</strong> 
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body"  style={myStyle}>
                    This word counter software works in any web browser such as chrome, firefox, internet explorer, safari, opera.It suits to count characters in facebook,blog,excel document,pdf document,essays,etc
                </div>
                </div>
            </div>
            </div>
    </div>
  )
}
