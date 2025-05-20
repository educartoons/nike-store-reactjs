import { useState, type MouseEvent } from "react";
import { useSnackbar } from "notistack";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { NikeIcon, JumpmanIcon } from "@/assets/icons";
import ErrorMessage from "./ErrorMessage";
import { useUserContext } from "@/context/user-context";
import { useNavigate } from "react-router";
import { Input } from "./library/Input";
import { InputError } from "./library/InputError";
import { useAuthContext } from "@/context/auth-context";
import { FirebaseError } from "firebase/app";

const schema = z.object({
  firstName: z.string().nonempty("Required"),
  lastName: z.string().nonempty("Required"),
  password: z
    .string()
    .nonempty("Required")
    .min(8, "Password must be at least 8 characters long"),
});

type Schema = z.infer<typeof schema>;

export default function JoinUs() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<Schema>({
    mode: "onBlur",
    resolver: zodResolver(schema),
  });
  const { user } = useUserContext();
  const { signUp } = useAuthContext();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const onSubmit = async (data: Schema) => {
    if (user?.email) {
      try {
        setLoading(true);
        setError(null);
        await signUp(user.email, data.password, data.firstName, data.lastName);
        enqueueSnackbar("You were signed up succesfuully!", {
          anchorOrigin: {
            horizontal: "right",
            vertical: "top",
          },
          variant: "success",
        });
        navigate("/");
      } catch (error) {
        if (error instanceof FirebaseError) {
          if (error.code === "auth/email-already-in-use") {
            setError("User already registered");
          } else {
            setError("Something went wrong");
          }
        }
      } finally {
        setLoading(false);
      }
    }
  };

  const handleEmailEdit = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    navigate(-1);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-[400px] mx-auto mt-6">
      <div className="flex gap-4">
        <NikeIcon className="w-11 h-11" />
        <JumpmanIcon className="w-11 h-11" />
      </div>
      <p className="text-3xl font-normal mt-4 tracking-wider">
        Now let's make you a Nike Member.
      </p>
      <p className="mt-2">
        {user?.email}{" "}
        <a
          onClick={handleEmailEdit}
          className="underline underline-offset-4 text-text-secondary"
          href=""
        >
          Edit
        </a>
      </p>
      <div className="mt-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Input
              placeholder="First Name"
              {...register("firstName")}
              error={errors.firstName !== undefined}
            />
            {errors.firstName ? (
              <InputError>{errors.firstName.message}</InputError>
            ) : null}
          </div>
          <div>
            <Input
              placeholder="Last Name"
              {...register("lastName")}
              error={errors.lastName !== undefined}
            />
            {errors.lastName ? (
              <InputError>{errors.lastName.message}</InputError>
            ) : null}
          </div>
        </div>
        <div className="mt-3">
          <Input
            placeholder="Password"
            type="password"
            {...register("password")}
            error={errors.password !== undefined}
          />
          {errors.password ? (
            <InputError>{errors.password.message}</InputError>
          ) : null}
        </div>
      </div>
      <p className="text-[#757575] text-sm mt-4">
        By continuing, I agree to Nike’s Privacy Policy and Terms of Use.
      </p>
      {error && (
        <div className="mt-2">
          <ErrorMessage message={error} />
        </div>
      )}
      <div className="mt-5 flex justify-end">
        <button className="bg-black rounded-full text-white px-6 py-2 cursor-pointer">
          {loading ? "Signing Up..." : "Continue"}
        </button>
      </div>
    </form>
  );
}
