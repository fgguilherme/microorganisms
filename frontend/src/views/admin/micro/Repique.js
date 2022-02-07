import React from "react";

// components


import CardRepique from "components/Cards/CardRepique"
import CardDetailMicro from "components/Cards/CardDetailMicroRepique"
export default function Repique() {
  return (
    <>
      {/* Card stats */}
      <div className="flex flex-wrap">
        <div className="w-full  mb-12  px-4">
          
        </div>
        <div className="w-full  mb-12  px-4">
          <CardRepique/>
          <CardDetailMicro />
        </div>
      </div>
    </>
  );
}
