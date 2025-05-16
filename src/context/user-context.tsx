import { createContext, useContext, useState } from "react";

interface IUser {
  email: string;
  first_name?: string;
  last_name?: string;
}

interface UserContextProps {
  user: IUser | null;
  handleSetUserEmail: (email: string) => void;
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<IUser | null>(null);

  const handleSetUserEmail = (email: string) => {
    setUser({
      ...user,
      email: email,
    });
  };

  return (
    <UserContext.Provider value={{ user: user, handleSetUserEmail }}>
      {children}
    </UserContext.Provider>
  );
}

function useUserContext() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUserContext must be used within a UserProvider");
  }
  return context;
}

export { useUserContext, UserProvider };
