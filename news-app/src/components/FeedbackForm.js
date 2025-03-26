import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from "react";
import "./FeedbackForm.css"; // Import the CSS file
const FeedbackForm = ({ onClose }) => {
    // Prevent background scroll when modal is open
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);
    return (_jsx("div", { className: "overlay", children: _jsxs("div", { className: "feedback-container", children: [_jsx("button", { className: "close-btn", onClick: onClose, children: "\u2716" }), _jsx("h2", { className: "feedback-title", children: "Submit Your Feedback" }), _jsxs("form", { className: "feedback-form", children: [_jsx("input", { type: "text", placeholder: "Your Name", className: "input-field" }), _jsx("input", { type: "email", placeholder: "Your Email", className: "input-field" }), _jsx("textarea", { placeholder: "Write your feedback...", className: "input-field textarea" }), _jsx("button", { type: "submit", className: "submit-btn", children: "Submit" })] })] }) }));
};
export default FeedbackForm;
