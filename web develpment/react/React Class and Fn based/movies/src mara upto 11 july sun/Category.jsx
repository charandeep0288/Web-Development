import React from "react";

class Category extends React.Component{

    state = {
        allGenre: ["Action", "Comedy", "Romance", "Thriller", "Horror"],
    }
    render(){
        return (
            // <!-- list Group -->
            <ul class="list-group">

                {this.state.allGenre.map((el) => {
                    return (
                        <li class="list-group-item" key={el}>
                            {el}
                        </li>
                    );
                })}

            </ul>
        );
    }
    
}

export default Category;