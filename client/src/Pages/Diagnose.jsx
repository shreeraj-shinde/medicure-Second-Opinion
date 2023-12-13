import React, { useEffect, useState } from "react";
import Layout from "../Layouts/Layouts";
import { IoIosArrowDropright } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import Select from "react-select";
import axios from "axios";
const options = [
  { value: "shivering", label: "Shivering" },
  { value: "diarrhoea", label: "Diarrhoea" },
  { value: "vomiting", label: "Vomiting" },
  { value: "muscle_pain", label: "Muscle pain" },
  { value: "headache", label: "Headache" },
];

const Diagnose = () => {
  const [val, setVal] = useState([[], []]);

  const handleDelete = (i) => {
    const deleteVal = [...val];
    deleteVal.splice(i, 1);
    setVal(deleteVal);
  };

  const addSymptom = () => {
    const addSym = [...val, []];
    setVal(addSym);
  };

  const handleChange = (e, i) => {
    const inputData = [...val];
    inputData[i] = e.value;
    setVal(inputData);
  };

  const handleProceed = async () => {
    const res = await axios.post("http://127.0.0.1:5000/diagnose", val);
    console.log(res);
  };

  return (
    <>
      <div className="diagnose-page-wrapper">
        <h1 className="diagnose-heading">
          Lets Diagnose <span>🩺</span>
        </h1>

        <div className="symtoms-select-wrapper">
          <h3>Enter the Symptoms Below to Proceed : </h3>
          {val.map((sym, i) => {
            return (
              <div className="symptom-selector" key={i}>
                <div className="symptom-inputbar-wrapper">
                  <Select
                    options={options}
                    isLoading={true}
                    placeholder={`Input Symptom ${i + 1}`}
                    className="inputbar"
                    onChange={(e) => handleChange(e, i)}
                  ></Select>
                </div>

                <div className="confirm-delete-button">
                  {i > 1 ? (
                    <button
                      className="delete-button"
                      onClick={() => handleDelete(i)}
                    >
                      Delete
                    </button>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="add-symptom-proceed-buttons">
          {val.length <= 4 ? (
            <button onClick={addSymptom}>
              <FaPlus />
              &nbsp;Add Symptom
            </button>
          ) : (
            ""
          )}
          <button onClick={handleProceed}>Proceed</button>
        </div>

        <div className="steps-wrapper"></div>
      </div>
    </>
  );
};

export default Layout(Diagnose);
