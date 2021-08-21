
// console.log(React.Component);

class Input extends React.Component {
    state = {
        task: "",
    };

    // how to use props in class ?
    // this.props   <- likhna se

    render() {
        return (
            <div>
                {/* value={this.state.task} yaa likhna se type nahi kar paa raha input field mai  & agar hata daa iss attribute koo tho type kar paa raha hai*/}

                {/* input field mai -> rerender hoo raha hai type karna pai -> tho html dubara aa rahi hai & tho intially state empty task tho tho woo empty hi raha jaa raha hai => so we use onChange */}
                {/* onChange fn input field mai value change hona pai task mai store kar raha hai voo value */}
                <input type="text" value={this.state.task} onChange={(e) => { this.setState({ task: e.currentTarget.value }) }}></input>


                {/* <button onClick={() => { console.log(this.state.task) }}>Submit</button> */}

                {/* using props in class calling fn taskHandlerFunction(fn of App component joo taskData Array of App class state mai store hon ga) with argument iss class ki state */}
                <button onClick={() => { this.props.taskHandlerFunction(this.state.task) }}>Submit</button>
            </div>
        );
    };
};


// export for frontend (will not work for backend)
// export default Input;