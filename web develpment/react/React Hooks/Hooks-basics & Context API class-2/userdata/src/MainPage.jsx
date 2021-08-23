import React from "react";
import { Link } from "react-router-dom";

class MainPage extends React.Component {

    state = {
        userData: [],
    };

    componentDidMount() {
        fetch("/user.json").then((res) => {
            return res.json();
        }).then((json) => {
            // console.log(json);
            this.setState({ userData: json });
        });
    }

    render() {
        // return (<h1>MainPage</h1>);
        return (
            <div>
                <ul>
                    {this.state.userData.map((el) =>
                        <li key={el.id}> {/* id use karna se error nahi aya gii -> ki different li ko different id nahi dii hai */}
                            <Link to={`/user/${el.id}`}>{el.name}</Link>
                        </li>
                    )}
                </ul>
            </div>
        );
    }
}

export default MainPage;