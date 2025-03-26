import React from "react";
import { FaThLarge, FaList } from "react-icons/fa";
import "./Sidebar.css";
interface SidebarProps {
  onToggleView: (viewType: "grid" | "list") => void;
  onFeedback: () => void;
}
const Sidebar: React.FC<SidebarProps> = ({ onToggleView, onFeedback }) => {
  return (
    <div className="sidebar">
      <div className="profile-card">
        <img src="https://www.pngitem.com/pimgs/m/22-224000_profile-pic-dummy-png-transparent-png.png" alt="Profile" className="profile-img" />
        <div>
          <p className="profile-greeting">Hi Reader,</p>
          <p className="profile-text">Here’s your News!</p>
        </div>
      </div>

      <div className="toggle-card">
        <h3 className="toggle-title">View Toggle</h3>
        <div className="toggle-container">
          <button onClick={() => onToggleView("grid")}><FaThLarge /></button>
            <div className="toggle-divider"><p>...........</p></div>
          <button onClick={() => onToggleView("list")}><FaList /></button>
        </div>
      </div>

      <div className="feedback-card">
        <h3 className="feedback-title">Have a Feedback?</h3>
        <button className="feedback-button" onClick={onFeedback}>We’re Listening!</button>
      </div>
    </div>
  );
};
export default Sidebar;