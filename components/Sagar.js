import Image from "next/image";
import { IoLocationOutline } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
import { FiGithub } from "react-icons/fi";
import { CiTwitter } from "react-icons/ci";
import { FaFigma } from "react-icons/fa";
import { AboutMe } from "./AboutM";


export function Hero() {
  return (
    <div>
      <div className="mt-16 flex justify-center">
        <Image src="/Pic.png" width={240} height={280} />
      </div>
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
      </>
    </div>
  );
}
