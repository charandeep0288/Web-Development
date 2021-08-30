export const incrementActionCreator = (value) => {
    // this function is returning an action 
    return {
        type: "INCREMENT",
        payload: value,
    };
};

export const decrementActionCreator = () => {
    return {
        type: "DECREMENT",
    };
};

export const loginActionCreator = () => {
    return {
        type: "LOGIN",
    };
};

export const logoutActionCreator = () => {
    return { 
        type: "LOGOUT",
    };
};