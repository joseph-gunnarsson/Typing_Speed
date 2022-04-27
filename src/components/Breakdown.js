import { useEffect } from "react"
import { setCookie,getCookie } from "./cookie"
export default function Breakdown({updatePara,words,seconds,testStats,setStats,setShowBreakdown}){
    const wpm=Math.round((words/seconds)*60)
    console.log(wpm>testStats.top)
    const newRecord=wpm>testStats.top
    const newAvg=Math.round(((testStats.attempts*testStats.wpm+wpm)/(testStats.attempts+1)))
    const updateStat={wpm:newAvg,attempts:testStats.attempts+1,top:newRecord?wpm:testStats.top}
    const onClose=()=>{
        updatePara()
        setCookie("Stats",JSON.stringify(updateStat))
        setStats(updateStat)
        setShowBreakdown(false)
    }
    
    

    return(
        <div className="BreakdownBox">
            <div className="Breakdown">
                <h3>Breakdown</h3>
                {newRecord&& (<h4>NEW RECORD!!</h4>)}
                <ul>
                    <li>Words : {words}</li>
                    <li>WPM : {wpm}</li>
                    <li>Time Taken : {seconds}s</li>
                    <li>New Avg WPM : {newAvg}</li>
                </ul>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    )
}