import Link from 'next/link';

interface ButtonProps {
  text: string;
  style: string | null;
  link?: string;
}
const defaultStyle =
  "px-3 py-1.5 rounded-md text-white font-bold text-center bg-sapphireSurge outline-none border-0 w-fit";
const Button = ({ text, style, link }: ButtonProps) => {
  return link ?
  <button className={style || defaultStyle}>{text || "Let's talk"}</button> :
  <Link href="/home"/>;
};

export default Button;
