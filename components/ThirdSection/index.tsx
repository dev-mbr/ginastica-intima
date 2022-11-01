import Image from "next/image";
import React from "react";

function ThirdSection() {
  return (
    <div className="bg-final mt-24">
      <div className="container mx-auto">
        <div className="w-10/12 mx-auto">
          <div className="w-6/12 relative">
            <Image
              className="absolute -top-40"
              width={904.07}
              height={1109.2}
              src="/catia-final.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThirdSection;
