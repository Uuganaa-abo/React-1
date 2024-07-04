import Image from "next/image";
import { IoLocationOutline } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
import { FiGithub } from "react-icons/fi";
import { CiTwitter } from "react-icons/ci";
import { FaFigma } from "react-icons/fa";
import { AboutMe } from "./AboutM";


export function Hero({ name, age }) {
  return (
    <div>
      <div className="mt-16 flex justify-center">
        <Image src="/images/Pic.png " width={240} height={280} />
      </div>
      {/* <div>{name}</div> */}
      <>
        <h2 className="font-semibold text-4xl size text-gray-900 mt-12">
          Hi, I’m Sagar 👋
        </h2>
        <div className="mt-12">
          <p className="text-base font-normal text-gray-600">
            I'm a full stack developer (React.js & Node.js) with a focus on
            creating (and occasionally designing) exceptional digital
            experiences that are fast, accessible, visually appealing, and
            responsive. Even though I have been creating web applications for
            over 7 years, I still love it as if it was something new.
          </p>
        </div>
        <div className="mt-12">
          <div className="flex gap-2">
            <IoLocationOutline className="size-6" />
            <p className="text-base font-normal">Ulnaanbaatar/Mongolia</p>
          </div>
          <div className="flex gap-2 mt-2">
            <GoDotFill className="text-green-700 size-6" />
            <p className="text-base font-normal">Available for new projects</p>
          </div>
        </div>
        <div className="flex gap-4 mt-12 ">
          <FiGithub className="size-6" />
          <CiTwitter className="size-6" />
          <FaFigma className="size-6" />
        </div>
        <div className="mt-16 flex-col justify-center">
          <p className="text-center bg-gray-200 rounded-xl px-5 py-1 font-normal text-sm text-gray-600">
            About me
          </p>
          <div className="flex justify-center mt-6 ">
            <Image src="/images/About.png " width={280} height={360} />
          </div>
        </div>
        <div className="mt-12 flex-col gap-6">
          <h3 className="font-semibold text-2xl">Curious about me? Here you have it:</h3>
          <div className="font-normal text-base text-gray-600">
            <p>
              I'm a passionate, self-proclaimed designer who specializes in full stack development (React.js & Node.js). I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect design, and writing clear, readable, highly performant code matters to me.
            </p>
            <p>
              I began my journey as a web developer in 2015, and since then, I've continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way. Now, in my early thirties, 7 years after starting my web development journey, I'm building cutting-edge web applications using modern technologies such as Next.js, TypeScript, Nestjs, Tailwindcss, Supabase and much more.
            </p>
            <p>
              I am very much a progressive thinker and enjoy working on products end to end, from ideation all the way to development.
            </p>
            <p>
              When I'm not in full-on developer mode, you can find me hovering around on twitter or on indie hacker, witnessing the journey of early startups or enjoying some free time. You can follow me on Twitter where I share tech-related bites and build in public, or you can follow me on GitHub.
            </p>
            <p className="mt-4">
              Finally, some quick bits about me.
            </p>

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
              One last thing, I'm available for freelance work, so feel free to reach out and say hello! I promise I don't bite 😉
            </p>
          </div>
        </div>
        <div className="mt-32">
          <p className="text-center bg-gray-200 rounded-xl px-5 py-1 font-normal text-sm text-gray-600">
            Skills
          </p>
          <p className="mt-4">The skills, tools and technologies I am really good at:</p>
          <div className="mt-6">
            <div>
              <div className="">
                <div>
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}
