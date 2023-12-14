import React, { useEffect, useState } from "react";
import Layout from "../Layouts/Layouts";
import { IoIosArrowDropright } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import Select from "react-select";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const options = [
  { value: "shivering", label: "Shivering" },
  { value: "diarrhoea", label: "Diarrhoea" },
  { value: "vomiting", label: "Vomiting" },
  { value: "muscle_pain", label: "Muscle pain" },
  { value: "headache", label: "Headache" },
  { value: "skin_rash", lable: "Skin Rash" },
  { value: "nodal_skin_eruptions", label: "Nodal Skin Eruptions" },
  { value: "continuous_sneezing", label: "Continuous sneezing" },
  { value: "chills", label: "Chills" },
  { value: "joint_pain", label: "Joint Pain" },
  { value: "stomach_pain", label: "Stomach Pain" },
  { value: "acidity", label: "Acidity" },
  { value: "ulcers_on_tongue", label: "Ulcers on tongue" },
  { value: "muscle_wasting", label: "Muscle Wasting" },
  { value: "burning_micturition", label: "Burning Micturition" },
  { value: "spotting_ urination", label: "Spotting Urination" },
  { value: "fatigue", label: "Fatigue" },
  { value: "weight_gain", label: "Weigth Gain" },
  { value: "anxiety", label: "Anxiety" },
  { value: "cold_hands_and_feets", label: "Cold Hands and Feets" },
  { value: "mood_swings", label: "Mood Swings" },
  { value: "weigth_loss", label: "Weight Loss" },
  { value: "restlessness", label: "Restlessness" },
  { value: "lethargy", label: "Lethargy" },
  { value: "patches_in_throat", label: "Patches in throat" },
  { value: "irregular_sugar_level", label: "Irregular sugar level" },
  { value: "cough", label: "Cough" },
  { value: "high_fever", label: "High fever" },
  { value: "sunken_eyes", label: "Sunken Eyes" },
  { value: "breathlessness", label: "Breathlessness" },
  { value: "sweating", label: "Sweating" },
  { value: "dehydration", label: "Dehydration" },
  { value: "indigestion", label: "Indigestion" },
  { value: "yellowish_skin", label: "Yellowish_skin" },
  { value: "dark_urine", label: "Dark Urine" },
  { value: "nausea", label: "Nausea" },
  { value: "loss_of_appetite", label: "Loss of appetite" },
  { value: "pain_behind_the_eyes", label: "Pain behind the eyes" },
  { value: "back_pain", label: "Back Pain" },
  { value: "constipation", label: "Constipation" },
  { value: "abdominal_pain", label: "Abdominal pain" },
  { value: "constipation", label: "Constipation" },
  { value: "mild_fever", label: "Mild Fever" },
  { value: "yellow_urine", label: "Yellow Urine" },
  { value: "yellowing_of_eyes", label: "Yellowing of eyes" },
  { value: "acute_liver_failure", label: "Acute Liver Failure" },
  { value: "fluid_overload", label: "Fluid Overload" },
  { value: "swelling_of_stomach", label: "Swelling of stomach" },
  { value: "swelled_lymph_nodes", label: "Swelled lymph nodes" },
  { value: "malaise", label: "Malaise" },
  {
    value: "blurred_and_distorted_vision",
    label: "Blurred and distorted vision",
  },
  { value: "phlegm", label: "Phlegm " },
  { value: "throat_irritation", label: "throat_irritation" },
  { value: "redness_of_eyes", label: "Redness_of_eyes" },
  { value: "redness_of_eyes", label: "Redness_of_eyes" },
  { value: "sinus_pressure", label: "Sinus pressure" },
];

"runny_nose",
  "congestion",
  "chest_pain",
  "weakness_in_limbs",
  "fast_heart_rate",
  "pain_during_bowel_movements",
  "pain_in_anal_region",
  "bloody_stool",
  "irritation_in_anus",
  "neck_pain",
  "dizziness",
  "cramps",
  "bruising",
  "obesity",
  "swollen_legs",
  "swollen_blood_vessels",
  "puffy_face_and_eyes",
  "enlarged_thyroid",
  "brittle_nails",
  "swollen_extremeties",
  "excessive_hunger",
  "extra_marital_contacts",
  "drying_and_tingling_lips",
  "slurred_speech",
  "knee_pain",
  "hip_joint_pain",
  "muscle_weakness",
  "stiff_neck",
  "swelling_joints",
  "movement_stiffness",
  "spinning_movements",
  "loss_of_balance",
  "unsteadiness",
  "weakness_of_one_body_side",
  "loss_of_smell",
  "bladder_discomfort",
  "foul_smell_of urine",
  "continuous_feel_of_urine",
  "passage_of_gases",
  "internal_itching",
  "toxic_look_(typhos)",
  "depression",
  "irritability",
  "muscle_pain",
  "altered_sensorium",
  "red_spots_over_body",
  "belly_pain",
  "abnormal_menstruation",
  "dischromic _patches",
  "watering_from_eyes",
  "increased_appetite",
  "polyuria",
  "family_history",
  "mucoid_sputum",
  "rusty_sputum",
  "lack_of_concentration",
  "visual_disturbances",
  "receiving_blood_transfusion",
  "receiving_unsterile_injections",
  "coma",
  "stomach_bleeding",
  "distention_of_abdomen",
  "history_of_alcohol_consumption",
  "fluid_overload",
  "blood_in_sputum",
  "prominent_veins_on_calf",
  "palpitations",
  "painful_walking",
  "pus_filled_pimples",
  "blackheads",
  "scurring",
  "skin_peeling",
  "silver_like_dusting",
  "small_dents_in_nails",
  "inflammatory_nails",
  "blister",
  "red_sore_around_nose",
  "yellow_crust_ooze";

const Diagnose = (props) => {
  const navigate = useNavigate();
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
    const res = await axios.post("http://127.0.0.1:5000/diagnose", {
      array: val,
    });
    console.log(res.data);
    props.setDisease(res.data);
    navigate("/v1/results");
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
