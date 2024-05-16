import { media } from "../data";
const MediaCount = () => {
  return (
    <div className="border   z-10 shadow-lg bg-white w-60 m-1 mt-4 flex flex-col p-5  ">
      <h1 className="text-gray-400 mb-2">Media</h1>
     {/* Icons  */}
      <div className="grid grid-cols-2">
      {media.map((m) => (
  
    <div className="flex flex-col items-center  text-center"  key={m.name}>
      <img className=" w-9"src={m.image} alt={m.name} />
      <div>
        <p className="text-gray-500 text-xs">{m.count}</p>
        <p className="text-2xs text-gray-400">{m.name}</p>
      </div>
    </div>

))}
      </div>
    </div>
  );
};

export default MediaCount;
