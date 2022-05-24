import { useState } from 'react'
import Avatar from "./Avatar"
import './ComposeForm.css'
import React from "react";
 
function ComposeForm(){
 const [editorValue, setEditorValue]= useState(' ')
 console.log(editorValue)
 const handleEditorValueChange = (e) =>{
   setEditorValue(e.target.value)
 }
 return (
        <form className="compose-form">
          <div className="compose-form-container">
            <Avatar/>
            <textarea
              className="compose-form-textarea"
              placeholder="What's happening?"
            />
          </div>
          <button className="compose-form-submit">Tweet</button>
        </form>
);
}

export default ComposeForm