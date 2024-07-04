import { FiSun } from "react-icons/fi";
import { IoMenu } from "react-icons/io5";
export function Header() {
  return (
    <div className="flex justify-between bg-slate-900 text-white">
      <div>Logo</div>
      <div className="flex justify-between gap-5">
        <div className="hidden lg:flex gap-10">
          <div>About</div>
          <div>Work</div>
          <div>Testimonials</div>
          <div>Contact</div>
        </div>

        <div className="hidden lg:flex gap-10">
          <FiSun className="text-[black] size-10" />
          <button className="bg-slate-800 text-white">Dowload CV</button>
        </div>
      </div>
      <div className="lg:hidden"><IoMenu className="size-6"/></div>
    </div>
  );
}
