import React from 'react'
import './cssComponent/ArithmeticOperation.css'
function OperationClick(){
  var number1 =parseInt(document.getElementById('number1').value);
  var number2=parseInt(document.getElementById('number2').value);
  var Operator=document.getElementById('selection').value;
  var result;
 
  switch(Operator){
    case '+':result=number1+number2;
    break;
    case '-':result=number1-number2;
    break;
    case '*':result=number1*number2;
    break;
    case '/':result=number1/number2;
    break;
    case '%':result=number1%number2;
    break;
    default:
      alert("Wrong Inputs")
      break;
  }
 
  document.getElementById('resultid').innerHTML="The result is : "+result;
  console.log(result);
  
 
}
function ArithmeticOperation() {
  return (
    <div className='container'>
      <label htmlFor="number1">Enter the first Value:</label>
      <input type='text' id='number1'/><br></br>
      <label htmlFor="number2">Enter the second Value:</label>
      <input type='text' id='number2' /><br></br>
      <label htmlFor="selection">Select Operation</label>
      <select id='selection'>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
        <option value="%">%</option>
      </select>
      <button onClick={OperationClick}>Result</button>
      <h1 id ='resultid'>The result is :</h1>
    </div>
  )
}

export default ArithmeticOperation