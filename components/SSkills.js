import { Render_skills } from "./SkillsIcons";

export function Skills() {
  return (
    <div className="mt-32">
      <p className="text-center bg-gray-300 rounded-xl px-5 py-1 font-normal text-sm text-gray-600 w-28 m-auto">
        Skills
      </p>
      <p className="mt-4 flex justify-center text-lg">
        The skills, tools and technologies I am really good at:
      </p>
      <div className="mt-6">
        <Render_skills />
      </div>
    </div>
  );
}
