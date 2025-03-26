import React, { useEffect } from "react";
import "./FeedbackForm.css"; // Import the CSS file

interface FeedbackFormProps {
  onClose: () => void;
}

const FeedbackForm: React.FC<FeedbackFormProps> = ({ onClose }) => {
  // Prevent background scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="overlay">
      <div className="feedback-container">
        {/* Close Button */}
        <button className="close-btn" onClick={onClose}>✖</button>

        {/* Form Content */}
        <h2 className="feedback-title">Submit Your Feedback</h2>
        <form className="feedback-form">
          <input type="text" placeholder="Your Name" className="input-field" />
          <input type="email" placeholder="Your Email" className="input-field" />
          <textarea placeholder="Write your feedback..." className="input-field textarea"></textarea>
          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default FeedbackForm;
