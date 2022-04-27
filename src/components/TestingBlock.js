import { useState,useEffect } from "react";
import TypingInput from "./TypingInput";
import ParagraphTest from "./ParagraphTest";
import { getCookie,setCookie,eraseCookie } from "./cookie";
import Stats from './Stats';

import Timer from "./Timer";
import { useStopwatch } from "react-timer-hook";
import Breakdown from "./Breakdown";
export default function TestingBlock(){
    const [testText,setTestText]=useState("")
    const [para,setPara]=useState("")
    const [testStats,setStats]=useState(JSON.parse(getCookie("Stats"))|| {wpm:0,attempts:0,top:0})
    const [showBreakdown,setShowBreakdown]=useState(false)
    const {
        seconds,
        minutes,
        isRunning,
        start,
        pause,
        reset
      } = useStopwatch({ autoStart: false });
    
    const resetStats=()=>{
        setCookie("Stats",JSON.stringify({wpm:0,attempts:0,top:0}))
        setStats({wpm:0,attempts:0,top:0})
    }

    const updateTestText = e=>{
        const value=e.target.value
        if(!isRunning){
            reset()
            start()
        }
        if(value==para){
            setTestText("")
            pause()
            setShowBreakdown(true)
        }
        else
            setTestText(value)

    }
  
    const  updatePara=async()=>{
            pause()
            let response = await fetch("https://metaphorpsum.com/paragraphs/1/5")
            response = await response.text()
            console.log(response)
            setTestText("")
            setPara(response)
    }

    useEffect(() => { 
        updatePara()
    }, [])
    
    return (
        <div className="TypingBlock">
            {showBreakdown&&<Breakdown updatePara={updatePara}setShowBreakdown={setShowBreakdown} testStats={testStats} setStats={setStats} seconds={seconds} words={(para.split(" ").length>0)? para.split(" ").length:0}/>}
            <ParagraphTest para={para} testText={testText}/>
            <Timer seconds={seconds} minutes={minutes} currChar={testText.length || 0} words={(para.split(" ").length>0)? para.split(" ").length:0} char={para.length}/>
            <div className="HideScroll">
            <TypingInput testText={testText} showBreakdown={showBreakdown} updateTestText={updateTestText}/>
            </div>
            <Stats testStats={testStats} updatePara={updatePara} resetStats={resetStats}showBreakdown={showBreakdown} />
        </div>

    )
}