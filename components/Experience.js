import Work from "./Upwork";
const experiences = [
  {
    startDate: "Nov 2021",
    endDate: "Present",
    name: "Sr. Frontend Developer",
    title: "logo-upwork.png",
    listItems: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Ut pretium arcu et massa semper, id fringilla leo semper.",
      "Sed quis justo ac magna.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
  },
  {
    startDate: "Jul 2017 ",
    endDate: "Oct 2021",
    name: "Team Lead",
    title: "logo-upwork.png",
    listItems: [
      "Sed quis justo ac magna.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Sed quis justo ac magna.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
  },
  {
    startDate: "Dec 2015",
    endDate: "May 2017",
    name: "Full Stack Developer",
    title: "logo-upwork.png",
    listItems: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
  },
];
export default function Experience() {
  return (
    <main className="mt-16">
      <div className="w-[100%] bg-gray-50 py-5 flex flex-col items-center">
        <div>
          <p className="text-center bg-gray-300 rounded-xl px-5 py-1 font-normal text-sm text-gray-600 w-28 m-auto">
            Experience
          </p>
          <p className="text-center font-normal text-lg text-gray-600">
            Here is a quick summary of my most recent experiences:
          </p>
        </div>
        <div className="flex flex-col gap-6">
          {experiences.map((experience, index) => (
            <div key={index}>
              <Work props={experience} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
