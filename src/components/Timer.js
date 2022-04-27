import { useStopwatch } from "react-timer-hook";

export default function Timer({seconds,minutes,char,currChar,words}){
    return(
        <div className="CurrentStats">
            <div>Time : {minutes*60+seconds}s</div>
            <div>Words : {words}</div>
            <div>Characters : {currChar+"/"+char}</div>
        </div>
    )
}