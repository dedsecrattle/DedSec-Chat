import { IoSend } from "react-icons/io5";
import Avatar from "react-avatar";

const ChatBox = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-16">
      <div className="flex items-center gap-8 w-full bg-blue-200 p-2">
        <Avatar name="Prabhat" round={true} size="35" textSizeRatio={2.75} />
        <p className="p-1 flex-grow">Prabhat</p>
      </div>
      <div>
        <p>Messages</p>
      </div>
      <div className="flex">
        <input
          type="text"
          placeholder="Type Your Message"
          className="py-4 rounded-lg"
        />
        <button className="p-4 bg-black text-white rounded-lg flex items-center gap-2">
          <IoSend />
          <p>Send</p>
        </button>
      </div>
    </div>
  );
};

export default ChatBox;
