import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import {
  type User,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { app, db } from "@/firebase/firebase";
import { doc, setDoc } from "firebase/firestore";

interface AuthContextProps {
  user: User | null;
  signOut: () => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (
    email: string,
    password: string,
    firstName: string,
    lastName: string
  ) => Promise<void>;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

const authInstance = getAuth(app);

function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const signUpHandler = async (
    email: string,
    password: string,
    firstName: string,
    lastName: string
  ) => {
    const userCredential = await createUserWithEmailAndPassword(
      authInstance,
      email,
      password
    );
    const user = userCredential.user;
    await setDoc(doc(db, "users", user.uid), {
      first_name: firstName,
      last_name: lastName,
      email: user.email,
    });
    await updateProfile(user, { displayName: `${firstName} ${lastName}` });
    setUser(user);
  };

  const signInHandler = async (email: string, password: string) => {
    const userCredential = await signInWithEmailAndPassword(
      authInstance,
      email,
      password
    );
    setUser(userCredential.user);
  };

  const signOutHandler = async () => {
    try {
      await signOut(authInstance);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const authLister = onAuthStateChanged(authInstance, (authUser) => {
      console.log(authUser);
      setUser(authUser);
      setLoading(false);
    });
    return () => {
      authLister();
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        signOut: signOutHandler,
        signIn: signInHandler,
        signUp: signUpHandler,
      }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
}

function useAuthContext() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuthContext must be used within a AuthProvider");
  }
  return context;
}

export { AuthProvider, useAuthContext };
