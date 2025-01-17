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
  const [dark, setDark] = useState(false);
  function darkOn() {
    setDark(true);
    document.documentElement.classList.add('dark')
  }
  function darkOff() {
    setDark(false);
    document.documentElement.classList.remove('dark')
  }

  return (
    <div>
      <button onClick={openMenu}>
        <IoMenu className="size-9" />
      </button>
      <div
        className={`fixed transition-all inset-0 bg-slate-500/90 ${open === true ? "block" : "hidden"
          }`}
      ></div>
      <div
        className={`fixed top-0 bottom-0 transition-all w-64 text-black bg-white shadow-lg ${open ? "right-0" : "-right-full"
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
          <div className="flex justify-between mt-3 p-2">
            <p>Switch Theme</p>
            <div>
              <button onClick={darkOff} className={dark ? "block" : "hidden"}>
                <FiSun />
              </button>
              <button onClick={darkOn} className={dark ? "hidden" : "block"}>
                <FiMoon />
              </button>
            </div>
          </div>
          <button className="bg-slate-800 text-white rounded-xl p-2 w-full mt-3">
            Dowload CV
          </button>
        </div>
      </div>
    </div>
  );
}
