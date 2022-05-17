import React from "react";
import { Link } from "react-router-dom";
const {useState} = React;

export default function CardMicroFilter() {

  const [count, setCount] = useState(1) // Name it however you wish

  // {/* START FILTER */}
  const AddedElement = () => 
  <div className="flex flex-wrap w-full">
    <div className="w-full lg:w-3/12">
      <div className="relative w-full px-2">
        <label
          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
          htmlFor="grid-password"
        >
          Grupo
        </label>
        <select className="text-blueGray-600 text-xs font-bold mb-2 w-full">
          <option selected value="laranja">Taxa</option>
          <option value="limao">Origem</option>
          <option value="coco"> Isolamento </option>
          <option value="manga">Caracteristicas</option>
          <option value="manga">Preservação</option>
          <option value="manga">Molecular</option>
          <option value="manga">Localização</option>
        </select>
      </div>
    </div>
    <div className="w-full lg:w-3/12">
      <div className="relative w-full px-2">
        <label
          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
          htmlFor="grid-password"
        >
          Campo
        </label>
        <select className="text-blueGray-600 text-xs font-bold mb-2 w-full">
          <option value="laranja">Dominio</option>
          <option value="limao">Reino</option>
          <option value="manga">Filo</option>
          <option value="laranja">Classe</option>
          <option value="limao">Ordem</option>
          <option value="manga">Família</option>
          <option value="laranja">Gênero</option>
          <option value="limao">Espécie</option>
          <option value="manga">Sub-Espécie</option>
          <option value="laranja">Variedade</option>
          <option value="limao">Referências</option>
          <option value="manga">Status</option>
        </select>
      </div>
    </div>
    <div className="w-full lg:w-6/12 px-4">
      <div className="relative w-full mb-3">
        <label
          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
          htmlFor="grid-password"
        >
          Valor
        </label>
        <input
          type="text"
          className="border-0 px-12 py-3 mr-4 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring ease-linear transition-all duration-150"
          
        />  
        <button
          className="bg-lightBlue-300 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-6 py-4 rounded shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150"
          type="button"
          disabled
          onClick={() => {
            if(count > 1){
              setCount(count - 1)
            }else{
              setCount(1)
            }
          }}
        >
          <i className="fas fa-trash"/>
        </button>
      </div>
    </div>
  </div>
  // {/* END FILTER */}

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full max-w-full flex-grow flex-1">
              <h6 className="uppercase text-blueGray-400 mb-1 text-xs font-semibold">
                Selecione o conjunto de filtros desejado
              </h6>
              <h2 className="text-blueGray-700 text-xl font-semibold">
                Filtros
              </h2>
            </div>
          </div>
        </div>
        <div className="rounded-t bg-white mb-0 px-6 py-6">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6  block">
            <div className="px-4 py-5 flex-auto">
              { [...Array(count)].map((_, i) => <AddedElement key={i} />) }
            </div>
          </div>
          <div className="text-center flex justify-between">
            <div>
                <button
                  className="bg-lightBlue-300 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                  type="button"
                  disabled
                  onClick={() => setCount(count + 1)}
                >
                  Adicionar
                </button>
                <button
                  className="bg-lightBlue-300 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                  type="button"
                  disabled
                  onClick={() => setCount(1)}
                >
                  Limpar
                </button>
              <Link to="/admin/m/details">
                <button
                  className="bg-lightBlue-300 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                  type="button"
                  disabled
                >
                  Filtrar
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
