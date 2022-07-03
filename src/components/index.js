import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const Index = () => {
  const [data, setData] = useState([]); // save as array so we can loop through array and find what we need :)
  const [inputChatId, setInputChatId] = useState("");
  const [userChat, setUserChat] = useState([]);
  useEffect(() => {
    axios
      .get("../../conversation.json")
      .then((res) => setData(res.data))
      .catch((err) => console.log("Error!", err));
    console.log("here is your data: ", data);
  }, []);

  const searchId = (event) => {
    event.preventDefault();
    for (let i in data) {
      if (data[i].chatid === inputChatId) {
        console.log("your results: ", data[i]);
        setUserChat(data[i]); // need to change this to array so we can use map function to display results
      } else console.log("no results found"); // this will later be displayed on the webpage instead of console.log
    }
  };

  return (
    <form onSubmit={searchId}>
      <input
        type="text"
        value={inputChatId}
        onChange={(e) => setInputChatId(e.target.value)}
      />
      <button>load chat</button>
    </form>
  );
};

export default Index;

//notes:
// next step: display results
