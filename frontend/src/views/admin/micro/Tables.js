import React from "react";

// components

import CardTable from "components/Cards/CardTableMicro";
import CardMicroFilter from "components/Cards/CardMicroFilter";

export default function Tables() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        
        <div className="w-full mb-12 px-4">
          <CardMicroFilter />
        </div>
        <div className="w-full mb-12 px-4">
          <CardTable />
        </div>
      </div>
    </>
  );
}
