import React from "react";
import { useLocation } from 'react-router-dom'
import axios from "axios";

// components

import CardNewMicro from "components/Cards/CardEditMicro"
export default function EditMicro() {
  const location = useLocation()
  console.log(location)
  // const { from } = location.state
  // if(location.item?.microorganismo_idmicroorganismo === undefined){
  //   window.location.href = "/admin/m/tables"
  // }
  return (
    <>
      {/* Card stats */}
      <div className="flex flex-wrap">
        <div className="w-full  mb-12  px-4">
          
        </div>
        <div className="w-full  mb-12  px-4">
          <CardNewMicro micro={location.item?.microorg}/>
        </div>
      </div>
    </>
  );
}
