
// // react ke components banaoge
// // unhe bolage screen  pr render hoga
// // but khapr? => div with the id root

// // ========================================================
// // CREATING NEW COMPONENT USING FUNCTION  

// //  fn return kar raha hai huma kuch html  (this concept is called JSX -> exteded JS )
// // JS mai html likh paa raha hia this concept is called JSX
// let App = function () {
//     return (
//         <div>
//             <h1>This is title</h1>
//             <h3>This is sub title</h3>
//             <p>cvkehbvfbrevibtrfvirtvifbvefbhjrvefdj fdgvfdbjh efdiugvefgdjhrevyfjdhmvehjfmdcvfdcjhbf</p>
//         </div>
//     );
// };

// // ReactDOM.render(joo conponent render karana hai, jaha yaa component render karvana hai);
// // render -> render matlab iss App kaa ik instance create karo & yaha (div with id="root") pai dikha doo
// // Render function clear the div where we are going to render(display) our component & then create a new instance of our component and dispaly in the given div
// // ReactDOM.render(<App />, document.querySelector("#root"));


// // 3 bar App component create kia ik div mai
// ReactDOM.render(<div> 
//     <App />
//     <App />
//     <App />
// </div>, document.querySelector("#root"));


// // =========================================================
// // CREATING NEW COMPONENT USING CLASS  

// // extends React.Component -> React is library uska Component vali chiz inherite kar li 
// // we can create direct function with name only inside call
// class App extends React.Component {
//     // class mai fn likha ka lia directly fn ka name likha gai
//     // all code is written in this r ender() fn
//     render() {

//         return (
//             <div>
//                 <h1>This is title</h1>
//                 <h3>This is sub title</h3>
//                 <p>cvkehbvfbrevibtrfvirtvifbvefbhjrvefdj fdgvfdbjh efdiugvefgdjhrevyfjdhmvehjfmdcvfdcjhbf</p>
//             </div>
//         );
        
//     };
// };

// ReactDOM.render(<div>
//     <App />  {/* (iski state alag hai) */}
//     <App />     {/* (iski state alag hai) */}
//     <App />   {/* (iski state alag hai) */}
// </div>, document.querySelector("#root"));



// -----------------------------------------------------
// // class type ka component create kia hai
class Counter extends React.Component {

    // <!-- we can store special data which is object which is state of current component -->
    state = {
        // initial value of state
        currVal: 0,
    }
    render() {
        // we can return only one element of each component
        return (
            <div>
                {/* jsx mai -> html mai js likhni hai tho use {} curly bracket */}
                <p>{this.state.currVal}</p>  {/* get state of current counter object */}
                <button onClick={
                    // <!-- arrow fn -->
                    () => {
                        // this.setState is a fn of React.Component, this.setState() is a fn and update value -> by new updated value
                        this.setState({ currVal: this.state.currVal + 1 });
                    }
                }>
                    +
                </button>
            </div>
        );
    };
};

// <Counter/> is like new object or instance 
ReactDOM.render(<Counter />, document.querySelector("#root"));