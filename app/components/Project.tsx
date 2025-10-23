import Image from "next/image";

import Button from "../components/Button";

interface ProductProps {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  link: string;
}
const Project = ({ id, title, category, description, image, link }: ProductProps) => {
  return (
    <div className="rounded-md overflow-hidden shadow-card bg-white">
      <div className="relative group overflow-hidden">
        <Image
          src={image}
          alt="Project image"
          width={300}
          height={300}
          priority
          className="w-full"
        />
        <div className="absolute top-full left-0 bg-black/40 text-white text-sm p-2 flex flex-col gap-2 transition-all duration-300 transform translate-y-full transition-all duration-300 group-hover:-translate-y-full">
          <p>{description}</p>
          <Button
            text="see live"
            style={null}
          />
        </div>
      </div>
      <div className="p-3">
        <p
          className="ring-1 ring-gray-200 rounded-md w-fit px-1 text-sm
        font-extralight "
        >
          {category}
        </p>
        <h1 className="text-2xl font-bold py-4 pr-4">{title}</h1>
      </div>
    </div>
  );
};

export default Project;
