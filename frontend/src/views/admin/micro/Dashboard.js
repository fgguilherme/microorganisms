import React from "react";
import CardStats from "components/Cards/CardStats.js";

// components

import CardLineChart from "components/Cards/CardLineChart.js";
import CardBarChart from "components/Cards/CardBarChart.js";
import CardPageVisits from "components/Cards/CardPageVisits.js";
import CardSocialTraffic from "components/Cards/CardSocialTraffic.js";

export default function Dashboard() {
  return (
    <>
      {/* Card stats */}
      <div className="flex flex-wrap">
        <div className="w-full lg:w-6/12 xl:w-4/12 px-4">
          <CardStats
            statSubtitle="FUNGOS"
            statTitle="350,897"
            statArrow="up"
            statPercent="3.48"
            statPercentColor="text-emerald-500"
            statDescripiron="No último mês"
            statIconName="far fa-chart-bar"
            statIconColor="bg-red-500"
          />
        </div>
        <div className="w-full lg:w-6/12 xl:w-4/12 px-4">
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
        </div>
        <div className="w-full  mb-12  px-4">
          
        </div>
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardLineChart />
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <CardBarChart />
        </div>
      </div>
      <div className="flex flex-wrap mt-4">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardPageVisits />
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <CardSocialTraffic />
        </div>
      </div>
    </>
  );
}
