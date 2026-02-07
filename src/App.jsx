import { useState } from "react";
import { ChatInput } from "./components/chatinput.jsx";
import ChatMessages from "./components/ChatMessages";
import "./App.css";

// function ChatMessages({ chatMessages }) {
//   const ChatMessagesRef = React.useRef(null);
//   React.useEffect(() => {
//     const containerElem = ChatMessagesRef.current;
//     if (containerElem) {
//       containerElem.scrollTop = containerElem.scrollHeight;
//     }
//   }, [chatMessages]);

//   return (
//     <div className="chat-message-container" ref={ChatMessagesRef}>
//       {chatMessages.map((chatMessage) => {
//         return (
//           <ChatMessage
//             message={chatMessage.message}
//             sender={chatMessage.sender}
//             key={chatMessage.id}
//           />
//         );
//       })}
//     </div>
//   );
// }

function App() {
  const [chatMessages, setChatMessages] = useState([]);
  // const [chatMessages, setChatMessages] = array;
  // const chatMessages = array[0];
  // const setChatMessages = array[1];

  return (
    <div className="app-container">
      {chatMessages.length === 0 && (
        <p className="welcome-message">
          Welcome to the chatbot project! Send a message using the textbox
          below.
        </p>
      )}
      <ChatMessages chatMessages={chatMessages} />
      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
    </div>
  );
}

export default App;
