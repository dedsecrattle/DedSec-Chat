import { Contact } from "./Contact";

type ContactProps = {
  users: string[];
};

export const Contacts = (props: ContactProps) => {
  return (
    <div className="flex flex-col w-1/4 h-full">
      {props.users.map((item, idx) => (
        <Contact key={idx} username={item} />
      ))}
    </div>
  );
};
