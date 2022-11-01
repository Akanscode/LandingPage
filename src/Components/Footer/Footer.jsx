import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-[1240px] m-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
      <div>
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">WEB PAGE</h1>
        <p className="py-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit
          ullam iste repellat consequatur libero reiciendis, blanditiis
          accusantium.
        </p>
        <div className="flex justify-between md:w-[75%] my-6 hover:bg-green p-2">
          <FaFacebookSquare size={30} />
          <FaInstagram size={30} />
          <FaTwitterSquare size={30} />
          <FaGithubSquare size={30} />
          <FaDribbbleSquare size={30} />
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between mt-6">
        <div>
          <h6 className="font-medium text-gray-400">Solutions</h6>
          <ul>
            <li className="py-2 text-sm capitalize">Analysics</li>
            <li className="py-2 text-sm capitalize">Marketing</li>

            <li className="py-2 text-sm capitalize">comerce</li>
            <li className="py-2 text-sm capitalize">insights</li>
          </ul>
        </div>

        <div>
          <h6 className="font-medium text-gray-400 capitalize ">support</h6>
          <ul className="">
            <li className="py-2 text-sm capitalize">pricing</li>
            <li className="py-2 text-sm capitalize">documentation</li>
            <li className="py-2 text-sm capitalize">guides</li>
            <li className="py-2 text-sm capitalize">API status</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-600 capitalize">company</h6>
          <ul>
            <li className="py-2 text-sm capitalize">about</li>
            <li className="py-2 text-sm capitalize">blog</li>
            <li className="py-2 text-sm capitalize">jobs</li>
            <li className="py-2 text-sm capitalize">press</li>
            <li className="py-2 text-sm capitalize">careers</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400 capitalize"> legal</h6>
          <ul>
            <li className="py-2 text-sm capitalize">claim</li>
            <li className="py-2 text-sm capitalize">policy</li>
            <li className="py-2 text-sm capitalize">terms</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Footer;
