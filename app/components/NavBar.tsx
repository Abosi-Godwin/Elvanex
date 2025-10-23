import { FaBars } from "react-icons/fa6";

import Logo from "./logo";

import { websiteContent } from "../data/mockDatas";
const NavBar = () => {
  return (
    <nav
      className="grid grid-cols-2 p-4 md:grid-cols-[1fr_3fr] bg-white
    backdrop-blur-lg shadow-elvanex fixed w-screen top-0 left-0 z-50"
    >
      <Logo />
      <ul className="hidden justify-between items-center md:flex">
        {websiteContent[0].content.map((data, ind) => {
          const isLast = ind === websiteContent[0].content.length - 1;
          return !isLast ? (
            <li key={ind}>{data}</li>
          ) : (
            <li
              key={ind}
              className="bg-white font-bold rounded-md px-2
            text-sapphireSurge"
            >
              {data}
            </li>
          );
        })}
      </ul>
      <div className="flex justify-end items-center text-2xl md:hidden">
        <FaBars />
      </div>
    </nav>
  );
};

export default NavBar;
