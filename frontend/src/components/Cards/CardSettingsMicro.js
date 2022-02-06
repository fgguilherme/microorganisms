import React from "react";
import { Checkbox } from "rsuite";

// components

var tableheader = [
  "Carimbo de data/hora",
  "Endereço de e-mail",
  "Sub-coleção",
  "Domínio",
  "Reino",
  "Filo",
  "Classe",
  "Ordem",
  "Família",
  "Gênero",
  "Espécie",
  "Autor da Espécie",
  "Sub-espécie",
  "Autor da Sub-Espécie",
  "Variedade",
  "Autor da Variedade",
  "Referências taxonômicas",
  "Status ",//(opção pendente quando material estiver contaminado e ainda há chances de isolamento)",
  "Substrato",
  "Indique o hospedeiro ",//(espécie/substrato)",
  "Registro da exsicata do hospedeiro",
  "Qual o herbário do depósito do hospedeiro?",
  "Código original",
  "Quem coletou",
  "Instituição do coletor",
  "Data da coleta",
  "Origem geográfica ",//(descrição do ambiente, Localidade, cidade/Estado/País)",
  "Latitude ",
  "Longitude",
  "DATUM",
  "Precisão",
  "Histórico desta espécie",
  "Registro em outras coleções",
  "Data do registro da coleção de origem",
  "Comentário sobre a origem",
  "Cor da colônia",
  "Textura",
  "Borda",
  "Relevo",
  "Exudato",
  "Cor do Exudato",
  "Pigmento liberado no meio de cultura",
  "Cor do pigmento no meio de cultura",
  "Temperatura ótima de crescimento",
  "Referência",
  "Data do Isolamento",
  "Nome de quem Isolou",
  "Instituição de quem isolou",
  "Nome do Identificador",
  "Instituição do identificador",
  "Data da identificação",
  "Nome de quem autenticou",
  "Instituição do autenticador",
  "Data da Autenticação",
  "Métodos de autenticação",
  "Modos de preservação",
  "Comentário",
  "Laboratório onde foi feito",
  "Código da análise",
  "Data da análise",
  "Sequência",
  "Metadados",
  "Arquivo molecular",
  "Lote",
  "Unidade",
  "Posição",
  "Disponibilidade ",
  "Foto do microrganismo",
  "Grupo de pesquisa relacionado",
  "Responsável pelo grupo de pesquisa",
  "Contato do responsável",
  "Comentários",
  "Referências",
  "Anexos",
  "Armário",
  "Prateleira / gaveta"
  ]
export default function CardSettings() {
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
        <div className="rounded-t bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h6 className="text-blueGray-700 text-xl font-bold">Controle de Acesso</h6>
            <button
              className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
              type="button"
            >
              Salvar
            </button>
          </div>
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <form>
            <h6 className="text-blueGray-800 text-sm mt-3 mb-6 font-bold uppercase">
              Publico Geral
            </h6>
            <div className="flex flex-wrap">
              {tableheader.map((col, i) => {              
                  // Return the element. Also pass key     
                  return (
                    <Checkbox className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase w-full lg:w-6/12 xl:w-4/12">  {col}</Checkbox>
                    ) 
                })}
            </div>
            <hr className="mt-6 border-b-1 border-blueGray-300" />

            <h6 className="text-blueGray-800 text-sm mt-3 mb-6 font-bold uppercase">
              Pesquisadores
            </h6>
            <div className="flex flex-wrap">
              {tableheader.map((col, i) => {              
                  // Return the element. Also pass key     
                  return (
                    <Checkbox className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase w-full lg:w-6/12 xl:w-4/12">  {col}</Checkbox>
                    ) 
                })}
            </div>

            <hr className="mt-6 border-b-1 border-blueGray-300" />

            <h6 className="text-blueGray-800 text-sm mt-3 mb-6 font-bold uppercase">
              Parceiros
            </h6>
            <div className="flex flex-wrap">
              {tableheader.map((col, i) => {              
                  // Return the element. Also pass key     
                  return (
                    <Checkbox className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase w-full lg:w-6/12 xl:w-4/12">  {col}</Checkbox>
                    ) 
                })}
            </div>

          </form>
        </div>
      </div>
    </>
  );
}
