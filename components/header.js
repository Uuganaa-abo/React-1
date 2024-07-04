import { FiSun } from "react-icons/fi";
export function Header() {
    return (
        <div className="flex justify-between bg-slate-200">
            <div>Logo</div>
            <div className="flex gap-y-2.5 hidden xl:block ">
                <div>About</div>
                <div>Work</div>
                <div>Testimonials</div>
                <div>Contact</div>
            </div>

            <div className="hidden xl:block">
                <FiSun />
                <button  className="bg-slate-800 text-white" >Dowload CV</button>
            </div>
            <div className="xl:hidden">Mobile menu</div>
        </div>);
}
