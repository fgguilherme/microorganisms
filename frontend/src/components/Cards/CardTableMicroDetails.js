import React from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

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
  "Localização",
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
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3
                className={
                  "font-semibold text-lg " +
                  (color === "light" ? "text-blueGray-700" : "text-white")
                }
              >
                Repiques
              </h3>
            </div>
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
