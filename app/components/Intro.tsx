import Image from "next/image";
import Button from "./Button";
const Intro = ({}) => {
  return (
    <div className="px-4 py-8 grid grid-cols-1 md:grid-cols-[3fr_1fr] bg-[url('/images/bg.jpg') bg-center bg-no-repeat bg-cover">
      <div className="relative order-2">
        <div className="bg-white border-8 rounded-md">
          <Image
            src="/images/smiling3.png"
            alt="Elvanex"
            width={500}
            height={500}
            className=""
          />
        </div>
        <div className="absolute"></div>
      </div>
      <div className="order-1 py-8 md:order-2">
        <p className="px-2 my-5 bg-white rounded-md w-fit">creative growth </p>
        <div
          className="pt-4 text-3xl font-extrabold bg-elvanex-gradient  bg-clip-text
        text-transparent"
        >
          <h1>
            Marketing that <br /> moves the brand <br /> forward
          </h1>
        </div>
        <p className="text-sm tracking-tighter py-5">
          unlock performance with data driven campaigns, creative storytelling, and impactful
          branding.
        </p>
        <div className="">
          <Button
            text="Learn more"
            style={null}
          />
          <Button
            link={true}
            text="Explore services"
            style={null}
          />
        </div>
      </div>
    </div>
  );
};

export default Intro;
