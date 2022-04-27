import { getCookie,setCookie,eraseCookie} from "./cookie";

export  default function Stats({testStats,updatePara,resetStats,showBreakdown}){

    
    return (
        <div className="Stats">
            <ul>
                <li>Attempts : {testStats.attempts}</li>
                <li>Avg WPM : {testStats.wpm}</li>
                <li>Top WPM : {testStats.top}</li>
                <li><button onClick={updatePara} disabled={showBreakdown}>New paragraph</button></li>
                <li><button onClick={resetStats} disabled={showBreakdown}>Reset Stats</button></li>
            </ul>
        </div>
    )

}