
export function Header() {
    return (
        <div className="flex justify-between bg-slate-200">
            <div>Logo</div>
            <div className="hidden lg:block">Desktop Nav</div>
            <div className="hidden lg:block">Theme control</div>
            <div className="hidden lg:block">Download CV</div>
            <div className="lg:hidden">Mobile menu</div>
        </div>);
}
