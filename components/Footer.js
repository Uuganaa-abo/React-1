import { GoMail } from "react-icons/go";
import { IoCopyOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { LuCopyright } from "react-icons/lu";
import Icons from "./Icons";

export function Footer() {
  return (
    <main id="contact" className="py-16 px-4">
      <div className=" mx-auto">
        <div className="w-32 text-center bg-gray-300 rounded-xl px-5 py-1 font-normal text-sm text-gray-600 mx-auto mb-4">
          Get in touch
        </div>
        <p className="font-normal text-xl mb-4 text-gray-600 text-center">
          What’s next? Feel free to reach out to me if you're looking for a
          developer, have a query, or simply want to connect.
        </p>
        <div className="flex flex-col gap-1">
          <div className="flex gap-4 justify-center">
            <GoMail className="size-6" />
            <p className="text-lg font-semibold">reachsagarshah@gmail.com</p>
            <IoCopyOutline className="size-6" />
          </div>
          <div className="flex justify-center gap-4">
            <IoCallOutline className="size-6" />
            <p className="text-lg font-semibold">+91 8980500565</p>
            <IoCopyOutline className="size-6" />
          </div>
        </div>
        <div className="mt-6 flex flex-col gap-2">
          <p className="font-normal text-gray-600 text-base text-center">
            You may also find me on these platforms!
          </p>
          <div className="flex gap-2 justify-center">
            <Icons />
          </div>
        </div>
      </div>

      <div className="flex gap-2 justify-center p-5 w-full h-16 bg-gray-50">
        <LuCopyright />
        <p className="font-normal text-gray-600 text-sm">
          2023 | Designed and coded with ❤️️ by Sagar Shah
        </p>
      </div>  
    </main>
  );
}
