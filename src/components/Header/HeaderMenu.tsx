import { useState } from "react";
import { MENU_ITEMS } from "@/db/db";

export default function HeaderMenu() {
  const [items] = useState(MENU_ITEMS);
  return (
    <nav>
      <ul className="flex gap-4 py-4">
        {items.map((item, index) => (
          <li key={index}>
            <a
              className="font-medium text-text-primary hover:underline hover:underline-offset-7"
              href=""
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
