import { useState } from "react";
import dayjs from "dayjs";
import { Chatbot } from "supersimpledev";
import loadingImage from "../assets/Loading_icon.gif";
import "./ChatInput.css";

export function ChatInput({ chatMessages, setChatMessages }) {
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function saveInputText(event) {
    setInputText(event.target.value);
  }

  // function sendMessage() {
  async function sendMessage() {
    if (isLoading || inputText === "") {
      return;
    }

    // Set isLoading to true at the start, and set it to
    // false after everything is done.
    setIsLoading(true);

    setInputText("");

    const newChatMessages = [
      ...chatMessages,
      {
        message: inputText,
        sender: "user",
        id: crypto.randomUUID(),
        time: dayjs().valueOf(),
      },
    ];

    //setChatMessages(newChatMessages);

    // const response = Chatbot.getResponse(inputText);
    //const response = await Chatbot.getResponseAsync(inputText);
    setChatMessages([
      ...newChatMessages,
      {
        message: <img src={loadingImage} className="loading-icon" />,
        sender: "robot",
        id: crypto.randomUUID(),
      },
    ]);

    const response = await Chatbot.getResponseAsync(inputText);
    setChatMessages([
      ...newChatMessages,
      {
        message: response,
        sender: "robot",
        id: crypto.randomUUID(),
        time: dayjs().valueOf(),
      },
    ]);
    setIsLoading(false);
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      sendMessage();
    } else if (event.key === "Escape") {
      setInputText("");
    }
  }

  function clear() {
    setInputText("");
  }

  return (
    <div className="chat-input-container">
      <input
        placeholder="Send a message to Chatbot"
        size="30"
        onChange={saveInputText}
        onKeyDown={handleKeyDown}
        value={inputText}
        className="chat-input"
      />
      <button className="send-button" onClick={sendMessage}>
        Send
      </button>
      <button className="reset-button" onClick={clear}>
        Clear
      </button>
    </div>
  );
}
