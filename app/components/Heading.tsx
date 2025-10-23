type headingProps = {
  text: string;
};
const Heading = ({text} : headingProps) => {
  return <h1>{text}</h1>;
};

export default Heading;
