class Counter extends React.Component{
    state = {
        currVal: 0,
    }

    render(){
        return(
            <div>

                <button onClick = {
                    ()=> {
                        this.setState({currVal: this.state.currVal + 1});
                    }
                }>+</button>

                <p>{this.state.currVal}</p>

                <button onClick = {
                    ()=> {
                        this.setState({currVal: this.state.currVal - 1});
                    }
                }>-</button>

                </div>
        );
    };
};



ReactDOM.render(<div>
    <Counter/>
    <hr/>
    <Counter/>
    <hr/>
    <Counter/>
    <hr/>
    <Counter/>
</, document.querySelector("#root"));
