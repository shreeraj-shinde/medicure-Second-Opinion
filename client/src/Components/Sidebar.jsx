import React, { useState } from "react";
import { animate, motion } from "framer-motion";
import Logo from "../assets/_M.svg";
import { ReactSVG } from "react-svg";
import { NavLink } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { FaChevronLeft, FaDiagnoses } from "react-icons/fa";
import { VscGraph } from "react-icons/vsc";
import { AnimatePresence } from "framer-motion";
import { CiPill } from "react-icons/ci";
const Sidebar = () => {
  const [isOpen, setisOpen] = useState(false);
  const toggle = () => setisOpen(!isOpen);

  const linktextAnimation = {
    hidden: {
      opacity: 0,
      width: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.2,
      },
    },
  };
  const routes = [
    {
      icon: <IoHome />,
      path: "/v1/dashboard",
      name: "Home",
    },

    {
      icon: <FaDiagnoses />,
      path: "/v1/diagnose",
      name: "Diagnose",
    },
    {
      icon: <VscGraph />,
      path: "/v1/results",
      name: "Results",
    },
    {
      icon: <CiPill />,
      path: "/v1/medicine_prescribtion",
      name: "Prescribe ",
    },
  ];
  return (
    <>
      <motion.div
        animate={isOpen ? { width: "400px" } : { width: "70px" }}
        className="sidebar-wrapper"
      >
        <div className="icon-wrapper">
          <motion.div
            className="icon-circle"
            animate={
              isOpen
                ? { height: "125px", width: "125px" }
                : { height: "40px", width: "40px" }
            }
          >
            <ReactSVG src={Logo} />
          </motion.div>
        </div>
        <div className="menu-wrapper">
          <div className="menu-link">
            {routes.map((route, index) => {
              return (
                <NavLink to={route.path} key={index}>
                  <div className="link-icon">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={linktextAnimation}
                        initial="hidden"
                        animate="show"
                        exit={{
                          width: 0,
                          opacity: 0,
                          transition: {
                            duration: 0.2,
                          },
                        }}
                        className="link-text"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}
          </div>
        </div>

        <motion.div
          className="collapse-handler"
          animate={isOpen ? { rotate: "0deg" } : { rotate: "180deg" }}
        >
          <FaChevronLeft
            onClick={toggle}
            animate={{ transition: { duration: 0.3 } }}
          />
        </motion.div>
      </motion.div>
    </>
  );
};

export default Sidebar;
