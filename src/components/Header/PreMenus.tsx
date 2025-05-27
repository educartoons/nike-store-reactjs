import { authStore } from "@/store/authStore";
import { useNavigate } from "react-router";

const ListItem = ({
  text,
  onClick,
}: {
  text: string;
  onClick: () => void | Promise<void>;
}) => (
  <li
    onClick={onClick}
    className="text-text-secondary text-xs py-1 hover:text-text-primary cursor-pointer"
  >
    {text}
  </li>
);

const HelpMenu = () => {
  const navigate = useNavigate();

  const HELP_ITEMS = [
    {
      name: "Order Status",
      fn: () => navigate("/"),
    },
    {
      name: "Shipping & Delivery",
      fn: () => navigate("/"),
    },
    {
      name: "Returns",
      fn: () => navigate("/"),
    },
    {
      name: "Order Cancellation",
      fn: () => navigate("/"),
    },
    {
      name: "Size Charts",
      fn: () => navigate("/"),
    },
    {
      name: "Contact Us",
      fn: () => navigate("/"),
    },
    {
      name: "Membership",
      fn: () => navigate("/"),
    },
    {
      name: "Promotions & Discounts",
      fn: () => navigate("/"),
    },
    {
      name: "Product Advice",
      fn: () => navigate("/"),
    },
    {
      name: "Send Us Feedback",
      fn: () => navigate("/"),
    },
  ];

  return (
    <div>
      <h2>Help</h2>
      <ul>
        {HELP_ITEMS.map((value, index) => (
          <ListItem onClick={value.fn} key={index} text={value.name} />
        ))}
      </ul>
    </div>
  );
};

const ProfileMenu = () => {
  const navigate = useNavigate();
  const signOut = authStore((state) => state.signOutUser);

  const PROFILE_ITEMS = [
    {
      name: "Profile",
      fn: () => navigate("/profile"),
    },
    {
      name: "Orders",
      fn: () => navigate("/"),
    },
    {
      name: "Favorites",
      fn: () => navigate("/"),
    },
    {
      name: "Inbox",
      fn: () => navigate("/"),
    },
    {
      name: "Experiences",
      fn: () => navigate("/"),
    },
    {
      name: "Account Settings",
      fn: () => navigate("/"),
    },
    {
      name: "Log Out",
      fn: () => signOut(),
    },
  ];

  return (
    <div>
      <h2>Account</h2>
      <ul>
        {PROFILE_ITEMS.map((value, index) => (
          <ListItem onClick={value.fn} key={index} text={value.name} />
        ))}
      </ul>
    </div>
  );
};

export { HelpMenu, ProfileMenu };
