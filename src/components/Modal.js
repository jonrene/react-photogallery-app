import React from 'react'



const Modal = (imgSrc) =>{

    function handleClick(){
        document.getElementById("modal-container").style.display = 'none';
    }

    return(
        <>
            <div id="modal-container">
                <div id="modal">
                    <img id='modal-image' src={imgSrc} alt=""></img>
                    <button id="modal-exit" onClick={handleClick}>X</button>
                </div>
            </div>
        </>
    )
}

export default Modal