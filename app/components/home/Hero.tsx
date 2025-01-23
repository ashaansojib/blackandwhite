import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="grid justify-between gap-20 items-center grid-cols-3">
      <div className="col-span-2">
        <h2 className="text-2xl font-semibold mb-4">Hey, I'm Ashaduzzaman</h2>
        <p className="text-secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure saepe
          aliquam soluta, officiis at cupiditate eveniet dolorum. Consequatur,
          illum. Sapiente ab nam fuga repellat perferendis amet facere, ad
          eveniet expedita?
        </p>
      </div>
      <Image
      height={100} width={100}
      layout="responsive"
        className="w-full rounded-xl overflow-hidden" alt="Banner"
        src="/mypp.png"
      />
    </div>
  );
};

export default Hero;
