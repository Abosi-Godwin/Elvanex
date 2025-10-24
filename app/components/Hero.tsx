import { websiteContent } from "../data/mockDatas";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="grid grid-cols-1 pt-2 px-4 md:grid-cols-2 md:gap-20 md:py-10">
      <div>
        <p
          className="text-sm font-extralight uppercase tracking-tighter ring-1
          ring-gray-100 rounded-md p-1 w-fit"
        >
          Build and Market
        </p>
        <h1
          className="text-2xl pt-4 font-extrabold bg-elvanex-gradient
          bg-clip-text text-transparent md:text-5xl"
        >
          Elvanex Digital &mdash; Giving <br /> visibility to brands.
        </h1>

        <p className="py-2 text-sm tracking-tight">
          We help brands turn bold ideas into measurable success through strategy, creativity, and
          data.
        </p>
        <div className="flex gap-2 items-center justify-between py-2 md:py-8">
          {websiteContent[1]?.highlights?.map((item, ind) => (
            <HighLight
              key={ind}
              {...item}
            />
          ))}
        </div>
        <div className="flex gap-3 items-center font-alenia py-4 justify-between">
          <button className="px-3 py-1.5 rounded-md text-white font-bold text-center bg-sapphireSurge outline-none border-0 w-full">
            Lets talk
          </button>
          <button className="px-3 py-1.5 rounded-md text-white font-bold text-center bg-gray-400 outline-none border-0 font-alenia w-full">
            Our work
          </button>
        </div>
      </div>
      <div className="relative #FD34FF flex justify-center items-center pt-10
      bg-[radial-gradient(closest-side_at_center,_#FD34FF_10%,_#0770FD_20%,_#FFFFFF_70%)]
      md:pl-5">
        <Image
          src="/images/heroImg1.png"
          alt="Hero photo"
          width={300}
          height={300}
          priority
        />
        <div
          className="absolute top-20 left-2 bg-gray-200 flex items-center
        justify-center rounded-md size-16"
        >
          <Image
            src="/images/Target.svg"
            alt="Profile photo"
            width={50}
            height={50}
            priority
          />
        </div>
        <div
          className="absolute bottom-30 right-2 flex items-center
        justify-center bg-gray-200 rounded-md size-16"
        >
          <Image
            src="/images/Market_Analysis.svg"
            alt="Profile photo"
            width={50}
            height={50}
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;

interface DataProps {
  rate: string;
  tagline: string;
}
export const HighLight = ({ rate, tagline }: DataProps) => {
  return (
    <div className="flex flex-col items-center justify-center py-4">
      <h1 className="font-bold font-alenia">{rate}</h1>
      <p className="text-sm font-light text-center tracking-tighter">{tagline}</p>
    </div>
  );
};
