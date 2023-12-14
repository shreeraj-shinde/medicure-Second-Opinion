import React, { useState } from "react";
import Layout from "../Layouts/Layouts";
import ModalComponent from "../Components/ModalComponent";

const Results = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  return (
    <>
      <h1>Results</h1>

      <div className="disclaimer-wrapper">
        <span>
          <b>Note :</b>
          <br />

          <li>
            <span className="note-point">
              This application is intended to provide users with general
              information about their health conditions and potential
              Drugs/Medicines. It is not intended to be used as a substitute for
              professional medical advice, diagnosis, or treatment.
            </span>
          </li>
          <li>
            <span className="note-point">
              Use of this App does not create a doctor-patient relationship
              between the user and the developers or contributors of this App.
            </span>
          </li>
          <li>
            <span className="note-point">
              The App may suggest possible medications for certain conditions.
              However, these suggestions should not be taken as a
              recommendation. Always consult with a healthcare provider before
              starting any new medication.
            </span>
          </li>
          <br />
        </span>
      </div>

      <div className="results-display-wrapper">
        <div className="title-message-wrapper">
          <h4>Priliminary Analysis of the Disease :</h4>

          <div className="message-wrapper">
            <p>
              Thank you for providing the symptoms. Based on the information you
              provided, our initial analysis suggests that you may be
              experiencing symptoms associated with <b>{props.disease}</b>.
              Please note that this is not a definitive diagnosis, and it is
              essential to consult with a healthcare professional for a thorough
              evaluation.
            </p>
          </div>
        </div>
        <div className="title-message-wrapper">
          <h4>Recommended Actions</h4>

          <div className="message-wrapper">
            <ul>
              <li>
                Schedule an appointment with your healthcare provider at your
                earliest convenience.
              </li>
              <li>
                Refrain from self-medicating, as it may not address the root
                cause of the symptoms.
              </li>
            </ul>
          </div>
          <button className="results-proceed-button" onClick={showModal}>
            Suggest Medicines
          </button>
        </div>
      </div>
      <ModalComponent
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        disease={props.disease}
        setMedicine={props.setMedicine}
      />
    </>
  );
};

export default Layout(Results);
