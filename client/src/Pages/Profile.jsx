import React from "react";
import Layout from "../Layouts/Layouts";
import { IoIosLogOut } from "react-icons/io";

const Profile = () => {
  return (
    <>
      <div className="component-wrapper">
        <div className="greetings-bars-wrapper">
          <h1>Hello, UserName</h1>
          <button>
            <IoIosLogOut />
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default Layout(Profile);
