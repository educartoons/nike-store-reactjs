interface WrapperProps {
  children: React.ReactNode;
}

export default function Wrapper({ children }: WrapperProps) {
  return (
    <div className="w-full px-10 xl:w-[1200px] xl:mx-auto">{children}</div>
  );
}
