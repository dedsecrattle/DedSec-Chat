import Avatar from "react-avatar";
import { FaCircle } from "react-icons/fa";
import useConversation from "../store/store";

export const Contact = ({ username }: { username: string }) => {
  const setSelectedConversation = useConversation(
    (state) => state.setSelectedConversation
  );

  return (
    <div
      className="flex items-center gap-4 border-b border-slate-300 p-2 bg-white"
      onClick={() => setSelectedConversation(username)}
    >
      <Avatar name={username} size="30" round={true} />
      <p>{username}</p>
      <FaCircle className="text-green-600" />
    </div>
  );
};
