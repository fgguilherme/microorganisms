import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom'
import CardStats from "components/Cards/CardStats.js";
import axios from "axios";

// components

import CardTableMicro from "components/Cards/CardTableMicroDetails"
import CardMicroOrigin from "components/Cards/CardMicroOrigin"
import CardMicroAuth from "components/Cards/CardMicroAuthentication";
import CardDetailMicro from "components/Cards/CardDetailMicro";
export default function Details() {
  const location = useLocation()
  // const { from } = location.state
  if(location.item?.microorganismo_idmicroorganismo === undefined){
    window.location.href = "/admin/m/tables"
  }
  const baseurl = window.location.origin.toString() + "/api/"
  const [variedadeContent, setVariedadeContent] = useState({});
  useEffect(() => {
    if (variedadeContent.length === 0) {
      axios.get(baseurl+"variedade/"+location.item?.microorganismo_idmicroorganismo.microorganismo_idmicroorganismo_microorganismo.variedade_idvariedade_variedade.idvariedade)
        .then(response => {
          console.log(response)
          // setVariedadeContent(response.data)
          // console.log(variedadeContent)
        }, error => {
          console.log(error);
        });
    }
  }, [])
  return (
    <>
      {/* Card stats */}
      <div className="flex flex-wrap">
        {/* <div className="w-full lg:w-6/12 xl:w-4/12 px-4">
          <CardStats
            statSubtitle="REPIQUES"
            statTitle="2,356"
            statArrow="down"
            statPercent="3.48"
            statPercentColor="text-red-500"
            statDescripiron="Na última semana"
            statIconName="fas fa-chart-pie"
            statIconColor="bg-orange-500"
          />
        </div>
        <div className="w-full lg:w-6/12 xl:w-4/12 px-4">
          <CardStats
            statSubtitle="DOAÇÕES"
            statTitle="924"
            statArrow="down"
            statPercent="1.10"
            statPercentColor="text-orange-500"
            statDescripiron="Desde ontem"
            statIconName="fas fa-users"
            statIconColor="bg-pink-500"
          />
        </div> */}
        <div className="w-full  mb-12  px-4">
          
        </div>
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardDetailMicro microorg={location.item?.microorganismo_idmicroorganismo}/>
          {/* <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
            <div className="rounded-t bg-white mb-0 px-6 py-6">
              <div className="text-center flex justify-between">
                <h6 className="text-blueGray-700 text-xl font-bold">Detalhes</h6>
              </div>
            </div>
              <MicroContentDetail microorg={location.item?.microorganismo_idmicroorganismo}/>
          </div> */}
        </div>
        <div className="w-full xl:w-4/12 px-4">
          {/* <CardBarChart /> */}
          <CardMicroOrigin microorg={location.item?.microorganismo_idmicroorganismo}/>
          <CardMicroAuth repique={location.item?.microorganismo_idmicroorganismo?.idrepique}/>
          {/* <CardMicroArt /> */}
        </div>
      </div>
      <div className="flex flex-wrap mt-4">
        <CardTableMicro  microorgid={location.item?.microorganismo_idmicroorganismo.microorganismo_idmicroorganismo} microorg={location.item?.microorganismo_idmicroorganismo}/>
      </div>
    </>
  );
}
