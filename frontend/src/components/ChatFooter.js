import React, { useState } from "react";
import checkPageStatus from "../utils/functions";

const ChatFooter = ({ socket }) => {
  const [message, setMessage] = useState("");

  let typing = false;
  let timeout;
  const timeoutFunction = () => {
    typing = false;
    socket.emit("typing", "");
  };

  const handleTyping = (e) => {
    if (e.keyCode !== 13) {
      if (!typing) {
        typing = true;
        socket.emit(
          "typing",
          `${sessionStorage.getItem("userName")} is typing`
        );
        // socket.emit("typing", `${localStorage.getItem("userName")} is typing`);
        timeout = setTimeout(timeoutFunction, 5000);
      } else {
        clearTimeout(timeout);
      }
    }
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim() && sessionStorage.getItem("userName")) {
      // if (message.trim() && localStorage.getItem("userName")) {
      socket.emit("message", {
        text: message,
        name: sessionStorage.getItem("userName"),
        // name: localStorage.getItem("userName"),
        id: `${socket.id}${Math.random()}`,
        socketID: socket.id,
      });
    }
    checkPageStatus(message, sessionStorage.getItem("userName"));
    // checkPageStatus(message, localStorage.getItem("userName"));
    setMessage("");
  };

  return (
    <div className="chat__footer">
      <form className="form" onSubmit={handleSendMessage}>
        <input
          type="text"
          placeholder="Write message"
          className="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleTyping}
        />
        <button className="sendBtn">SEND</button>
      </form>
    </div>
  );
};

export default ChatFooter;
