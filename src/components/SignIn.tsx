import { collection, getDocs, query, where } from "firebase/firestore";
import { useNavigate } from "react-router";
import { NikeIcon, JumpmanIcon } from "@/assets/icons";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { db } from "@/firebase/firebase";
import { useState } from "react";
import Spinner from "./Spinner";
import { authStore } from "@/store/authStore";

const schema = z.object({
  email: z
    .string()
    .nonempty("Email is required")
    .email("Invalid email address"),
});

type Schema = z.infer<typeof schema>;

export default function SignIn() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<Schema>({
    mode: "onBlur",
    resolver: zodResolver(schema),
  });
  const [loading, setLoading] = useState(false);
  const setEmail = authStore((state) => state.setEmail);

  const navigate = useNavigate();

  const onSubmit = async (data: Schema) => {
    setEmail(data.email);
    setLoading(true);
    const usersRef = collection(db, "users");
    const q = query(usersRef, where("email", "==", data.email));
    const querySnapshot = await getDocs(q);
    if (querySnapshot.empty) {
      navigate("/join");
    } else {
      navigate("/challenge");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-[400px] mx-auto mt-6">
      <div className="flex gap-4">
        <NikeIcon className="w-11 h-11" />
        <JumpmanIcon className="w-11 h-11" />
      </div>
      <p className="text-3xl font-normal mt-4 tracking-wider">
        Enter your email to join us or sign in.
      </p>
      <div className="mt-4">
        <div className="mb-3">
          <input
            className="border border-[#757575] rounded-lg h-14 px-3 block w-full outline-0"
            placeholder="Email address"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <p className="text-[#d30005] pl-3 text-sm mt-2">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>
      <p className="text-[#757575] text-sm mt-4">
        By continuing, I agree to Nike’s Privacy Policy and Terms of Use.
      </p>
      <div className="mt-5 flex justify-end">
        <button className="bg-black rounded-full text-white px-6 py-2 cursor-pointer w-[120px] flex justify-center">
          {loading ? <Spinner /> : "Continue"}
        </button>
      </div>
    </form>
  );
}
