const { Component } = require("react");


// use of props in fn
function List(props){

        return (
            <ul>
                {/* <!--<ListItem taskVal={this.state.tempTask}/>--> */}
                {props.tasks.map((el) => {
                    return <ListItem  taskVal={el}/>;
                })};
            </ul>
        );
};



// class List extends React.Component{
//     state ={
//         taskData:[
//             "temp task v1",
//             "temp task v2",
//             "temp task v3",
//             "temp task v4",
//             "temp task v5",
//         ],
//         // tempTask:"This is a temp task"
//     };

//     render(){
//         return (
//             <ul>
//                     {/* apna child(ListItem) ko tempTask as a props dai gaa */}
//                 {/* <!--<ListItem taskVal={this.state.tempTask}/>--> */}
                
//                 {
//                     // for each element of taskData Array map() fn is returning -> a ListItem component 
//                     this.state.taskData.map( 
//                         // Arrow fn
//                         (el)=>{
//                             // And each Component(i.e, ListItem) take a props that is taskVal(which is the value of ea ch index of array taskData in state of this class) 

//                         return <ListItem taskVal = {el} />
//                     });  // this map() fn will return 5 listItems joo yaha padra honga 

//                     // yaa aa jao gaa upar vala map fn ki vaja se
//                     // <ListItem taskVal = {"temp task v1"} />
//                     // <ListItem taskV+al = {"temp task v2"} />
//                     // <ListItem taskVal = {"temp task v3"} />
//                     // <ListItem taskVal = {"temp task v4"} />
//                     // <ListItem taskVal = {"temp task v5"} />

//                 }
//             </ul>
//         );
//     };
// };