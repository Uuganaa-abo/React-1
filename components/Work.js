import Image from "next/image";

const workData = [
    {
        title: "Fiskil",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
        image: "/Picture.png",
        link: "/",
        tags: ["React", "Next.js", "Typescript", "Nest.js", "PostgreSQL", "Tailwindcss", "Figma", "Cypress", "Storybook", "Git"],
    },
    {
        title: "Fiskil",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
        image: "/Picture.png",
        link: "/",
        tags: ["React", "Next.js", "Typescript", "Nest.js", "PostgreSQL", "Tailwindcss", "Figma", "Cypress", "Storybook", "Git"],
    },
    {
        title: "Fiskil",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
        image: "/Picture.png",
        link: "/",
        tags: ["React", "Next.js", "Typescript", "Nest.js", "PostgreSQL", "Tailwindcss", "Figma", "Cypress", "Storybook", "Git"],
    }

];
export function Work() {
    return (
        <section id="work" className="mt-16 max-w-6xl mx-auto">
            <div className="flex justify-center mb-4">
                <Tag name="Work" />
            </div>
            <div className="text-center text-gray-600">Some of the noteworthy projects I have built:</div>
            <div className="px-4">
                {
                    workData.map((work, index) => (
                        <WorkCard key={work.title} work={work} isReverse={index % 2 === 1} />
                    ))}
            </div>
        </section>
    );
}
function WorkCard({ isReverse = false, work }) {
    return (
        <div className={`mb-4 rounded-lg shadow lg:flex ${isReverse ? "lg:flex-row-reverse" : ""}`}>
            <div className="p-4 bg-slate-100 lg:flex-1">
                <Image src={"/Picture.png"}
                    width={279}
                    height={192} className="w-full rounded-lg shadow" />
            </div>
            <div className="p-4 lg:flex-1">
                <div className="mb-2 font-bold">{work.title}</div>
                <div className="mb-2">{work.desc}</div>
                <div className="flex flex-wrap gap-2">
                    {work.tags.map((tag) => (
                        <Tag key={tag} name={tag} />
                    ))}
                </div>
            </div>
        </div>
    );
}
function Tag({ name }) {
    return <div className="px-4 py-1 rounded-xl bg-slate-300 ">{name}</div>;
}
