import MicroContent from "components/Simple/MicroContent";
import React, { useState } from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";
// components

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
export default function CardDetailMicro() {
  
  //START PERSON MODAL
  const [itemPersonName, setItemPersonName] = React.useState(["", "", ""]);
  const [itemPersonValue, setItemPersonValue] = React.useState(["", "", ""]);
  const [modalPersonIsOpen, setPersonIsOpen] = useState(false);

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
                <input
                  type="text"
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  value={itemPersonValue[0]}
                />
              </div>
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  {itemPersonName[1]}
                </label>
                <input
                  type="text"
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  value={itemPersonValue[1]}
                />
              </div>
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  {itemPersonName[2]}
                </label>
                <input
                  type="text"
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  value={itemPersonValue[2]}
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
                  {itemDonateName[0]}
                </label>
                <input
                  type="text"
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  value={itemDonateValue[0]}
                />
              </div>
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  {itemDonateName[1]}
                </label>
                <input
                  type="text"
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  value={itemDonateValue[1]}
                />
              </div>
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  {itemDonateName[2]}
                </label>
                <input
                  type="text"
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  value={itemDonateValue[2]}
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
            <div>
              <Link to="/admin/m/repique">
                <button
                  className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                  type="button"
                >
                  Repique
                </button>
              </Link>
              <Link to="/admin/m/edit">
              <button
                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                type="button"
              >
                Editar
              </button>
              </Link>
              <button
                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => {
                  openPersonModal();
                }}
              >
                Autenticar
              </button>
              <button
                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => {
                  openMoveModal();
                }}
              >
                Mover
              </button>
              <button
                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => {
                  openDonateModal();
                }}
              >
                Doar
              </button>
            </div>
          </div>
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <MicroContent showOnly={true} isRepique={false}/>
          </div>
      </div>
    </>
  );
}
