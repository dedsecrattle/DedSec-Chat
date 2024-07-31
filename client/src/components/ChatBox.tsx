import { IoSend } from "react-icons/io5";
import Avatar from "react-avatar";
import useConversation from "../store/store";

const ChatBox = () => {
  const selectedUser = useConversation((state) => state.selectedConversation);
  return (
    <div className="flex flex-col items-center gap-16 flex-grow h-full border border-slate-400 p-4 rounded-2xl">
      <div className="flex items-center gap-8 w-full bg-blue-200 p-2">
        <Avatar name="Prabhat" round={true} size="35" textSizeRatio={2.75} />
        <p className="p-1 flex-grow">
          {selectedUser === null ? "No User Selected" : selectedUser}
        </p>
      </div>
      <div className="flex-grow">
        <p>Messages</p>
      </div>
      <div className="flex w-full">
        <input
          type="text"
          placeholder="Type Your Message"
          className="py-4 rounded-lg flex-grow"
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
