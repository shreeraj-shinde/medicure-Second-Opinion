import React, { useState } from "react";
import Layout from "../Layouts/Layouts";

const MedicinePrescribtion = (props) => {
  return (
    <div>
      <h2>Medicines Prescribtion 💊</h2>

      <div className="prescribe-medicine-title-message">
        <h4>Information on Possible Medicines for Your Disease</h4>
        <div className="prescribe-medicine-message">
          While we cannot provide a definitive diagnosis, we can offer general
          information on potential medicines associated with the disease you
          described. It is crucial to consult with a healthcare professional for
          personalized advice.
        </div>
      </div>
      <div className="prescribe-medicine-title-message">
        <h4>Potential Drug/Medicine</h4>
        <div className="prescribe-medicine-message">{props.medicine}</div>
        <div className="prescribe-medicine-message">
          Please note that the information provided is for educational purposes
          only and should not be considered a substitute for professional
          medical advice. Consultation with a healthcare professional is
          essential for an accurate diagnosis and appropriate treatment plan.
        </div>
      </div>
    </div>
  );
};

export default Layout(MedicinePrescribtion);
