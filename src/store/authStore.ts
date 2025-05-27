import { app, db } from "@/firebase/firebase";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  type User,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

const authInstance = getAuth(app);

type AuthStoreState = {
  email: string | null;
  user: User | null;
};

type AuthStoreActions = {
  setEmail: (email: string | null) => void;
  sigInUser: (email: string, password: string) => Promise<void>;
  signOutUser: () => Promise<void>;
  signUpUser: (
    email: string,
    password: string,
    firstName: string,
    lastName: string
  ) => Promise<void>;
};

type AuthStore = AuthStoreState & AuthStoreActions;

const authStore = create<AuthStore>()(
  devtools(
    persist(
      (set) => ({
        email: null,
        user: null,
        setEmail: (value: string | null) => set(() => ({ email: value })),
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
        signUpUser: async (
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
          await updateProfile(user, {
            displayName: `${firstName} ${lastName}`,
          });

          return set(() => ({ user }));
        },
      }),
      { name: "auth-store" }
    )
  )
);

export { authStore };
