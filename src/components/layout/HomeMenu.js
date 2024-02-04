import Image from "next/image";
import React from "react";
import MenuItem from "../menu/MenuItem";
import SectionHeader from "./SectionHeader";

const HomeMenu = () => {
  return (
    <section>
      <div className="absolute left-0 right-0 w-full justify-start">
        <div className="absolute left-0 -top-[70px] text-left -z-10">
          <Image
            src={"/sallad1.png"}
            alt="Delicious Salad 1"
            width={109}
            height={189}
          />
        </div>
        <div className="absolute -top-[100px] right-0 -z-10">
          <Image src={"/sallad2.png"} width={107} height={195} alt={"sallad"} />
        </div>
      </div>
      <div className="text-center mb-4">
        <SectionHeader subHeader={"Checkout"} mainHeader={"Menu"} />
      </div>
      <div className="grid grid-cols-3 gap-4 p-10">
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </div>
    </section>
  );
};

export default HomeMenu;
