// we have reducer for each state

// have 2 things intial state, and action
// this fn have previous state 
export const counterReducer = (state=10, action) => {
    if(action.type === "INCREMENT"){
        state += action.payload; // action mai joo pai load value hai usautna saa value increase hogi
    } else if (action.type === "DECREMENT"){
        state -= 1;
    }
    // console.log(state);

    return state; // return bhi karna hai state koo
};


export const authReducer = (state = false, action) => {
    if(action.type === "LOGIN"){
        state = true;
    } else if (action.type === "LOGOUT") {
        state = false;
    }
    return state;
};