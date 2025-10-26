import Image from "next/image";
import Button from "./Button";
import Line from "./Line";

const Intro = () => {
  return (
    <div
      className="px-4 py-12 place-content-center items-center grid grid-cols-1 md:grid-cols-[1fr_2fr] md:gap-8"
    >
      <div className="relative order-2 md:order-1">
        <div
          className="bg-[url('/images/bg.jpg')] bg-center bg-no-repeat
        bg-cover grid grid-cols-1 border-8 rounded-md relative"
        >
          <Image
            src="/images/smiling3.png"
            alt="Elvanex"
            width={500}
            height={500}
            className=""
          />
          <div
            className="absolute size-20 bg-white rounded-md p-2 right-3
        bottom-3"
          >
            <Image
              src="/images/Profit.svg"
              alt="Elvanex"
              width={500}
              height={500}
              className=""
            />
          </div>
        </div>
      </div>
      <div className="order-1 py-10 md:order-2 md:pl-5">
        <div className="flex gap-3 items-center">
          <p className="px-2 my-5 bg-gray-100 rounded-md w-fit uppercase">creative growth</p>
        </div>
        <div
          className="pt-4 text-3xl font-extrabold bg-elvanex-gradient  bg-clip-text
        text-transparent"
        >
          <h1>
            Marketing that moves <br /> the brand forward.
          </h1>
        </div>
        <p className="text-sm tracking-tighter py-5 md:w-[80%]">
          Unlock performance with data driven campaigns, creative storytelling, and impactful
          branding.
        </p>
        <div className="flex gap-5 items-center">
          <Button text="Learn more" />
          <Button
            link={true}
            text="Explore services"
          />
        </div>
      </div>
    </div>
  );
};

export default Intro;
