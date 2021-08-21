// import logo from './logo.svg';
// import './App.css';


import Test1 from "./Test1";
import Test2 from "./Test2";


function App(props) {
  return (
    <div>
      {/* agar true mila  -> props.logged se too render Test1 Component hoga, otherwise Test2 Component render hoga  */}
      {props.logged? <Test1/> : <Test2 />}

      {/* we can use simple HTML here */}
      {props.logged? <h1>WE CAN ALSO WRITE SIMPLE HTML HERE</h1> : <Test2 />}
    </div>
  );
}

export default App;
