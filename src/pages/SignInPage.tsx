import { useRef, useState, type RefObject } from "react";
import { NikeIcon, JumpmanIcon } from "@/assets/icons";
import useClickOutside from "@/hooks/useClickOutside";
import { isEmailValid } from "@/utils/utils";

export default function SignInPage() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError("");
    setEmail(e.target.value);
    if (!isEmailValid(e.target.value)) {
      setError("Invalid email address");
    }
  };

  const handleClickOutside = () => {
    if (email.length === 0) {
      setError("Email is required");
    } else {
      setError("");
    }
  };

  useClickOutside(inputRef as RefObject<HTMLElement>, handleClickOutside);

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
        <input
          ref={inputRef}
          value={email}
          onChange={handleChange}
          className="border border-[#757575] rounded-lg h-14 px-3 block w-full outline-0"
          style={{
            border: error !== "" ? "1px solid red" : "1px solid #757575",
            transition: "outline 0.3s ease",
          }}
          type="text"
          placeholder="email"
        />
        {error !== "" && <p className="text-red-500 text-sm mt-2">{error}</p>}
      </div>
      <p className="text-[#757575] text-sm mt-4">
        By continuing, I agree to Nike’s Privacy Policy and Terms of Use.
      </p>
    </div>
  );
}
