import React, {useState,useEffect} from 'react';
import ButtonArea from './ButtonArea';
import ScreenArea from './ScreenArea';
import Gradient from './Gradient';
import history from '../history';
function App() {

const [historyVisibility,setHistoryVisibility]=useState(false);

const [currentNumber,setCurrentNumber]=useState("");
const [currentScreen,setCurrentScreen]= useState("")
const [operator,setOperator]=useState("");
const [previousScreen,setpreviousScreen]=useState("");
const [previousNumber,setPreviousNumber]=useState("");
var operationHandle="";


function clearPreviousInput()
{
  setpreviousScreen("");
}
function clearInput()
{
  setCurrentScreen(currentNumber);
}

function handleSelection(value)
{
setCurrentNumber((prevValue) => prevValue+value);
setCurrentScreen((prevValue) => prevValue+value);
}

function add()
{
  
  const temp=parseFloat(previousNumber)+parseFloat(currentNumber);
  setCurrentScreen(temp);
  setPreviousNumber(temp);
  setpreviousScreen(temp+operationHandle);
  return temp;

 
}
function subtract()
{
  const temp=parseFloat(previousNumber)-parseFloat(currentNumber);
  setCurrentScreen(temp);
  setPreviousNumber(temp);
  setpreviousScreen(temp+operationHandle);
  return temp;

}
function division()
{
  const temp=parseFloat(previousNumber)/parseFloat(currentNumber);
  setCurrentScreen(temp);
  setPreviousNumber(temp);
  setpreviousScreen(temp+operationHandle);
  return temp;

}
function modulus()
{
  const temp=parseFloat(previousNumber)%parseFloat(currentNumber);
  setCurrentScreen(temp);
  setPreviousNumber(temp);
  setpreviousScreen(temp+operationHandle);
  return temp;

}
function multiplication()
{
  const temp=parseFloat(previousNumber)*parseFloat(currentNumber);
  setCurrentScreen(temp);
  setPreviousNumber(temp);
  setpreviousScreen(temp+operationHandle);
  return temp;

}
function equalto(value)
{
  var temp2;
  if(operator==="+")
  temp2=add();
  else if(operator==="x")
  temp2=multiplication();
  else if(operator==="/")
  temp2=division();
  else if(operator==="-")
  temp2=subtract();
  else if(operator==="%")
  temp2=modulus();
  const temp=previousNumber+operator+currentNumber+"=";
  setpreviousScreen(temp);
  history.push({query:temp,ans:temp2});
  setPreviousNumber("");
  setCurrentNumber(temp2);
  
}

function handleMath(option)
{
  setOperator(option);
  
  setPreviousNumber(currentNumber);
  operationHandle=option;
  setpreviousScreen(currentNumber+operationHandle);
  console.log(operationHandle);
  if(previousNumber!=="")
  {
    if(operator==="+")
    add();
    else if(operator==="-")
    subtract();
    else if(operator==="/")
    division();
    else if(operator==="x")
    multiplication();
    else if(operator==="=")
    equalto();
    else if(operator==="%")
    modulus();
  }
  else
  {
    setCurrentScreen("");
  }
  setCurrentNumber(""); 
}

function backSpace()
{
  setCurrentNumber(currentNumber.substring(0,currentNumber.length-1));
  setCurrentScreen(currentScreen.substring(0,currentScreen.length-1));
}
function clearScreen()
{
  setCurrentScreen("");
  setCurrentNumber("");
  setPreviousNumber("");
  setpreviousScreen("");
  setOperator("");
}



  return (
    <div>
    
    <Gradient/>
    <div className='calcOuter'>
    <div className='calcScreen'>
    <ScreenArea
      currentScreen={currentScreen}
      previousScreen={previousScreen}
      setHistoryVisibility={setHistoryVisibility}
     
    />
    </div>
    
    <div className='calcButtonArea'>
      <ButtonArea
      clearInput={clearInput}
      backSpace={backSpace}
        handleSelection={handleSelection}
        handleMath={handleMath}
        clearScreen={clearScreen}
        equalto={equalto}
      />
    </div>
    </div>
    <div className='historyOuter'>
    <div className='historySection' style={{display:!historyVisibility&&"none"}}>
    <div style={{fontSize:"8px"}}>⏱ History</div>
    <ul>
      
      {history.map(x=> <><dd>{x.query}</dd><dl>{x.ans}</dl> </>)}
      </ul>
    </div></div>
    </div>
  );
}

export default App;
