import { CircleAlert } from "lucide-react";

export default function ErrorMessage({ message }: { message: string }) {
  return (
    <div className="bg-[#f5f5f5] rounded-lg py-3 px-3 flex gap-2 font-medium">
      <CircleAlert color="#d43f21" /> {message}
    </div>
  );
}
