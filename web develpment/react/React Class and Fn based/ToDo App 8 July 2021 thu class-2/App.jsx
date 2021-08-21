// import Input from "./Input";

class App extends React.Component {
    state ={
        taskData: [],
    }

    // yaa fn -> joo bhi value daata hai, usa taskData mai store kar raha hai in state of this class
    taskHandler = (value) => {
        let tempArr = this.state.taskData;
        tempArr.push(value);
        this.setState({taskData:tempArr});
    }


    removeTask = (task) => {
        let filteredArr = this.state.filter((el) => {
            return el != task;
        });

        this.setState({task: filteredArr});
    };

    render(){
    return (
        <div>
            {/* COMPONENT COMPOSITION -> Input ko App ka andar use kia hai (smaller component(Input) koo badra component(App) mai use kia )   */}
            {/* this.taskHandler -> fn hai isi class kaa, joo as a props pass kar raha hu Input component koo named as taskHandlerFunction*/}
            <Input taskHandlerFunction={this.taskHandler}/>

            <List tasks={this.state.taskData}/>
        </div>
    );
    }
};


ReactDOM.render(<div>
    <App />
</div>, document.querySelector("#root"));



    // // class name is same as file name (taki html mai & react component mai differ kar pai)
    // class App extends React.Component{
    //     render(){
    //         return ();
    //     }
    // }