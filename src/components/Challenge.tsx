import { FirebaseError } from "firebase/app";
import { NikeIcon, JumpmanIcon } from "@/assets/icons";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useNavigate } from "react-router";
import { useSnackbar } from "notistack";
import ErrorMessage from "./ErrorMessage";
import { useState } from "react";
import { authStore } from "@/store/authStore";

const schema = z.object({
  password: z
    .string()
    .nonempty("Email is required")
    .min(8, "Password must be at least 8 characters long"),
});

type Schema = z.infer<typeof schema>;

export default function Challenge() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<Schema>({
    mode: "onBlur",
    resolver: zodResolver(schema),
  });
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const [error, setError] = useState<string | null>(null);
  const signIn = authStore((state) => state.sigInUser);
  const userEmail = authStore((state) => state.email);

  const onSubmit = async (data: Schema) => {
    if (userEmail) {
      try {
        await signIn(userEmail, data.password);
        enqueueSnackbar("You were signed in succesfully!", {
          anchorOrigin: {
            horizontal: "right",
            vertical: "top",
          },
          variant: "success",
        });
        navigate("/");
      } catch (error) {
        if (error instanceof FirebaseError) {
          if (error.code === "auth/invalid-credential") {
            setError("Your credentials are invalid");
          }
        }
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-[400px] mx-auto mt-6">
      <div className="flex gap-4">
        <NikeIcon className="w-11 h-11" />
        <JumpmanIcon className="w-11 h-11" />
      </div>
      <p className="text-3xl font-normal mt-4 tracking-wider">
        What's your password?
      </p>
      <p className="mt-2">{userEmail}</p>
      <div className="mt-4">
        <div className="mb-3">
          {error && (
            <div className="mb-4">
              <ErrorMessage message={error} />
            </div>
          )}
          <input
            className="border border-[#757575] rounded-lg h-14 px-3 block w-full outline-0"
            placeholder="Password"
            type="password"
            {...register("password", { required: true })}
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-2">
              {errors.password.message}
            </p>
          )}
        </div>
      </div>
      <p className="text-[#757575] text-sm mt-4">
        <a href="" className="underline underline-offset-4">
          Forgot Password?
        </a>
      </p>
      <div className="mt-5 flex justify-end">
        <button className="bg-black rounded-full text-white px-6 py-2 cursor-pointer">
          Sign In
        </button>
      </div>
    </form>
  );
}
