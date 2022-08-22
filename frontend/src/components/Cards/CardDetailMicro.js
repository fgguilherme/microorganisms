import MicroContentDetail from "components/Simple/MicroContentDetail";
import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import axios, {AxiosError} from "axios";
import Select from "react-select";
// components
const baseurl = window.location.origin.toString() + "/api/"

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
export default function CardDetailMicro(props) {
  //START PERSON MODAL
  const [itemPersonName, setItemPersonName] = React.useState(["", "", ""]);
  const [itemPersonValue, setItemPersonValue] = React.useState(["", "", ""]);
  const [modalPersonIsOpen, setPersonIsOpen] = useState(false);
  const [pesquisador, setPesquisador] = useState([]);
  const [pesquisadorList, setPesquisadorList] = useState([]);
  const [dataAutenticacao, setDataAutenticacao] = useState('');
  const [dataDoacao, setDataDoacao] = useState('');
  const [pesquisadorDoacao, setPesquisadorDoacao] = useState([]);
  const [destinatario, setDestinatario] = useState('');


  useEffect(() => {
    axios.get(baseurl+"pesquisador")
      .then(response => {
        // console.log(response.data);
        setPesquisadorList(response.data);
      }, error => {
        // console.log(error);
      });
  }, [])

  function openPersonModal() {
    setPersonIsOpen(true);
    setItemPersonName(["Pesquisador", "Email", "Instituição"]);
    setItemPersonValue(["","",""]);
  }

  function afterOpenPersonModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }

  function closePersonModal(persist) {
    if(persist == true){
      axios.post(baseurl+ "autenticacao", {idPesquisador:pesquisador.idpesquisador,
        idRepique:props.microorg.idrepique,
        data_autenticacao:dataAutenticacao
      })
      .then((response) => {
        // console.log(response)
        //return to main table
        // window.location.href = "/admin/m/" + props.returnto
      }, (error) => {
        // console.log(error);
      });
    }
    setPersonIsOpen(false);
  }
  //END PERSON MODAL
  
  //START MOVE MODAL
  const [itemMoveName, setItemMoveName] = React.useState(["", "", ""]);
  const [itemMoveValue, setItemMoveValue] = React.useState(["", "", ""]);
  const [modalMoveIsOpen, setMoveIsOpen] = useState(false);

  function openMoveModal() {
    setMoveIsOpen(true);
    setItemMoveName(["Pesquisador", "Email", "Instituição"]);
    setItemMoveValue(["","",""]);
  }

  function afterOpenMoveModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }

  function closeMoveModal(persist) {
    setMoveIsOpen(false);
  }
  //END MOVE MODAL
  
  //START DONATE MODAL
  const [itemDonateName, setItemDonateName] = React.useState(["", "", ""]);
  const [itemDonateValue, setItemDonateValue] = React.useState(["", "", ""]);
  const [modalDonateIsOpen, setDonateIsOpen] = useState(false);

  function openDonateModal() {
    setDonateIsOpen(true);
    setItemDonateName(["Pesquisador", "Email", "Instituição"]);
    setItemDonateValue(["","",""]);
  }

  function afterOpenDonateModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }

  function closeDonateModal(persist) {
    if(persist == true){
      axios.post(baseurl+ "doacao", {idPesquisador:pesquisadorDoacao.idpesquisador,
        idRepique:props.microorg.idrepique,
        data_doacao:dataDoacao,
        destinatario: destinatario
      })
      .then((response) => {
        // console.log(response)
        //return to main table
        // window.location.href = "/admin/m/" + props.returnto
      }, (error) => {
        // console.log(error);
      });
    }
    setDonateIsOpen(false);
  }
  //END DONATE MODAL
  return (
    <>
    {/* CARD AUTH */}
    <Modal
      isOpen={modalPersonIsOpen}
      onAfterOpen={afterOpenPersonModal}
      onRequestClose={closePersonModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <div >
        <div className="rounded-t mb-0 px-6 py-4">
          <div className="text-center flex justify-center">
            <h6 className="text-blueGray-700 text-xl font-bold">Autenticar</h6>
          </div>
        </div>
        <form>
          <div className="flex flex-wrap">
            {/* Foto, Comentários. referências adicionais */}
            <div className="w-full lg:w-12/12 px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  {itemPersonName[0]}
                </label>
                <Select
                    className="w-8/12"
                    searchable={true}
                    placeholder={"Select an option"}
                    options={pesquisadorList}
                    defaultValue={pesquisador}
                    value={pesquisador}
                    onChange={setPesquisador}
                    getOptionLabel={(options) => options["nome"]+" - "+options["email"]+" - "+options["instituicao"]}
                    getOptionValue={(options) => options["idpesquisador"]}
                  />
                <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Data da Autenticação
                </label>
                <input
                  disabled={props.showOnly}
                  type="date"
                  onChange={e=>setDataAutenticacao(e.target.value)}
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  value={dataAutenticacao}
               />
              </div>
              <div className="relative w-full mb-3">
                <button
                  className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => {
                    closePersonModal(false);
                  }}
                >
                  Cancelar
                </button>
                <button
                  className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => {
                    closePersonModal(true);
                  }}
                >
                  Salvar
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </Modal>
    {/* CARD MOVE */}
    <Modal
      isOpen={modalMoveIsOpen}
      onAfterOpen={afterOpenMoveModal}
      onRequestClose={closeMoveModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <div >
        <div className="rounded-t mb-0 px-6 py-4">
          <div className="text-center flex justify-center">
            <h6 className="text-blueGray-700 text-xl font-bold">Mover</h6>
          </div>
        </div>
        <form>
          <div className="flex flex-wrap">
            {/* Foto, Comentários. referências adicionais */}
            <div className="w-full lg:w-12/12 px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  {itemMoveName[0]}
                </label>
                <input
                  type="text"
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  value={itemMoveValue[0]}
                />
              </div>
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  {itemMoveName[1]}
                </label>
                <input
                  type="text"
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  value={itemMoveValue[1]}
                />
              </div>
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  {itemMoveName[2]}
                </label>
                <input
                  type="text"
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  value={itemMoveValue[2]}
                />
              </div>
              <div className="relative w-full mb-3">
                <button
                  className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => {
                    closeMoveModal(false);
                  }}
                >
                  Cancelar
                </button>
                <button
                  className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => {
                    closeMoveModal(true);
                  }}
                >
                  Salvar
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </Modal>
    {/* CARD DONATION */}
    <Modal
      isOpen={modalDonateIsOpen}
      onAfterOpen={afterOpenDonateModal}
      onRequestClose={closeDonateModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <div >
        <div className="rounded-t mb-0 px-6 py-4">
          <div className="text-center flex justify-center">
            <h6 className="text-blueGray-700 text-xl font-bold">Doar</h6>
          </div>
        </div>
        <form>
        <div className="flex flex-wrap">
            {/* Foto, Comentários. referências adicionais */}
            <div className="w-full lg:w-12/12 px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Responsável pela Doação
                </label>
                <Select
                    className="w-8/12"
                    searchable={true}
                    placeholder={"Select an option"}
                    options={pesquisadorList}
                    defaultValue={pesquisadorDoacao}
                    value={pesquisadorDoacao}
                    onChange={setPesquisadorDoacao}
                    getOptionLabel={(options) => options["nome"]+" - "+options["email"]+" - "+options["instituicao"]}
                    getOptionValue={(options) => options["idpesquisador"]}
                  />
                <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Data da Doação
                </label>
                <input
                  type="date"
                  onChange={e=>setDataDoacao(e.target.value)}
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  value={dataDoacao}
               />
                <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Destinatário
                </label>
                <input
                  type="text"
                  onChange={e=>setDestinatario(e.target.value)}
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  value={destinatario}
               />
              </div>
              <div className="relative w-full mb-3">
                <button
                  className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => {
                    closeDonateModal(false);
                  }}
                >
                  Cancelar
                </button>
                <button
                  className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => {
                    closeDonateModal(true);
                  }}
                >
                  Salvar
                </button>
              </div>
            </div>
          </div>   
        </form>
      </div>
    </Modal>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
        <div className="rounded-t bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h6 className="text-blueGray-700 text-xl font-bold">Detalhes</h6>
            <div style={{ display: props.hideActionbar ? "none" : "block" }}>
              <Link to={{pathname:"/admin/m/edit",item: {microorg:props.microorg}}}>
              <button
                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                type="button"
                // disabled
              >
                Editar
              </button>
              </Link>
              <button
                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                type="button"
                // disabled
                onClick={() => {
                  openPersonModal();
                }}
              >
                Autenticar
              </button>
              {/* <button
                className="bg-lightBlue-300 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                type="button"
                disabled
                onClick={() => {
                  openMoveModal();
                }}
              >
                Mover
              </button> */}
              {props.microorg.disponivel==1?
              <button
                className="bg-lightBlue-300 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                type="button"
                disabled
              >
                Doar
              </button>:              
              <button
                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                type="button"
                // disabled
                onClick={() => {
                  openDonateModal();
                }}
              >
                Doar
              </button>
              }
            </div>
          </div>
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <MicroContentDetail microorg={props.microorg} />
          </div>
      </div>
    </>
  );
}
