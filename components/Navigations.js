const { default: Link } = require("next/link");

const items = [
  {
    name: "About",
    link: "#about",
  },
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
  {
    name: "Contact",
    link: "#contact",
  },
];

export function Item() {
  return (
    <div className="gap-4 flex flex-col font-bold text-base lg:flex-row">
      {items.map((item) => (
        <Link key={item.link} href={item.link} className="text-slate-500 ">
          {item.name}
        </Link>
      ))}
    </div>
  );
}
