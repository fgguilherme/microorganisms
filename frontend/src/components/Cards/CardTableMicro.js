import React from "react";
import PropTypes from "prop-types";

import TableDropdown from "components/Dropdowns/TableDropdownMicro";
import { Link } from "react-router-dom";
import {CSVDownload, CSVLink} from "react-csv";


var tableheaderDetail = [
  "",
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
  "Código original (código de quem coletou)",
  "Nome de quem coletou / isolou  com  e-mail",
  "Instituição do coletor",
  "Data da coleta",
  "Origem geográfica ",//(descrição do ambiente, Localidade, cidade/Estado/País)",
  "Latitude ",
  "Longitude",
  "DATUM (SAD69, Córrego Alegre...)",
  "Precisão (erro do GPS, em metros,  no ato da medida)",
  "Histórico desta espécie",
  "Registro em outras coleções (ex: NRRL 2570, CBS 128.52) / Registro antigo da Sub-coleção (número de registro interno EST / MBT)",
  "Data do registro da coleção de origem",
  "Comentário sobre a origem",
  "Cor da colônia (use a tabela de cores Munsell - exemplo: https://coralis.com.br/munsell-solos)",
  "Textura",
  "Borda",
  "Relevo",
  "Exudato",
  "Cor do Exudato (use a tabela de cores Munsell - exemplo: https://coralis.com.br/munsell-solos)",
  "Pigmento liberado no meio de cultura",
  "Cor do pigmento no meio de cultura (use a tabela de cores Munsell - exemplo: https://coralis.com.br/munsell-solos)",
  "Temperatura ótima de crescimento",
  "Referência (ótimo temperatura)",
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
  "Comentário (sobre a preservação)",
  "Laboratório onde foi feito",
  "Código da análise",
  "Data da análise",
  "Sequência",
  "Metadados (identifique as informações sobre o método de sequenciamento)",
  "Arquivo molecular",
  "Lote (exemplo: 1/0001, 10/0001)",
  "Unidade (TB - Tubo de Ensanio, EP - eppendorf, FP - frasco de Penicilina, OT - Outros)",
  "Posição (Indique o número da Estante dedo eppendorf ou tubo de ensaio, Se for em frasco de Penicilina coloque ",
  "Disponibilidade ",
  "Foto do microrganismo (no máximo 10 fotos)",
  "Grupo de pesquisa relacionado",
  "Responsável pelo grupo de pesquisa",
  "Contato do responsável (e-mail)",
  "Comentários",
  "Referências que mostrem possibilidades do uso na biotecnologia/bioeconomia etc (exemplo: referência completa com D.O.I)",
  "Anexe os arquivos relacionados às referências (artigos, dissertações, teses) que usaram este microrganismo",
  "Armário (número do ármário)",
  "Prateleira / gaveta (número d a prateleira / gaveta)"
  ]

var tableheader = [
"",
"Código",
"Sub-coleção",
"Gênero",
"Espécie",
"Status",
"Habitat",
"Substrato",
"Data",
"Disponibilidade",
"Localização",
]

var tableContentDetail = [[
  "2/3/2021 11:16:12",
  "alsc.bio18@uea.edu.br",
  "MBT",
  "Eukarya",
  "Fungi",
  "Ascomycota",
  "Eurotiomycetes ",
  "Eurotiales",
  "Trichocomaceae",
  "Aspergillus",
  "Aspergillus niger",
  "  ",
  "  ",
  "  ",
  "  ",
  "  ",
  "  ",
  "Ativo",
  "Fitopatogêncio",
  "Semente.",
  "  ",
  "  ",
  "MBT_UEA/10001",
  "  ",
  "  ",
  "1/12/07",
  "  ",
  "  ",
  "  ",
  "  ",
  "  ",
  "  ",
  "10001",
  "  ",
  "  ",
  "  ",
  "Pulverulenta",
  "Regular",
  "Plano",
  "Não",
  "  ",
  "Não",
  "  ",
  "26",
  "  ",
  "  ",
  "  ",
  "  ",
  "  ",
  "  ",
  "  ",
  "  ",
  "  ",
  "  ",
  "  ",
  "Castellani",
  "Os fungos encontram-se preservados em água destilada (castellani) e em BDA + óleo mineral.",
  "  ",
  "  ",
  "  ",
  "  ",
  "  ",
  "  ",
  "  ",
  "TB",
  "  ",
  "Disponível para doação, sob consulta ao cientista responsável",
  "https://drive.google.com/open?id=10BFaHNEgkPDdJt54R2XnV2s8fkQzB8oJ",
  "  ",
  "  ",
  "  ",
  "  ",
  "  ",
  "  ",
  "  "]
]

var tableContent = [[
  "CCM-001",
  "MBT",
  "Gênero",
  "Espécie",
  "Ativo",
  "Habitat",
  "Substrato",
  "31/12/2000",
  "Sim",
  "Armario Amarelo - A - 12",
],[
  "CCM-001",
  "MBT",
  "Gênero",
  "Espécie",
  "Ativo",
  "Habitat",
  "Substrato",
  "31/12/2000",
  "Sim",
  "Armario Amarelo - A - 12",
],[
  "CCM-001",
  "MBT",
  "Gênero",
  "Espécie",
  "Ativo",
  "Habitat",
  "Substrato",
  "31/12/2000",
  "Sim",
  "Armario Amarelo - A - 12",
],[
  "CCM-001",
  "MBT",
  "Gênero",
  "Espécie",
  "Ativo",
  "Habitat",
  "Substrato",
  "31/12/2000",
  "Sim",
  "Armario Amarelo - A - 12",
],[
  "CCM-001",
  "MBT",
  "Gênero",
  "Espécie",
  "Ativo",
  "Habitat",
  "Substrato",
  "31/12/2000",
  "Sim",
  "Armario Amarelo - A - 12",
],[
  "CCM-001",
  "MBT",
  "Gênero",
  "Espécie",
  "Ativo",
  "Habitat",
  "Substrato",
  "31/12/2000",
  "Sim",
  "Armario Amarelo - A - 12",
],[
  "CCM-001",
  "MBT",
  "Gênero",
  "Espécie",
  "Ativo",
  "Habitat",
  "Substrato",
  "31/12/2000",
  "Sim",
  "Armario Amarelo - A - 12",
],[
  "CCM-001",
  "MBT",
  "Gênero",
  "Espécie",
  "Ativo",
  "Habitat",
  "Substrato",
  "31/12/2000",
  "Sim",
  "Armario Amarelo - A - 12",
],[
  "CCM-001",
  "MBT",
  "Gênero",
  "Espécie",
  "Ativo",
  "Habitat",
  "Substrato",
  "31/12/2000",
  "Sim",
  "Armario Amarelo - A - 12",
],[
  "CCM-001",
  "MBT",
  "Gênero",
  "Espécie",
  "Ativo",
  "Habitat",
  "Substrato",
  "31/12/2000",
  "Sim",
  "Armario Amarelo - A - 12",
],[
  "CCM-001",
  "MBT",
  "Gênero",
  "Espécie",
  "Ativo",
  "Habitat",
  "Substrato",
  "31/12/2000",
  "Sim",
  "Armario Amarelo - A - 12",
],[
  "CCM-001",
  "MBT",
  "Gênero",
  "Espécie",
  "Ativo",
  "Habitat",
  "Substrato",
  "31/12/2000",
  "Sim",
  "Armario Amarelo - A - 12",
],[
  "CCM-001",
  "MBT",
  "Gênero",
  "Espécie",
  "Ativo",
  "Habitat",
  "Substrato",
  "31/12/2000",
  "Sim",
  "Armario Amarelo - A - 12",
],[
  "CCM-001",
  "MBT",
  "Gênero",
  "Espécie",
  "Ativo",
  "Habitat",
  "Substrato",
  "31/12/2000",
  "Sim",
  "Armario Amarelo - A - 12",
],[
  "CCM-001",
  "MBT",
  "Gênero",
  "Espécie",
  "Ativo",
  "Habitat",
  "Substrato",
  "31/12/2000",
  "Sim",
  "Armario Amarelo - A - 12",
],[
  "CCM-001",
  "MBT",
  "Gênero",
  "Espécie",
  "Ativo",
  "Habitat",
  "Substrato",
  "31/12/2000",
  "Sim",
  "Armario Amarelo - A - 12",
],[
  "CCM-001",
  "MBT",
  "Gênero",
  "Espécie",
  "Ativo",
  "Habitat",
  "Substrato",
  "31/12/2000",
  "Sim",
  "Armario Amarelo - A - 12",
],[
  "CCM-001",
  "MBT",
  "Gênero",
  "Espécie",
  "Ativo",
  "Habitat",
  "Substrato",
  "31/12/2000",
  "Sim",
  "Armario Amarelo - A - 12",
],[
  "CCM-001",
  "MBT",
  "Gênero",
  "Espécie",
  "Ativo",
  "Habitat",
  "Substrato",
  "31/12/2000",
  "Sim",
  "Armario Amarelo - A - 12",
],[
  "CCM-001",
  "MBT",
  "Gênero",
  "Espécie",
  "Ativo",
  "Habitat",
  "Substrato",
  "31/12/2000",
  "Sim",
  "Armario Amarelo - A - 12",
],[
  "CCM-001",
  "MBT",
  "Gênero",
  "Espécie",
  "Ativo",
  "Habitat",
  "Substrato",
  "31/12/2000",
  "Sim",
  "Armario Amarelo - A - 12",
],[
  "CCM-001",
  "MBT",
  "Gênero",
  "Espécie",
  "Ativo",
  "Habitat",
  "Substrato",
  "31/12/2000",
  "Sim",
  "Armario Amarelo - A - 12",
],[
  "CCM-001",
  "MBT",
  "Gênero",
  "Espécie",
  "Ativo",
  "Habitat",
  "Substrato",
  "31/12/2000",
  "Sim",
  "Armario Amarelo - A - 12",
],
]

export default function CardTable({ color }) {
  return (
    <>
      <div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
          (color === "light" ? "bg-white" : "bg-lightBlue-900 text-white")
        }
      >
        <div className="text-center flex justify-between rounded-t mb-0 px-4 py-3 border-0 ">
          <h3 className="text-blueGray-700 text-xl font-bold">Microrganismos</h3>
          <div>
            <CSVLink data={tableContentDetail} headers={tableheaderDetail}>
            <button
              className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
              type="button"
            >
              Exportar
            </button>
            </CSVLink>
            <Link to="/admin/m/new">
              <button
                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                type="button"
              >
                Adicionar
              </button>
            </Link>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
              {tableheader.map((col, i) => {              
                // Return the element. Also pass key     
                return (
                  <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  {col}
                </th>
                  ) 
              })}
                
              </tr>
            </thead>
            <tbody>
                {tableContent.map((col, i) => {
                  return(
                    <tr>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                        <Link to="/admin/m/details">
                          <button
                            className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                            type="button"
                          >
                            <i className="fas fa-info-circle"/>
                          </button>

                        </Link>
                      </td>
                      {col.map((item, i)=>{
                        return(
                          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                            {item}
                          </td>
                        )
                      })}
                    </tr>
                  )
                })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

CardTable.defaultProps = {
  color: "light",
};

CardTable.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
