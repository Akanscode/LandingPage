import React from "react";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#00fd9a] font-bold p-2 uppercase">
          growing with data analytics
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Grow with data
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
            Fast, flexible financing for
          </p>
          {/* <Typed
              className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2"
              strings={["NFT", "PIE", "MAMO"]}
              typeSpeed={120}
              backSpeed={140}
              loop
            />*/}
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500">
          Ensuring optimal output and behavioral consistency between the dev
          server.
        </p>
        <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black uppercase">
          get started
        </button>
      </div>
    </div>
  );
};
export default Hero;
