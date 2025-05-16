import { twc, type TwcComponentProps } from "react-twc";
import { cva, type VariantProps } from "class-variance-authority";

const input = cva(
  "border border-[#757575] rounded-lg h-14 px-3 block w-full outline-0",
  {
    variants: {
      error: {
        false: null,
        true: "border-[#d30005]",
      },
    },
    defaultVariants: {
      error: false,
    },
  }
);

type InputProps = TwcComponentProps<"input"> & VariantProps<typeof input>;

const Input = twc.input<InputProps>(({ error }) => input({ error }));

export { Input };
