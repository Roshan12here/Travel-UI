import Image from "next/image";
import React from "react";
import Button from "./Button";

const Hero = () => {
  return (
    <section
      className="max-container bg-light-gray padding-container
    flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row
    "
    >
      <div className="hero-map" />

      {/* {Left} */}

      <div className="relative flex flex-col z-20 flex-1 xl:w-1/2 ">
        <Image
          src="/logoboat.png"
          alt="camp"
          width={50}
          height={50}
          className="absolute left-[-5px] top-[-30px] w-10   lg:w-[50px]"
        />
        <h1 className="bold-52 lg:bold-88 textbalck ">
          NatureHaven 
          <br />
          Sail Camp
        </h1>
        <p
          className="
regular-16 mt-6  xl:max-w-[525px]  textbalck  
"
        >
          Join us on a global odyssey as we embark on a quest to behold the
          untainted splendor of the natural world. Our app is your trusted
          companions.
        </p>
        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5)
              .fill(1)
              .map((_, index) => (
                <Image
                  src="/star.svg"
                  key={index}
                  alt="star"
                  width={24}
                  height={24}
                />
              ))}
          </div>
          <p className="bold-20 lg:bold-20 text-blue-70">
            223K
            <span className="regular-16 lg:regular-20 ml-1 ">
              Positive Reviews
            </span>
          </p>
        </div>
        <div className="flex flex-col w-full gap-3 sm:flex-row">
          <Button type="button" title="Download App" variant="bl_btn" />
          <Button
            type="button"
            title="How we work"
            variant="textbalck"
            icon="/play.svg"
            
          />
        </div>
      </div>
      <div
        className="relative flex flex-1 items-start

"
      >
        <div
          className="relative z-20 w-[266px] heromodal flex flex-col gap-8 rounded-lg bg-green-90
px-7 py-8
"
        >
          <div className="flex flex-col">
            <div className="flexBetween">
              <p className="regular-16 text-white ">Location</p>
              <Image src="/close.svg" alt="close" width={24} height={24} />
            </div>
            <p className="bold-20 text-white">Warm Springs</p>
            <div className="flexBetween mt-6">
              <div className="flex flex-col ">
                <p className="text-white ">Distance</p>
                <p className="bold-20 text-white">182.4ml</p>
              </div>
              <div className="flex flex-col ">
                <p className="text-white ">Elevation</p>
                <p className="bold-20 text-white">2,678km</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
