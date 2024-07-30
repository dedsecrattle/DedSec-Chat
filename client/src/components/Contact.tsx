import Avatar from "react-avatar";
import { FaCircle } from "react-icons/fa";

export const Contact = ({ username }: { username: string }) => {
  return (
    <div className="flex items-center gap-4 border-b border-slate-300 p-2 bg-white">
      <Avatar name={username} size="30" round={true} />
      <p>{username}</p>
      <FaCircle className="text-green-600" />
    </div>
  );
};
