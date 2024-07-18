import Work from "./Upwork";
const experiences = [
  {
    startDate: "Nov 2021",
    endDate: "Present",
    name: "Sr. Frontend Developer",
    title: "logo-upwork.png",
    listItems: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit.", 
        "Ut pretium arcu et massa semper, id fringilla leo semper.", 
        "Sed quis justo ac magna.", 
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit."],
  },
  {
    startDate: "Nov 2021 ",
    endDate: "Present",
    name: "Team Lead",
    title: "logo-upwork.png",
    listItems: ["Sed quis justo ac magna.",
         "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
         "Sed quis justo ac magna.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit."],
  },
  {
    startDate: "Nov 2021 - Present",
    endDate: "",
    name: "Full Stack Developer",
    title: "logo-upwork.png",
    listItems: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."],
  },
];
export default function Experience() {
  return (
    <main className="mt-16" >
      <div className="w-[100%] bg-slate-200 py-5 flex flex-col items-center">
      <div>
        <p className="text-center bg-gray-300 rounded-xl px-5 py-1 font-normal text-sm text-gray-600 w-28 m-auto">Experience</p>
        <p className="text-center font-normal text-lg text-gray-600">Here is a quick summary of my most recent experiences:</p>
      </div>
        {experiences.map((experience, index) => (
          <div key={index}>
            <Work props={experience} />
          </div>
        ))}
      </div>
    </main>
  );
}
