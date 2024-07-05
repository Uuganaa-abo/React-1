
  const icons = [
    {
       name: 'icon-javscript.svg', 
       title: "Javascript"
    },
    {
        name: 'icon-typescript.svg',
        title: "Typescript"
    },
    {
        name: 'icon-react.svg',
        title: "React"
    },
    {
        name: 'icon-nextjs.svg',
        title: "Next.js"
    },
    {
        name: 'icon-nodejs.svg',
        title: "Node.js"
    },
    {
        name: 'icon-express.svg',
        title: "Express.js"
    },
    {
        name: 'icon-nest.svg',
        title: "Nest.js"
    },
    {
        name: 'icon-socket.svg',
        title: "Socket.io"
    },
    {
        name: 'icon-postgresql.svg',
        title: "PostgreSQL"
    },
    {
        name: 'icon-mongodb.svg',
        title: "MongoDB"
    },
    {
        name: 'icon-sass.svg',
        title: "Sass/Scss"
    },
    {
        name: 'icon-tailwindcss.svg',
        title: "Tailwindcss"
    },
    {
        name: 'icon-figma.svg',
        title: "Figma"
    },
    {
        name: 'icon-cypress.svg',
        title: "Cypress"
    },
    {
        name: 'icon-storybook.svg',
        title: "Storybook"
    },
    {
        name: 'icon-git.svg',
        title: "Git"
    }
];
export function Render_skills () {
    return (
        <main>
            <div className="grid grid-cols-3 gap-4 lg:grid-cols-8">
                {icons.map((icon, index) =>(
                    <div className="flex flex-col gap-2 items-center">
                        <div>
                            <img src={"./images/Home/Mobile (iPhone 8)/" + icon.name}></img>
                        </div>
                        <span>{icon.title}</span>
                    </div>
                ))}
            </div>
        </main>
    );
}