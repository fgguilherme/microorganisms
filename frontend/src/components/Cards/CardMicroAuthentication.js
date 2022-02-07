import React from "react";

export default function CardMicroAuth() {
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full max-w-full flex-grow flex-1">
              <h6 className="uppercase text-blueGray-400 mb-1 text-xs font-semibold">
                Autenticado por:
              </h6>
              <h2 className="text-blueGray-700 text-xl font-semibold">
                Fulano da Silva
              </h2>
              <h6 className="uppercase text-blueGray-400 mb-1 text-xs font-semibold">
                E-Mail:
              </h6>
              <h2 className="text-blueGray-700 text-xl font-semibold">
                fulano@uea.edu.br
              </h2>
              <h6 className="uppercase text-blueGray-400 mb-1 text-xs font-semibold">
                data de Autenticação':
              </h6>
              <h2 className="text-blueGray-700 text-xl font-semibold">
                01/10/2012
              </h2>
              <h6 className="uppercase text-blueGray-400 mb-1 text-xs font-semibold">
                Instituição do autenticador:
              </h6>
              <h2 className="text-blueGray-700 text-xl font-semibold">
                UEA
              </h2>
            </div>
          </div>
        </div>
        <div className="p-4 flex-auto">
          {/* Chart */}
        </div>
      </div>
    </>
  );
}
