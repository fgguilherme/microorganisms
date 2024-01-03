import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";

// views

import SettingsMi from "views/admin/micro/Settings.js";
import TablesMi from "views/admin/micro/Tables.js";
import DetailsMi from "views/admin/micro/Details";
import Repique from "views/admin/micro/Repique";
import AddNew from "views/admin/micro/AddNew";
import EditMicro from "views/admin/micro/Edit";
import Users from "views/admin/user/Tables";
import User from "views/admin/user/Settings";

export default function Admin() {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        <div className="relative bg-lightBlue-600 md:pt-32 pb-32 pt-12">
          <div className="px-4 md:px-10 mx-auto w-full">
          </div>
        </div>
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <Switch>
            <Route path="/admin/m/details" exact component={DetailsMi} />
            <Route path="/admin/m/settings" exact component={SettingsMi} />
            <Route path="/admin/m/tables" exact component={TablesMi} />
            <Route path="/admin/m/repique" exact component={Repique} />
            <Route path="/admin/m/new" exact component={AddNew} />
            <Route path="/admin/m/edit" exact component={EditMicro} />
            <Route path="/admin/users" exact component={Users} />
            <Route path="/admin/user" exact component={User} />
            <Redirect from="/admin" to="/admin/m/tables" />
          </Switch>
        </div>
      </div>
    </>
  );
}
