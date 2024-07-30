import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
} from "react";
import { UserContext } from "./UserContext";
import { Socket, io } from "socket.io-client";

interface SocketContextType {
  socket: Socket | null;
  onlineUsers: string[];
}

export const SocketContext = createContext<SocketContextType>({
  socket: null,
  onlineUsers: [],
});

interface SocketContextProviderProps {
  children: ReactNode;
}

export const SocketContextProvider: React.FC<SocketContextProviderProps> = ({
  children,
}) => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [onlineUsers, setOnlineUsers] = useState<string[]>([]);
  const { username, id } = useContext(UserContext);

  useEffect(() => {
    if (username) {
      const newSocket = io("http://localhost:3000", {
        query: {
          id: id,
          username: username,
        },
      });

      setSocket(newSocket);

      newSocket.on("getOnlineUsers", (users: string[]) => {
        setOnlineUsers(users);
      });

      return () => {
        newSocket.close();
      };
    } else {
      if (socket) {
        socket.close();
        setSocket(null);
      }
    }
  }, [username]);

  return (
    <SocketContext.Provider value={{ socket, onlineUsers }}>
      {children}
    </SocketContext.Provider>
  );
};
