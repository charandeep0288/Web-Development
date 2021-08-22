
import { useState, useEffect } from "react";
function App() {

  // let [someState, uskaChangeKrnawalafunction] = useState(intial value of someState);
  
  // setCount -> fn hai state change karna kaa lia use kara gai 
  // yaa line sabse phala chala gii and ik bar chala gii
  let [count, setCount] = useState(0); // yaa line skip hoo jati hia compaonent re-render pai

  // we can have muttply useeffect calls & sara chala gai

  // case1: works like companentDidMount
  useEffect(() => {
    console.log("use effect case 1 was executed");
  },[]); // kio ki dependency array empty hai

  // case 2: After ever render even after 1st render(yaa use effect chala gaa)
  useEffect(() => {
    console.log("use effect case 2 was executed");
  });// ommit out kar dia dependency array koo

  // ----------- INTERVIEW QUESTION ------------
  // useEffect(() => {
  //   console.log("use effect case 2 was executed");
  //   // setCount(count + 1); // infinite loop problem aya gi
  // });// ommit out kar dia depency array koo

  console.log("component was rendered"); // proof-> ki re-render hoo raha hai component 

  return (
    <div>
      <button onClick={() => {
        setCount(count + 1);
      }}>+</button>

      <p>{count}</p>

      <button onClick={() => {
        setCount(count - 1);
      }}>-</button>
    </div>
  );
}


export default App;