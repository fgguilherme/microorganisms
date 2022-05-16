import React from "react";

export default function CardMicroOrigin(props) {
  // console.log("--------------------------")
  // console.log(props)
  // console.log("--------------------------")
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full max-w-full flex-grow flex-1">
              <h6 className="uppercase text-blueGray-400 mb-1 text-xs font-semibold">
                Código
              </h6>
              <h2 className="text-blueGray-700 text-xl font-semibold">
                CCM-UEA-F{String(props.microorg?.microorganismo_idmicroorganismo).padStart(4, '0')+"-"+String(props.microorg?.idrepique).padStart(4, '0')}
              </h2>
              <h6 className="uppercase text-blueGray-400 mb-1 text-xs font-semibold">
                Repique de origem
              </h6>
              <h2 className="text-blueGray-700 text-xl font-semibold">
              {props.microorg?.parent? "CCM-UEA-F"+String(props.microorg?.microorganismo_idmicroorganismo).padStart(4, '0')+"-"+String(props.microorg?.parent).padStart(4, '0'):" - "}
              </h2>
              <h6 className="uppercase text-blueGray-400 mb-1 text-xs font-semibold">
                Localização
              </h6>
              <h2 className="text-blueGray-700 text-xl font-semibold">
                {props.microorg?.posicao_idposicao_posicao.lote_idlote_lote.prateleira_idprateleira_prateleira.armario_idarmario_armario.sub_colecao_idsub_colecao_sub_colecao.sub_colecao}
              </h2>
              <h6 className="uppercase text-blueGray-400 mb-1 text-xs font-semibold">
                Armário
              </h6>
              <h2 className="text-blueGray-700 text-xl font-semibold">
              {props.microorg?.posicao_idposicao_posicao.lote_idlote_lote.prateleira_idprateleira_prateleira.armario_idarmario_armario.armario}
              </h2>
              <h6 className="uppercase text-blueGray-400 mb-1 text-xs font-semibold">
                Prateleira
              </h6>
              <h2 className="text-blueGray-700 text-xl font-semibold">
                {props.microorg?.posicao_idposicao_posicao.lote_idlote_lote.prateleira_idprateleira_prateleira.prateleira}
              </h2>
              <h6 className="uppercase text-blueGray-400 mb-1 text-xs font-semibold">
                Lote
              </h6>
              <h2 className="text-blueGray-700 text-xl font-semibold">
                {props.microorg?.posicao_idposicao_posicao.lote_idlote_lote.lote}
              </h2>
              <h6 className="uppercase text-blueGray-400 mb-1 text-xs font-semibold">
                Posição
              </h6>
              <h2 className="text-blueGray-700 text-xl font-semibold">
                {props.microorg?.posicao_idposicao_posicao.posicao}
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
