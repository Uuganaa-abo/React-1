const { default: Link } = require("next/link");

const items = [
  {
    name: "About",
    link: "/About",
  },
  {
    name: "Work",
    link: "/work",
  },
  {
    name: "Testimonials",
    link: "/testimonials",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];

export function Item() {
  return (
    <div className="flex flex-col gap-4 font-bold text-base">
      {items.map((item) => (
        <Link key={item.link} href={item.link} className="text-slate-500 ">
          {item.name}
        </Link>
      ))}
    </div>
  );
}
