import Link from "next/link";

import { FiArrowUpRight } from "react-icons/fi";
interface ButtonProps {
  text: string;
  
  link?: boolean;
  linkText?: string;
}
const defaultStyle =
  "px-3 py-1.5 rounded-md text-white font-bold text-center bg-sapphireSurge outline-none border-0 w-fit";

const Button = ({ text, link }: ButtonProps) => {
  return !link ? (
    <CtaButton
      text={text}
      
    />
  ) : (
    <Link
      href="/home"
      className="ring-2 ring-gray-100 rounded-md py-1.5 px-3 flex gap-2
      items-center"
    >
      {text}
      <FiArrowUpRight />
    </Link>
  );
};

export default Button;

interface CtaButtonProps {
  text: string;

}
const CtaButton = ({ text, }: CtaButtonProps) => {
  return <button className={defaultStyle}>{text}</button>;
};
