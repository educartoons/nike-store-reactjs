const HELP_ITEMS = [
  "Order Status",
  "Shipping & Delivery",
  "Returns",
  "Order Cancellation",
  "Size Charts",
  "Contact Us",
  "Membership",
  "Promotions & Discounts",
  "Product Advice",
  "Send Us Feedback",
];

const ListItem = ({ text }: { text: string }) => (
  <li className="text-text-secondary text-xs py-1 hover:text-text-primary cursor-pointer">
    {text}
  </li>
);

const HelpMenu = () => (
  <div>
    <h2>Help</h2>
    <ul>
      {HELP_ITEMS.map((value, index) => (
        <ListItem key={index} text={value} />
      ))}
    </ul>
  </div>
);

export { HelpMenu };
