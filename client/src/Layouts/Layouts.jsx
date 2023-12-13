import React from "react";
import "./Layouts.css";
import Sidebar from "../Components/Sidebar";
const Layout =
  (Component) =>
  ({ ...props }) => {
    return (
      <>
        <div className="main-wrapper">
          <div className="inner-wrapper">
            <div className="sidebar-component-wrapper">
              <Sidebar />
              <div className="component-wrapper">
                {<Component {...props} />}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

export default Layout;
