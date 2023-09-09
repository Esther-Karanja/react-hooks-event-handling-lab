// Code EyesOnMe Component Here
import React from "react";

function EyesOnMe (){
    function handlesFocus(){
        console.log('Good!');
    }
    function handlesBlur(){
        console.log('Hey! Eyes on me!');
    }
    return (
        <div>
            <button onFocus={handlesFocus} onBlur={handlesBlur}>Eyes on me</button>
        </div>
    )
}

export default EyesOnMe;