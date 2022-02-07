import React from "react";
import CardStats from "components/Cards/CardStats.js";

// components

import CardDetail from "components/Cards/CardDetailMicro"
import CardTableMicro from "components/Cards/CardTableMicroDetails"
import CardMicroOrigin from "components/Cards/CardMicroOrigin"
import CardMicroArt from "components/Cards/CardMicroArt"
import CardMicroAuth from "components/Cards/CardMicroAuthentication";
export default function Details() {
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
          <CardDetail/>
        </div>
        <div className="w-full xl:w-4/12 px-4">
          {/* <CardBarChart /> */}
          <CardMicroOrigin />
          <CardMicroAuth />
          <CardMicroArt />
        </div>
      </div>
      <div className="flex flex-wrap mt-4">
        <CardTableMicro />
      </div>
    </>
  );
}
