import React from "react";

// components

import CardNewMicro from "components/Cards/CardEditMicro"
export default function EditMicro() {
  return (
    <>
      {/* Card stats */}
      <div className="flex flex-wrap">
        <div className="w-full  mb-12  px-4">
          
        </div>
        <div className="w-full  mb-12  px-4">
          <CardNewMicro />
        </div>
      </div>
    </>
  );
}
