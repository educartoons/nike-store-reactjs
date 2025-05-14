import { useState, type ChangeEvent } from "react";

interface InputProps {
  name: string;
  placeholder: string;
  type: "text" | "password";
}

export default function useInput({ name, placeholder, type }: InputProps) {
  const [state, setState] = useState({
    error: "",
    value: "",
  });
  const { error, value } = state;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      value: e.target.value,
      error: "",
    });
  };

  const handleBlur = () => {
    if (state.value === "") {
      setState({
        ...state,
        error: `${name} is required`,
      });
    }
  };

  const input = (
    <>
      <input
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        className="border border-[#757575] rounded-lg h-14 px-3 block w-full outline-0"
        style={{
          border: error !== "" ? "1px solid red" : "1px solid #757575",
          transition: "outline 0.3s ease",
        }}
        name={name}
        placeholder={placeholder}
        type={type}
      />
      {error !== "" && <p className="text-red-500 text-sm mt-2">{error}</p>}
    </>
  );

  return [value, input] as const;
}
