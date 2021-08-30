import { counterReducer, authReducer } from "./reducers";
import { combineReducers, createStore } from "redux";

// store create kiya hai
// "createStore()" yaa ik hi state laa sakta hai but humara pass ik saa jada state hai tho we will use "combineReducers"
// let store = createStore(incrementReducer);

// STORE IK JAGA HAI JAHA REDUCERS & STATE KOO STORE KARTA HAI

// store banya hai
let rootReducer = combineReducers({
    count: counterReducer, // counterReducer -> reducer mai hai & state koo change karna kaa liya
    auth: authReducer,
});

export default rootReducer; // exporting store