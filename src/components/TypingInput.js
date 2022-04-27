
import {useState} from "react"
export default function TypingInput({updateTestText,testText,showBreakdown}){
    return(
        <textarea name="testText" onChange={updateTestText} value={testText} disabled={showBreakdown}/>    
    )


}