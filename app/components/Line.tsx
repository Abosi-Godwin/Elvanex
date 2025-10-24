interface LineProp {
  bg: string;
}
const Line = ({ bg} : LineProp) => {
  return <div className={`w-24 h-1 rounded-md bg-${bg}`}></div>;
};

export default Line;
