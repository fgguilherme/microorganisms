import React from "react";
import { createPopper } from "@popperjs/core";
import { Link } from "react-router-dom";
import authService from "helpers/auth.service";

const UserDropdown = () => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  const user = authService.getCurrentUser();
  if(user == null){
    window.location.href = "/auth";
  }

  function logout(){
    authService.logout()
    window.location.href = "/";
  }

  return (
    <>
      <a
        className="text-blueGray-800 block"
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        <div className="items-center flex">
          <span className="w-12 h-12 text-sm text-black bg-blueGray-200 inline-flex items-center justify-center rounded-full">
            {user.email.charAt(0).toUpperCase()}
          </span>
        </div>
      </a>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? "block " : "hidden ") +
          "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
        }
      >
        {/* <a
          href="#pablo"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          onClick={(e) => e.preventDefault()}
        >
          Configurar Conta
        </a> */}
        <div className="h-0 my-2 border border-solid border-blueGray-100" />
        <p onClick={logout}
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
        >
          Sair
        </p>
      </div>
    </>
  );
};

export default UserDropdown;
