import dayjs from "dayjs";
import userImage from "../assets/harshit.jpeg";
import robotImage from "../assets/robot.png";
import "./ChatMessage.css";

export function ChatMessage({ message, sender, time }) {
  // const message = props.message;
  // const sender = props.sender;
  // const { message, sender } = props;

  /*
              if (sender === 'robot') {
                return (
                  <div>
                    <img src="robot.png" width="50" />
                    {message}
                  </div>
                );
              }
              */

  return (
    <div
      className={sender === "user" ? "chat-message-user" : "chat-message-robot"}
    >
      {sender === "robot" && (
        <img src={robotImage} className="chat-message-profile" />
      )}
      <div className="chat-message-text">
        {message}

        {/* The "time && (" check is optional. I added it just to be safe. */}
        {time && (
          <div className="chat-message-time">{dayjs(time).format("h:mma")}</div>
        )}
      </div>
      {sender === "user" && (
        <img src={userImage} className="chat-message-profile2" />
      )}
    </div>
  );
}
