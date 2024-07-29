import { Contact } from "./Contact";

const USERS = [
  { username: "prabhat" },
  { username: "suryansh" },
  { username: "ashutosh" },
  { username: "prashant" },
  { username: "sumit" },
];
export const Contacts = () => {
  return (
    <div className="flex flex-col">
      {USERS.map((item, idx) => (
        <Contact key={idx} username={item.username} />
      ))}
    </div>
  );
};
