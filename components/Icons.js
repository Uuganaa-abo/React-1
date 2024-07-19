
import { FiGithub } from "react-icons/fi";
import { LuTwitter } from "react-icons/lu";
import { FaFigma } from "react-icons/fa";

const Icon = [
    {
        name: <FiGithub />
    },
    {
       name: <LuTwitter />
    },
    {
        name: <FaFigma />
    }
];
const Icons = () =>{
    return(
        <div className="flex gap-1">
        {/* {Icon.map((icon, index) =>(
            <div key={index}>
                {icon}
            </div>
        ))} */}
        {
            Icon.map((item,index)=>(
                <div key={index} className="size-9">
                    {item.name}
                </div>
            ))
        }
        </div>
    );
}
export default Icons;