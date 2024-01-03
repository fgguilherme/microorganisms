import React, { useState, useEffect } from "react";
import Switch from "react-switch";
// components
import config from "config/config.json";
import axios from "axios";

export default function CardSettings(props) {
  const API_URL = config.API_URL;
  const [name, setName] = useState("Nome Completo");
  const [mail, setMail] = useState("Email");
  const [instituicao, setInstituicao] = useState("UEA");
  const [passwd, setPasswd] = useState("password");
  const [passwdRep, setPasswdRep] = useState("password");
  const [isMaster, setIsMaster] = useState(false);

  useEffect(() => {
  if(props.user){
    setName(props.user.nome);
    setMail(props.user.email);
    setInstituicao(props.user.instituicao);
    setPasswd(props.user.passwd);
    setPasswdRep(props.user.passwd);
    setIsMaster(props.user.isMaster);
  }
  }, [])
  const changeName = (e) => {
    // console.log(e)
    setName(e.target.value)
  }
  const changePass = (e) => {
    // console.log(e)
    setPasswd(e.target.value)
  }
  const changePassRep = (e) => {
    // console.log(e)
    setPasswdRep(e.target.value)
  }
  const changeMail = (e) => {
    // console.log(e)
    setMail(e.target.value)
  }
  const changeInstituicao = (e) => {
    // console.log(e)
    setInstituicao(e.target.value)
  }

  const save = () => {
    console.log(passwd,passwdRep)
    if(passwd === passwdRep && passwd !== "password"){
      let usr = {
        nome: name,
        email: mail,
        instituicao: instituicao,
        passwd: passwd,
        isMaster: isMaster
      }
      console.log(usr)
      axios.post(API_URL+"user",usr)
      .then(response => {
        console.log(response.data)
      }).catch(error => {
        console.log(error)
      })
    }else{
      alert("Senhas não conferem ou não foram preenchidas")
    }
  }

  const updateData = () => {
      let usr = {
        nome: name,
        email: mail,
        instituicao: instituicao,
        isMaster: isMaster
      }
      console.log(usr)
      axios.put(API_URL+"user/"+props.user.iduser,usr)
      .then(response => {
        console.log(response.data)
      })
  }

  const updatePass = () => {
    console.log(passwd,passwdRep,props.user.passwd)
    if(passwd === passwdRep && passwd !== props.user.passwd){
      let usr = {
        passwd: passwd
      }
      console.log(usr)
      axios.put(API_URL+"user/"+props.user.iduser,usr)
      .then(response => {
        console.log(response.data)
      })
    }else{
      alert("Senhas não conferem ou não foram preenchidas")
    }
  }

  const handleSetIsMaster = () => setIsMaster(!isMaster);
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
        <div className="rounded-t bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h6 className="text-blueGray-700 text-xl font-bold">{props.user? props.user.nome:"Novo Usuário"}</h6>
            {/* <button
              className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
              type="button"
            >
              Settings
            </button> */}
          </div>
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <form>
            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              Informações do Usuário
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Nome completo
                  </label>
                  <input
                    type="text"
                    onChange={changeName}
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    defaultValue={name}
                    value={name}
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    onChange={changeMail}
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    defaultValue={mail}
                    value={mail}
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Instituição
                  </label>
                  <input
                    type="text"
                    onChange={changeInstituicao}
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    defaultValue={instituicao}
                    value={instituicao}
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Administrador
                  </label>
                  <Switch onChange={handleSetIsMaster} checked={isMaster} />
                </div>
              </div>
            </div>
            { props.user?
            <div className="block w-full overflow-x-auto">
              <div className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                  <button
                    className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={updateData}
                  >
                    Atualizar Dados
                  </button>
              </div>
            </div>:null}

            <hr className="mt-6 border-b-1 border-blueGray-300" />

            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              Senha
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Nova Senha
                  </label>
                  <input
                    type="password"
                    onChange={changePass}
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    defaultValue={passwd}
                    value={passwd}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Repetir Senha
                  </label>
                  <input
                    type="password"
                    onChange={changePassRep}
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    defaultValue={passwdRep}
                    value={passwdRep}
                  />
                </div>
              </div>
            </div>
            { props.user?
            <div className="block w-full overflow-x-auto">
              <div className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                  <button
                    className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={updatePass}
                  >
                    Atualizar Senha
                  </button>
              </div>
            </div>:null}

            <hr className="mt-6 border-b-1 border-blueGray-300" />
            { props.user? null:
            <div className="block w-full overflow-x-auto">
              <div className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                  <button
                    className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={save}
                  >
                    Salvar
                  </button>
              </div>
            </div>}

          </form>
        </div>
      </div>
    </>
  );
}
