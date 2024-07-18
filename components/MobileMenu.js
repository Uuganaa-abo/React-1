import { useState } from "react";
import { FiNavigation } from "react-icons/fi";
import { IoIosCloseCircle } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { Item } from "./Navigations";
import { FiSun } from "react-icons/fi";
import { FiMoon } from "react-icons/fi";

export function Menu() {
  let [open, setOpen] = useState(false);

  function openMenu() {
    setOpen(true);
  }

  function closeMenu() {
    setOpen(false);
  }

  return (
    <div>
      <button onClick={openMenu}>
        <IoMenu className="size-9" />
      </button>
      <div
        className={`fixed transition-all inset-0 bg-slate-500/90 ${
          open === true ? "block" : "hidden"
        }`}
      ></div>
      <div
        className={`fixed top-0 bottom-0 transition-all w-64 text-black bg-white shadow-lg ${
          open ? "right-0" : "-right-full"
        }`}
      >
        <div className="p-3">
          <div className="flex justify-between">
            <div className="font-extrabold text-2xl">&lt;SS/&gt;</div>
            <button onClick={closeMenu} className="">
              <IoIosCloseCircle className="size-9" />
            </button>
          </div>
          <Item />
          <div className="flex justify-between">
            <p>Switch Theme</p>
            <div>
            <FiSun />
            <FiMoon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
