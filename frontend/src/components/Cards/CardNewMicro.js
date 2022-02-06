import MicroContent from "components/Simple/MicroContent";
import React from "react";

// components

export default function CardDetailMicro() {
  

  //END PERSON MODAL
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
        <div className="rounded-t bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h6 className="text-blueGray-700 text-xl font-bold">Nova entrada</h6>
          </div>
        </div>
        <MicroContent showOnly={false} isRepique={false} returnto={"tables"}/>
      </div>
    </>
  );
}
