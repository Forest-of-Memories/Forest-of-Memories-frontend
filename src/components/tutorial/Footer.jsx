import React, { useState } from "react";
import "./Footer.css";
import { auth } from "../../firebase";
import { updateProfile } from "firebase/auth";
import { FirebaseError } from "firebase/app";

const Footer = ({ handleBack, handleNext, currentStep, totalSteps }) => {
  const [loading, setLoading] = useState(false);
  const handleName = async () => {
    try {
      setLoading(true);
      if (auth.currentUser) {
        await updateProfile(auth.currentUser, {
          displayName: window.localStorage.getItem("name"),
        });
      }
      handleNext();
    } catch (e) {
      if (e instanceof FirebaseError) {
        console.error(e);
      }
    } finally {
      setLoading(false);
    }
  };
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
      {currentStep === 3 ? (
        <button
          onClick={handleName}
          className="next-button"
          disabled={currentStep === totalSteps}
        >
          {loading ? "loading..." : "Next"}
        </button>
      ) : (
        <button
          onClick={handleNext}
          className="next-button"
          disabled={currentStep === totalSteps}
        >
          Next
        </button>
      )}
    </div>
  );
};

export default Footer;
