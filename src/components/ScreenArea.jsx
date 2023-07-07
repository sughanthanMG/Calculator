import React from "react";
import './screenareastyle.css';

function ScreenArea(props)
{
return(
    <div>
    <div className="historysymbol" onClick={()=>props.setHistoryVisibility((prevValue)=>!prevValue )}>⏱</div>
    <div className="previous">{props.previousScreen}</div>
    <div className="current">{props.currentScreen===""?"0":props.currentScreen}</div>
    </div>
)
}
export default ScreenArea;