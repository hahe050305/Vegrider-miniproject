import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './terms.css'; // New CSS file for this page

const TAC = () => {
  const [agreed, setAgreed] = useState(false);
  const navigate = useNavigate();

  const handleAgree = () => {
    if (agreed) {
      // Proceed to the next page or action
      alert('Thank you for agreeing!, Your request is sent and it is within consideration for approval.');
      //navigate('/next-page'); // Adjust the path based on your app
    } else {
      alert('Please agree to the terms and conditions before proceeding.');
    }
  };

  return (
    <div className="terms-container">
      <div className="terms-card">
        <h1>Terms and Conditions</h1>
        <p>... Please review our terms and conditions ...</p>

        <p>
          By accessing or using our services, 
          you agree to comply with and be bound by the following terms and conditions:
        </p>

        <ul>
          <li>
            Service Scope: Our company provides logistics and shipment services, 
            including delivery, supply chain management.
          </li>

          <br/>
          <li>
            User Responsibilities: Users must provide accurate and complete information 
            during the booking and delivery process, not liable for illegal or restricted items.
          </li>
          
          <p> On clicking agree you oblige yourself to all terms and conditions provided, and thereby affirm yourself</p>
        </ul>

        <div className="checkbox-container">
          <input
            type="checkbox"
            id="agreeCheckbox"
            checked={agreed}
            onChange={() => setAgreed(!agreed)}
          />
          <label htmlFor="agreeCheckbox">I agree to the terms and conditions</label>
        </div>
        <button onClick={handleAgree} className="agree-button">
          Agree
        </button>
      </div>
    </div>
  );
};

export default TAC;
