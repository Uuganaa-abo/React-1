import { FiSun } from "react-icons/fi";
import { IoMenu } from "react-icons/io5";
import { Menu } from "./MobileMenu";
// import Test from "./Test";
import { useState } from "react";

export function Header() {
  // const [isOpen, setIsOpen] = useState(false);

  // const handleClick = () => {
  //   setIsOpen(!isOpen);
  // };

  return (
    <div className="flex justify-between bg-slate-400 text-white sticky top-0">
      <div className="font-extrabold text-2xl">&lt;SS/&gt;</div>
      <div className="flex justify-between gap-5">
        <div className="hidden lg:flex gap-10">
          <div>About</div>
          <div>Work</div>
          <div>Testimonials</div>
          <div>Contact</div>
        </div>

        <div className="hidden lg:flex gap-10">
          <FiSun
            id="White"
            className="text-[black] size-10"
            onClick={() => {
              document.getElementById("White").style.display = "none, bg";
            }}
          />
          <button className="bg-slate-800 text-white">Dowload CV</button>
        </div>
      </div>
      <div className="lg:hidden">
        <Menu />
        {/* <button onClick={handleClick}>
          <IoMenu className="size-9" />
        </button>
        <Test isOpen={isOpen} setIsOpen={setIsOpen} handleClick={handleClick} /> */}
      </div>
    </div>
  );
}
