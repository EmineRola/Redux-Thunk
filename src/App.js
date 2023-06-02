
import { useEffect } from "react"
import axios from "axios";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { ActionTypes } from "./app/constants/actionTypes";
import { setLoading } from "./app/actions/chatActions";
import { getUsers } from "./app/actions/chatActions";
import { getPosts } from "./app/actions/chatActions";


function App() {
  const storeData = useSelector((store) => store.chatReducer);
  console.log(storeData);
  const dispatch = useDispatch();

  //birleşen ekrana basıldığında verileri çek

  useEffect(() => {
    //storedaki loading değerini rue yapar
    dispatch(setLoading());


    //veri çekme isteği
    dispatch(getUsers());

    dispatch(getPosts());
  }, []);

  return (
    <div className="App">
      <h1>Thunk </h1>
      <h1>Kullanıcılar</h1>
      {storeData.users.map((user) =>
        <h5>{user.name}</h5>
      )}
      <h1>Postlar</h1>
      {storeData.posts.map((post) =>

        <p>{post.title}</p>)}
    </div>
  );
}

export default App;
