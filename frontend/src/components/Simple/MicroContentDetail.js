import React, { useState, useEffect } from "react";
import axios from "axios";

const baseurl = window.location.origin.toString() + "/api/"
const baseurlImg = window.location.origin.toString()
//0habitat
const habitatList = [
  {
    idHabitat: 0,
    habitat: "Fitopatogênico",
  },
  {
    idHabitat: 1,
    habitat: "Endofítico",
  },
  {
    idHabitat: 2,
    habitat: "Epifítico",
  },
  {
    idHabitat: 3,
    habitat: "Clínico",
  },
  {
    idHabitat: 4,
    habitat: "Solo",
  },
  {
    idHabitat: 5,
    habitat: "Degradador de madeira",
  },
  {
    idHabitat: 6,
    habitat: "Hipógeo",
  },
  {
    idHabitat: 7,
    habitat: "Anemófilo",
  },
  {
    idHabitat: 8,
    habitat: "Outros",
  },
];

const statusList = [
  {
    idStatus: 0,
    status: "Ativo",
  },
  {
    idStatus: 1,
    status: "Inativo",
  },
  {
    idStatus: 2,
    status: "Pendente",
  },
];

const doacaoList = [
  {
    idDoacao: 0,
    doacao: "Sim",
  },
  {
    idDoacao: 1,
    doacao: "Não",
  },
  {
    idDoacao: 2,
    doacao: "Sob Consulta",
  },
];
export default function MicroContentDetail(props) {
  const [openTab, setOpenTab] = useState(1);
  const [variedade, setVariedade] = useState({});
  const [referencia, setReferencia] = useState("");
  const [referenciaTax, setReferenciaTax] = useState("");
  const [referenciaTemp, setReferenciaTemp] = useState("");
  const [referenciaRep, setReferenciaRep] = useState("");
  const [caracMicro, setCaracMicro] = useState("");
  const [metodoPrev, setMetodoPrev] = useState("");
  const [imgRepique, setImgRepique] = useState([]);
  const [imgMicro, setImgMicro] = useState([]);
  const [imgMacro, setImgMacro] = useState([]);
  const [anexos, setAnexos] = useState([]);

  // console.log(props.microorg)
  useEffect(() => {
    setAnexos(props.microorg.microorganismo_idmicroorganismo_microorganismo.anexos_idanexos_anexos)
    axios.get(baseurl+"imagem_repique/search",{params: {
      "repique_idrepique":props?.microorg.idrepique
    }})
      .then(response => {
        let img = []
        response.data.map(i => {
          img.push(baseurlImg+i.imagem_idimagem_imagem.imagem)
        })
        setImgRepique(img)
      }, error => {
        // console.log(error);
      });
      axios.get(baseurl+"imagem_macro/search",{params: {
        "microorganismo_idmicroorganismo":props?.microorg.idrepique
      }})
        .then(response => {
          let img = []
          response.data.map(i => {
            img.push(baseurlImg+i.imagem_idimagem_imagem.imagem)
          })
          setImgMacro(img)
        }, error => {
          // console.log(error);
        });
        axios.get(baseurl+"imagem_micro/search",{params: {
          "microorganismo_idmicroorganismo":props?.microorg.idrepique
        }})
          .then(response => {
            let img = []
            response.data.map(i => {
              img.push(baseurlImg+i.imagem_idimagem_imagem.imagem)
            })
            setImgMicro(img)
          }, error => {
            // console.log(error);
          });
    //0variedade
      axios.get(baseurl+"variedade/"+props?.microorg.microorganismo_idmicroorganismo_microorganismo.variedade_idvariedade_variedade.idvariedade)
        .then(response => {
          // console.log(response.data)
          setVariedade(response.data)
        }, error => {
          // console.log(error);
        });
        // console.log(props)
        //0referencia
        axios.get(baseurl+"referencia/search",{params: {
          "idmicroorganismo":props?.microorg.microorganismo_idmicroorganismo_microorganismo.idmicroorganismo,
          "idrepique":props?.microorg.idrepique
        }})
          .then(response => {
            // console.log(response.data)
            let tmpTax = []
            let tmpRep = []
            let tmpTemp = []
            response.data.repq_ref.forEach(element => {
              tmpRep.push(element.referencia_idreferencia_referencium.referencia)
            });
            response.data.taxa_ref.forEach(element => {
              tmpTax.push(element.referencia_idreferencia_referencium.referencia)
            });
            response.data.temp_ref.forEach(element => {
              tmpTemp.push(element.referencia_idreferencia_referencium.referencia)
            });
            setReferenciaTax(tmpTax.join(" - "))
            setReferenciaTemp(tmpTemp.join(" - "))
            setReferenciaRep(tmpRep.join(" - "))
            setReferencia(response.data)
          }, error => {
            // console.log(error);
          });
          //0caracMicro
        axios.get(baseurl+"microorganismo_has_carac_micromorfologica/search",{params: {
          "microorganismo_idmicroorganismo":props?.microorg.microorganismo_idmicroorganismo_microorganismo.idmicroorganismo,
        }})
          .then(response => {
            let cm = []
            response.data.forEach(element => {
              cm.push(element.carac_micromorfologica_idcarac_micromorfologica_carac_micromorfologica.carac_micromorfologica)
            });
            setCaracMicro(cm.join(" - "))
            //setCaracMicro(response.data)
            // console.log("CUEN")
          }, error => {
            // console.log(error);
          });
        //0metodo
        axios.get(baseurl+"repique_has_metodo_preservacao/search",{params: {
          "repique_idrepique":props?.microorg.idrepique
        }})
          .then(response => {
            let mp = []
            response.data.forEach(element => {
              // console.log(element.metodo_preservacao_idmetodo_preservacao_metodo_preservacao.metodo);
              mp.push(element.metodo_preservacao_idmetodo_preservacao_metodo_preservacao.metodo)
            });
            setMetodoPrev(mp.join(" - "))
            // setMetodoPrev(response.data)
          }, error => {
            // console.log(error);
          });
    }, [])
  return (
    <>
      <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
        <div className="w-full py-6">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            <li
              className="-mb-px mr-2 last:mr-0 flex-auto text-center"
            >
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 1
                    ? "text-white bg-lightBlue-600"
                    : "text-lightBlue-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Taxa
              </a>
            </li>
            <li
              className="-mb-px mr-2 last:mr-0 flex-auto text-center"
            >
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 2
                    ? "text-white bg-lightBlue-600"
                    : "text-lightBlue-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                Origem
              </a>
            </li>
            <li
              className="-mb-px mr-2 last:mr-0 flex-auto text-center"
            >
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 3
                    ? "text-white bg-lightBlue-600"
                    : "text-lightBlue-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                Isolamento
              </a>
            </li>
            <li
              className="-mb-px mr-2 last:mr-0 flex-auto text-center"
            >
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 4
                    ? "text-white bg-lightBlue-600"
                    : "text-lightBlue-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(4);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                Caracteristicas
              </a>
            </li>
            <li
              className="-mb-px mr-2 last:mr-0 flex-auto text-center"
            >
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 5
                    ? "text-white bg-lightBlue-600"
                    : "text-lightBlue-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(5);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                Molecular
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 6
                    ? "text-white bg-lightBlue-600"
                    : "text-lightBlue-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(6);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                Localização
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 7
                    ? "text-white bg-lightBlue-600"
                    : "text-lightBlue-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(7);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                Outros
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <form>
                    <div className="flex flex-wrap">
                      <div className="w-full lg:w-6/12 px-4">
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Domínio
                          </label>
                          <label
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            htmlFor="grid-password"
                          >
                            {variedade?.sub_especie_idsub_especie_sub_especie?.especie_idespecie_especie.genero_idgenero_genero.familia_idfamilia_familium.ordem_idordem_ordem.classe_idclasse_classe.filo_idfilo_filo.reino_idreino_reino.dominio_iddominio_dominio.dominio}
                          </label>
                        </div>
                      </div>
                      <div className="w-full lg:w-6/12 px-4">
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Reino
                          </label>
                          <label
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            htmlFor="grid-password"
                          >
                            {variedade?.sub_especie_idsub_especie_sub_especie?.especie_idespecie_especie.genero_idgenero_genero.familia_idfamilia_familium.ordem_idordem_ordem.classe_idclasse_classe.filo_idfilo_filo.reino_idreino_reino.reino}
                          </label>
                        </div>
                      </div>
                      <div className="w-full lg:w-6/12 px-4">
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Filo
                          </label>
                          <label
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            htmlFor="grid-password"
                          >
                            {variedade?.sub_especie_idsub_especie_sub_especie?.especie_idespecie_especie.genero_idgenero_genero.familia_idfamilia_familium.ordem_idordem_ordem.classe_idclasse_classe.filo_idfilo_filo.filo}
                          </label>
                        </div>
                      </div>
                      <div className="w-full lg:w-6/12 px-4">
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Classe
                          </label>
                          <label
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            htmlFor="grid-password"
                          >
                            {variedade?.sub_especie_idsub_especie_sub_especie?.especie_idespecie_especie.genero_idgenero_genero.familia_idfamilia_familium.ordem_idordem_ordem.classe_idclasse_classe.classe}
                          </label>
                        </div>
                      </div>
                      <div className="w-full lg:w-6/12 px-4">
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Ordem
                          </label>
                          <label
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            htmlFor="grid-password"
                          >
                          {variedade?.sub_especie_idsub_especie_sub_especie?.especie_idespecie_especie.genero_idgenero_genero.familia_idfamilia_familium.ordem_idordem_ordem.ordem}
                          </label>
                        </div>
                      </div>
                      <div className="w-full lg:w-6/12 px-4">
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Família
                          </label>
                          <label
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            htmlFor="grid-password"
                          >
                          {variedade?.sub_especie_idsub_especie_sub_especie?.especie_idespecie_especie.genero_idgenero_genero.familia_idfamilia_familium.familia}
                          </label>
                        </div>
                      </div>
                      <div className="w-full lg:w-6/12 px-4">
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Gênero
                          </label>
                          <label
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            htmlFor="grid-password"
                          >
                          {variedade?.sub_especie_idsub_especie_sub_especie?.especie_idespecie_especie.genero_idgenero_genero.genero}
                          </label>
                        </div>
                      </div>
                      <div className="w-full lg:w-6/12 px-4">
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Espécie
                          </label>
                          <label
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            htmlFor="grid-password"
                          >
                          {variedade?.sub_especie_idsub_especie_sub_especie?.especie_idespecie_especie.especie+" - "+variedade?.sub_especie_idsub_especie_sub_especie?.especie_idespecie_especie.autor}
                          </label>
                        </div>
                      </div>
                      <div className="w-full lg:w-6/12 px-4">
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Sub-espécie
                          </label>
                          <label
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            htmlFor="grid-password"
                          >
                          {variedade?.sub_especie_idsub_especie_sub_especie?.sub_especie+" - "+variedade?.sub_especie_idsub_especie_sub_especie?.autor}
                          </label>
                        </div>
                      </div>
                      <div className="w-full lg:w-6/12 px-4">
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Variedade
                          </label>
                          <label
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            htmlFor="grid-password"
                          >
                          {variedade?.variedade+" - "+variedade?.autor}
                          </label>
                        </div>
                      </div>
                      <div className="w-full lg:w-8/12 px-4">
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Referências taxonômicas
                          </label>
                          <label
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            htmlFor="grid-password"
                          >
                            {referenciaTax}
                          </label>
                        </div>
                      </div>
                      <div className="w-full lg:w-4/12 px-4">
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Status
                            {/* Disponivel, Indisponível ou Pendente */}
                          </label>
                          <label
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            htmlFor="grid-password"
                          >
                          {statusList[(props?.microorg.microorganismo_idmicroorganismo_microorganismo.status)].status}
                          </label>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <form>
                    <div className="flex flex-wrap">
                      <div className="w-full lg:w-4/12 px-4">
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Data do registro na coleção de origem
                          </label>
                          <label
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            htmlFor="grid-password"
                          >
                            {new Date(props?.microorg.microorganismo_idmicroorganismo_microorganismo.data_reg_col_orig).toLocaleDateString()}
                          </label>
                        </div>
                      </div>
                      <div className="w-full lg:w-8/12 px-4">
                        <div className="relative w-full lg:w-4/12 mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Registro em outras coleções (Código Original)
                          </label>
                          <label
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            htmlFor="grid-password"
                          >
                            {props?.microorg.microorganismo_idmicroorganismo_microorganismo.cod_orig}
                          </label>
                        </div>
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Registro em outras coleções (Histórico)
                          </label>
                          <label
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            htmlFor="grid-password"
                          >
                          {props?.microorg.microorganismo_idmicroorganismo_microorganismo.hist_orig}
                          </label>
                        </div>
                      </div>
                      <div className="w-full lg:w-4/12 px-4">
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Data da coleta
                          </label>
                          <label
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            htmlFor="grid-password"
                          >
                            {new Date(props?.microorg.microorganismo_idmicroorganismo_microorganismo.data_colet).toLocaleDateString()}
                          </label>
                        </div>
                      </div>
                      <div className="w-full lg:w-8/12 px-4">
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Responsável pela coleta
                          </label>
                          <label
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            htmlFor="grid-password"
                          >
                            
                            {props?.microorg.microorganismo_idmicroorganismo_microorganismo.pesquisador_coleta_pesquisador?.nome + " - " +
                             props?.microorg.microorganismo_idmicroorganismo_microorganismo.pesquisador_coleta_pesquisador?.email + " - " +
                             props?.microorg.microorganismo_idmicroorganismo_microorganismo.pesquisador_coleta_pesquisador?.instituicao }
                          </label>
                        </div>
                      </div>
                      <div className="w-full lg:w-4/12 px-4 block">
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Habitat
                          </label>
                          <label
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            htmlFor="grid-password"
                          >
                            {habitatList[(props?.microorg.microorganismo_idmicroorganismo_microorganismo.habitat_idhabitat_habitat.habitat)].habitat}
                          </label>
                        </div>
                      </div>

                      <div className="w-full lg:w-12/12 px-4">
                        <div className="relative w-full mb-3">
                        </div>
                      </div>
                      {props?.microorg.microorganismo_idmicroorganismo_microorganismo.habitat_idhabitat_habitat.habitat <= 2 ? (

                        <>
                          <div className="w-full lg:w-6/12 px-4">
                            <div className="relative w-full mb-3">
                              <label
                                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                htmlFor="grid-password"
                              >
                                Hospedeiro vegetal (Espécie)
                              </label>
                              <label
                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                htmlFor="grid-password"
                              >
                                {props?.microorg.microorganismo_idmicroorganismo_microorganismo.habitat_idhabitat_habitat?.habitat_veg_idhabitat_veg_habitat_veg?.hospedeiro_idhospedeiro_hospedeiro?.hospedeiro}
                              </label>
                            </div>
                          </div>

                          <div className="w-full lg:w-6/12 px-4">
                            <div className="relative w-full mb-3">
                              <label
                                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                htmlFor="grid-password"
                              >
                                Substrato
                              </label>
                              <label
                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                htmlFor="grid-password"
                              >
                              {props?.microorg.microorganismo_idmicroorganismo_microorganismo.habitat_idhabitat_habitat?.habitat_veg_idhabitat_veg_habitat_veg?.substrato_idsubstrato_substrato?.substrato}
                              </label>
                            </div>
                          </div>

                          <div className="w-full lg:w-4/12 px-4">
                            <div className="relative w-full mb-3">
                              <label
                                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                htmlFor="grid-password"
                              >
                                Registro da Exsicata do Hospedeiro
                              </label>
                              <label
                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                htmlFor="grid-password"
                              >
                                {props?.microorg.microorganismo_idmicroorganismo_microorganismo.habitat_idhabitat_habitat?.habitat_veg_idhabitat_veg_habitat_veg?.registro}
                              </label>
                            </div>
                          </div>

                          <div className="w-full lg:w-4/12 px-4">
                            <div className="relative w-full mb-3">
                              <label
                                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                htmlFor="grid-password"
                              >
                                Herbário do depósito do hospedeiro
                              </label>
                              <label
                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                htmlFor="grid-password"
                              >
                              {props?.microorg.microorganismo_idmicroorganismo_microorganismo.habitat_idhabitat_habitat?.habitat_veg_idhabitat_veg_habitat_veg?.herbario}
                              </label>
                            </div>
                          </div>

                          <div className="w-full lg:w-4/12 px-4">
                            <div className="relative w-full mb-3">
                              <label
                                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                htmlFor="grid-password"
                              >
                                Código original do herbário
                              </label>
                              <label
                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                htmlFor="grid-password"
                              >
                                
                                {props?.microorg.microorganismo_idmicroorganismo_microorganismo.habitat_idhabitat_habitat?.habitat_veg_idhabitat_veg_habitat_veg?.codigo}
                              </label>
                            </div>
                          </div>
                        </>
                      ) : null}
                      {props?.microorg.microorganismo_idmicroorganismo_microorganismo.habitat_idhabitat_habitat.habitat === 3 ? (
                        <>
                          <div className="w-full lg:w-6/12 px-4">
                            <div className="relative w-full mb-3">
                              <label
                                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                htmlFor="grid-password"
                              >
                                Hospedeiro animal (Espécie)
                              </label>

                              <label
                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                htmlFor="grid-password"
                              >
                                PIPOCA
                              </label>
                            </div>
                          </div>

                          <div className="w-full lg:w-6/12 px-4">
                            <div className="relative w-full mb-3">
                              <label
                                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                htmlFor="grid-password"
                              >
                                Sítio anatômico
                              </label>
                              <label
                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                htmlFor="grid-password"
                              >
                                PIPOCA
                              </label>
                            </div>
                          </div>
                        </>
                      ) : null}
                      <div className="w-full lg:w-12/12 px-4">
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Mais Informações (Habitat)
                          </label>
                          <label
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            htmlFor="grid-password"
                          >
                            {props?.microorg.microorganismo_idmicroorganismo_microorganismo.habitat_idhabitat_habitat.info}
                          </label>
                        </div>
                      </div>
                      <div className="w-full lg:w-6/12 px-4">
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Origem Geográfica
                          </label>
                          <label
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            htmlFor="grid-password"
                          >
                          {props?.microorg.microorganismo_idmicroorganismo_microorganismo.origem_geo}
                          </label>
                        </div>
                      </div>
                      <div className="w-full lg:w-3/12 px-4">
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Latitude
                          </label>
                          <label
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            htmlFor="grid-password"
                          >
                          {props?.microorg.microorganismo_idmicroorganismo_microorganismo.lat}
                          </label>
                        </div>
                      </div>
                      <div className="w-full lg:w-3/12 px-4">
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Longitude
                          </label>
                          <label
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            htmlFor="grid-password"
                          >
                            
                          {props?.microorg.microorganismo_idmicroorganismo_microorganismo.lon}
                          </label>
                        </div>
                      </div>
                      <div className="w-full lg:w-3/12 px-4">
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            DATUM
                          </label>
                          <label
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            htmlFor="grid-password"
                          >
                            
                          {props?.microorg.microorganismo_idmicroorganismo_microorganismo.datum}
                          </label>
                        </div>
                      </div>
                      <div className="w-full lg:w-3/12 px-4">
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Precisão
                          </label>
                          <label
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            htmlFor="grid-password"
                          >
                            
                          {props?.microorg.microorganismo_idmicroorganismo_microorganismo.precisao}
                          </label>
                        </div>
                      </div>
                      <div className="w-full lg:w-12/12 px-4">
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Comentários sobre origem
                          </label>
                          <label
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            htmlFor="grid-password"
                          >
                            
                          {props?.microorg.microorganismo_idmicroorganismo_microorganismo.coment_orig}
                          </label>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                  <form>
                    <div className="flex flex-wrap">
                      <div className="w-full lg:w-3/12 px-4">
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Data do Isolamento
                          </label>
                          <label
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            htmlFor="grid-password"
                          >
                          {new Date(props?.microorg.microorganismo_idmicroorganismo_microorganismo.data_isol).toLocaleDateString()}
                          </label>
                        </div>
                      </div>
                      <div className="w-full lg:w-9/12 px-4">
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Responsável pelo isolamento
                          </label>
                          <label
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            htmlFor="grid-password"
                          >
                            
                            {props?.microorg.microorganismo_idmicroorganismo_microorganismo.pesquisador_isolamento_pesquisador?.nome + " - " +
                             props?.microorg.microorganismo_idmicroorganismo_microorganismo.pesquisador_isolamento_pesquisador?.email + " - " +
                             props?.microorg.microorganismo_idmicroorganismo_microorganismo.pesquisador_isolamento_pesquisador?.instituicao }
                          </label>
                        </div>
                      </div>
                      <div className="w-full lg:w-12/12 px-4">
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Informações sobre o método de isolamento
                          </label>
                          <label
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            htmlFor="grid-password"
                          >
                            {props?.microorg.microorganismo_idmicroorganismo_microorganismo.info_isolamento}
                          </label>
                        </div>
                      </div>
                      <div className="w-full lg:w-3/12 px-4">
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Data da identificação
                          </label>
                          <label
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            htmlFor="grid-password"
                          >
                            
                          {new Date(props?.microorg.microorganismo_idmicroorganismo_microorganismo.data_ident).toLocaleDateString()}
                          </label>
                        </div>
                      </div>
                      <div className="w-full lg:w-9/12 px-4">
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Identificador
                          </label>
                          <label
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            htmlFor="grid-password"
                          >
                            
                            {props?.microorg.microorganismo_idmicroorganismo_microorganismo.pesquisador_ident_pesquisador?.nome + " - " +
                             props?.microorg.microorganismo_idmicroorganismo_microorganismo.pesquisador_ident_pesquisador?.email + " - " +
                             props?.microorg.microorganismo_idmicroorganismo_microorganismo.pesquisador_ident_pesquisador?.instituicao }
                          </label>
                        </div>
                      </div>
                      <div className="w-full lg:w-12/12 px-4">
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Comentário
                          </label>
                          <label
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            htmlFor="grid-password"
                          >
                          {props?.microorg.microorganismo_idmicroorganismo_microorganismo.coment_isolamento}
                          </label>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <div className={openTab === 4 ? "block" : "hidden"} id="link4">
                  <form>
                    <div className="flex flex-wrap">
                      <div className="w-full lg:w-4/12 px-4">
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Cor da colônia
                          </label>
                          <label
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            htmlFor="grid-password"
                          >
                            {props?.microorg.microorganismo_idmicroorganismo_microorganismo.cor_colonia_cor?.cor}
                          </label>
                        </div>
                      </div>
                      <div className="w-full lg:w-4/12 px-4">
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Textura
                          </label>
                          <label
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            htmlFor="grid-password"
                          >
                            {props?.microorg.microorganismo_idmicroorganismo_microorganismo.textura_idtextura_textura?.textura}
                          </label>
                        </div>
                      </div>
                      <div className="w-full lg:w-4/12 px-4">
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Borda
                          </label>
                          <label
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            htmlFor="grid-password"
                          >
                            {props?.microorg.microorganismo_idmicroorganismo_microorganismo.borda_idborda_borda?.borda}
                          </label>
                        </div>
                      </div>
                      <div className="w-full lg:w-4/12 px-4">
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Relevo
                          </label>
                          <label
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            htmlFor="grid-password"
                          >
                            {props?.microorg.microorganismo_idmicroorganismo_microorganismo.relevo_idrelevo_relevo?.relevo}
                          </label>
                        </div>
                      </div>
                      <div className="w-full lg:w-4/12 px-4">
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Exudato
                          </label>
                          <label
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            htmlFor="grid-password"
                          >
                            {props?.microorg.microorganismo_idmicroorganismo_microorganismo.exudato_idexudato_exudato?.exudato}
                          </label>
                        </div>
                      </div>
                      <div className="w-full lg:w-4/12 px-4">
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Cor do Exudato
                          </label>
                          <label
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            htmlFor="grid-password"
                          >
                            {props?.microorg.microorganismo_idmicroorganismo_microorganismo.cor_exudato_cor?.cor}
                          </label>
                        </div>
                      </div>
                      <div className="w-full lg:w-4/12 px-4">
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Pigmento
                          </label>
                          <label
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            htmlFor="grid-password"
                          >
                            {props?.microorg.microorganismo_idmicroorganismo_microorganismo.pigmento_idpigmento_pigmento?.pigmento}
                          </label>
                        </div>
                      </div>
                      <div className="w-full lg:w-4/12 px-4">
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Cor do pigmento no meio de cultura
                          </label>
                          <label
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            htmlFor="grid-password"
                          >
                            {props?.microorg.microorganismo_idmicroorganismo_microorganismo.cor_pigmento_cor?.cor}
                          </label>
                        </div>
                      </div>
                      <div className="w-full lg:w-4/12 px-4">
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Temperatura ótima de crescimento
                          </label>
                          <label
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            htmlFor="grid-password"
                          >
                            {props?.microorg.microorganismo_idmicroorganismo_microorganismo.temp_crescimento}
                          </label>
                        </div>
                      </div>
                      <div className="w-full lg:w-12/12 px-4">
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Referência para temperatura
                          </label>
                          <label
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            htmlFor="grid-password"
                          >
                          {referenciaTemp }
                          </label>
                        </div>
                      </div>
                      <div className="w-full lg:w-full px-4">
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Caracteristicas micromorfológicas
                          </label>
                          <label
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            htmlFor="grid-password"
                          >
                            {caracMicro}
                          </label>
                        </div>
                      </div>
                      <div className="w-full lg:w-12/12 px-4">
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Imagens macromorfológicas
                          </label>
                          {
                            imgMacro.map((img, index) => {
                                return <img src={img} alt="img" className="w-full h-full" />
                            })
                          }
                        </div>
                      </div>
                      <div className="w-full lg:w-12/12 px-4">
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Imagens micromorfológicas
                          </label>
                          {
                            imgMicro.map((img, index) => {
                                return <img src={img} alt="img" className="w-full h-full" />
                            })
                          }
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <div className={openTab === 5 ? "block" : "hidden"} id="link6">
                  <form>
                    <div className="flex flex-wrap">
                      <div className="w-full lg:w-6/12 px-4">
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Laboratório
                          </label>
                          <label
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            htmlFor="grid-password"
                          >
                            {props?.microorg.microorganismo_idmicroorganismo_microorganismo.laboratorio_mol_laboratorio?.laboratorio}
                          </label>
                        </div>
                      </div>
                      <div className="w-full lg:w-3/12 px-4">
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Data
                          </label>
                          <label
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            htmlFor="grid-password"
                          >
                            {new Date(props?.microorg.microorganismo_idmicroorganismo_microorganismo.data_mol).toLocaleDateString()}
                          </label>
                        </div>
                      </div>
                      <div className="w-full lg:w-3/12 px-4">
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Código
                          </label>
                          <label
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            htmlFor="grid-password"
                          >
                            {props?.microorg.microorganismo_idmicroorganismo_microorganismo.cod_mol}
                          </label>
                        </div>
                      </div>
                      <div className="w-full lg:w-12/12 px-4">
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Sequência
                          </label>
                          <label
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            htmlFor="grid-password"
                          >
                            {props?.microorg.microorganismo_idmicroorganismo_microorganismo.sequencia_mol}
                          </label>
                        </div>
                      </div>
                      <div className="w-full lg:w-12/12 px-4">
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Metadados
                          </label>
                          <label
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            htmlFor="grid-password"
                          >
                            {props?.microorg.microorganismo_idmicroorganismo_microorganismo.meta_mol}
                          </label>
                        </div>
                      </div>
                      <div className="w-full lg:w-6/12 px-4">
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Anexos
                          </label>
                          {
                            anexos.map((anx, index) => {
                                console.log(anx)
                                return <a href={baseurlImg+anx.link} target="blank" alt="anx" className="w-full h-full"><span>{baseurlImg+anx.link}</span></a>
                            })
                          }
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <div className={openTab === 6 ? "block" : "hidden"} id="link7">
                  <form>
                    <div className="flex flex-wrap">
                      <div className="w-full lg:w-6/12 px-4">
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Sub-Coleção
                          </label>
                          <label
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            htmlFor="grid-password"
                          >
                            {props?.microorg.posicao_idposicao_posicao.lote_idlote_lote.prateleira_idprateleira_prateleira.armario_idarmario_armario.sub_colecao_idsub_colecao_sub_colecao.sub_colecao}
                          </label>
                        </div>
                      </div>
                      <div className="w-full lg:w-6/12 px-4">
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Grupo de pesquisa
                          </label>
                          <label
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            htmlFor="grid-password"
                          >
                            {props?.microorg.grupo_pesquisa_idgrupo_pesquisa_grupo_pesquisa.grupo}
                          </label>
                        </div>
                      </div>
                      <div className="w-full lg:w-6/12 px-4">
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Tipo de Frasco
                          </label>
                          <label
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            htmlFor="grid-password"
                          >
                            {props?.microorg.unidade_idunidade_unidade.unidade}
                          </label>
                        </div>
                      </div>
                      <div className="w-full lg:w-6/12 px-4">
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Armário
                          </label>
                          <label
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            htmlFor="grid-password"
                          >
                            {props?.microorg.posicao_idposicao_posicao.lote_idlote_lote.prateleira_idprateleira_prateleira.armario_idarmario_armario.armario}
                          </label>
                        </div>
                      </div>
                      <div className="w-full lg:w-4/12 px-4">
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Prateleira
                          </label>
                          <label
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            htmlFor="grid-password"
                          >
                            {props?.microorg.posicao_idposicao_posicao.lote_idlote_lote.prateleira_idprateleira_prateleira.prateleira}
                          </label>
                        </div>
                      </div>
                      <div className="w-full lg:w-4/12 px-4">
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Lote
                          </label>
                          <label
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            htmlFor="grid-password"
                          >
                            {props?.microorg.posicao_idposicao_posicao.lote_idlote_lote.lote}
                          </label>
                        </div>
                      </div>
                      <div className="w-full lg:w-4/12 px-4">
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Posição
                          </label>
                          <label
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            htmlFor="grid-password"
                          >
                            {props?.microorg.posicao_idposicao_posicao.posicao}
                          </label>
                        </div>
                      </div>
                      <div className="w-full lg:w-3/12 px-4">
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Data da preservação
                          </label>
                          <label
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            htmlFor="grid-password"
                          >
                            {new Date(props?.microorg.data_preserv).toLocaleDateString()}
                          </label>
                        </div>
                      </div>
                      <div className="w-full lg:w-9/12 px-4">
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Responsável pela preservação
                          </label>
                          <label
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            htmlFor="grid-password"
                          >
                            {props?.microorg.pesquisador_preserv_pesquisador.nome + " - " +
                             props?.microorg.pesquisador_preserv_pesquisador.email + " - " +
                             props?.microorg.pesquisador_preserv_pesquisador.instituicao }
                          </label>
                        </div>
                      </div>

                      <div className="w-full lg:w-full px-4">
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Método de Preservação
                          </label>
                          <label
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            htmlFor="grid-password"
                          >
                            {metodoPrev}
                          </label>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <div className={openTab === 7 ? "block" : "hidden"} id="link5">
                  <form>
                    <div className="flex flex-wrap">
                      {/* Foto, Comentários. referências adicionais */}
                      <div className="w-full lg:w-12/12 px-4">
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Comentários
                          </label>
                          <label
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            htmlFor="grid-password"
                          >
                            {props?.microorg.comentarios}
                          </label>
                        </div>
                      </div>
                      <div className="w-full lg:w-3/12 px-4">
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Disponível para doação
                          </label>
                          <label
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            htmlFor="grid-password"
                          >
                            {doacaoList[props?.microorg.disponivel].doacao}
                          </label>
                        </div>
                      </div>
                      <div className="w-full lg:w-6/12 px-4">
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Imagens adicionais
                          </label>
                          {
                            imgRepique.map((img, index) => {
                                return <img src={img} alt="img" className="w-full h-full" />
                            })
                          }
                        </div>
                      </div>
                      <div className="w-full lg:w-12/12 px-4">
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Referências adicionais
                          </label>
                          <label
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            htmlFor="grid-password"
                          >
                          {referenciaRep}
                          </label>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
