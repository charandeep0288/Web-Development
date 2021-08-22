import { useState, useEffect } from "react";
import { firestore } from "./firebase"; //default export nahi kia tha iss lia asa likha hai
import "./App.css";

function App() {

  let [posts, setPosts] = useState([]);

  // firestore majority functions are promise based

  useEffect(() => {
    // console.log(firestore.collection("posts"));

    let f = async () => {
      await firestore.collection("posts").onSnapshot((querySnapShot) => {
        let tempArr = [];
        // querySnapShot -> yaa ik object hai
        // querySnapShot -> gives .forEach() fn -> function hai joo firebase ka document pai traverse kar raha hai sirf
        //  doc -> document hai
        querySnapShot.forEach((doc) => {
          // console.log({
          //   id: doc.id, // id of that particular document on firebase
          //   data: doc.data(), // data() fn hai ik & data of that particular document
          // });

          tempArr.push({
            id: doc.id,
            data: doc.data(),
          });

        }); // collection => gives reference of that collection & we get data using .get() fn that is promise based function

        // console.log(querySnapShot);

        setPosts(tempArr);
      });

    };

    f();

  }, []);

  return (
    <div>
      <ul>
        {
          posts.map((el) => {
            return <li key={el.id}>{el.data.Body}</li>
          })
        }
      </ul>

      <input
        placeholder="What's on your mind ?"
        type="text"
        onKeyDown={(e) => {
          console.log(e.code);
          if (e.code === "Enter") {
            // joo bhi likha hua hai woo muja firebase me dalna hai
            let post = e.currentTarget.value;
            firestore.collection("posts").add({ Body: post });
            e.currentTarget.value = "";
          }

        }} />
    </div>
  );
}

export default App;
