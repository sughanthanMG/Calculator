import React, { useState } from "react";

function ButtonArea(props){


function handleChangeText(value)
{
props.clearInput();
props.handleSelection(value);
}

return(
    <div>
        <div className='button button2' onClick={()=>props.handleMath("%")}>%</div>
      <div className='button button3' onClick={props.clearScreen}>ce</div>
      <div className='button button3' onClick={props.clearScreen}>c</div>
      <div className='button button3' onClick={props.backSpace}>⌫</div>
      <div className='button' name="7" value="7" onClick={()=>handleChangeText("7")}>7</div>
      <div className='button' name="8" value="8" onClick={()=>handleChangeText("8")}>8</div>
      <div className='button' name="9" value="9" onClick={()=>handleChangeText("9")}>9</div>
      <div className='button button2' onClick={()=>props.handleMath("/")}>÷</div>
      <div className='button' name="4" value="4" onClick={()=>handleChangeText("4")}>4</div>
      <div className='button' name="5" value="5" onClick={()=>handleChangeText("5")}>5</div>
      <div className='button' name="6" value="6" onClick={()=>handleChangeText("6")}>6</div>
      <div className='button button2' onClick={()=>props.handleMath("x")}>x</div>
      <div className='button' name="1" value="1" onClick={()=>handleChangeText("1")}>1</div>
      <div className='button' name="2" value="2" onClick={()=>handleChangeText("2")}>2</div>
      <div className='button' name="3" value="3" onClick={()=>handleChangeText('3')}>3</div>
      <div className='button button2' onClick={()=>props.handleMath("-")}>-</div>
      <div className='button' onClick={()=>handleChangeText(".")}>.</div>
      <div className='button' name="0" value="0" onClick={()=>handleChangeText("0")}>0</div>
      <div className='button button2' onClick={()=>props.handleMath("+")}>+</div>
      <div className='button button4'  onClick={()=>props.equalto("=")}>=</div>
    </div>
)
}
export default ButtonArea;