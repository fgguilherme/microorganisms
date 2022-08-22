import React, { useState, useEffect } from "react";
import axios, {AxiosError} from "axios";

const baseurl = window.location.origin.toString() + "/api/"


export default function CardMicroAuth(props) {
  const [pesquisador, setPesquisador] = useState([])
  const [dataAuth, setDataAuth] = useState('')

  useEffect(() => {
    axios.get(baseurl+"autenticacao/search", {
      params: {
        "idRepique": props.repique
      }
    })
      .then(response => {
        console.log(response.data);
        if(response.data[0]){
        setDataAuth(response.data[0].data_autenticacao)
        axios.get(baseurl+"pesquisador/"+response.data[0].idPesquisador)
          .then(response => {
            console.log(response.data);
            setPesquisador(response.data)
            // setReinoList(response.data); 
          }, error => {
            // console.log(error);
          });
        // setReinoList(response.data);
       }
      }, error => {
        // console.log(error);
      });

  }, [])


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
                {pesquisador.nome?pesquisador.nome:"-"}
              </h2>
              <h6 className="uppercase text-blueGray-400 mb-1 text-xs font-semibold">
                E-Mail:
              </h6>
              <h2 className="text-blueGray-700 text-xl font-semibold">
                {pesquisador.email?pesquisador.email:"-"}
              </h2>
              <h6 className="uppercase text-blueGray-400 mb-1 text-xs font-semibold">
                data de Autenticação':
              </h6>
              <h2 className="text-blueGray-700 text-xl font-semibold">
                {dataAuth?dataAuth:"-"}
              </h2>
              <h6 className="uppercase text-blueGray-400 mb-1 text-xs font-semibold">
                Instituição do autenticador:
              </h6>
              <h2 className="text-blueGray-700 text-xl font-semibold">
                {pesquisador.instituicao?pesquisador.instituicao:"-"}
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
