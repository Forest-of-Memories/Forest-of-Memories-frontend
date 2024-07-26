import React from "react";
import "./Footer.css";

const Footer = ({ handleBack, handleNext, currentStep, totalSteps }) => {
  return (
    <div className="footer-container">
      <button
        onClick={handleBack}
        className="back-button"
        disabled={currentStep === 1}
      >
        Back
      </button>
      <div className="step-indicator">
        {Array.from({ length: totalSteps }, (_, index) => (
          <span
            key={index}
            className={`indicator-dot ${index + 1 === currentStep ? "active" : ""}`}
          />
        ))}
      </div>
      <button
        onClick={handleNext}
        className="next-button"
        disabled={currentStep === totalSteps}
      >
        Next
      </button>
    </div>
  );
};

export default Footer;
