import { app } from "@/firebase/firebase";
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  type User,
} from "firebase/auth";
import { create } from "zustand";
import { persist } from "zustand/middleware";

const authInstance = getAuth(app);

type AuthStoreState = {
  email: string | null;
  user: User | null;
};

type AuthStoreActions = {
  setEmail: (email: string) => void;
  sigInUser: (email: string, password: string) => Promise<void>;
  signOutUser: () => Promise<void>;
};

type AuthStore = AuthStoreState & AuthStoreActions;

const authStore = create<AuthStore>()(
  persist(
    (set) => ({
      email: null,
      user: null,
      setEmail: (value: string) => set(() => ({ email: value })),
      sigInUser: async (email: string, password: string) => {
        const userCredential = await signInWithEmailAndPassword(
          authInstance,
          email,
          password
        );
        return set(() => ({ user: userCredential.user }));
      },
      signOutUser: async () => {
        await signOut(authInstance);
        return set(() => ({ user: null }));
      },
    }),
    { name: "auth-store" }
  )
);

export { authStore };
