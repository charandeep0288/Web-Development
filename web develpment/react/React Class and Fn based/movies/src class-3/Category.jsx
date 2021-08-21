import React from "react";

class Category extends React.Component {

  state = {
    allGenre: [],
  };

  // // 1-time phase in cycle
  // componentDidMount(){
  //   // api call kai lia server chal raha hona chahia
  //   // api call => (msg bhejna=> get )
  //   fetch("/genre").then(function(res){
  //     return res.json();
  //   }).then(function(json){
  //     console.log(json);
  //   }); // async fn return promise fetch & res 
  // }

  // 1-time phase in cycle => componentDidMount
  componentDidMount() {
    // api call kai lia server chal raha hona chahia
    // api call => (msg bhejna=> get )
    fetch("/genre").then(function (res) {
      return res.json();
    }).then((json) => {
      this.setState({ allGenre: json })
    }); // async fn return promise fetch & res.json(), so humna udar then use kia hai 
  };

  render() {
    return (
      <ul class="list-group">


        {this.state.allGenre.map((el) => {
          return (
            <li class="list-group-item" key={el._id}>
              {el.name}
            </li>
          );
        })}


      </ul>
    );
  }
}

export default Category;



// function(json){
//   console.log(json);
// }