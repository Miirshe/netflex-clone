const Feature = ({ feature }) => {
  return (
    <div
      className={`mt-10 flex flex-col justify-center  items-center max-w-screen-lg mx-auto
       ${
         feature.id % 2 != 0 ? "md:flex-row" : " md:flex-row-reverse"
       } space-y-4 gap-3`}
      key={feature.id}
    >
      <div className="flex flex-col justify-center items-center space-y-3 gap-1">
        <h1 className="text-xl lg:text-4xl text-center">{feature?.title}</h1>
        <h1 className="text-base lg:text-2xl text-center">{feature?.description}</h1>
      </div>
      <div className="relative">
        <img className="w-[90%] rounded-md " src={`./images/${feature?.image}`} alt="" />
        <video autoPlay="autoPlay" loop muted type="m4v" className="w-[87%] -z-10 absolute top-2 " src={`./images/${feature?.video}`} />
      </div>
    </div>
  );
};

export default Feature;
