import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import Select from "react-select";
import { Link } from "react-router-dom";
import axios, {AxiosError} from "axios";
import MultipleDropzone from "components/Upload/MultipleDropzone";
import MultipleDropzonePDF from "components/Upload/MultipleDropzonePDF";
import { useAlert } from 'react-alert'
// components
const baseurl = window.location.origin.toString() + "/api/"
const baseurlImg = window.location.origin.toString()
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
//0habitat
const habitatList = [
  {
    idhabitat: 0,
    habitat: "Fitopatogênico",
  },
  {
    idhabitat: 1,
    habitat: "Endofítico",
  },
  {
    idhabitat: 2,
    habitat: "Epifítico",
  },
  {
    idhabitat: 3,
    habitat: "Clínico",
  },
  {
    idhabitat: 4,
    habitat: "Solo",
  },
  {
    idhabitat: 5,
    habitat: "Degradador de madeira",
  },
  {
    idhabitat: 6,
    habitat: "Hipógeo",
  },
  {
    idhabitat: 7,
    habitat: "Anemófilo",
  },
  {
    idhabitat: 8,
    habitat: "Outros",
  },
];

const statusList = [
  {
    idstatus: 0,
    status: "Ativo",
  },
  {
    idstatus: 1,
    status: "Inativo",
  },
  {
    idstatus: 2,
    status: "Pendente",
  },
];

const doacaoList = [
  {
    iddoacao: 0,
    doacao: "Sim",
  },
  {
    iddoacao: 1,
    doacao: "Não",
  },
  {
    iddoacao: 2,
    doacao: "Sob Consulta",
  },
];

export default function MicroContent(props) {
  var initialTab = 1;
  if (props.isRepique === true) {
    initialTab = 6;
  }
  const [openTab, setOpenTab] = useState(initialTab);
  
  //START DATA DECLARATION

  const [dominio, setDominio] = useState([]);
  const [dominioList, setDominioList] = useState([]); //0dominio

  const [reino, setReino] = useState([]);
  const [reinoList, setReinoList] = useState([]); //0reino

  const [filo, setFilo] = useState([]);
  const [filoList, setFiloList] = useState([]); //0filo

  const [classe, setClasse] = useState([]);
  const [classeList, setClasseList] = useState([]); //0classe

  const [ordem, setOrdem] = useState([]);
  const [ordemList, setOrdemList] = useState([]); //0ordem

  const [familia, setFamilia] = useState([]);
  const [familiaList, setFamiliaList] = useState([]); //0familia

  const [genero, setGenero] = useState([]);
  const [generoList, setGeneroList] = useState([]); //0genero

  const [especie, setEspecie] = useState([]);
  const [especieList, setEspecieList] = useState([]); //0especie

  const [sub_especie, setSub_especie] = useState([]);
  const [sub_especieList, setSub_especieList] = useState([]); //0sub_especie

  const [variedade, setVariedade] = useState([]);
  const [variedadeList, setVariedadeList] = useState([]); //0variedade

  const [refTaxa, setRefTaxa] = useState([]);
  const [refTemp, setRefTemp] = useState([]);
  const [refAdd, setRefAdd] = useState([]);
  const [referenciaList, setReferenciaList] = useState([]); //0referencia
    
  const [pesqColeta, setPesqColeta] = useState([]);
  const [pesqIsola, setPesqIsola] = useState([]);
  const [pesqId, setPesqId] = useState([]);
  const [pesqPres, setPesqPres] = useState([]);
  const [pesquisadorList, setPesquisadorList] = useState([]); //0pesquisador

  const [status, setStatus] = useState([]);

  const [unidade, setUnidade] = useState([]);
  const [unidadeList, setUnidadeList] = useState([]); //0unidade

  const [doacao, setDoacao] = useState([]);
  const [habitat, setHabitat] = useState([]);
  
  const [hospAnList, setHospAnList] = useState([]); //0hospAnimal
  const [hospAn, setHospAn] = useState([]);

  const [sitioAnat, setSitioAnat] = useState([]);
  const [sitioAnatList, setSitioAnatList] = useState([]); //0sitio

  const [hospVegList, setHospVegList] = useState([]); //0hospVegetal
  const [hospVeg, setHospVeg] = useState([]);
  

  const [substratoList, setSubstratoList] = useState([]); //0substrato
  const [substrato, setSubstrato] = useState([]);

  
  const [corList, setCorList] = useState([]); //0cor
  const [corColonia, setCorColonia] = useState([]);
  const [corExu, setCorExu] = useState([]);
  const [corPig, setCorPig] = useState([]);

  const [texturaList, setTexturaList] = useState([]); //0textura
  const [textura, setTextura] = useState([]);

  const [bordaList, setBordaList] = useState([]); //0borda
  const [borda, setBorda] = useState([]);

  const [relevoList, setRelevoList] = useState([]); //0relevo
  const [relevo, setRelevo] = useState([]);

  const [exudatoList, setExudatoList] = useState([]); //0exudato
  const [exudato, setExudato] = useState([]);

  const [pigmentoList, setPigmentoList] = useState([]); //0pigmento
  const [pigmento, setPigmento] = useState([]);

  const [caracMicroList, setCaracMicroList] = useState([]); //0caracMicro
  const [caracMicro, setCaracMicro] = useState([]);

  const [posicaoList, setPosicaoList] = useState([]); //0posicao
  const [posicao, setPosicao] = useState([]);

  const [loteList, setLoteList] = useState([]); //0lote
  const [lote, setLote] = useState([]);

  const [prateleiraList, setPrateleiraList] = useState([]); //0prateleira
  const [prateleira, setPrateleira] = useState([]);

  const [armarioList, setArmarioList] = useState([]); //0armariodataReg
  const [armario, setArmario] = useState([]);

  const [sub_colecao, setSub_colecao] = useState([]);
  const [sub_colecaoList, setSub_colecaoList] = useState([]); //0sub_colecao

  const [labList, setLabList] = useState([]); //0laboratorio
  const [laboratorio, setLaboratorio] = useState([]);

  const [grupo_pesquisa, setGrupoPesquisa] = useState([]);
  const [grupo_pesquisaList, setGrupoPesquisaList] = useState([]); //0grupo_pesquisa

  const [metodo_preservacao, setMetodoPreservacao] = useState([]);
  const [metodo_preservacaoList, setMetodoPreservacaoList] = useState([]); //0metodo_preservacao

  const [dataReg, setDataReg] = useState("");
  const [dataCol, setDataCol] = useState("");
  const [dataIso, setDataIso] = useState("");
  const [dataIdn, setDataIdn] = useState("");
  const [dataMol, setDataMol] = useState("");
  const [dataPrv, setDataPrv] = useState("");
  const [dataEmis, setDataEmis] = useState("");
  
  const [origCode, setOrigCode] = useState("");
  const [origHist, setOrigHist] = useState("");
  const [habitatInfo, setHabitatInfo] = useState("");
  const [origGeo, setOrigGeo] = useState("");
  const [origLat, setOrigLat] = useState("");
  const [origLon, setOrigLon] = useState("");
  const [origDatum, setOrigDatum] = useState("");
  const [origPrecisao, setOrigPrecisao] = useState("");
  const [origComent, setOrigComent] = useState("");
  const [regExiHosp, setRegExiHosp] = useState("");
  const [herbDeposit, setHerbDeposit] = useState("");
  const [codHerb, setCodHerb] = useState("");
  const [isoInfo, setIsoInfo] = useState("");
  const [isoComment, setIsoComment] = useState("");
  const [molCod, setMolCod] = useState("");
  const [molSeq, setMolSeq] = useState("");
  const [molMeta, setMolMeta] = useState("");
  const [comments, setComments] = useState("");

  const [tempCrescimento, setTempCrescimento] = useState(0);

  const [anexos, setAnexos] = useState([]);
  const [tempAnexos, settempAnexos] = useState([]);
  const [imagemMicro, setImagemMicro] = useState([]);
  const [imagemMacro, setImagemMacro] = useState([]);
  const [imagemRepiq, setImagemRepiq] = useState([]);
  const [imgMicro, setImgMicro] = useState([]);
  const [imgMacro, setImgMacro] = useState([]);
  const [imgRepiq, setImgRepiq] = useState([]);

  const alert = useAlert();

  const [tempTaxa, setTempTaxa] = useState({})
  const [tempLocal, setTempLocal] = useState({})


  async function saveMicro(e){
    if(variedade?.idvariedade == undefined){
      alert.error('Informe a variedade')
      return
    }
    // if(refTaxa == ""){
    //   alert.error('Informe a referências taxonômicas')
    //   return
    // }
    if(status.idstatus == undefined){
      alert.error('Informe o status')
      return
    }
    // if(dataReg.length < 5){
    //   alert.error('Informe a data do registro.')
    //   return
    // }
    // if(origCode == ""){
    //   alert.error('Informe Código orginal')
    //   return
    // }
    // if(origHist == ""){
    //   alert.error('Informe o histórico')
    //   return
    // }
    // if(dataCol.length < 5){
    //   alert.error('Informe a data da coleta.')
    //   return
    // }
    // if(pesqColeta?.idpesquisador == undefined){
    //   alert.error('Informe o responsável pela entrega')
    //   return
    // }
    if(habitat.idhabitat == undefined){
      alert.error('Informe o habitat')
      return
    }
    if(habitat?.idhabitat <= 2){

      if(hospVeg?.idhospedeiro == ""){
        alert.error('Informe o Hospedeiro Vegetal')
        return
      }
      if(substrato?.idsubstrato == undefined){
        alert.error('Informe o substrato')
        return
      }

    }else if(habitat?.idhabitat === 3){
      if(hospAn?.idhospedeiro == undefined){
        alert.error('Informe o Hospedeiro Aninal')
        return
      }
      if(sitioAnat?.idsitio == undefined){
        alert.error('Informe o sítio')
        return
      }
    }else{
      if(pesqId?.idpesquisador == undefined){
        alert.error('Informe o identificador')
        return
      }
    }
    // if(dataIso.length < 5){
    //   alert.error('Informe a data do isolamento.')
    //   return
    // }
    // if(pesqIsola?.idpesquisador == undefined){
    //   alert.error('Informe o responsável pelo isolamento')
    //   return
    // }
    // if(dataIdn.length < 5){
    //   alert.error('Informe a data da identificação.')
    //   return
    // }
    // if(pesqId?.idpesquisador == undefined){
    //   alert.error('Informe o identificador')
    //   return
    // }
    
    // if(corColonia?.idcor == undefined){
    //   alert.error('Informe a cor da colônia')
    //   return
    // }
    // if(textura?.idtextura == undefined){
    //   alert.error('Informe a textura')
    //   return
    // }
    // if(borda?.idborda == undefined){
    //   alert.error('Informe a borda')
    //   return
    // }
    // if(relevo?.idrelevo == undefined){
    //   alert.error('Informe o relevo')
    //   return
    // }
    // if(exudato?.idexudato == undefined){
    //   alert.error('Informe o exudato')
    //   return
    // }
    // if(corExu?.idcor == undefined){
    //   alert.error('Informe a cor do exudato')
    //   return
    // }
    // if(pigmento?.idpigmento == undefined){
    //   alert.error('Informe o pigmento')
    //   return
    // }
    // if(corPig?.idcor == undefined){
    //   alert.error('Informe a cor do pigmento')
    //   return
    // }
    // if(tempCrescimento == ""){
    //   alert.error('Informe a tempetura de crescimento')
    //   return
    // }
    // if(refTemp == ""){
    //   alert.error('Informe a referência para temperatura')
    //   return
    // }
    // if(caracMicro == ""){
    //   alert.error('Informe as caracteristicas micromorfológicas')
    //   return
    // }
    
    // if(laboratorio?.idlaboratorio == undefined){
    //   alert.error('Informe o laboratório')
    //   return
    // }
    // if(dataMol.length < 5){
    //   alert.error('Informe a data molecular.')
    //   return
    // }
    // if(molCod == ""){
    //   alert.error('Informe o código molecular')
    //   return
    // }
    // if(molSeq == ""){
    //   alert.error('Informe a sequência molecular')
    //   return
    // }
    // if(molMeta == ""){
    //   alert.error('Informe o metadados molecular')
    //   return
    // }

    if(grupo_pesquisa?.idgrupo_pesquisa == undefined){
      alert.error('Informe o grupo de pesquisa')
      return
    }
    if(unidade.idunidade == undefined){
      alert.error('Informe o tipo de frasco')
      return
    }
    if(posicao?.idposicao == undefined){
      alert.error('Informe a posição')
      return
    }
    if(dataPrv.length < 5){
      alert.error('Informe a data do método de preservação.')
      return
    }
    if(pesqPres?.idpesquisador == undefined){
      alert.error('Informe o responsável pela preservação')
      return
    }
    if(metodo_preservacao.length == 0){
      alert.error('Informe o método de preservação')
      return
    }
    if(doacao.iddoacao == undefined){
      alert.error('Informe a disponibilidade de doação')
      return
    }
    // if(refAdd == ""){
    //   alert.error('Informe a referências adicionais')
    //   return
    // }
    
    // const res = await uploadFile(e)

    let newMicro
    try {
      const d_reg_col_orig = ((dataReg.length > 0) ? dataReg : undefined)
      const d_colet = ((dataCol.length > 0) ? dataCol : undefined);
      const d_isol = ((dataIso.length > 0) ? dataIso : undefined);
      const d_ident = ((dataIdn.length > 0) ? dataIdn : undefined);
      const d_mol = ((dataMol.length > 0) ? dataMol : undefined);

      newMicro = {
      //MICRORGANISMO
      "variedade_idvariedade": variedade.idvariedade,
      "status": status.idstatus,
      "data_reg_col_orig": d_reg_col_orig,
      "data_colet": d_colet,
      "data_isol": d_isol,
      "data_ident": d_ident,
      "data_mol": d_mol,
      "cod_orig": origCode,
      "hist_orig": origHist,
      "pesquisador_coleta": pesqColeta?.idpesquisador,
      "origem_geo": origGeo,
      "lat": origLat,
      "lon": origLon,
      "datum": origDatum,
      "precisao": origPrecisao,
      "coment_orig": origComent,
      "pesquisador_isolamento": pesqIsola?.idpesquisador,
      "info_isolamento": isoInfo, 
      "pesquisador_ident": pesqId?.idpesquisador,
      "coment_isolamento": isoComment,       
      "cor_colonia": corColonia?.idcor,
      "textura_idtextura": textura?.idtextura,
      "borda_idborda": borda?.idborda,
      "relevo_idrelevo": relevo?.idrelevo,
      "exudato_idexudato": exudato?.idexudato,
      "cor_exudato": corExu?.idcor,
      "pigmento_idpigmento": pigmento?.idpigmento,
      "cor_pigmento": corPig?.idcor,
      "temp_crescimento": tempCrescimento,
      "laboratorio_mol": laboratorio?.idlaboratorio,
      "cod_mol": molCod,
      "sequencia_mol": molSeq,
      "meta_mol": molMeta,
      
      // _HAS_MICRO
      "has_referencia_taxa": refTaxa,
      "has_referencia_temp": refTemp,
      "has_imagem_macro": imagemMacro,
      "has_imagem_micro": imagemMicro,
      "has_carac_micromorfologica": caracMicro,
      "has_anexos": anexos,
      
      
      //Habitat INIT
      "habitat": habitat,
      "hospedeiro_idhospedeiro_An": hospAn?.idhospedeiro,
      "hospedeiro_idhospedeiro_Vg":hospVeg?.idhospedeiro,
      "habitat_info": habitatInfo,
      "idsubstrato": substrato?.idsubstrato,
      "reg_exidata": regExiHosp,
      "cod_herb": codHerb,
      "herb_deposit": herbDeposit,
      "sitio_idsitio": sitioAnat?.idsitio,
      // //Habitat END

      //REPIQUE INIT
      "unidade_idunidade": unidade?.idunidade,
      "grupo_pesq": grupo_pesquisa?.idgrupo_pesquisa,
      "other_comments": comments,
      "disp_doacao": doacao.iddoacao,
      "data_emission":dataEmis,
      "data_preserv":dataPrv,
      "posicao":posicao?.idposicao,
      "pesquisador_preserv": pesqPres?.idpesquisador,
      // _HAS_REPIQUE
      "has_metodo_preservacao": metodo_preservacao,  
      "has_refencia_adic": refAdd,
      "has_imagem_rep": imagemRepiq,
      //REPIQUE END
    }
    // console.log(newMicro)
    console.log("passei aqui fora do if")
    if(props.micro != undefined){
      console.log("passei aqui if")
      axios.put(baseurl+ "repique", newMicro)
      .then((response) => {
        // console.log(response)
        //return to main table
        // window.location.href = "/admin/m/" + props.returnto
      }, (error) => {
        // console.log(error);
      });
    // } catch (error) {
    //   // console.log("MISSING SOMETHING")
    // }
    }else{
      console.log("passei aqui else")
      axios.post(baseurl+ "repique", newMicro)
      .then((response) => {
        // console.log(response)
        //return to main table
        // window.location.href = "/admin/m/" + props.returnto
      }, (error) => {
        // console.log(error);
      });
    }
    } catch (error) {
      // console.log("MISSING SOMETHING")
    }
  }

  async function saveRepique(e,hasNext){
    if(grupo_pesquisa?.idgrupo_pesquisa == undefined){
      alert.error('Informe o grupo de pesquisa')
      return
    }
    if(unidade.idunidade == undefined){
      alert.error('Informe o tipo de frasco')
      return
    }
    if(posicao?.idposicao == undefined){
      alert.error('Informe a posição')
      return
    }
    if(dataPrv.length < 5){
      alert.error('Informe a data do método de preservação.')
      return
    }
    if(pesqPres?.idpesquisador == undefined){
      alert.error('Informe o responsável pela preservação')
      return
    }
    if(metodo_preservacao.length == 0){
      alert.error('Informe o método de preservação')
      return
    }
    if(doacao.iddoacao == undefined){
      alert.error('Informe a disponibilidade de doação')
      return
    }

    let newMicro
    try {
      newMicro = {
      //REPIQUE INIT
      "microorganismo_idmicroorganismo":props.idmicro,
      "unidade_idunidade": unidade?.idunidade,
      "grupo_pesq": grupo_pesquisa?.idgrupo_pesquisa,
      "other_comments": comments,
      "disp_doacao": doacao.iddoacao,
      "data_emission":dataEmis,
      "data_preserv":dataPrv,
      "posicao":posicao?.idposicao,
      "pesquisador_preserv": pesqPres?.idpesquisador,
      "parent": props.idrepique,
      // _HAS_REPIQUE
      "has_metodo_preservacao": metodo_preservacao,  
      "has_refencia_adic": refAdd,
      "has_imagem_rep": imagemRepiq,
      //REPIQUE END
    }
    // console.log(newMicro)
    axios.post(baseurl+ "repique", newMicro)
      .then((response) => {
        // console.log(response)
        //return to main table
        if(!hasNext){
          window.location.href = "/admin/m/" + props.returnto
        }
      }, (error) => {
        // console.log(error);
      });
    } catch (error) {
      // console.log("MISSING SOMETHING")
    }
  }
  // console.log(origCode);

  useEffect(() => {
    const fetchData = async () => {
    //0dominio
    if (dominioList.length === 0) {
      let response = await axios.get(baseurl+"dominio")
      setDominioList(response.data)
      console.log(response)
      console.log(dominioList)
      if (dominio.iddominio) {
        setDominio(null);
      }
    }
    //0grupo_pesquisa
    if (grupo_pesquisaList.length === 0) {
      let response = await axios.get(baseurl+"grupo_pesquisa")
          setGrupoPesquisaList(response.data);
          if (grupo_pesquisa.idgrupo_pesquisa) {
            setGrupoPesquisa(null);
          }
    }
    //0referencia
    if (referenciaList.length === 0) {
      let response = await axios.get(baseurl+"referencia")
      setReferenciaList(response.data);
      if (refTaxa.idreferencia) {
        setRefTaxa(null);
      }
      if (refTemp.idreferencia) {
        setRefTemp(null);
      }
      if (refAdd.idreferencia) {
        setRefAdd(null);
      }
    }
    //0pesquisador
    if (pesquisadorList.length === 0) {
      let response = await axios.get(baseurl+"pesquisador")
      setPesquisadorList(response.data);
      if (pesqColeta.idpesquisador) {
        setPesqColeta(null);
      }
      if (pesqIsola.idpesquisador) {
        setPesqIsola(null);
      }
      if (pesqId.idpesquisador) {
        setPesqId(null);
      }
      if (pesqPres.idpesquisador) {
        setPesqPres(null);
      }
    }
    //0cor
    if (corList.length === 0) {
      let response = await axios.get(baseurl+"cor")
      setCorList(response.data);
      if (corColonia.idcor) {
        setCorColonia(null);
      }
      if (corExu.idcor) {
        setCorExu(null);
      }
      if (corPig.idcor) {
        setCorPig(null);
      }
    }
    //0textura
    if (texturaList.length === 0) {
      let response = await axios.get(baseurl+"textura")
      setTexturaList(response.data);
      if (textura.idtextura) {
        setTextura(null);
      }
    }
    //0unidade
    if (texturaList.length === 0) {
      let response = await axios.get(baseurl+"unidade")
      setUnidadeList(response.data);
      if (unidade.idunidade) {
        setUnidade(null);
      }
    }
    //0borda
    if (bordaList.length === 0) {
      let response = await axios.get(baseurl+"borda")
      setBordaList(response.data);
      if (borda.idborda) {
        setBorda(null);
      }
    }
    //0relevo
    if (relevoList.length === 0) {
      let response = await axios.get(baseurl+"relevo")
      setRelevoList(response.data);
      if (relevo.idrelevo) {
        setRelevo(null);
      }
    }
    //0exudato
    if (exudatoList.length === 0) {
      let response = await axios.get(baseurl+"exudato")
      setExudatoList(response.data);
      if (exudato.idexudato) {
        setExudato(null);
      }
    }
    //0caracMicro
    if (caracMicroList.length === 0) {
      let response = await axios.get(baseurl+"carac_micromorfologica")
      setCaracMicroList(response.data);
      if (caracMicro.idcarac_micromorfologica) {
        setCaracMicro(null);
      }
    }
    //0pigmento
    if (pigmentoList.length === 0) {
      let response = await axios.get(baseurl+"pigmento")
      setPigmentoList(response.data);
      if (pigmento.idpigmento) {
        setPigmento(null);
      }
    }
    //0laboratorio
    if (labList.length === 0) {
      let response = await axios.get(baseurl+"laboratorio")
      setLabList(response.data);
      if (laboratorio.idlaboratorio) {
        setLaboratorio(null);
      }
    }
    //0metodo_preservacao
    if (metodo_preservacaoList.length === 0) {
      let response = await axios.get(baseurl+"metodo_preservacao")
      setMetodoPreservacaoList(response.data);
      if (metodo_preservacao.idmetodo_preservacao) {
        setMetodoPreservacao(null);
      }
    }
    //0sub_colecao
    if (sub_colecaoList.length === 0) {
      let response = await axios.get(baseurl+"sub_colecao")
      setSub_colecaoList(response.data);
      if (sub_colecao.idsub_colecao) {
        setSub_colecao(null);
      }
    }
    console.log(props)
    
    // ORIGEM
    if(props.micro){
      //TAXA
      
      setStatus(statusList.find(status => status.idstatus === props.micro.microorganismo_idmicroorganismo_microorganismo.status))

      //0variedade
      axios.get(baseurl+"variedade/"+props?.micro.microorganismo_idmicroorganismo_microorganismo.variedade_idvariedade_variedade.idvariedade)
      .then(response => {
        console.log(response.data)
        setTempTaxa(response.data)
        setDominio({iddominio: response.data.sub_especie_idsub_especie_sub_especie.especie_idespecie_especie.genero_idgenero_genero.familia_idfamilia_familium.ordem_idordem_ordem.classe_idclasse_classe.filo_idfilo_filo.reino_idreino_reino.dominio_iddominio_dominio.iddominio, dominio: response.data.sub_especie_idsub_especie_sub_especie.especie_idespecie_especie.genero_idgenero_genero.familia_idfamilia_familium.ordem_idordem_ordem.classe_idclasse_classe.filo_idfilo_filo.reino_idreino_reino.dominio_iddominio_dominio.dominio})
        // setVariedade(response.data)
      }, error => {
        // console.log(error);
      });
      // console.log(props)

      //0referencia
      axios.get(baseurl+"referencia/search",{params: {
        "idmicroorganismo":props?.micro.microorganismo_idmicroorganismo_microorganismo.idmicroorganismo,
        "idrepique":props?.micro.idrepique
      }})
      .then(response => {
        console.log(response.data)
        let tmpTax = []
        let tmpRep = []
        let tmpTemp = []
        response.data.repq_ref.forEach(element => {
          tmpRep.push({referencia: element.referencia_idreferencia_referencium.referencia, idreferencia: element.referencia_idreferencia_referencium.idreferencia})
        });
        response.data.taxa_ref.forEach(element => {
          tmpTax.push({referencia: element.referencia_idreferencia_referencium.referencia, idreferencia: element.referencia_idreferencia_referencium.idreferencia})
        });
        response.data.temp_ref.forEach(element => {
          tmpTemp.push({referencia: element.referencia_idreferencia_referencium.referencia, idreferencia: element.referencia_idreferencia_referencium.idreferencia})
        });
        setRefTaxa(tmpTax)
        setRefTemp(tmpTemp)
        setRefAdd(tmpRep)
      }, error => {
        // console.log(error);
      });
      //0caracMicro
      axios.get(baseurl+"microorganismo_has_carac_micromorfologica/search",{params: {
        "microorganismo_idmicroorganismo":props?.micro.microorganismo_idmicroorganismo_microorganismo.idmicroorganismo,
      }})
        .then(response => {
          console.log(response.data)
          let cm = []
          response.data.forEach(element => {
            cm.push({carac_micromorfologica: element.carac_micromorfologica_idcarac_micromorfologica_carac_micromorfologica.carac_micromorfologica, idcarac_micromorfologica: element.carac_micromorfologica_idcarac_micromorfologica_carac_micromorfologica.idcarac_micromorfologica})
          });
          setCaracMicro(cm)
          //setCaracMicro(response.data)
          // console.log("CUEN")
        }, error => {
          // console.log(error);
        });

      //0metodo
      axios.get(baseurl+"repique_has_metodo_preservacao/search",{params: {
        "repique_idrepique":props?.micro.idrepique
      }})
        .then(response => {
          console.log(response.data)
          let mp = []
          response.data.forEach(element => {
            // console.log(element.metodo_preservacao_idmetodo_preservacao_metodo_preservacao.metodo);
            mp.push({metodo: element.metodo_preservacao_idmetodo_preservacao_metodo_preservacao.metodo, idmetodo_preservacao: element.metodo_preservacao_idmetodo_preservacao_metodo_preservacao.idmetodo_preservacao})
          });
          setMetodoPreservacao(mp)
          // setMetodoPrev(response.data)
        }, error => {
          // console.log(error);
        });

      // .then(response => {
      //   console.log(response.data)
      //   // setRefTaxa(repq_ref[0].referencia_idreferencia_referencium.idreferencia)
      // }, error => {
      //   // console.log(error);
      // });

      //ORIGEM
      setDataReg(props.micro.microorganismo_idmicroorganismo_microorganismo?.data_reg_col_orig)
      setOrigCode(props.micro.microorganismo_idmicroorganismo_microorganismo?.cod_orig)
      setOrigHist(props.micro.microorganismo_idmicroorganismo_microorganismo?.hist_orig)
      setDataCol(props.micro.microorganismo_idmicroorganismo_microorganismo?.data_colet)
      setPesqColeta({idpesquisador: props.micro.microorganismo_idmicroorganismo_microorganismo.pesquisador_coleta_pesquisador?.idpesquisador, nome: props.micro.microorganismo_idmicroorganismo_microorganismo.pesquisador_coleta_pesquisador?.nome, email: props.micro.microorganismo_idmicroorganismo_microorganismo.pesquisador_coleta_pesquisador?.email, instituicao: props.micro.microorganismo_idmicroorganismo_microorganismo.pesquisador_coleta_pesquisador?.instituicao})
      setHabitat(habitatList.find(habitat => habitat.idhabitat == props.micro.microorganismo_idmicroorganismo_microorganismo.habitat_idhabitat_habitat.habitat))

      console.log(props.micro.microorganismo_idmicroorganismo_microorganismo.habitat_idhabitat_habitat.habitat)

      if(props.micro.microorganismo_idmicroorganismo_microorganismo.habitat_idhabitat_habitat.habitat <= 2){
        console.log('Vegetal')
        

        setHospVeg({idhospedeiro: props.micro.microorganismo_idmicroorganismo_microorganismo.habitat_idhabitat_habitat?.habitat_veg_idhabitat_veg_habitat_veg?.hospedeiro_idhospedeiro_hospedeiro?.idhospedeiro, hospedeiro: props.micro.microorganismo_idmicroorganismo_microorganismo.habitat_idhabitat_habitat?.habitat_veg_idhabitat_veg_habitat_veg?.hospedeiro_idhospedeiro_hospedeiro?.hospedeiro})
        setCodHerb(props.micro.microorganismo_idmicroorganismo_microorganismo.habitat_idhabitat_habitat.habitat_veg_idhabitat_veg_habitat_veg?.codigo)
        setRegExiHosp(props.micro.microorganismo_idmicroorganismo_microorganismo.habitat_idhabitat_habitat.habitat_veg_idhabitat_veg_habitat_veg?.registro)
        setHerbDeposit(props.micro.microorganismo_idmicroorganismo_microorganismo.habitat_idhabitat_habitat.habitat_veg_idhabitat_veg_habitat_veg?.herbario)
        setHabitatInfo(props.micro.microorganismo_idmicroorganismo_microorganismo.habitat_idhabitat_habitat?.info)
        
        setSubstrato({idsubstrato: props.micro.microorganismo_idmicroorganismo_microorganismo.habitat_idhabitat_habitat.habitat_veg_idhabitat_veg_habitat_veg.substrato_idsubstrato_substrato.idsubstrato, substrato: props.micro.microorganismo_idmicroorganismo_microorganismo.habitat_idhabitat_habitat.habitat_veg_idhabitat_veg_habitat_veg.substrato_idsubstrato_substrato.substrato})

  
      }else if(props.micro.microorganismo_idmicroorganismo_microorganismo.habitat_idhabitat_habitat.habitat == 3){
        console.log('Animaaaaalll')
        setHospAn({idhospedeiro: props.micro.microorganismo_idmicroorganismo_microorganismo.habitat_idhabitat_habitat.habitat_ani_idhabitat_ani_habitat_ani.hospedeiro_idhospedeiro_hospedeiro.idhospedeiro, hospedeiro: props.micro.microorganismo_idmicroorganismo_microorganismo.habitat_idhabitat_habitat.habitat_ani_idhabitat_ani_habitat_ani.hospedeiro_idhospedeiro_hospedeiro.hospedeiro})
        setSitioAnat({idsitio: props.micro.microorganismo_idmicroorganismo_microorganismo.habitat_idhabitat_habitat.habitat_ani_idhabitat_ani_habitat_ani.sitio_idsitio_sitio.idsitio, sitio: props.micro.microorganismo_idmicroorganismo_microorganismo.habitat_idhabitat_habitat.habitat_ani_idhabitat_ani_habitat_ani.sitio_idsitio_sitio.sitio})
      }else{
        console.log('Outros')
      }           
      setOrigGeo(props.micro.microorganismo_idmicroorganismo_microorganismo.origem_geo)
      setOrigLat(props.micro.microorganismo_idmicroorganismo_microorganismo.lat)
      setOrigLon(props.micro.microorganismo_idmicroorganismo_microorganismo.lon)
      setOrigDatum(props.micro.microorganismo_idmicroorganismo_microorganismo.datum)
      setOrigPrecisao(props.micro.microorganismo_idmicroorganismo_microorganismo.precisao)
      setOrigComent(props.micro.microorganismo_idmicroorganismo_microorganismo.coment_orig)
      
      //ISOLAMENTO
      setDataIso(props.micro.microorganismo_idmicroorganismo_microorganismo.data_isol)
      setPesqIsola({idpesquisador: props.micro.microorganismo_idmicroorganismo_microorganismo.pesquisador_isolamento_pesquisador?.idpesquisador, nome: props.micro.microorganismo_idmicroorganismo_microorganismo.pesquisador_isolamento_pesquisador?.nome, email: props.micro.microorganismo_idmicroorganismo_microorganismo.pesquisador_isolamento_pesquisador?.email, instituicao: props.micro.microorganismo_idmicroorganismo_microorganismo.pesquisador_isolamento_pesquisador?.instituicao})
      setIsoInfo(props.micro.microorganismo_idmicroorganismo_microorganismo.info_isolamento)
      setDataIdn(props.micro.microorganismo_idmicroorganismo_microorganismo.data_ident)
      setPesqId({idpesquisador: props.micro.microorganismo_idmicroorganismo_microorganismo.pesquisador_ident_pesquisador?.idpesquisador, nome: props.micro.microorganismo_idmicroorganismo_microorganismo.pesquisador_ident_pesquisador?.nome, email: props.micro.microorganismo_idmicroorganismo_microorganismo.pesquisador_ident_pesquisador?.email, instituicao: props.micro.microorganismo_idmicroorganismo_microorganismo.pesquisador_ident_pesquisador?.instituicao})
      setIsoComment(props.micro.microorganismo_idmicroorganismo_microorganismo.coment_isolamento)
      
      //CARACTERISTICAS
      setCorColonia({idcor: props.micro.microorganismo_idmicroorganismo_microorganismo.cor_colonia_cor?.idcor, cor: props.micro.microorganismo_idmicroorganismo_microorganismo.cor_colonia_cor?.cor})
      setTextura({idtextura: props.micro.microorganismo_idmicroorganismo_microorganismo.textura_idtextura_textura?.idtextura, textura: props.micro.microorganismo_idmicroorganismo_microorganismo.textura_idtextura_textura?.textura})
      setBorda({idborda: props.micro.microorganismo_idmicroorganismo_microorganismo.borda_idborda_borda?.idborda, borda: props.micro.microorganismo_idmicroorganismo_microorganismo.borda_idborda_borda?.borda})
      setRelevo({idrelevo: props.micro.microorganismo_idmicroorganismo_microorganismo.relevo_idrelevo_relevo?.idrelevo, relevo: props.micro.microorganismo_idmicroorganismo_microorganismo.relevo_idrelevo_relevo?.relevo})
      setExudato({idexudato: props.micro.microorganismo_idmicroorganismo_microorganismo.exudato_idexudato_exudato?.idexudato, exudato: props.micro.microorganismo_idmicroorganismo_microorganismo.exudato_idexudato_exudato?.exudato})
      setCorExu({idcor: props.micro.microorganismo_idmicroorganismo_microorganismo.cor_exudato_cor?.idcor, cor: props.micro.microorganismo_idmicroorganismo_microorganismo.cor_exudato_cor?.cor})
      setPigmento({idpigmento: props.micro.microorganismo_idmicroorganismo_microorganismo.pigmento_idpigmento_pigmento?.idpigmento, pigmento: props.micro.microorganismo_idmicroorganismo_microorganismo.pigmento_idpigmento_pigmento?.pigmento})
      setCorPig({idcor: props.micro.microorganismo_idmicroorganismo_microorganismo.cor_pigmento_cor?.idcor, cor: props.micro.microorganismo_idmicroorganismo_microorganismo.cor_pigmento_cor?.cor})
      setTempCrescimento(props.micro.microorganismo_idmicroorganismo_microorganismo.temp_crescimento)
  
      // setImagemMacro()
      // setImagemMicro()

      //MOLECULAR
      setLaboratorio({idlaboratorio: props.micro.microorganismo_idmicroorganismo_microorganismo.laboratorio_mol_laboratorio?.idlaboratorio, laboratorio: props.micro.microorganismo_idmicroorganismo_microorganismo.laboratorio_mol_laboratorio?.laboratorio})
      setDataMol(props.micro.microorganismo_idmicroorganismo_microorganismo.data_mol)
      setMolCod(props.micro.microorganismo_idmicroorganismo_microorganismo.cod_mol)
      setMolSeq(props.micro.microorganismo_idmicroorganismo_microorganismo.sequencia_mol)
      setMolMeta(props.micro.microorganismo_idmicroorganismo_microorganismo.meta_mol)
      settempAnexos(props.micro.microorganismo_idmicroorganismo_microorganismo.anexos_idanexos_anexos)
      
      //LOCALIZAÇÃO
      setTempLocal(props.micro.posicao_idposicao_posicao)
      setSub_colecao({idsub_colecao: props.micro.posicao_idposicao_posicao.lote_idlote_lote.prateleira_idprateleira_prateleira.armario_idarmario_armario.sub_colecao_idsub_colecao_sub_colecao.idsub_colecao, sub_colecao: props.micro.posicao_idposicao_posicao.lote_idlote_lote.prateleira_idprateleira_prateleira.armario_idarmario_armario.sub_colecao_idsub_colecao_sub_colecao.sub_colecao})
      setGrupoPesquisa({idgrupo_pesquisa: props.micro.grupo_pesquisa_idgrupo_pesquisa_grupo_pesquisa.idgrupo_pesquisa, grupo: props.micro.grupo_pesquisa_idgrupo_pesquisa_grupo_pesquisa.grupo})
      setUnidade({idunidade: props.micro.unidade_idunidade_unidade.idunidade, unidade: props.micro.unidade_idunidade_unidade.unidade})

      var data = new Date(props.micro.data_preserv)
      setDataPrv(data.getFullYear()+"-"+(data.getMonth()+1).toString().padStart(2, '0')+"-"+data.getDate().toString().padStart(2, '0'))

     setPesqPres({idpesquisador: props.micro.microorganismo_idmicroorganismo_microorganismo.pesquisador_ident_pesquisador?.idpesquisador, nome: props.micro.microorganismo_idmicroorganismo_microorganismo.pesquisador_ident_pesquisador?.nome, email: props.micro.microorganismo_idmicroorganismo_microorganismo.pesquisador_ident_pesquisador?.email, instituicao: props.micro.microorganismo_idmicroorganismo_microorganismo.pesquisador_ident_pesquisador?.instituicao})

      // setMetodoPreservacao()

      
      //OUTROS
      setComments(props.micro.comentarios)
      setDoacao(doacaoList.find(doacao => doacao.iddoacao === props.micro.disponivel))
      // setImagemRepiq()
      setRefAdd()

      axios.get(baseurl+"imagem_repique/search",{params: {
        "repique_idrepique":props?.micro.idrepique
      }})
        .then(response => {
          let img = []
          response.data.map(i => {
            img.push(i.imagem_idimagem_imagem.imagem)
          })
          setImgRepiq(img)
        }, error => {
          // console.log(error);
        });
        axios.get(baseurl+"imagem_macro/search",{params: {
          "microorganismo_idmicroorganismo":props?.micro.idrepique
        }})
          .then(response => {
            let img = []
            response.data.map(i => {
              img.push(i.imagem_idimagem_imagem.imagem)
            })
            setImgMacro(img)
          }, error => {
            // console.log(error);
          });
          axios.get(baseurl+"imagem_micro/search",{params: {
            "microorganismo_idmicroorganismo":props?.micro.idrepique
          }})
            .then(response => {
              let img = []
              response.data.map(i => {
                img.push(i.imagem_idimagem_imagem.imagem)
              })
              setImgMicro(img)
            }, error => {
              // console.log(error);
            });

      
    }
  };
  fetchData();
  }, [])

  useEffect(() => {
   //0dominio
    const fetchData = async () => {
      if (dominio?.iddominio) {
        axios.get(baseurl+"reino/search", {
          params: {
            "dominio_iddominio": dominio.iddominio
          }
        })
          .then(response => {
            // console.log(response.data);
            setReinoList(response.data);
            if(tempTaxa.sub_especie_idsub_especie_sub_especie){
              setReino({idreino: tempTaxa.sub_especie_idsub_especie_sub_especie.especie_idespecie_especie.genero_idgenero_genero.familia_idfamilia_familium.ordem_idordem_ordem.classe_idclasse_classe.filo_idfilo_filo.reino_idreino_reino.idreino, reino: tempTaxa.sub_especie_idsub_especie_sub_especie.especie_idespecie_especie.genero_idgenero_genero.familia_idfamilia_familium.ordem_idordem_ordem.classe_idclasse_classe.filo_idfilo_filo.reino_idreino_reino.reino})
            }
          }, error => {
            // console.log(error);
          });
      }
      else {
        setReinoList([])
        setReino(null)
      }
    };
    fetchData();
  }, [dominio]);

  useEffect(() => {
    //0reino
    const fetchData = async () => {
      if (reino?.idreino) {
        axios.get(baseurl+"filo/search", {
          params: {
            "reino_idreino": reino.idreino
          }
        })
          .then(response => {
            // console.log(response.data);
            setFiloList(response.data);
            if(tempTaxa.sub_especie_idsub_especie_sub_especie){
              setFilo({idfilo: tempTaxa.sub_especie_idsub_especie_sub_especie.especie_idespecie_especie.genero_idgenero_genero.familia_idfamilia_familium.ordem_idordem_ordem.classe_idclasse_classe.filo_idfilo_filo.idfilo, filo: tempTaxa.sub_especie_idsub_especie_sub_especie.especie_idespecie_especie.genero_idgenero_genero.familia_idfamilia_familium.ordem_idordem_ordem.classe_idclasse_classe.filo_idfilo_filo.filo})
            }
          }, error => {
            // console.log(error);
          });
      }
      else {
        setFiloList([])
        setFilo(null)
      }
    };
    fetchData();
  }, [reino]);

  useEffect(() => {
    //0filo
    const fetchData = async () => {
      if (filo?.idfilo) {
        axios.get(baseurl+"classe/search", {
          params: {
            "filo_idfilo": filo.idfilo
          }
        })
          .then(response => {
            // console.log(response.data);
            setClasseList(response.data);
            if(tempTaxa.sub_especie_idsub_especie_sub_especie){
              setClasse({idclasse: tempTaxa.sub_especie_idsub_especie_sub_especie.especie_idespecie_especie.genero_idgenero_genero.familia_idfamilia_familium.ordem_idordem_ordem.classe_idclasse_classe.idclasse, classe: tempTaxa.sub_especie_idsub_especie_sub_especie.especie_idespecie_especie.genero_idgenero_genero.familia_idfamilia_familium.ordem_idordem_ordem.classe_idclasse_classe.classe})
            }
          }, error => {
            // console.log(error);
          });
      }
      else {
        setClasseList([])
        setClasse(null)
      }
    };
    fetchData();
  }, [filo]);

  useEffect(() => {
    //0classe
    const fetchData = async () => {
      if (classe?.idclasse) {
        axios.get(baseurl+"ordem/search", {
          params: {
            "classe_idclasse": classe.idclasse
          }
        })
          .then(response => {
            // console.log(response.data);
            setOrdemList(response.data);
            if(tempTaxa.sub_especie_idsub_especie_sub_especie){
              setOrdem({idordem: tempTaxa.sub_especie_idsub_especie_sub_especie.especie_idespecie_especie.genero_idgenero_genero.familia_idfamilia_familium.ordem_idordem_ordem.idordem, ordem: tempTaxa.sub_especie_idsub_especie_sub_especie.especie_idespecie_especie.genero_idgenero_genero.familia_idfamilia_familium.ordem_idordem_ordem.ordem})
            }
          }, error => {
            // console.log(error);
          });
      }
      else {
        setOrdemList([])
        setOrdem(null)
      }
    };
    fetchData();
  }, [classe]);

  useEffect(() => {
    //0ordem
    const fetchData = async () => {
      if (ordem?.idordem) {
        axios.get(baseurl+"familia/search", {
          params: {
            "ordem_idordem": ordem.idordem
          }
        })
          .then(response => {
            // console.log(response.data);
            setFamiliaList(response.data);
            if(tempTaxa.sub_especie_idsub_especie_sub_especie){
              setFamilia({idfamilia: tempTaxa.sub_especie_idsub_especie_sub_especie.especie_idespecie_especie.genero_idgenero_genero.familia_idfamilia_familium.idfamilia, familia: tempTaxa.sub_especie_idsub_especie_sub_especie.especie_idespecie_especie.genero_idgenero_genero.familia_idfamilia_familium.familia})
            }
          }, error => {
            // console.log(error);
          });
      }
      else {
        setFamiliaList([])
        setFamilia(null)
      }
    };
    fetchData();
  }, [ordem]);

  useEffect(() => {
    //0familia
    const fetchData = async () => {
      if (familia?.idfamilia) {
        axios.get(baseurl+"genero/search", {
          params: {
            "familia_idfamilia": familia.idfamilia
          }
        })
          .then(response => {
            // console.log(response.data);
            setGeneroList(response.data);
            if(tempTaxa.sub_especie_idsub_especie_sub_especie){
              setGenero({idgenero: tempTaxa.sub_especie_idsub_especie_sub_especie.especie_idespecie_especie.genero_idgenero_genero.idgenero, genero: tempTaxa.sub_especie_idsub_especie_sub_especie.especie_idespecie_especie.genero_idgenero_genero.genero})
            }
          }, error => {
            // console.log(error);
          });
      }
      else {
        setGeneroList([])
        setGenero(null)
      }
    };
    fetchData();
  }, [familia]);

  useEffect(() => {
    //0genero
    const fetchData = async () => {
      if (genero?.idgenero) {
        axios.get(baseurl+"especie/search", {
          params: {
            "genero_idgenero": genero.idgenero
          }
        })
          .then(response => {
            // console.log(response.data);
            setEspecieList(response.data);
            if(tempTaxa.sub_especie_idsub_especie_sub_especie){
              setEspecie({idespecie: tempTaxa.sub_especie_idsub_especie_sub_especie.especie_idespecie_especie.idespecie, especie: tempTaxa.sub_especie_idsub_especie_sub_especie.especie_idespecie_especie.especie, autor: tempTaxa.sub_especie_idsub_especie_sub_especie.especie_idespecie_especie.autor})
            }
          }, error => {
            // console.log(error);
          });
      }
      else {
        setEspecieList([])
        setEspecie(null)
      }
    };
    fetchData();
  }, [genero]);

  useEffect(() => {
    ////0especie
    const fetchData = async () => {
      if (especie?.idespecie) {
        axios.get(baseurl+"sub_especie/search", {
          params: {
            "especie_idespecie": especie.idespecie
          }
        })
          .then(response => {
            // console.log(response.data);
            setSub_especieList(response.data);
            if(tempTaxa.sub_especie_idsub_especie_sub_especie){
              setSub_especie({idsub_especie: tempTaxa.sub_especie_idsub_especie_sub_especie.idsub_especie, sub_especie: tempTaxa.sub_especie_idsub_especie_sub_especie.sub_especie, autor: tempTaxa.sub_especie_idsub_especie_sub_especie.autor})
            }
          }, error => {
            // console.log(error);
          });
      }
      else {
        setSub_especieList([])
        setSub_especie(null)
      }
    };
    fetchData();
  }, [especie]);

  useEffect(() => {
    //0sub_especie
    const fetchData = async () => {
      if (sub_especie?.idsub_especie) {
        axios.get(baseurl+"variedade/search", {
          params: {
            "sub_especie_idsub_especie": sub_especie.idsub_especie
          }
        })
          .then(response => {
            // console.log(response.data);
            setVariedadeList(response.data);
            if(tempTaxa.sub_especie_idsub_especie_sub_especie){
              setVariedade({idvariedade: tempTaxa.idvariedade, variedade: tempTaxa.variedade, autor: tempTaxa.autor})
              setTempTaxa({})
            }
          }, error => {
            // console.log(error);
          });
      }
      else {
        setVariedadeList([])
        setVariedade(null)
      }
    };
    fetchData();
  }, [sub_especie]);

  useEffect(() => {
    //0sub_especie
    if(variedade?.idvariedade){
      const fetchData = async () => {
        // console.log(variedade)
        axios.get(baseurl+"variedade/" + variedade.idvariedade)
          .then(response => {
            // console.log(response)
          }, error => {
            // console.log(error);
          });
        }
        fetchData()
    }
  }, [variedade]);

  useEffect(() => {
    //0habitat
    // console.log(habitat);
    if (habitat?.idhabitat <= 2) {
      // console.log("Vegetal")
      //0hospVegetal
      const fetchData = async () => {
        axios.get(baseurl+"hospedeiro/search", {
          params: {
            "isAnimal": "0"
          }
        })
        .then((response) => {
          // console.log(response);
          setHospVegList(response.data);
          if (hospVeg.idhospedeiro) {
            setHospVeg(null);
          }
        }, (error) => {
          // console.log(error);
        });
          //0substrato
          axios.get(baseurl+"substrato/search")
            .then(response => {
              // console.log(response.data);
              setSubstratoList(response.data);
            }, error => {
              // console.log(error);
            });
      };
      fetchData();
    } else if (habitat?.idhabitat > 3) {
      // console.log("outros")
    } else if (habitat?.idhabitat === 3){
      // console.log("animal")
      //0hospAnimal
      const fetchData = async () => {
        axios.get(baseurl+"hospedeiro/search", {
          params: {
            "isAnimal": "1"
          }
        })
          .then(response => {
            // console.log(response.data);
            setHospAnList(response.data);
          }, error => {
            // console.log(error);
          });
          //0sitio
          axios.get(baseurl+"sitio/")
            .then(response => {
              // console.log(response.data);
              setSitioAnatList(response.data);
            }, error => {
              // console.log(error);
            });
      };
      fetchData();
    }
  }, [habitat]);

  useEffect(() => {
  //0sub_colecao
   const fetchData = async () => {
     if (sub_colecao?.idsub_colecao) {
       axios.get(baseurl+"armario/search", {
         params: {
           "sub_colecao_idsub_colecao": sub_colecao.idsub_colecao
         }
       })
         .then(response => {
          //  console.log(response.data);
           setArmarioList(response.data);
           if(tempLocal.lote_idlote_lote){
            setArmario({idarmario: tempLocal.lote_idlote_lote.prateleira_idprateleira_prateleira.armario_idarmario_armario.idarmario, armario: tempLocal.lote_idlote_lote.prateleira_idprateleira_prateleira.armario_idarmario_armario.armario})
          }

         }, error => {
          //  console.log(error);
         });
     }
     else {
       setArmarioList([])
       setArmario(null)
     }
   };
   fetchData();
  }, [sub_colecao]);

   useEffect(() => {
    //0armario
    const fetchData = async () => {
      if (armario?.idarmario) {
        axios.get(baseurl+"prateleira/search", {
          params: {
            "armario_idarmario": armario.idarmario
          }
        })
          .then(response => {
            // console.log(response.data);
            setPrateleiraList(response.data);
            if(tempLocal.lote_idlote_lote){
             setPrateleira({idprateleira: tempLocal.lote_idlote_lote.prateleira_idprateleira_prateleira.idprateleira, prateleira: tempLocal.lote_idlote_lote.prateleira_idprateleira_prateleira.prateleira})
           }
          }, error => {
            // console.log(error);
          });
      }
      else {
        setPrateleiraList([])
        setPrateleira(null)
      }
    };
    fetchData();
  }, [armario]);

  useEffect(() => {
    //0prateleira
    const fetchData = async () => {
      if (prateleira?.idprateleira) {
        axios.get(baseurl+"lote/search", {
          params: {
            "prateleira_idprateleira": prateleira.idprateleira
          }
        })
          .then(response => {
            // console.log(response.data);
            setLoteList(response.data);
            if(tempLocal.lote_idlote_lote){
             setLote({idlote: tempLocal.lote_idlote_lote.idlote, lote: tempLocal.lote_idlote_lote.lote})
            }
          }, error => {
            // console.log(error);
          });
      }
      else {
        setLoteList([])
        setLote(null)
      }
    };
    fetchData();
  }, [prateleira]);

  useEffect(() => {
    //0lote
    const fetchData = async () => {
      if (lote?.idlote) {
        axios.get(baseurl+"posicao/search", {
          params: {
            "lote_idlote": lote.idlote
          }
        })
          .then(response => {
            // console.log(response.data);
            setPosicaoList(response.data);
            if(tempLocal.lote_idlote_lote){
              setPosicao({idposicao: tempLocal.idposicao, posicao: tempLocal.posicao})
              setTempLocal({})
            }
          }, error => {
            // console.log(error);
          });
      }
      else {
        setPosicaoList([])
        setPosicao(null)
      }
    };
    fetchData();
  }, [lote]);

  // START DEFAULT MODAL
  const [itemName, setItemName] = React.useState("");
  const [itemValue, setItemValue] = React.useState("");
  const [tmpState, setTmpState] = React.useState("");
  const [modalIsOpen, setIsOpen] = useState(false);
  const [ItemId, setItemId] = useState(null)

  function openModal(vartext, varval, tState, id) {
    setIsOpen(true);
    setItemName(vartext);
    setItemValue(varval);
    setTmpState(tState);
    if(id){
      setItemId(id)
    }else{
      setItemId(null)
    }
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }

  function closeModal(persist) {
    // console.log(tmpState)
    //0dominio
    if (persist === true && tmpState === "dominio") {
      if(ItemId != null){
        axios.put(baseurl+ tmpState+"/"+ItemId, {
          dominio: itemValue
        })
          .then((response) => {
            // console.log(response);
            axios.get(baseurl+"dominio")
              .then(response => {
                // console.log(response.data);
                setDominioList(response.data);
                setDominio({iddominio:ItemId, dominio: itemValue});
              }, error => {
                console.log(error);
              });
          }, (error) => {
                console.log(error);
          });
      }else{
        axios.post(baseurl+ tmpState, {
          dominio: itemValue,
        })
          .then((response) => {
            axios.get(baseurl+"dominio")
              .then(response => {
                console.log(response.data);
                setDominioList(response.data);
                setDominio(null);
              }, error => {
                // console.log(error);
              });
          }, (error) => {
            // console.log(error);
          });
    }
  }
    //0reino
    if (persist === true && tmpState === "reino" && dominio.iddominio > 0) {
      if(ItemId != null){
        axios.put(baseurl+ tmpState+"/"+ItemId, {
          reino: itemValue
        })
          .then((response) => {
            // console.log(response);
            if (dominio?.iddominio) {
              axios.get(baseurl+"reino/search", {
                params: {
                  "dominio_iddominio": dominio.iddominio
                }
              })
                .then(response => {
                  // console.log(response.data);
                  setReinoList(response.data);
                  setReino({idreino:ItemId, reino: itemValue});
                }, error => {
                  // console.log(error);
                });
            }
          }, (error) => {
            // console.log(error);
          });
      }else{
        axios.post(baseurl+ tmpState, {
          reino: itemValue,
          dominio_iddominio: dominio.iddominio
        })
          .then((response) => {
            // console.log(response);
            if (dominio?.iddominio) {
              axios.get(baseurl+"reino/search", {
                params: {
                  "dominio_iddominio": dominio.iddominio
                }
              })
                .then(response => {
                  // console.log(response.data);
                  setReinoList(response.data);
                  setReino(null);
                }, error => {
                  // console.log(error);
                });
            }
          }, (error) => {
            // console.log(error);
          });
      }
    }
    //0filo
    if (persist === true && tmpState === "filo" && reino.idreino > 0) {
      if(ItemId != null){
        axios.put(baseurl+ tmpState+"/"+ItemId, {
          filo: itemValue
        })
          .then((response) => {
            // console.log(response);
            if (reino?.idreino) {
              axios.get(baseurl+"filo/search", {
                params: {
                  "reino_idreino": reino.idreino
                }
              })
                .then(response => {
                  // console.log(response.data);
                  setFiloList(response.data);
                  setFilo({idfilo:ItemId, filo: itemValue});
                }, error => {
                  // console.log(error);
                });
            }
          }, (error) => {
            // console.log(error);
          });
      }else{
        axios.post(baseurl+ tmpState, {
          filo: itemValue,
          reino_idreino: reino.idreino
        })
          .then((response) => {
            // console.log(response);
            if (reino?.idreino) {
              axios.get(baseurl+"filo/search", {
                params: {
                  "reino_idreino": reino.idreino
                }
              })
                .then(response => {
                  // console.log(response.data);
                  setFiloList(response.data);
                  setFilo(null);
                }, error => {
                  // console.log(error);
                });
            }
          }, (error) => {
            // console.log(error);
          });
      }
    }
    //0classe
    if (persist === true && tmpState === "classe" && filo.idfilo > 0) {
      if(ItemId != null){
        axios.put(baseurl+ tmpState+"/"+ItemId, {
          classe: itemValue
        })
          .then((response) => {
            // console.log(response);
            if (filo?.idfilo) {
              axios.get(baseurl+"classe/search", {
                params: {
                  "filo_idfilo": filo.idfilo
                }
              })
                .then(response => {
                  // console.log(response.data);
                  setClasseList(response.data);
                  setClasse({idclasse:ItemId, classe: itemValue});
                }, error => {
                  // console.log(error);
                });
            }
          }, (error) => {
            // console.log(error);
          });
      }else{
        axios.post(baseurl+ tmpState, {
        classe: itemValue,
        filo_idfilo: filo.idfilo
      })
        .then((response) => {
          // console.log(response);
          if (filo?.idfilo) {
            axios.get(baseurl+"classe/search", {
              params: {
                "filo_idfilo": filo.idfilo
              }
            })
              .then(response => {
                // console.log(response.data);
                setClasseList(response.data);
                setClasse(null);
              }, error => {
                // console.log(error);
              });
          }
        }, (error) => {
          // console.log(error);
        });
      }
    }
    //0ordem
    if (persist === true && tmpState === "ordem" && classe.idclasse > 0) {
      if(ItemId != null){
        axios.put(baseurl+ tmpState+"/"+ItemId, {
          ordem: itemValue
        })
          .then((response) => {
            // console.log(response);
            if (classe?.idclasse) {
              axios.get(baseurl+"ordem/search", {
                params: {
                  "classe_idclasse": classe.idclasse
                }
              })
                .then(response => {
                  // console.log(response.data);
                  setOrdemList(response.data);
                  setOrdem({idordem:ItemId, ordem: itemValue});
                }, error => {
                  // console.log(error);
                });
            }
          }, (error) => {
            // console.log(error);
          });
      }else{
        axios.post(baseurl+ tmpState, {
          ordem: itemValue,
          classe_idclasse: classe.idclasse
        })
          .then((response) => {
            // console.log(response);
            if (classe?.idclasse) {
              axios.get(baseurl+"ordem/search", {
                params: {
                  "classe_idclasse": classe.idclasse
                }
              })
                .then(response => {
                  // console.log(response.data);
                  setOrdemList(response.data);
                  setOrdem(null);
                }, error => {
                  // console.log(error);
                });
            }
          }, (error) => {
            // console.log(error);
          });
      }
    }

    //0familia
    if (persist === true && tmpState === "familia" && ordem.idordem > 0) {
      if(ItemId != null){
        axios.put(baseurl+ tmpState+"/"+ItemId, {
          familia: itemValue
        })
          .then((response) => {
            // console.log(response);
            if (ordem?.idordem) {
              axios.get(baseurl+"familia/search", {
                params: {
                  "ordem_idordem": ordem.idordem
                }
              })
                .then(response => {
                  // console.log(response.data);
                  setFamiliaList(response.data);
                  setFamilia({idfamilia:ItemId, familia: itemValue});
                }, error => {
                  // console.log(error);
                });
            }
          }, (error) => {
            // console.log(error);
          });
      }else{
        axios.post(baseurl+ tmpState, {
          familia: itemValue,
          ordem_idordem: ordem.idordem
        })
          .then((response) => {
            // console.log(response);
            if (ordem?.idordem) {
              axios.get(baseurl+"familia/search", {
                params: {
                  "ordem_idordem": ordem.idordem
                }
              })
                .then(response => {
                  // console.log(response.data);
                  setFamiliaList(response.data);
                  setFamilia(null);
                }, error => {
                  // console.log(error);
                });
            }
          }, (error) => {
            // console.log(error);
          });
      }
    }
    //0genero
    if (persist === true && tmpState === "genero" && familia.idfamilia > 0) {
      if(ItemId != null){
        axios.put(baseurl+ tmpState+"/"+ItemId, {
          genero: itemValue
        })
          .then((response) => {
            // console.log(response);
            if (familia?.idfamilia) {
              axios.get(baseurl+"genero/search", {
                params: {
                  "familia_idfamilia": familia.idfamilia
                }
              })
                .then(response => {
                  // console.log(response.data);
                  setGeneroList(response.data);
                  setGenero({idgenero:ItemId, genero: itemValue});
                }, error => {
                  // console.log(error);
                });
            }
          }, (error) => {
            // console.log(error);
          });
      }else{
        axios.post(baseurl+ tmpState, {
          genero: itemValue,
          familia_idfamilia: familia.idfamilia
        })
          .then((response) => {
            // console.log(response);
            if (familia?.idfamilia) {
              axios.get(baseurl+"genero/search", {
                params: {
                  "familia_idfamilia": familia.idfamilia
                }
              })
                .then(response => {
                  // console.log(response.data);
                  setGeneroList(response.data);
                  setGenero(null);
                }, error => {
                  // console.log(error);
                });
            }
          }, (error) => {
            // console.log(error);
          });
      }
    }
    //0referencia
    if (persist === true && tmpState === "referenciaTaxa") {
      if(ItemId != null){
        axios.put(baseurl+ tmpState+"/"+ItemId, {
          referencia: itemValue,
        })
          .then((response) => {
            // console.log(response);
            axios.get(baseurl+"referencia")
              .then(response => {
                // console.log(response.data);
                setReferenciaList(response.data);
                setRefTaxa({idreferencia:ItemId, referencia: itemValue});
              }, error => {
                // console.log(error);
              });
          }, (error) => {
            // console.log(error);
          });
      }else{
        axios.post(baseurl+ "referencia", {
          referencia: itemValue,
        })
          .then((response) => {
            // console.log(response);
            axios.get(baseurl+"referencia")
              .then(response => {
                // console.log(response.data);
                setReferenciaList(response.data);
                // setRefTaxa(null);
              }, error => {
                // console.log(error);
              });
          }, (error) => {
            // console.log(error);
          });
      }
    }
    //0referencia
    if (persist === true && tmpState === "referenciaTemp") {
      axios.post(baseurl+ "referencia", {
        referencia: itemValue,
      })
        .then((response) => {
          // console.log(response);
          axios.get(baseurl+"referencia")
            .then(response => {
              // console.log(response.data);
              setReferenciaList(response.data);
              setRefTemp(null);
            }, error => {
              // console.log(error);
            });
        }, (error) => {
          // console.log(error);
        });
    }
    //0referencia
    if (persist === true && tmpState === "referenciaAdd") {
      axios.post(baseurl+ "referencia", {
        referencia: itemValue,
      })
        .then((response) => {
          // console.log(response);
          axios.get(baseurl+"referencia")
            .then(response => {
              // console.log(response.data);
              setReferenciaList(response.data);
              setRefAdd(null);
            }, error => {
              // console.log(error);
            });
        }, (error) => {
          // console.log(error);
        });
    }
    //0hospVegetal
    if (persist === true && tmpState === "hospedeiro_veg") {
      if(ItemId != null){
        axios.put(baseurl+"hospedeiro"+"/"+ItemId, {
          hospedeiro: itemValue,
          // isAnimal: "0"
        })
        .then((response) => {
          console.log(response.data);
          axios.get(baseurl+"hospedeiro")
            .then(response => {
              // console.log(response.data);
              setHospVegList(response.data.filter(hosp => hosp.isAnimal === 0));
              setHospVeg({idhospedeiro:ItemId, hospedeiro: itemValue});
            }, error => {
              // console.log(error);
            });
        }, (error) => {
          // console.log(error);
        });
      }else{
        axios.post(baseurl+ "hospedeiro", {
          hospedeiro: itemValue,
          isAnimal: "0"
        })
        .then((response) => {
          // console.log(response);
          axios.get(baseurl+"hospedeiro")
            .then(response => {
              // console.log(response.data);
              setHospVegList(response.data.filter(hosp => hosp.isAnimal === 0));
            }, error => {
              // console.log(error);
            });
        }, (error) => {
          // console.log(error);
        });
      }
    }
    //0hospAnimal
    if (persist === true && tmpState === "hospedeiro_ani") {
      if(ItemId != null){
        axios.put(baseurl+"hospedeiro"+"/"+ItemId, {
          hospedeiro: itemValue,
          // isAnimal: "1"
        })
        .then((response) => {
          // console.log(response);
          axios.get(baseurl+"hospedeiro")
            .then(response => {
              // console.log(response.data);
              setHospAnList(response.data.filter(hosp => hosp.isAnimal === 1));
              setHospAn({idhospedeiro:ItemId, hospedeiro: itemValue});
            }, error => {
              // console.log(error);
            });
        }, (error) => {
          // console.log(error);
        });
      }else{
        axios.post(baseurl+ "hospedeiro", {
          hospedeiro: itemValue,
          isAnimal: "1"
        })
        .then((response) => {
          // console.log(response);
          axios.get(baseurl+"hospedeiro")
            .then(response => {
              // console.log(response.data);
              setHospAnList(response.data.filter(hosp => hosp.isAnimal === 1));
              if (hospAn.idhospedeiro) {
                setHospAn(null);
              }
            }, error => {
              // console.log(error);
            });
        }, (error) => {
          // console.log(error);
        });
      }
    }
    //0substrato
    if (persist === true && tmpState === "substrato") {
      if(ItemId != null){
        axios.put(baseurl+ tmpState+"/"+ItemId, {
          substrato: itemValue,
        })
        .then((response) => {
          // console.log(response);
          axios.get(baseurl+"substrato")
            .then(response => {
              // console.log(response.data);
              setSubstratoList(response.data);
              setSubstrato({idsubstrato:ItemId, substrato: itemValue});
            }, error => {
              // console.log(error);
            });
        }, (error) => {
          // console.log(error);
        });
      }else{
        axios.post(baseurl+ tmpState, {
          substrato: itemValue,
        })
        .then((response) => {
          // console.log(response);
          axios.get(baseurl+"substrato")
            .then(response => {
              // console.log(response.data);
              setSubstratoList(response.data);
              if (substrato.idhospedeiro) {
                setSubstrato(null);
              }
            }, error => {
              // console.log(error);
            });
        }, (error) => {
          // console.log(error);
        });
      }
    }
    //0sitio
    if (persist === true && tmpState === "sitio") {
      if(ItemId != null){
        axios.put(baseurl+ tmpState+"/"+ItemId, {
          sitio: itemValue,
        })
        .then((response) => {
          // console.log(response);
          axios.get(baseurl+"sitio")
            .then(response => {
              // console.log(response.data);
              setSitioAnatList(response.data);
              setSitioAnat({idsitio:ItemId, sitio: itemValue});
            }, error => {
              // console.log(error);
            });
        }, (error) => {
          // console.log(error);
        });
      }else{
        axios.post(baseurl+ tmpState, {
          sitio: itemValue,
        })
        .then((response) => {
          // console.log(response);
          axios.get(baseurl+"sitio")
            .then(response => {
              // console.log(response.data);
              setSitioAnatList(response.data);
              setSitioAnat(null);
            }, error => {
              // console.log(error);
            });
        }, (error) => {
          // console.log(error);
        });
      }
    }
    //0cor
    if (persist === true && tmpState === "cor_col") {
      if(ItemId != null){
        axios.put(baseurl+"cor"+"/"+ItemId, {
          cor: itemValue,
        })
          .then((response) => {
            // console.log(response);
            axios.get(baseurl+"cor")
            .then(response => {
              // console.log(response.data);
              setCorList(response.data);
              setCorColonia({idcor:ItemId, cor: itemValue});
            }, error => {
              // console.log(error);
            });
          }, (error) => {
            // console.log(error);
          });
      }else{
        axios.post(baseurl+ "cor", {
          cor: itemValue,
        })
          .then((response) => {
            // console.log(response);
            axios.get(baseurl+"cor")
            .then(response => {
              // console.log(response.data);
              setCorList(response.data);
              if (corColonia.idcor) {
                setCorColonia(null);
              }
            }, error => {
              // console.log(error);
            });
          }, (error) => {
            // console.log(error);
          });
      }
    }
    //0cor
    if (persist === true && tmpState === "cor_exu") {
      if(ItemId != null){
        axios.put(baseurl+"cor"+"/"+ItemId, {
          cor: itemValue,
        })
          .then((response) => {
            // console.log(response);
            axios.get(baseurl+"cor")
            .then(response => {
              // console.log(response.data);
              setCorList(response.data);
              setCorExu({idcor:ItemId, cor: itemValue});
            }, error => {
              // console.log(error);
            });
          }, (error) => {
            // console.log(error);
          });
      }else{
        axios.post(baseurl+"cor", {
          cor: itemValue,
        })
          .then((response) => {
            // console.log(response);
            axios.get(baseurl+"cor")
            .then(response => {
              // console.log(response.data);
              setCorList(response.data);
              if (corExu.idcor) {
                setCorExu(null);
              }
            }, error => {
              // console.log(error);
            });
          }, (error) => {
            // console.log(error);
          });
      }
    }
    //0cor
    if (persist === true && tmpState === "cor_pig") {
      if(ItemId != null){
        axios.put(baseurl+"cor"+"/"+ItemId, {
          cor: itemValue,
        })
          .then((response) => {
            // console.log(response);
            axios.get(baseurl+"cor")
            .then(response => {
              // console.log(response.data);
              setCorList(response.data);
              setCorPig({idcor:ItemId, cor: itemValue});
            }, error => {
              // console.log(error);
            });
          }, (error) => {
            // console.log(error);
          });
      }else{
        axios.post(baseurl+"cor", {
          cor: itemValue,
        })
          .then((response) => {
            // console.log(response);
            axios.get(baseurl+"cor")
            .then(response => {
              // console.log(response.data);
              setCorList(response.data);
              if (corPig.idcor) {
                setCorPig(null);
              }
            }, error => {
              // console.log(error);
            });
          }, (error) => {
            // console.log(error);
          });
      }
    }
    //0textura
    if (persist === true && tmpState === "textura") {
      if(ItemId != null){
        axios.put(baseurl+tmpState+"/"+ItemId, {
          textura: itemValue,
        })
          .then((response) => {
            // console.log(response);
            axios.get(baseurl+"textura")
              .then(response => {
                // console.log(response.data);
                setTexturaList(response.data);
                setTextura({idtextura:ItemId, textura: itemValue});
              }, error => {
                // console.log(error);
              });
          }, (error) => {
            // console.log(error);
          });
      }else{
        axios.post(baseurl+ tmpState, {
          textura: itemValue,
        })
          .then((response) => {
            // console.log(response);
            axios.get(baseurl+"textura")
              .then(response => {
                // console.log(response.data);
                setTexturaList(response.data);
                setTextura(null);
              }, error => {
                // console.log(error);
              });
          }, (error) => {
            // console.log(error);
          });
      }
    }
    //0grupo_pesquisa
    if (persist === true && tmpState === "grupo_pesquisa") {
      if(ItemId != null){
        axios.put(baseurl+tmpState+"/"+ItemId, {
          gru: itemValue,
        })
          .then((response) => {
            // console.log(response);
            axios.get(baseurl+"grupo_pesquisa")
              .then(response => {
                // console.log(response.data);
                setGrupoPesquisaList(response.data);
                setGrupoPesquisa({idgrupo_pesquisa:ItemId, grupo: itemValue});
              }, error => {
                // console.log(error);
              });
          }, (error) => {
            // console.log(error);
          });
      }else{
        axios.post(baseurl+ tmpState, {
          grupo: itemValue,
        })
          .then((response) => {
            // console.log(response);
            axios.get(baseurl+"grupo_pesquisa")
              .then(response => {
                // console.log(response.data);
                setGrupoPesquisaList(response.data);
                if (grupo_pesquisa.idgrupo_pesquisa) {
                  setGrupoPesquisa(null);
                }
              }, error => {
                // console.log(error);
              });
          }, (error) => {
            // console.log(error);
          });
      }
    }
    //0posicao
    if (persist === true && tmpState === "posicao" && lote.idlote > 0) {
      if(ItemId != null){
        axios.put(baseurl+ tmpState+"/"+ItemId, {
          posicao: itemValue,
        })
        .then((response) => {
          // console.log(response);
          if (lote.idlote) {
            axios.get(baseurl+"posicao/search", {
              params: {
                "lote_idlote": lote.idlote
              }
            })
              .then(response => {
                // console.log(response.data);
                setPosicaoList(response.data);
                setPosicao({idposicao:ItemId, posicao:itemValue})
              }, error => {
                // console.log(error);
              });
          }
        }, (error) => {
          // console.log(error);
        });
      }else{
        axios.post(baseurl+ tmpState, {
          posicao: itemValue,
          lote_idlote: lote.idlote
        })
        .then((response) => {
          // console.log(response);
          if (lote.idlote) {
            axios.get(baseurl+"posicao/search", {
              params: {
                "lote_idlote": lote.idlote
              }
            })
              .then(response => {
                // console.log(response.data);
                setPosicaoList(response.data);
                setPosicao(null);
              }, error => {
                // console.log(error);
              });
          }
        }, (error) => {
          // console.log(error);
        });
      }
    }
    //0lote
    if (persist === true && tmpState === "lote" && prateleira.idprateleira > 0) {
      if(ItemId != null){
        axios.put(baseurl+ tmpState+"/"+ItemId, {
          lote: itemValue,
        })
        .then((response) => {
          // console.log(response);
          if (prateleira.idprateleira) {
            axios.get(baseurl+"lote/search", {
              params: {
                "prateleira_idprateleira": prateleira.idprateleira
              }
            })
              .then(response => {
                // console.log(response.data);
                setLoteList(response.data);
                setLote({idlote: ItemId, lote: itemValue});
              }, error => {
                // console.log(error);
              });
          }
        }, (error) => {
          // console.log(error);
        });
      }else{
        axios.post(baseurl+ tmpState, {
          lote: itemValue,
          prateleira_idprateleira: prateleira.idprateleira
        })
        .then((response) => {
          // console.log(response);
          if (prateleira.idprateleira) {
            axios.get(baseurl+"lote/search", {
              params: {
                "prateleira_idprateleira": prateleira.idprateleira
              }
            })
              .then(response => {
                // console.log(response.data);
                setLoteList(response.data);
                setLote(null);
              }, error => {
                // console.log(error);
              });
          }
        }, (error) => {
          // console.log(error);
        });
      }
    }
    //0prateleira
    if (persist === true && tmpState === "prateleira" && armario.idarmario > 0) {
      if(ItemId != null){
        axios.put(baseurl+ tmpState+"/"+ItemId, {
          prateleira: itemValue,
        })
        .then((response) => {
          // console.log(response);
          if (armario.idarmario) {
            axios.get(baseurl+"prateleira/search", {
              params: {
                "armario_idarmario": armario.idarmario
              }
            })
              .then(response => {
                // console.log(response.data);
                setPrateleiraList(response.data);
                setPrateleira({idprateleira:ItemId, prateleira:itemValue})
              }, error => {
                // console.log(error);
              });
          }
        }, (error) => {
          // console.log(error);
        });
      }else{
        axios.post(baseurl+ tmpState, {
          prateleira: itemValue,
          armario_idarmario: armario.idarmario
        })
        .then((response) => {
          // console.log(response);
          if (armario.idarmario) {
            axios.get(baseurl+"prateleira/search", {
              params: {
                "armario_idarmario": armario.idarmario
              }
            })
              .then(response => {
                // console.log(response.data);
                setPrateleiraList(response.data);
                setPrateleira(null);
              }, error => {
                // console.log(error);
              });
          }
        }, (error) => {
          // console.log(error);
        });
      }

    }
    //0armario
    if (persist === true && tmpState === "armario" && sub_colecao.idsub_colecao > 0) {
      if(ItemId != null){
        axios.put(baseurl+ tmpState+"/"+ItemId, {
          armario: itemValue,
        })
        .then((response) => {
          // console.log(response);
          if (sub_colecao?.idsub_colecao) {
            axios.get(baseurl+"armario/search", {
              params: {
                "sub_colecao_idsub_colecao": sub_colecao.idsub_colecao
              }
            })
              .then(response => {
                // console.log(response.data);
                setArmarioList(response.data);
                setArmario({idarmario:ItemId, armario: itemValue});
              }, error => {
                // console.log(error);
              });
          }
        }, (error) => {
          // console.log(error);
        });
      }else{
        axios.post(baseurl+ tmpState, {
          armario: itemValue,
          sub_colecao_idsub_colecao: sub_colecao.idsub_colecao
        })
        .then((response) => {
          // console.log(response);
          if (sub_colecao?.idsub_colecao) {
            axios.get(baseurl+"armario/search", {
              params: {
                "sub_colecao_idsub_colecao": sub_colecao.idsub_colecao
              }
            })
              .then(response => {
                // console.log(response.data);
                setArmarioList(response.data);
                setArmario(null)
              }, error => {
                // console.log(error);
              });
          }
        }, (error) => {
          // console.log(error);
        });
      }
    }
    //0sub_colecao
    if (persist === true && tmpState === "sub_colecao") {
      if(ItemId != null){
        axios.put(baseurl+ tmpState+"/"+ItemId, {
          sub_colecao: itemValue,
        })
          .then((response) => {
            // console.log(response);
            axios.get(baseurl+"sub_colecao")
              .then(response => {
                // console.log(response.data);
                setSub_colecaoList(response.data);
                setSub_colecao({idsub_colecao:ItemId, sub_colecao: itemValue});
              }, error => {
                // console.log(error);
              });
          }, (error) => {
            // console.log(error);
          });
      }else{
        axios.post(baseurl+ tmpState, {
          sub_colecao: itemValue,
        })
          .then((response) => {
            // console.log(response);
            axios.get(baseurl+"sub_colecao")
              .then(response => {
                // console.log(response.data);
                setSub_colecaoList(response.data);
                setSub_colecao(null);
              }, error => {
                // console.log(error);
              });
          }, (error) => {
            // console.log(error);
          });
      }
    }
    //0unidade
    if (persist === true && tmpState === "unidade") {
      if(ItemId != null){
        axios.put(baseurl+ tmpState+"/"+ItemId, {
          unidade: itemValue,
        })
          .then((response) => {
            // console.log(response);
            axios.get(baseurl+"unidade")
              .then(response => {
                // console.log(response.data);
                setUnidadeList(response.data);
                setUnidade({idunidade:ItemId, unidade: itemValue});
              }, error => {
                // console.log(error);
              });
          }, (error) => {
            // console.log(error);
          });
      }else{
        axios.post(baseurl+ tmpState, {
          unidade: itemValue,
        })
          .then((response) => {
            // console.log(response);
            axios.get(baseurl+"unidade")
              .then(response => {
                // console.log(response.data);
                setUnidadeList(response.data);
                if (unidade.idunidade) {
                  setUnidade(null);
                }
              }, error => {
                // console.log(error);
              });
          }, (error) => {
            // console.log(error);
          });
      }
    }
    //0borda
    if (persist === true && tmpState === "borda") {
      if(ItemId != null){
        axios.put(baseurl+tmpState+"/"+ItemId, {
          borda: itemValue,
        })
          .then((response) => {
            // console.log(response);
            axios.get(baseurl+"borda")
              .then(response => {
                // console.log(response.data);
                setBordaList(response.data);
                if (borda.idborda) {
                  setBorda({idborda:ItemId, borda: itemValue});
                }
              }, error => {
                // console.log(error);
              });
          }, (error) => {
            // console.log(error);
          });
      }else{
        axios.post(baseurl+ tmpState, {
          borda: itemValue,
        })
          .then((response) => {
            // console.log(response);
            axios.get(baseurl+"borda")
              .then(response => {
                // console.log(response.data);
                setBordaList(response.data);
                if (borda.idborda) {
                  setBorda(null);
                }
              }, error => {
                // console.log(error);
              });
          }, (error) => {
            // console.log(error);
          });
      }
    }
    //0relevo
    if (persist === true && tmpState === "relevo") {
      if(ItemId != null){
        axios.put(baseurl+tmpState+"/"+ItemId, {
          relevo: itemValue,
        })
          .then((response) => {
            // console.log(response);
            axios.get(baseurl+"relevo")
              .then(response => {
                // console.log(response.data);
                setRelevoList(response.data);
                if (relevo.idrelevo) {
                  setRelevo({idrelevo:ItemId, relevo: itemValue});
                }
              }, error => {
                // console.log(error);
              });
          }, (error) => {
            // console.log(error);
          });
      }else{
        axios.post(baseurl+ tmpState, {
          relevo: itemValue,
        })
          .then((response) => {
            // console.log(response);
            axios.get(baseurl+"relevo")
              .then(response => {
                // console.log(response.data);
                setRelevoList(response.data);
                if (relevo.idrelevo) {
                  setRelevo(null);
                }
              }, error => {
                // console.log(error);
              });
          }, (error) => {
            // console.log(error);
          });
      }
    }
    //0exudato
    if (persist === true && tmpState === "exudato") {
      if(ItemId != null){
        axios.put(baseurl+tmpState+"/"+ItemId, {
          exudato: itemValue,
        })
          .then((response) => {
            // console.log(response);
            axios.get(baseurl+"exudato")
              .then(response => {
                // console.log(response.data);
                setExudatoList(response.data);
                setExudato({idexudato:ItemId, exudato: itemValue});
              }, error => {
                // console.log(error);
              });
          }, (error) => {
            // console.log(error);
          });
      }else{
        axios.post(baseurl+ tmpState, {
          exudato: itemValue,
        })
          .then((response) => {
            // console.log(response);
            axios.get(baseurl+"exudato")
              .then(response => {
                // console.log(response.data);
                setExudatoList(response.data);
                if (exudato.idexudato) {
                  setExudato(null);
                }
              }, error => {
                // console.log(error);
              });
          }, (error) => {
            // console.log(error);
          });
      }
    }
    //0pigmento
    if (persist === true && tmpState === "pigmento") {
      if(ItemId != null){
        axios.put(baseurl+tmpState+"/"+ItemId, {
          pigmento: itemValue,
        })
          .then((response) => {
            // console.log(response);
            axios.get(baseurl+"pigmento")
              .then(response => {
                // console.log(response.data);
                setPigmentoList(response.data);
                setPigmento({idpigmento:ItemId, pigmento: itemValue});
              }, error => {
                // console.log(error);
              });
          }, (error) => {
            // console.log(error);
          });
      }else{
        axios.post(baseurl+ tmpState, {
          pigmento: itemValue,
        })
          .then((response) => {
            // console.log(response);
            axios.get(baseurl+"pigmento")
              .then(response => {
                // console.log(response.data);
                setPigmentoList(response.data);
                if (pigmento.idpigmento) {
                  setPigmento(null);
                }
              }, error => {
                // console.log(error);
              });
          }, (error) => {
            // console.log(error);
          });
      }
    }
    //0caracMicro
    if (persist === true && tmpState === "carac_micromorfologica") {
      axios.post(baseurl+ tmpState, {
        carac_micromorfologica: itemValue,
      })
        .then((response) => {
          // console.log(response);
          axios.get(baseurl+"carac_micromorfologica")
            .then(response => {
              // console.log(response.data);
              setCaracMicroList(response.data);
              if (caracMicro.idcarac_micromorfologica) {
                setCaracMicro(null);
              }
            }, error => {
              // console.log(error);
            });
        }, (error) => {
          // console.log(error);
        });
    }
    //0laboratorio
    if (persist === true && tmpState === "laboratorio") {
      if(ItemId != null){
        axios.put(baseurl+tmpState+"/"+ItemId, {
          laboratorio: itemValue,
        })
          .then((response) => {
            // console.log(response);
            axios.get(baseurl+"laboratorio")
              .then(response => {
                // console.log(response.data);
                setLabList(response.data);
                if (laboratorio.idlaboratorio) {
                  setLaboratorio({idlaboratorio:ItemId, laboratorio: itemValue});;
                }
              }, error => {
                // console.log(error);
              });
          }, (error) => {
            // console.log(error);
          });
      }else{
        axios.post(baseurl+ tmpState, {
          laboratorio: itemValue,
        })
          .then((response) => {
            // console.log(response);
            axios.get(baseurl+"laboratorio")
              .then(response => {
                // console.log(response.data);
                setLabList(response.data);
                if (laboratorio.idlaboratorio) {
                  setLaboratorio(null);
                }
              }, error => {
                // console.log(error);
              });
          }, (error) => {
            // console.log(error);
          });
      }
    }
    //0metodo_preservacao
    if (persist === true && tmpState === "metodo_preservacao") {
      axios.post(baseurl+ tmpState, {
        metodo: itemValue,
      })
        .then((response) => {
          // console.log(response);
          axios.get(baseurl+"metodo_preservacao")
            .then(response => {
              // console.log(response.data);
              setMetodoPreservacaoList(response.data);
              if (metodo_preservacao.length > 0) {
                setMetodoPreservacao(null);
              }
            }, error => {
              // console.log(error);
            });
        }, (error) => {
          // console.log(error);
        });
    }
    setIsOpen(false);
  }
  //END DEFAULT MODAL

  //START PERSON MODAL
  const [itemPersonName, setItemPersonName] = React.useState(["", "", ""]);
  const [itemPersonValueA, setItemPersonValueA] = React.useState("");
  const [itemPersonValueB, setItemPersonValueB] = React.useState("");
  const [itemPersonValueC, setItemPersonValueC] = React.useState("");
  const [modalPersonIsOpen, setPersonIsOpen] = useState(false);
  const [tmpStatePeson, setTmpStatePerson] = React.useState("");
  const [itemPesonId, setItemPesonId] = useState(null)

  function openPersonModal(vartext, varval, tmpState, id) {
    setPersonIsOpen(true);
    setItemPersonName(vartext);
    setItemPersonValueA(varval[0]);
    setItemPersonValueB(varval[1]);
    setItemPersonValueC(varval[2]);
    setTmpStatePerson(tmpState);
    if(id){
      setItemPesonId(id)
    }else{
      setItemPesonId(null)
    }
  }

  function afterOpenPersonModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }
  function closePersonModal(persist) {
    // console.log(itemPersonValueA,itemPersonValueB,itemPersonValueC)
    // console.log(tmpStatePeson);
     //0pesquisador
    if (persist === true && tmpStatePeson === "pesquisadorColeta") {
      if(itemPesonId != null){
        axios.put(baseurl+"pesquisador"+"/"+itemPesonId, {
          nome: itemPersonValueA,
          email: itemPersonValueB,
          instituicao: itemPersonValueC
        })
          .then((response) => {
            // console.log(response);
              axios.get(baseurl+"pesquisador")
                .then(response => {
                  // console.log(response.data);
                  setPesquisadorList(response.data);
                  setPesqColeta({idpesquisador:itemPesonId, nome: itemPersonValueA, email: itemPersonValueB, instituicao: itemPersonValueC});
                }, error => {
                  // console.log(error);
                });
          }, (error) => {
            // console.log(error);
          });
      }else{
        axios.post(baseurl+ "pesquisador", {
          nome: itemPersonValueA,
          email: itemPersonValueB,
          instituicao: itemPersonValueC
        })
          .then((response) => {
            // console.log(response);
              axios.get(baseurl+"pesquisador")
                .then(response => {
                  // console.log(response.data);
                  setPesquisadorList(response.data);
                  if (pesqColeta.idpesquisador) {
                    setPesqColeta(null);
                  }
                }, error => {
                  // console.log(error);
                });
          }, (error) => {
            // console.log(error);
          });
      }
    }
     //0pesquisador
    if (persist === true && tmpStatePeson === "pesquisadorIsol") {
      if(itemPesonId != null){
        axios.put(baseurl+"pesquisador"+"/"+itemPesonId, {
          nome: itemPersonValueA,
          email: itemPersonValueB,
          instituicao: itemPersonValueC
        })
          .then((response) => {
            // console.log(response);
              axios.get(baseurl+"pesquisador")
                .then(response => {
                  // console.log(response.data);
                  setPesquisadorList(response.data);
                  setPesqIsola({idpesquisador:itemPesonId, nome: itemPersonValueA, email: itemPersonValueB, instituicao: itemPersonValueC});
                }, error => {
                  // console.log(error);
                });
          }, (error) => {
            // console.log(error);
          });
      }else{
        axios.post(baseurl+ "pesquisador", {
          nome: itemPersonValueA,
          email: itemPersonValueB,
          instituicao: itemPersonValueC
        })
          .then((response) => {
            // console.log(response);
              axios.get(baseurl+"pesquisador")
                .then(response => {
                  // console.log(response.data);
                  setPesquisadorList(response.data);
                  if (pesqIsola.idpesquisador) {
                    setPesqIsola(null);
                  }
                }, error => {
                  // console.log(error);
                });
          }, (error) => {
            // console.log(error);
          });
      }
    }
     //0pesquisador
    if (persist === true && tmpStatePeson === "pesquisadorIdent") {
        if(itemPesonId != null){
          axios.put(baseurl+"pesquisador"+"/"+itemPesonId, {
            nome: itemPersonValueA,
            email: itemPersonValueB,
            instituicao: itemPersonValueC
          })
          .then((response) => {
            // console.log(response);
              axios.get(baseurl+"pesquisador")
                .then(response => {
                  // console.log(response.data);
                  setPesquisadorList(response.data);
                  setPesqId({idpesquisador:itemPesonId, nome: itemPersonValueA, email: itemPersonValueB, instituicao: itemPersonValueC});
                }, error => {
                  // console.log(error);
                });
          }, (error) => {
            // console.log(error);
          });
      }else{
        axios.post(baseurl+ "pesquisador", {
          nome: itemPersonValueA,
          email: itemPersonValueB,
          instituicao: itemPersonValueC
        })
          .then((response) => {
            // console.log(response);
              axios.get(baseurl+"pesquisador")
                .then(response => {
                  // console.log(response.data);
                  setPesquisadorList(response.data);
                  if (pesqId.idpesquisador) {
                    setPesqId(null);
                  }
                }, error => {
                  // console.log(error);
                });
          }, (error) => {
            // console.log(error);
          });
      }
    }
     //0pesquisador
    if (persist === true && tmpStatePeson === "pesquisadorPres") {
      if(itemPesonId != null){
        axios.put(baseurl+"pesquisador"+"/"+itemPesonId, {
          nome: itemPersonValueA,
          email: itemPersonValueB,
          instituicao: itemPersonValueC
        })
          .then((response) => {
            // console.log(response);
              axios.get(baseurl+"pesquisador")
                .then(response => {
                  // console.log(response.data);
                  setPesquisadorList(response.data);
                  setPesqPres({idpesquisador:itemPesonId, nome: itemPersonValueA, email: itemPersonValueB, instituicao: itemPersonValueC});
                }, error => {
                  // console.log(error);
                });
          }, (error) => {
            // console.log(error);
          });
      }else{
        axios.post(baseurl+ "pesquisador", {
          nome: itemPersonValueA,
          email: itemPersonValueB,
          instituicao: itemPersonValueC
        })
          .then((response) => {
            // console.log(response);
              axios.get(baseurl+"pesquisador")
                .then(response => {
                  // console.log(response.data);
                  setPesquisadorList(response.data);
                  if (pesqPres.idpesquisador) {
                    setPesqPres(null);
                  }
                }, error => {
                  // console.log(error);
                });
          }, (error) => {
            // console.log(error);
          });
      }
    }
    setPersonIsOpen(false);
  }

  //END PERSON MODAL

  //START AUTOR MODAL - ESPECIE/SUB_ESPECIE/VARIEDADE - TAXA
  const [itemAutorName, setItemAutorName] = React.useState(["", ""]);
  const [itemAutorValueA, setItemAutorValueA] = React.useState("");
  const [itemAutorValueB, setItemAutorValueB] = React.useState("");
  const [modalAutorIsOpen, setAutorIsOpen] = useState(false);
  const [tmpStateAutor, setTmpStateAutor] = React.useState("");
  const [ItemAutorId, setItemAutorId] = useState(null)

  function openAutorModal(vartext, varval,tmState, id) {
    setAutorIsOpen(true);
    setItemAutorName(vartext);
    setItemAutorValueA(varval[0]);
    setItemAutorValueB(varval[1]);
    setTmpStateAutor(tmState);
    if(id){
      setItemAutorId(id)
    }else{
      setItemAutorId(null)
    }
  }

  function afterOpenAutorModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }

  function closeAutorModal(persist) {
    // console.log(itemAutorValueA,itemAutorValueB)
    // console.log(tmpStateAutor)
    //0especie
    if (persist === true && tmpStateAutor === "especie" && genero.idgenero > 0) {
      if(ItemAutorId != null){
        axios.put(baseurl + tmpStateAutor+"/"+ItemAutorId, {
          especie: itemAutorValueA,
          autor: itemAutorValueB,
        })
        .then(
          (response) => {
            // console.log(response);
            if (genero?.idgenero) {
              axios.get(baseurl + "especie/search", {
                  params: {
                    genero_idgenero: genero.idgenero,
                  },
              })
                .then(
                  (response) => {
                    // console.log(response.data);
                    setEspecieList(response.data);
                    setEspecie({idespecie:ItemAutorId, especie: itemAutorValueA, autor: itemAutorValueB});
                  },
                  (error) => {
                    // console.log(error);
                  }
                );
            }
          },
          (error) => {
            // console.log(error);
          }
        );
      }else{
        axios.post(baseurl + tmpStateAutor, {
          especie: itemAutorValueA,
          autor: itemAutorValueB,
          genero_idgenero: genero.idgenero,
        })
        .then(
          (response) => {
            // console.log(response);
            if (genero?.idgenero) {
              axios.get(baseurl + "especie/search", {
                  params: {
                    genero_idgenero: genero.idgenero,
                  },
              })
                .then(
                  (response) => {
                    // console.log(response.data);
                    setEspecieList(response.data);
                  },
                  (error) => {
                    // console.log(error);
                  }
                );
            }
          },
          (error) => {
            // console.log(error);
          }
        );
      }
    }
    //0sub_especie
    if (persist === true && tmpStateAutor === "sub_especie" && especie.idespecie > 0) {
      if(ItemAutorId != null){
        axios.put(baseurl + tmpStateAutor+"/"+ItemAutorId, {
          sub_especie: itemAutorValueA,
          autor: itemAutorValueB,
        })
          .then((response) => {
            // console.log(response);
            if (especie?.idespecie) {
              axios.get(baseurl+"sub_especie/search", {
                params: {
                  "especie_idespecie": especie.idespecie
                }
              })
                .then(response => {
                  // console.log(response.data);
                  setSub_especieList(response.data);
                  setSub_especie({idsub_especie:ItemAutorId, sub_especie: itemAutorValueA, autor: itemAutorValueB});
                }, error => {
                  // console.log(error);
                });
            }
          }, (error) => {
            // console.log(error);
          });
      }else{
        axios.post(baseurl+ tmpStateAutor, {
          sub_especie: itemAutorValueA,
          autor: itemAutorValueB,
          especie_idespecie: especie.idespecie
        })
          .then((response) => {
            // console.log(response);
            if (especie?.idespecie) {
              axios.get(baseurl+"sub_especie/search", {
                params: {
                  "especie_idespecie": especie.idespecie
                }
              })
                .then(response => {
                  // console.log(response.data);
                  setSub_especieList(response.data);
                  setSub_especie(null)
                }, error => {
                  // console.log(error);
                });
            }
          }, (error) => {
            // console.log(error);
          });
      }
    }
    //0variedade
   if (persist === true && tmpStateAutor === "variedade" && sub_especie.idsub_especie > 0) {
    if(ItemAutorId != null){
      axios.put(baseurl + tmpStateAutor+"/"+ItemAutorId, {
        variedade: itemAutorValueA,
        autor: itemAutorValueB,
      })
        .then((response) => {
         //  console.log(response);
          if (sub_especie?.idsub_especie) {
            axios.get(baseurl+"variedade/search", {
              params: {
                "sub_especie_idsub_especie": sub_especie.idsub_especie
              }
            })
              .then(response => {
               //  console.log(response.data);
                setVariedadeList(response.data);
                setVariedade({idvariedade:ItemAutorId, variedade: itemAutorValueA, autor: itemAutorValueB});
              }, error => {
               //  console.log(error);
              });
          }
        }, (error) => {
         //  console.log(error);
        });
    }else{
      axios.post(baseurl+ tmpStateAutor, {
        variedade: itemAutorValueA,
        autor: itemAutorValueB,
        sub_especie_idsub_especie: sub_especie.idsub_especie
      })
        .then((response) => {
         //  console.log(response);
          if (sub_especie?.idsub_especie) {
            axios.get(baseurl+"variedade/search", {
              params: {
                "sub_especie_idsub_especie": sub_especie.idsub_especie
              }
            })
              .then(response => {
               //  console.log(response.data);
                setVariedadeList(response.data);
              }, error => {
               //  console.log(error);
              });
          }
        }, (error) => {
         //  console.log(error);
        });
    }
   }
    setAutorIsOpen(false);
  }

  //END AUTOR MODAL
  return (
    <>
      {/* MODAL DEFAULT */}
      <Modal
        isOpen={modalIsOpen}
        ariaHideApp={false}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div>
          <form>
            <div className="flex flex-wrap">
              {/* Foto, Comentários. referências adicionais */}
              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    {itemName}
                  </label>
                  <input
                    onChange={(v) => {
                      setItemValue(v.target.value);
                    }}
                    disabled={props.showOnly}
                    type="text"
                    autoFocus
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  value={itemValue}
                  />
                </div>
                <div className="relative w-full mb-3">
                  <button
                    className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
                      closeModal(false);
                    }}
                  >
                    Cancelar
                  </button>
                  <button
                    className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
                      closeModal(true);
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
      {/* MODAL PERSON */}
      <Modal
        isOpen={modalPersonIsOpen}
        onAfterOpen={afterOpenPersonModal}
        onRequestClose={closePersonModal}
        ariaHideApp={false}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div>
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
                    disabled={props.showOnly}
                    type="text"
                    autoFocus
                    onChange={(v) => {
                      setItemPersonValueA(v.target.value);
                    }}
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    value={itemPersonValueA}
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
                    disabled={props.showOnly}
                    type="text"
                    onChange={(v) => {
                      setItemPersonValueB(v.target.value);
                    }}
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    value={itemPersonValueB}
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
                    disabled={props.showOnly}
                    type="text"
                    onChange={(v) => {
                      setItemPersonValueC(v.target.value);
                    }}
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    value={itemPersonValueC}
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
      {/* MODAL AUTOR */}
      <Modal
        isOpen={modalAutorIsOpen}
        onAfterOpen={afterOpenAutorModal}
        ariaHideApp={false}
        onRequestClose={closeAutorModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div>
          <form>
            <div className="flex flex-wrap">
              {/* Foto, Comentários. referências adicionais */}
              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    {itemAutorName[0]}
                  </label>
                  <input
                    disabled={props.showOnly}
                    type="text"
                    autoFocus
                    onChange={(v) => {
                      setItemAutorValueA(v.target.value);
                    }}
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    value={itemAutorValueA}
                  />
                </div>
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    {itemAutorName[1]}
                  </label>
                  <input
                    disabled={props.showOnly}
                    type="text"
                    onChange={(v) => {
                      setItemAutorValueB(v.target.value);
                    }}
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    value={itemAutorValueB}
                  />
                </div>
                <div className="relative w-full mb-3">
                  <button
                    className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
                      closeAutorModal(false);
                    }}
                  >
                    Cancelar
                  </button>
                  <button
                    className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
                      closeAutorModal(true);
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
      <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
        <div className="w-full py-6">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            <li
              className="-mb-px mr-2 last:mr-0 flex-auto text-center"
              style={{ display: props.isRepique ? "none" : "block" }}
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
              style={{ display: props.isRepique ? "none" : "block" }}
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
              style={{ display: props.isRepique ? "none" : "block" }}
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
              style={{ display: props.isRepique ? "none" : "block" }}
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
              style={{ display: props.isRepique ? "none" : "block" }}
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
                          <Select
                            className="w-8/12"
                            isDisabled={props.showOnly}
                            searchable={true}
                            placeholder={"Select an option"}
                            options={dominioList}
                            defaultValue={dominio}
                            value={dominio}
                            onChange={setDominio}
                            getOptionLabel={(options) => options["dominio"]}
                            getOptionValue={(options) => options["iddominio"]}
                          />
                          {props.showOnly === false ? (
                            //0dominio
                            <>
                              <button
                                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => {
                                  openModal("Domínio", "", "dominio", null);
                                }}
                              >
                                <i className="fas fa-plus"></i>
                              </button>
                              <button
                                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="button"
                                // disabled
                                onClick={() => {
                                  openModal("Domínio", dominio.dominio, "dominio", dominio.iddominio);
                                }}
                              >
                                <i className="fas fa-pencil-alt" />
                              </button>
                            </>
                          ) : null}
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
                          <Select
                            className="w-8/12"
                            isDisabled={props.showOnly}
                            searchable={true}
                            placeholder={"Select an option"}
                            options={reinoList}
                            defaultValue={reino}
                            value={reino}
                            onChange={setReino}
                            getOptionLabel={(options) => options["reino"]}
                            getOptionValue={(options) => options["idreino"]}
                          />
                          {props.showOnly === false ? (
                            //0reino
                            <>
                              <button
                                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => {
                                  openModal("Reino", "", "reino", null);
                                }}
                              >
                                <i className="fas fa-plus"></i>
                              </button>
                              <button
                                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="button"
                                // disabled
                                onClick={() => {
                                  openModal("Reino", reino.reino, "reino", reino.idreino);
                                }}
                              >
                                <i className="fas fa-pencil-alt" />
                              </button>
                            </>
                          ) : null}
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

                          <Select
                            className="w-8/12"
                            isDisabled={props.showOnly}
                            searchable={true}
                            placeholder={"Select an option"}
                            options={filoList}
                            defaultValue={filo}
                            value={filo}
                            onChange={setFilo}
                            getOptionLabel={(options) => options["filo"]}
                            getOptionValue={(options) => options["idfilo"]}
                          />
                          {props.showOnly === false ? (
                            //0filo
                            <>
                              <button
                                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => {
                                  openModal("Filo", "", "filo", null);
                                }}
                              >
                                <i className="fas fa-plus"></i>
                              </button>
                              <button
                                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="button"
                                // disabled
                                onClick={() => {
                                  openModal("Filo", filo.filo, "filo", filo.idfilo);
                                }}
                              >
                                <i className="fas fa-pencil-alt" />
                              </button>
                            </>
                          ) : null}
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

                          <Select
                            className="w-8/12"
                            isDisabled={props.showOnly}
                            searchable={true}
                            placeholder={"Select an option"}
                            options={classeList}
                            defaultValue={classe}
                            value={classe}
                            onChange={setClasse}
                            getOptionLabel={(options) => options["classe"]}
                            getOptionValue={(options) => options["idclasse"]}
                          />
                          {props.showOnly === false ? (
                            //0classe
                            <>
                              <button
                                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => {
                                  openModal("Classe", "", "classe", null);
                                }}
                              >
                                <i className="fas fa-plus"></i>
                              </button>
                              <button
                                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="button"
                                // disabled
                                onClick={() => {
                                  openModal("Classe", classe.classe, "classe", classe.idclasse);
                                }}
                              >
                                <i className="fas fa-pencil-alt" />
                              </button>
                            </>
                          ) : null}
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

                          <Select
                            className="w-8/12"
                            isDisabled={props.showOnly}
                            searchable={true}
                            placeholder={"Select an option"}
                            options={ordemList}
                            defaultValue={ordem}
                            value={ordem}
                            onChange={setOrdem}
                            getOptionLabel={(options) => options["ordem"]}
                            getOptionValue={(options) => options["idordem"]}
                          />
                          {props.showOnly === false ? (
                            //0ordem
                            <>
                              <button
                                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => {
                                  openModal("Ordem", "", "ordem", null);
                                }}
                              >
                                <i className="fas fa-plus"></i>
                              </button>
                              <button
                                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="button"
                                // disabled
                                onClick={() => {
                                  openModal("Ordem", ordem.ordem, "ordem", ordem.idordem);
                                }}
                              >
                                <i className="fas fa-pencil-alt" />
                              </button>
                            </>
                          ) : null}
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

                          <Select
                            className="w-8/12"
                            isDisabled={props.showOnly}
                            searchable={true}
                            placeholder={"Select an option"}
                            options={familiaList}
                            defaultValue={familia}
                            value={familia}
                            onChange={setFamilia}
                            getOptionLabel={(options) => options["familia"]}
                            getOptionValue={(options) => options["idfamilia"]}
                          />
                          {props.showOnly === false ? (
                            //0familia
                            <>
                              <button
                                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => {
                                  openModal("Família", "", "familia", null);
                                }}
                              >
                                <i className="fas fa-plus"></i>
                              </button>
                              <button
                                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="button"
                                // disabled
                                onClick={() => {
                                  openModal("Família", familia.familia, "familia", familia.idfamilia);
                                }}
                              >
                                <i className="fas fa-pencil-alt" />
                              </button>
                            </>
                          ) : null}
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
                          <Select
                            className="w-8/12"
                            isDisabled={props.showOnly}
                            searchable={true}
                            placeholder={"Select an option"}
                            options={generoList}
                            defaultValue={genero}
                            value={genero}
                            onChange={setGenero}
                            getOptionLabel={(options) => options["genero"]}
                            getOptionValue={(options) => options["idgenero"]}
                          />
                          {props.showOnly === false ? (
                            //0genero
                            <>
                              <button
                                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => {
                                  openModal("Gênero", "", "genero", null);
                                }}
                              >
                                <i className="fas fa-plus"></i>
                              </button>
                              <button
                                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="button"
                                // disabled
                                onClick={() => {
                                  openModal("Gênero", genero.genero, "genero", genero.idgenero);
                                }}
                              >
                                <i className="fas fa-pencil-alt" />
                              </button>
                            </>
                          ) : null}
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
                          <Select
                            className="w-8/12"
                            isDisabled={props.showOnly}
                            searchable={true}
                            placeholder={"Select an option"}
                            options={especieList}
                            defaultValue={especie}
                            value={especie}
                            onChange={setEspecie}
                            getOptionLabel={(options) => options["especie"]+" - "+options["autor"]}
                            getOptionValue={(options) => options["idespecie"]}
                          />
                          {props.showOnly === false ? (
                            //0especie
                            <>
                              <button
                                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => {
                                  openAutorModal(
                                    ["Espécie", "Autor"],
                                    ["", ""], "especie", null
                                  );
                                }}
                              >
                                <i className="fas fa-plus"></i>
                              </button>
                              <button
                                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="button"
                                // disabled
                                onClick={() => {
                                  openAutorModal(
                                    ["Espécie", "Autor"],
                                    [especie.especie, especie.autor], "especie", especie.idespecie
                                  );
                                }}
                              >
                                <i className="fas fa-pencil-alt" />
                              </button>
                            </>
                          ) : null}
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
                          <Select
                            className="w-8/12"
                            isDisabled={props.showOnly}
                            searchable={true}
                            placeholder={"Select an option"}
                            options={sub_especieList}
                            defaultValue={sub_especie}
                            value={sub_especie}
                            onChange={setSub_especie}
                            getOptionLabel={(options) => options["sub_especie"]+" - "+options["autor"]}
                            getOptionValue={(options) => options["idsub_especie"]
                            }
                          />
                          {/* <select
                            className="text-blueGray-600 text-xs font-bold mb-2 w-full"
                            disabled={props.showOnly}
                          >
                            <option value="laranja">Laranja</option>
                            <option value="limao">Limão</option>
                            <option selected value="coco">
                             Pleurotus purpureo-olivaceus - (Jacq.) P. Kumm. 1871
                            </option>
                            <option value="manga">Manga</option>
                          </select> */}
                          {props.showOnly === false ? (
                            //0sub_especie
                            <>
                              <button
                                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => {
                                  openAutorModal(
                                    ["Sub_Espécie", "Autor"],
                                    ["", ""], "sub_especie", null
                                  );
                                }}
                              >
                                <i className="fas fa-plus"></i>
                              </button>
                              <button
                                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="button"
                                // disabled
                                onClick={() => {
                                  openAutorModal(
                                    ["Sub_Espécie", "Autor"],
                                    [sub_especie.sub_especie, sub_especie.autor], "sub_especie", sub_especie.idsub_especie
                                  );
                                }}
                              >
                                <i className="fas fa-pencil-alt" />
                              </button>
                            </>
                          ) : null}
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

                          <Select
                            className="w-8/12"
                            isDisabled={props.showOnly}
                            searchable={true}
                            placeholder={"Select an option"}
                            options={variedadeList}
                            defaultValue={variedade}
                            value={variedade}
                            onChange={setVariedade}
                            getOptionLabel={(options) => options["variedade"]+" - "+options["autor"]}
                            getOptionValue={(options) => options["idvariedade"]}
                          />
                          {props.showOnly === false ? (
                            //0variedade
                            <>
                              <button
                                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => {
                                  openAutorModal(
                                    ["Variedade", "Autor"],
                                    ["", ""], "variedade", null
                                  );
                                }}
                              >
                                <i className="fas fa-plus"></i>
                              </button>
                              <button
                                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="button"
                                // disabled
                                onClick={() => {
                                  openAutorModal(
                                    ["Variedade", "Autor"],
                                    [variedade.variedade, variedade.autor], "variedade", variedade.idvariedade
                                  );
                                }}
                              >
                                <i className="fas fa-pencil-alt" />
                              </button>
                            </>
                          ) : null}
                        </div>
                      </div>
                      <div className="w-full lg:w-8/12 px-4">
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Referências taxonômicas
                            {/* ARTIGO -  */}
                          </label>

                          <Select
                            className="w-8/12"
                            isDisabled={props.showOnly}
                            searchable={true}
                            placeholder={"Select an option"}
                            options={referenciaList}
                            defaultValue={refTaxa}
                            value={refTaxa}
                            isMulti
                            onChange={setRefTaxa}
                            getOptionLabel={(options) => options["referencia"]}
                            getOptionValue={(options) => options["idreferencia"]
                            }
                          />
                          {props.showOnly === false ? (
                            //0referencia
                            <>
                              <button
                                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => {
                                  openModal("Referências taxonômicas", "", "referenciaTaxa",null);
                                }}
                              >
                                <i className="fas fa-plus"></i>
                              </button>
                              {/* <button
                                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="button"
                                // disabled
                                onClick={() => {
                                  openModal("Referências taxonômicas", referencia.refencia, "referenciaTaxa", referencia.idreferencia);
                                }}
                              >
                                <i className="fas fa-pencil-alt" />
                              </button> */}
                            </>
                          ) : null}
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

                          <Select
                            className="w-8/12"
                            isDisabled={props.showOnly}
                            searchable={true}
                            placeholder={"Select an option"}
                            options={statusList}
                            defaultValue={status}
                            value={status}
                            onChange={setStatus}
                            getOptionLabel={(options) => options["status"]}
                            getOptionValue={(options) => options["idstatus"]}
                          />
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
                          <input
                            disabled={props.showOnly}
                            type="date"
                            onChange={e=>setDataReg(e.target.value)}
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            value={dataReg}
                          />
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
                          <input
                            disabled={props.showOnly}
                            type="text"
                            onChange={e=>setOrigCode(e.target.value)}
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            // defaultValue={origCode}
                            value={origCode}
                          />
                        </div>
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Registro em outras coleções (Histórico)
                          </label>
                          <input
                            disabled={props.showOnly}
                            type="text"
                            onChange={e=>setOrigHist(e.target.value)}
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            value={origHist}
                          />
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
                          <input
                            disabled={props.showOnly}
                            type="date"
                            onChange={e=>setDataCol(e.target.value)}
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            value={dataCol}
                          />
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
                          <Select
                            className="w-8/12"
                            isDisabled={props.showOnly}
                            searchable={true}
                            placeholder={"Select an option"}
                            options={pesquisadorList}
                            defaultValue={pesqColeta}
                            value={pesqColeta}
                            onChange={setPesqColeta}
                            getOptionLabel={(options) => options["nome"]+" - "+options["email"]+" - "+options["instituicao"]}
                            getOptionValue={(options) => options["idpesquisador"]}
                          />
                          {props.showOnly === false ? (
                             //0pesquisador
                            <>
                              <button
                                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => {
                                  openPersonModal(["Nome","Email","Instituição"], ["", "", ""], "pesquisadorColeta", null);
                                }}
                              >
                                <i className="fas fa-plus"></i>
                              </button>
                              <button
                                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="button"
                                // disabled
                                onClick={() => {
                                  openPersonModal(["Nome","Email","Instituição"], [pesqColeta.nome, pesqColeta.email, pesqColeta.instituicao], "pesquisadorColeta", pesqColeta.idpesquisador);
                                }}
                              >
                                <i className="fas fa-pencil-alt" />
                              </button>
                            </>
                          ) : null}
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

                          <Select
                            className="w-4/12"
                            isDisabled={props.showOnly}
                            searchable={true}
                            placeholder={"Select an option"}
                            options={habitatList}
                            defaultValue={habitat}
                            value={habitat}
                            onChange={setHabitat}
                            getOptionLabel={(options) => options["habitat"]}
                            getOptionValue={(options) => options["idhabitat"]}
                          />
                        </div>
                      </div>

                      <div className="w-full lg:w-12/12 px-4">
                        <div className="relative w-full mb-3">
                        </div>
                      </div>
                      {habitat.idhabitat <= 2 ? (

                        <>
                          <div className="w-full lg:w-6/12 px-4">
                            <div className="relative w-full mb-3">
                              <label
                                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                htmlFor="grid-password"
                              >
                                Hospedeiro vegetal (Espécie)
                                {/* ARTIGO -  */}
                              </label>

                              <Select
                                className="w-8/12"
                                isDisabled={props.showOnly}
                                searchable={true}
                                placeholder={"Select an option"}
                                options={hospVegList}
                                defaultValue={hospVeg}
                                value={hospVeg}
                                onChange={setHospVeg}
                                getOptionLabel={(options) => options["hospedeiro"]}
                                getOptionValue={(options) =>
                                  options["idhospedeiro"]}
                              />
                              {props.showOnly === false ? (
                                //0hospVegetal
                                <>
                                  <button
                                    className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={() => {
                                      openModal("Hospedeiro vegetal", "", "hospedeiro_veg", null);
                                    }}
                                  >
                                    <i className="fas fa-plus"></i>
                                  </button>
                                  <button
                                    className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                    type="button"
                                    // disabled
                                    onClick={() => {
                                      openModal("Hospedeiro vegetal", hospVeg.hospedeiro, "hospedeiro_veg", hospVeg.idhospedeiro);
                                    }}
                                  >
                                    <i className="fas fa-pencil-alt" />
                                  </button>
                                </>
                              ) : null}
                            </div>
                          </div>

                          <div className="w-full lg:w-6/12 px-4">
                            <div className="relative w-full mb-3">
                              <label
                                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                htmlFor="grid-password"
                              >
                                Substrato
                                {/* ARTIGO -  */}
                              </label>

                              <Select
                                className="w-8/12"
                                isDisabled={props.showOnly}
                                searchable={true}
                                placeholder={"Select an option"}
                                options={substratoList}
                                defaultValue={substrato}
                                value={substrato}
                                onChange={setSubstrato}
                                getOptionLabel={(options) => options["substrato"]}
                                getOptionValue={(options) =>
                                  options["idsubstrato"]
                                }
                              />
                              {props.showOnly === false ? (
                                //0substrato
                                <>
                                  <button
                                    className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={() => {
                                      openModal("Substrato", "", "substrato", null);
                                    }}
                                  >
                                    <i className="fas fa-plus"></i>
                                  </button>
                                  <button
                                    className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                    type="button"
                                    // disabled
                                    onClick={() => {
                                      openModal("Substrato", substrato.substrato, "substrato", substrato.idsubstrato);
                                    }}
                                  >
                                    <i className="fas fa-pencil-alt" />
                                  </button>
                                </>
                              ) : null}
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
                              <input
                                disabled={props.showOnly}
                                type="text"
                                onChange={e=>setRegExiHosp(e.target.value)}
                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                value={regExiHosp}
                              />
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
                              <input
                                disabled={props.showOnly}
                                type="text"
                                onChange={e=>setHerbDeposit(e.target.value)}
                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                value={herbDeposit}
                              />
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
                              <input
                                disabled={props.showOnly}
                                type="text"
                                onChange={e=>setCodHerb(e.target.value)}
                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                value={codHerb}
                              />
                            </div>
                          </div>
                        </>
                      ) : null}
                      {habitat.idhabitat === 3 ? (
                        <>
                          <div className="w-full lg:w-6/12 px-4">
                            <div className="relative w-full mb-3">
                              <label
                                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                htmlFor="grid-password"
                              >
                                Hospedeiro animal (Espécie)
                                {/* ARTIGO -  */}
                              </label>

                              <Select
                                className="w-8/12"
                                isDisabled={props.showOnly}
                                searchable={true}
                                placeholder={"Select an option"}
                                options={hospAnList}
                                defaultValue={hospAn}
                                value={hospAn}
                                onChange={setHospAn}
                                getOptionLabel={(options) => options["hospedeiro"]}
                                getOptionValue={(options) =>
                                  options["idhospedeiro"]
                                }
                              />
                              {props.showOnly === false ? (
                                //0hospAnimal
                                <>
                                  <button
                                    className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={() => {
                                      openModal("Hospedeiro animal", "", "hospedeiro_ani", null);
                                    }}
                                  >
                                    <i className="fas fa-plus"></i>
                                  </button>
                                  <button
                                    className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                    type="button"
                                    // disabled
                                    onClick={() => {
                                      openModal("Hospedeiro animal", hospAn.hospedeiro,"hospedeiro_ani", hospAn.idhospedeiro);
                                    }}
                                  >
                                    <i className="fas fa-pencil-alt" />
                                  </button>
                                </>
                              ) : null}
                            </div>
                          </div>

                          <div className="w-full lg:w-6/12 px-4">
                            <div className="relative w-full mb-3">
                              <label
                                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                htmlFor="grid-password"
                              >
                                Sítio anatômico
                                {/* ARTIGO -  */}
                              </label>

                              <Select
                                className="w-8/12"
                                isDisabled={props.showOnly}
                                searchable={true}
                                placeholder={"Select an option"}
                                options={sitioAnatList}
                                defaultValue={sitioAnat}
                                value={sitioAnat}
                                onChange={setSitioAnat}
                                getOptionLabel={(options) => options["sitio"]}
                                getOptionValue={(options) =>
                                  options["idsitio"]
                                }
                              />
                              {props.showOnly === false ? (
                                //0sitio
                                <>
                                  <button
                                    className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={() => {
                                      openModal("Sítio anatômico", "", "sitio", null);
                                    }}
                                  >
                                    <i className="fas fa-plus"></i>
                                  </button>
                                  <button
                                    className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                    type="button"
                                    // disabled
                                    onClick={() => {
                                      openModal("Sítio anatômico", sitioAnat.sitio, "sitio", sitioAnat.idsitio);
                                    }}
                                  >
                                    <i className="fas fa-pencil-alt" />
                                  </button>
                                </>
                              ) : null}
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
                          <input
                            disabled={props.showOnly}
                            type="text"
                            onChange={e=>setHabitatInfo(e.target.value)}
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            value={habitatInfo}
                          />
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
                          <input
                            disabled={props.showOnly}
                            type="text"
                            onChange={e=>setOrigGeo(e.target.value)}
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            value={origGeo}
                          />
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
                          <input
                            disabled={props.showOnly}
                            type="text"
                            onChange={e=>setOrigLat(e.target.value)}
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            value={origLat}
                          />
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
                          <input
                            disabled={props.showOnly}
                            type="text"
                            onChange={e=>setOrigLon(e.target.value)}
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            value={origLon}
                          />
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
                          <input
                            disabled={props.showOnly}
                            type="text"
                            onChange={e=>setOrigDatum(e.target.value)}
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            value={origDatum}
                          />
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
                          <input
                            disabled={props.showOnly}
                            type="text"
                            onChange={e=>setOrigPrecisao(e.target.value)}
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            value={origPrecisao}
                          />
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
                          <input
                            disabled={props.showOnly}
                            type="text"
                            onChange={e=>setOrigComent(e.target.value)}
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            value={origComent}
                          />
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
                          <input
                            disabled={props.showOnly}
                            type="date"
                            onChange={e=>setDataIso(e.target.value)}
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            value={dataIso}
                          />
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
                          <Select
                            className="w-8/12"
                            isDisabled={props.showOnly}
                            searchable={true}
                            placeholder={"Select an option"}
                            options={pesquisadorList}
                            defaultValue={pesqIsola}
                            value={pesqIsola}
                            onChange={setPesqIsola}
                            getOptionLabel={(options) => options["nome"]+" - "+options["email"]+" - "+options["instituicao"]}
                            getOptionValue={(options) => options["idpesquisador"]}
                          />
                          {props.showOnly === false ? (
                            //0pesquisador
                            <>
                              <button
                                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => {
                                  openPersonModal(["Nome","Email","Instituição"], ["", "", ""], "pesquisadorIsol", null);
                                }}
                              >
                                <i className="fas fa-plus"></i>
                              </button>
                              <button
                                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="button"
                                 // disabled
                                 onClick={() => {
                                  openPersonModal(["Nome","Email","Instituição"], [pesqIsola.nome, pesqIsola.email, pesqIsola.instituicao], "pesquisadorIsol", pesqIsola.idpesquisador);
                                }}
                              >
                                <i className="fas fa-pencil-alt" />
                              </button>
                            </>
                          ) : null}
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
                          <input
                            disabled={props.showOnly}
                            type="text"
                            onChange={e=>setIsoInfo(e.target.value)}
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            value={isoInfo}
                          />
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
                          <input
                            disabled={props.showOnly}
                            type="date"
                            onChange={e=>setDataIdn(e.target.value)}
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            value={dataIdn}
                          />
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
                          <Select
                            className="w-8/12"
                            isDisabled={props.showOnly}
                            searchable={true}
                            placeholder={"Select an option"}
                            options={pesquisadorList}
                            defaultValue={pesqId}
                            value={pesqId}
                            onChange={setPesqId}
                            getOptionLabel={(options) => options["nome"]+" - "+options["email"]+" - "+options["instituicao"]}
                            getOptionValue={(options) => options["idpesquisador"]}
                          />
                          {props.showOnly === false ? (
                            //0pesquisador
                            <>
                              <button
                                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => {
                                  openPersonModal(["Nome","Email","Instituição"], ["", "", ""], "pesquisadorIdent", null);
                                }}
                              >
                                <i className="fas fa-plus"></i>
                              </button>
                              <button
                                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="button"
                                 // disabled
                                 onClick={() => {
                                  openPersonModal(["Nome","Email","Instituição"], [pesqId.nome, pesqId.email, pesqId.instituicao], "pesquisadorIdent", pesqId.idpesquisador);
                                }}
                              >
                                <i className="fas fa-pencil-alt" />
                              </button>
                            </>
                          ) : null}
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
                          <input
                            disabled={props.showOnly}
                            type="text"
                            onChange={e=>setIsoComment(e.target.value)}
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            value={isoComment}
                          />
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

                          <Select
                            className="w-8/12"
                            isDisabled={props.showOnly}
                            searchable={true}
                            placeholder={"Select an option"}
                            options={corList}
                            defaultValue={corColonia}
                            value={corColonia}
                            onChange={setCorColonia}
                            getOptionLabel={(options) => options["cor"]}
                            getOptionValue={(options) => options["idcor"]}
                          />
                          {props.showOnly === false ? (
                            //0cor
                            <>
                              <button
                                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => {
                                  openModal("Cor", "", "cor_col", null);
                                }}
                              >
                                <i className="fas fa-plus"></i>
                              </button>
                              <button
                                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="button"
                                // disabled
                                onClick={() => {
                                  openModal("Cor", corColonia.cor, "cor_col", corColonia.idcor);
                                }}
                              >
                                <i className="fas fa-pencil-alt" />
                              </button>
                            </>
                          ) : null}
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
                          <Select
                            className="w-8/12"
                            isDisabled={props.showOnly}
                            searchable={true}
                            placeholder={"Select an option"}
                            options={texturaList}
                            defaultValue={textura}
                            value={textura}
                            onChange={setTextura}
                            getOptionLabel={(options) => options["textura"]}
                            getOptionValue={(options) => options["idtextura"]}
                          />
                          {props.showOnly === false ? (
                            //0textura
                            <>
                              <button
                                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => {
                                  openModal("Textura", "", "textura", null);
                                }}
                              >
                                <i className="fas fa-plus"></i>
                              </button>
                              <button
                                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="button"
                                // disabled
                                onClick={() => {
                                  openModal("Textura", textura.textura, "textura", textura.idtextura);
                                }}
                              >
                                <i className="fas fa-pencil-alt" />
                              </button>
                            </>
                          ) : null}
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

                          <Select
                            className="w-8/12"
                            isDisabled={props.showOnly}
                            searchable={true}
                            placeholder={"Select an option"}
                            options={bordaList}
                            defaultValue={borda}
                            value={borda}
                            onChange={setBorda}
                            getOptionLabel={(options) => options["borda"]}
                            getOptionValue={(options) => options["idborda"]}
                          />
                          {props.showOnly === false ? (
                            //0borda
                            <>
                              <button
                                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => {
                                  openModal("Borda", "", "borda", null);
                                }}
                              >
                                <i className="fas fa-plus"></i>
                              </button>
                              <button
                                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="button"
                                // disabled
                                onClick={() => {
                                  openModal("Borda", borda.borda, "borda", borda.idborda);
                                }}
                              >
                                <i className="fas fa-pencil-alt" />
                              </button>
                            </>
                          ) : null}
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

                          <Select
                            className="w-8/12"
                            isDisabled={props.showOnly}
                            searchable={true}
                            placeholder={"Select an option"}
                            options={relevoList}
                            defaultValue={relevo}
                            value={relevo}
                            onChange={setRelevo}
                            getOptionLabel={(options) => options["relevo"]}
                            getOptionValue={(options) => options["idrelevo"]}
                          />
                          {props.showOnly === false ? (
                            //0relevo
                            <>
                              <button
                                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => {
                                  openModal("Relevo", "", "relevo", null);
                                }}
                              >
                                <i className="fas fa-plus"></i>
                              </button>
                              <button
                                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="button"
                                // disabled
                                onClick={() => {
                                  openModal("Relevo", relevo.relevo, "relevo", relevo.idrelevo);
                                }}
                              >
                                <i className="fas fa-pencil-alt" />
                              </button>
                            </>
                          ) : null}
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

                          <Select
                            className="w-8/12"
                            isDisabled={props.showOnly}
                            searchable={true}
                            placeholder={"Select an option"}
                            options={exudatoList}
                            defaultValue={exudato}
                            value={exudato}
                            onChange={setExudato}
                            getOptionLabel={(options) => options["exudato"]}
                            getOptionValue={(options) => options["idexudato"]}
                          />
                          {props.showOnly === false ? (
                            //0exudato
                            <>
                              <button
                                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => {
                                  openModal("Exudato", "", "exudato", null);
                                }}
                              >
                                <i className="fas fa-plus"></i>
                              </button>
                              <button
                                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="button"
                                // disabled
                                onClick={() => {
                                  openModal("Exudato", exudato.exudato, "exudato",exudato.idexudato);
                                }}
                              >
                                <i className="fas fa-pencil-alt" />
                              </button>
                            </>
                          ) : null}
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

                          <Select
                            className="w-8/12"
                            isDisabled={props.showOnly}
                            searchable={true}
                            placeholder={"Select an option"}
                            options={corList}
                            defaultValue={corExu}
                            value={corExu}
                            onChange={setCorExu}
                            getOptionLabel={(options) => options["cor"]}
                            getOptionValue={(options) => options["idcor"]}
                          />
                          {props.showOnly === false ? (
                            //0cor
                            <>
                              <button
                                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => {
                                  openModal("Cor", "", "cor_exu", null);
                                }}
                              >
                                <i className="fas fa-plus"></i>
                              </button>
                              <button
                                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="button"
                                // disabled
                                onClick={() => {
                                  openModal("Cor", corExu.cor, "cor_exu", corExu.idcor);
                                }}
                              >
                                <i className="fas fa-pencil-alt" />
                              </button>
                            </>
                          ) : null}
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

                          <Select
                            className="w-8/12"
                            isDisabled={props.showOnly}
                            searchable={true}
                            placeholder={"Select an option"}
                            options={pigmentoList}
                            defaultValue={pigmento}
                            value={pigmento}
                            onChange={setPigmento}
                            getOptionLabel={(options) => options["pigmento"]}
                            getOptionValue={(options) => options["idpigmento"]}
                          />
                          {props.showOnly === false ? (
                            //0pigmento
                            <>
                              <button
                                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => {
                                  openModal("Pigmento", "", "pigmento", null);
                                }}
                              >
                                <i className="fas fa-plus"></i>
                              </button>
                              <button
                                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="button"
                                // disabled
                                onClick={() => {
                                  openModal("Pigmento", pigmento.pigmento, "pigmento", pigmento.idpigmento);
                                }}
                              >
                                <i className="fas fa-pencil-alt" />
                              </button>
                            </>
                          ) : null}
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

                          <Select
                            className="w-8/12"
                            isDisabled={props.showOnly}
                            searchable={true}
                            placeholder={"Select an option"}
                            options={corList}
                            defaultValue={corPig}
                            value={corPig}
                            onChange={setCorPig}
                            getOptionLabel={(options) => options["cor"]}
                            getOptionValue={(options) => options["idcor"]}
                          />
                          {props.showOnly === false ? (
                            //0cor
                            <>
                              <button
                                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => {
                                  openModal("Cor", "", "cor_pig", null);
                                }}
                              >
                                <i className="fas fa-plus"></i>
                              </button>
                              <button
                                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="button"
                                // disabled
                                onClick={() => {
                                  openModal("Cor", corPig.cor, "cor_pig", corPig.idcor);
                                }}
                              >
                                <i className="fas fa-pencil-alt" />
                              </button>
                            </>
                          ) : null}
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
                          <input
                            disabled={props.showOnly}
                            type="number"
                            onChange={e=>setTempCrescimento(e.target.value)}
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            value={tempCrescimento}
                          />
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

                          <Select
                            className="w-8/12"
                            isDisabled={props.showOnly}
                            searchable={true}
                            placeholder={"Select an option"}
                            options={referenciaList}
                            defaultValue={refTemp}
                            value={refTemp}
                            isMulti
                            onChange={setRefTemp}
                            getOptionLabel={(options) => options["referencia"]}
                            getOptionValue={(options) => options["idreferencia"]}
                          />
                          {props.showOnly === false ? (
                            //0referencia
                            <>
                              <button
                                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => {
                                  openModal("Referência para temperatura", "", "referenciaTemp");
                                }}
                              >
                                <i className="fas fa-plus"></i>
                              </button>
                              {/* <button
                                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="button"
                                disabled
                                onClick={() => {
                                  openModal("Referência para temperatura", "", "referenciaTemp");
                                }}
                              >
                                <i className="fas fa-pencil-alt" />
                              </button> */}
                            </>
                          ) : null}
                        </div>
                      </div>
                      <div className="w-full lg:w-4/12 px-4">
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Caracteristicas micromorfológicas
                          </label>

                          <Select
                            className="w-8/12"
                            isDisabled={props.showOnly}
                            searchable={true}
                            placeholder={"Select an option"}
                            options={caracMicroList}
                            defaultValue={caracMicro}
                            value={caracMicro}
                            isMulti
                            onChange={setCaracMicro}
                            getOptionLabel={(options) => options["carac_micromorfologica"]}
                            getOptionValue={(options) => options["idcarac_micromorfologica"]}
                          />
                          {props.showOnly === false ? (
                            //0caracMicro
                            <>
                              <button
                                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => {
                                  openModal(
                                    "Caracteristicas micromorfológicas", "", "carac_micromorfologica");
                                }}
                              >
                                <i className="fas fa-plus"></i>
                              </button>
                              {/* <button
                                className="bg-lightBlue-300 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="button"
                                disabled
                                onClick={() => {
                                  openModal(
                                    "Caracteristicas micromorfológicas", "", "carac_micromorfologica");
                                }}
                              >
                                <i className="fas fa-pencil-alt" />
                              </button> */}
                            </>
                          ) : null}
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
                          <MultipleDropzone setFileList={setImagemMacro}/>
                          {
                            imgMacro.map((img, index) => {
                                return <img src={baseurlImg+img} alt="img" className="w-full h-full" />
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
                          <MultipleDropzone setFileList={setImagemMicro}/>
                          {
                            imgMicro.map((img, index) => {
                                return <img src={baseurlImg+img} alt="img" className="w-full h-full" />
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

                          <Select
                            className="w-8/12"
                            isDisabled={props.showOnly}
                            searchable={true}
                            placeholder={"Select an option"}
                            options={labList}
                            defaultValue={laboratorio}
                            value={laboratorio}
                            onChange={setLaboratorio}
                            getOptionLabel={(options) => options["laboratorio"]}
                            getOptionValue={(options) => options["idlaboratorio"]
                            }
                          />
                          {props.showOnly === false ? (
                            //0laboratorio
                            <>
                              <button
                                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => {
                                  openModal("Laboratório", "", "laboratorio",null);
                                }}
                              >
                                <i className="fas fa-plus"></i>
                              </button>
                              <button
                                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="button"
                                // disabled
                                onClick={() => {
                                  openModal("Laboratório", laboratorio.laboratorio, "laboratorio", laboratorio.idlaboratorio);
                                }}
                              >
                                <i className="fas fa-pencil-alt" />
                              </button>
                            </>
                          ) : null}
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
                          <input
                            disabled={props.showOnly}
                            type="date"
                            onChange={e=>setDataMol(e.target.value)}
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            value={dataMol}
                          />
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
                          <input
                            disabled={props.showOnly}
                            type="text"
                            onChange={e=>setMolCod(e.target.value)}
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            value={molCod}
                          />
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
                          <input
                            disabled={props.showOnly}
                            type="text"
                            onChange={e=>setMolSeq(e.target.value)}
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            value={molSeq}
                          />
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
                          <input
                            disabled={props.showOnly}
                            type="text"
                            onChange={e=>setMolMeta(e.target.value)}
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            value={molMeta}
                          />
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
                          <MultipleDropzonePDF setFileList={setAnexos}/>
                          {
                            anexos.map((anx, index) => {
                                return <a href={baseurlImg+anx} target="blank" alt="anx" className="w-full h-full"><span>{baseurlImg+anx}</span></a>
                            })
                          }
                          {
                            tempAnexos.map((anx, index) => {
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

                          <Select
                            className="w-8/12"
                            isDisabled={props.showOnly}
                            searchable={true}
                            placeholder={"Select an option"}
                            options={sub_colecaoList}
                            defaultValue={sub_colecao}
                            value={sub_colecao}
                            onChange={setSub_colecao}
                            getOptionLabel={(options) => options["sub_colecao"]}
                            getOptionValue={(options) => options["idsub_colecao"]}
                          />
                          {props.showOnly === false ? (
                            //0sub_colecao
                            <>
                              <button
                                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => {
                                  openModal("Sub-Coleção", "", "sub_colecao",null);
                                }}
                              >
                                <i className="fas fa-plus"></i>
                              </button>
                              <button
                                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="button"
                                // disabled
                                onClick={() => {
                                  openModal("Sub-Coleção", sub_colecao.sub_colecao, "sub_colecao", sub_colecao.idsub_colecao);
                                }}
                              >
                                <i className="fas fa-pencil-alt" />
                              </button>
                            </>
                          ) : null}
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

                          <Select
                            className="w-8/12"
                            isDisabled={props.showOnly}
                            searchable={true}
                            placeholder={"Select an option"}
                            options={grupo_pesquisaList}
                            defaultValue={grupo_pesquisa}
                            value={grupo_pesquisa}
                            onChange={setGrupoPesquisa}
                            getOptionLabel={(options) => options["grupo"]}
                            getOptionValue={(options) => options["idgrupo_pesquisa"]}
                          />
                          {props.showOnly === false ? (
                            //0grupo_pesquisa

                            <>
                              <button
                                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => {
                                  openModal("Grupo de pesquisa", "", "grupo_pesquisa",null);
                                }}
                              >
                                <i className="fas fa-plus"></i>
                              </button>
                              <button
                                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="button"
                                // disabled
                                onClick={() => {
                                  openModal("Grupo de pesquisa", grupo_pesquisa.grupo, "grupo_pesquisa", grupo_pesquisa.idgrupo_pesquisa);
                                }}
                              >
                                <i className="fas fa-pencil-alt" />
                              </button>
                            </>
                          ) : null}
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
                          <Select
                            className="w-8/12"
                            isDisabled={props.showOnly}
                            searchable={true}
                            placeholder={"Select an option"}
                            options={unidadeList}
                            defaultValue={unidade}
                            value={unidade}
                            onChange={setUnidade}
                            getOptionLabel={(options) => options["unidade"]}
                            getOptionValue={(options) => options["idunidade"]}
                          />
                          {props.showOnly === false ? (
                            //0unidade
                            <>
                              <button
                                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => {
                                  openModal("Unidade", "", "unidade", null);
                                }}
                              >
                                <i className="fas fa-plus"></i>
                              </button>
                              <button
                                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="button"
                                // disabled
                                onClick={() => {
                                  openModal("Unidade", unidade.unidade, "unidade", unidade.idunidade);
                                }}
                              >
                                <i className="fas fa-pencil-alt" />
                              </button>
                            </>
                          ) : null}
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
                          <Select
                            className="w-8/12"
                            isDisabled={props.showOnly}
                            searchable={true}
                            placeholder={"Select an option"}
                            options={armarioList}
                            defaultValue={armario}
                            value={armario}
                            onChange={setArmario}
                            getOptionLabel={(options) => options["armario"]}
                            getOptionValue={(options) => options["idarmario"]}
                          />
                          {props.showOnly === false ? (
                            //0armario
                            <>
                              <button
                                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => {
                                  openModal("Armário", "", "armario", null);
                                }}
                              >
                                <i className="fas fa-plus"></i>
                              </button>
                              <button
                                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="button"
                                // disabled
                                onClick={() => {
                                  openModal("Armário", armario.armario, "armario", armario.idarmario);
                                }}
                              >
                                <i className="fas fa-pencil-alt" />
                              </button>
                            </>
                          ) : null}
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
                          <Select
                            className="w-8/12"
                            isDisabled={props.showOnly}
                            searchable={true}
                            placeholder={"Select an option"}
                            options={prateleiraList}
                            defaultValue={prateleira}
                            value={prateleira}
                            onChange={setPrateleira}
                            getOptionLabel={(options) => options["prateleira"]}
                            getOptionValue={(options) =>
                              options["idprateleira"]
                            }
                          />
                          {props.showOnly === false ? (
                            //0prateleira
                            <>
                              <button
                                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => {
                                  openModal("Prateleira", "", "prateleira", null);
                                }}
                              >
                                <i className="fas fa-plus"></i>
                              </button>
                              <button
                                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="button"
                                // disabled
                                onClick={() => {
                                  openModal("Prateleira", prateleira.prateleira, "prateleira", prateleira.idprateleira);
                                }}
                              >
                                <i className="fas fa-pencil-alt" />
                              </button>
                            </>
                          ) : null}
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
                          <Select
                            className="w-8/12"
                            isDisabled={props.showOnly}
                            searchable={true}
                            placeholder={"Select an option"}
                            options={loteList}
                            defaultValue={lote}
                            value={lote}
                            onChange={setLote}
                            getOptionLabel={(options) => options["lote"]}
                            getOptionValue={(options) => options["idlote"]}
                          />
                          {props.showOnly === false ? (
                            //0lote
                            <>
                              <button
                                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => {
                                  openModal("Lote", "", "lote",null);
                                }}
                              >
                                <i className="fas fa-plus"></i>
                              </button>
                              <button
                                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="button"
                                // disabled
                                onClick={() => {
                                  openModal("Lote", lote.lote, "lote", lote.idlote);
                                }}
                              >
                                <i className="fas fa-pencil-alt" />
                              </button>
                            </>
                          ) : null}
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
                          <Select
                            className="w-8/12"
                            isDisabled={props.showOnly}
                            searchable={true}
                            placeholder={"Select an option"}
                            options={posicaoList}
                            defaultValue={posicao}
                            value={posicao}
                            onChange={setPosicao}
                            getOptionLabel={(options) => options["posicao"]}
                            getOptionValue={(options) => options["idposicao"]}
                          />
                          {props.showOnly === false ? (
                            //0posicao
                            <>
                              <button
                                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => {
                                  openModal("Posição", "", "posicao", null);
                                }}
                              >
                                <i className="fas fa-plus"></i>
                              </button>
                              <button
                                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="button"
                                // disabled
                                onClick={() => {
                                  openModal("Posição", posicao.posicao, "posicao", posicao.idposicao);
                                }}
                              >
                                <i className="fas fa-pencil-alt" />
                              </button>
                            </>
                          ) : null}
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
                          <input
                            disabled={props.showOnly}
                            type="date"
                            onChange={e=>setDataPrv(e.target.value)}
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            value={dataPrv}
                          />
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
                          <Select
                            className="w-8/12"
                            isDisabled={props.showOnly}
                            searchable={true}
                            placeholder={"Select an option"}
                            options={pesquisadorList}
                            defaultValue={pesqPres}
                            value={pesqPres}
                            onChange={setPesqPres}
                            getOptionLabel={(options) => options["nome"]+" - "+options["email"]+" - "+options["instituicao"]}
                            getOptionValue={(options) => options["idpesquisador"]}
                          />
                          {props.showOnly === false ? (
                            //0pesquisador
                            <>
                              <button
                                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => {
                                  openPersonModal(["Nome","Email","Instituição"], ["", "", ""], "pesquisadorPres", null);
                                }}
                              >
                                <i className="fas fa-plus"></i>
                              </button>
                              <button
                                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="button"
                                 // disabled
                                 onClick={() => {
                                  openPersonModal(["Nome","Email","Instituição"], [pesqPres.nome, pesqPres.email, pesqPres.instituicao], "pesquisadorPres", pesqPres.idpesquisador);
                                }}
                              >
                                <i className="fas fa-pencil-alt" />
                              </button>
                            </>
                          ) : null}
                        </div>
                      </div>

                      <div className="w-full lg:w-6/12 px-4">
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Método de Preservação
                          </label>

                          <Select
                            className="w-8/12"
                            isDisabled={props.showOnly}
                            searchable={true}
                            placeholder={"Select an option"}
                            options={metodo_preservacaoList}
                            defaultValue={metodo_preservacao}
                            value={metodo_preservacao}
                            isMulti
                            onChange={setMetodoPreservacao}
                            getOptionLabel={(options) => options["metodo"]}
                            getOptionValue={(options) => options["idmetodo_preservacao"]}
                          />
                          {props.showOnly === false ? (
                            //0metodo_preservacao
                            <>
                              <button
                                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => {
                                  openModal("Método de Preservação", "", "metodo_preservacao");
                                }}
                              >
                                <i className="fas fa-plus"></i>
                              </button>
                              {/* <button
                                className="bg-lightBlue-300 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="button"
                                disabled
                                onClick={() => {
                                  openModal("Método de Preservação", "", "metodo_preservacao");
                                }}
                              >
                                <i className="fas fa-pencil-alt" />
                              </button> */}
                            </>
                          ) : null}
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
                          <input
                            disabled={props.showOnly}
                            type="text"
                            onChange={e=>setComments(e.target.value)}
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            value={comments}
                          />
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
                          <Select
                            className="w-8/12"
                            isDisabled={props.showOnly}
                            searchable={true}
                            placeholder={"Select an option"}
                            options={doacaoList}
                            defaultValue={doacao}
                            value={doacao}
                            onChange={setDoacao}
                            getOptionLabel={(options) => options["doacao"]}
                            getOptionValue={(options) => options["iddoacao"]}
                          />
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
                          
                          <MultipleDropzone  setFileList={setImagemRepiq}/>
                          {
                            imgRepiq.map((img, index) => {
                                return <img src={baseurlImg+img} alt="img" className="w-full h-full" />
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

                          <Select
                            className="w-8/12"
                            isDisabled={props.showOnly}
                            searchable={true}
                            placeholder={"Select an option"}
                            options={referenciaList}
                            defaultValue={refAdd}
                            value={refAdd}
                            isMulti
                            onChange={setRefAdd}
                            getOptionLabel={(options) => options["referencia"]}
                            getOptionValue={(options) =>
                              options["idreferencia"]
                            }
                          />
                          {props.showOnly === false ? (
                            //0referencia
                            <>
                              <button
                                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => {
                                  openModal("Referências adicionais", "", "referenciaAdd");
                                }}
                              >
                                <i className="fas fa-plus"></i>
                              </button>
                              {/* <button
                                className="bg-lightBlue-300 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="button"
                                disabled
                                onClick={() => {
                                  openModal("Referências adicionais", "", "referenciaAdd");
                                }}
                              >
                                <i className="fas fa-pencil-alt" />
                              </button> */}
                            </>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {props.showOnly === false && props?.isRepique === false ? (
            <div className="text-center flex justify-end">
              <Link to={"/admin/m/" + props.returnto}>
                <button
                  className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                  type="button"
                >
                  Cancelar
                </button>
              </Link>
                <button
                  className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={(e)=>{saveMicro(e)}}
                >
                  Salvar
                </button>
            </div>
          ) : null}
          {props.showOnly === false && props.isRepique === true ? (
            <div className="text-center flex justify-end">
              <Link to="/admin/m/details">
                <button
                  className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                  type="button"
                >
                  Cancelar
                </button>
              </Link>
              <button
                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                type="button"
                onClick={(e)=>{saveRepique(e,true)}}
              >
                Próximo
              </button>
              <Link to="/admin/m/details">
                <button
                  className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={(e)=>{saveRepique(e,false)}}
                >
                  Salvar
                </button>
              </Link>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}
