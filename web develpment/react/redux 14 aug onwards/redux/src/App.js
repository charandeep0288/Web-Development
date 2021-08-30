import { useSelector, useDispatch } from "react-redux";

import {
  incrementActionCreator,
  decrementActionCreator,
  loginActionCreator,
} from "./redux/actions";

function App() {

  // hook hai yaa, takes an fn
  // useSelector hook koo ek function lata hai jisko state milti hai joki redux store me stored hai, and then is function ke andar se we can manipulate the state and return it.
  // iss hook koo redux store mai joo state hai woo milti hai
  let countState = useSelector((state) => { // state -> reducer mai saa aa rahi hai
    return state.count; // useSelector kaa pas store mai rakhi state ati hai & woo yaa return kar raha hai hum
  });

  let authState = useSelector((state) => {
    console.log(state);
    return state.auth;
  });

  // dispatch fn intialize kiya hai
  // useDispatch() is used to change state 
  let dispatch = useDispatch(); // in fn return kara gaa 

  return (
    <div>
      <p>{countState}</p>

      <button onClick={() => {
        // iss dispatch mai action diya hai joo karna hai & woo store mai jai gaa & fir reducer mai with that state & then perform update on state

        // iss dispatch mai action(incrementActionCreator() actions.js mai hai) diya hai joo karna hai & action.js ik object return kar raha hai joo dispach kaa pass aya gaa & woo store mai jai gaa & store se fir reducer.js mai action variable mia aa raha hai with that state & then perform update on state & return that state & Print on UI.
        dispatch(incrementActionCreator(5));
      }}>+</button>

      <button onClick={() => {
        dispatch(decrementActionCreator());
      }}>-</button>

      <div>
        <button
          onClick={() => {
            dispatch(loginActionCreator());
          }}>login</button>

        <div>
          <button
            onClick={() => {
              dispatch(loginActionCreator());
            }}>logout</button>
            </div>

          <p>{authState ? "some private text" : ""}</p>
        </div>
      </div>
      );
}

      export default App;
