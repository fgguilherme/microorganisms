import React from "react";
import MicroContent from "components/Simple/MicroContent";
// components


export default function CardDetailMicro(props) {
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
        <div className="rounded-t bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h6 className="text-blueGray-700 text-xl font-bold">Repique</h6>
          </div>
        </div>
        <MicroContent showOnly={false} isRepique={true} idrepique={props.microorg.idrepique} idmicro={props.microorg.microorganismo_idmicroorganismo} />
      </div>
    </>
  );
}
