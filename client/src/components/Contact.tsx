import Avatar from "react-avatar";

export const Contact = ({ username }: { username: string }) => {
  return (
    <div className="flex items-center gap-4 border-b border-slate-300 p-2">
      <Avatar name={username} size="30" round={true} />
      <p>{username}</p>
    </div>
  );
};
