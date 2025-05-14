import { NikeIcon, JumpmanIcon } from "@/assets/icons";
import useInput from "@/components/Input";

export default function SignInPage() {
  const [email, Email] = useInput({
    name: "email",
    type: "text",
    placeholder: "Email",
  });
  const [password, Password] = useInput({
    name: "password",
    type: "password",
    placeholder: "Password",
  });

  console.log(email, password);
  return (
    <div className="w-[400px] mx-auto mt-6">
      <div className="flex gap-4">
        <NikeIcon className="w-11 h-11" />
        <JumpmanIcon className="w-11 h-11" />
      </div>
      <p className="text-3xl font-normal mt-4 tracking-wider">
        Enter your email to join us or sign in.
      </p>
      <div className="mt-4">
        <div className="mb-3">{Email}</div>
        <div>{Password}</div>
      </div>
      <div className="mt-5">
        <button className="bg-black rounded-lg text-white px-6 py-1 cursor-pointer">
          Submit
        </button>
      </div>
      <p className="text-[#757575] text-sm mt-4">
        By continuing, I agree to Nike’s Privacy Policy and Terms of Use.
      </p>
    </div>
  );
}
