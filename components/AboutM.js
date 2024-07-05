import Image from "next/image";
export function AboutMe() {
  return (
    <div className="mt-16 flex flex-col justify-center">
      <p className="text-center bg-gray-300 rounded-xl px-5 py-1 font-normal text-sm text-gray-600 w-28 m-auto">
        About me
      </p>
      <div className="lg:flex  gap-12">
        <div className="flex justify-center mt-6 flex-1">
            <div className="flex-1 flex justify-center">
                 <Image src="/SPic.png" width={280} height={360} className="lg:w-[400px]"/>
            </div>
        </div>
        <div className="mt-12 flex flex-1 flex-col gap-6">
          <h3 className="font-semibold text-2xl">
            Curious about me? Here you have it:
          </h3>
          <div className="font-normal text-base text-gray-600 flex flex-col gap-4">
            <p>
              I'm a passionate, self-proclaimed designer who specializes in full
              stack development (React.js & Node.js). I am very enthusiastic
              about bringing the technical and visual aspects of digital
              products to life. User experience, pixel perfect design, and
              writing clear, readable, highly performant code matters to me.
            </p>
            <p>
              I began my journey as a web developer in 2015, and since then,
              I've continued to grow and evolve as a developer, taking on new
              challenges and learning the latest technologies along the way.
              Now, in my early thirties, 7 years after starting my web
              development journey, I'm building cutting-edge web applications
              using modern technologies such as Next.js, TypeScript, Nestjs,
              Tailwindcss, Supabase and much more.
            </p>
            <p>
              I am very much a progressive thinker and enjoy working on products
              end to end, from ideation all the way to development.
            </p>
            <p>
              When I'm not in full-on developer mode, you can find me hovering
              around on twitter or on indie hacker, witnessing the journey of
              early startups or enjoying some free time. You can follow me on
              Twitter where I share tech-related bites and build in public, or
              you can follow me on GitHub.
            </p>
            <p className="mt-4">Finally, some quick bits about me.</p>

            <div className="flex gap-8 mt-4">
              <ul className=" list-disc font-normal text-base text-gray-600 text-wrap">
                <li>B.E. in Computer Engineering</li>
                <li>Full time freelancer</li>
              </ul>
              <ul className="list-disc font-normal text-base text-gray-600">
                <li>Avid learner</li>
                <li>Aspiring indie hacker</li>
              </ul>
            </div>
            <p>
              One last thing, I'm available for freelance work, so feel free to
              reach out and say hello! I promise I don't bite 😉
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
