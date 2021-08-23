import React from "react";
import {Link, withRouter } from "react-router-dom";

class User extends React.Component {

    // state = {};
    state = {
        usersData: [],
    };

    componentDidMount() {

        // fetch() fn async fn hai
        fetch("/user.json").then((res) => {
            return res.json();
        }).then((json) => {
            // console.log(json);
            this.setState({ usersData: json });
        });
    }

    render() {
        let reqUser = this.state.usersData.find( // 
            (el) => el.id == this.props.match.params.id  // return woo value kara gaa jab yaa condition true hogi - IMPORTANT FOR INDUSTRIAL LEVEL
        );

        if(!reqUser) return (<div>loading.....</div>)

        console.log(reqUser);
        // return (<h1>User name</h1>);
        // return (<h1>{this.props.match.prams.id}</h1>);
        return (<div>
            <Link to="/">
                <button>Go back</button>
            </Link>
            <h1>{reqUser.name}</h1>
            <h2>Age: {reqUser.age}</h2>
            <h2>Email: {reqUser.email}</h2>
        </div>);
    };
}

export default withRouter(User); // because of params used