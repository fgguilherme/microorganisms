import React from "react";
import { useLocation } from 'react-router-dom'

// components


import CardRepique from "components/Cards/CardRepique"
import CardDetailMicro from "components/Cards/CardDetailMicro";
export default function Repique() {
  const location = useLocation()
  // const { from } = location.state
  console.log(location.item)
  if(location.item?.microorg === undefined){
    window.location.href = "/admin/m/tables"
  }
  const baseurl = window.location.origin.toString() + "/api/"
  return (
    <>
      {/* Card stats */}
      <div className="flex flex-wrap">
        <div className="w-full  mb-12  px-4">
          
        </div>
        <div className="w-full  mb-12  px-4">
          <CardRepique microorg={location.item?.microorg}/>
          <CardDetailMicro microorg={location.item?.microorg} hideActionbar={true}/>
        </div>
      </div>
    </>
  );
}
