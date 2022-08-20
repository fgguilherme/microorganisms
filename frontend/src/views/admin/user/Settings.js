import React from "react";
import { useLocation } from 'react-router-dom'

// components

import CardSettings from "components/Cards/CardUserDetail";
import CardProfile from "components/Cards/CardProfile.js";

export default function Settings(props) {
  const location = useLocation()
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full px-4">
          <CardSettings user={location.user}/>
        </div>
        {/* <div className="w-full lg:w-4/12 px-4">
          <CardProfile />
        </div> */}
      </div>
    </>
  );
}
