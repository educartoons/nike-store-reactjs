import { twc, type TwcComponentProps } from "react-twc";
import { cva, type VariantProps } from "class-variance-authority";

const inputError = cva("text-[#d30005] pl-3 text-sm mt-2", {
  variants: {},
});

type ErrorProps = TwcComponentProps<"div"> & VariantProps<typeof inputError>;

const InputError = twc.div<ErrorProps>(() => inputError());

export { InputError };
