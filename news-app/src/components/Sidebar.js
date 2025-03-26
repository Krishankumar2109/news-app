import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FaThLarge, FaList } from "react-icons/fa";
import "./Sidebar.css";
const Sidebar = ({ onToggleView, onFeedback }) => {
    return (_jsxs("div", { className: "sidebar", children: [_jsxs("div", { className: "profile-card", children: [_jsx("img", { src: "https://www.pngitem.com/pimgs/m/22-224000_profile-pic-dummy-png-transparent-png.png", alt: "Profile", className: "profile-img" }), _jsxs("div", { children: [_jsx("p", { className: "profile-greeting", children: "Hi Reader," }), _jsx("p", { className: "profile-text", children: "Here\u2019s your News!" })] })] }), _jsxs("div", { className: "toggle-card", children: [_jsx("h3", { className: "toggle-title", children: "View Toggle" }), _jsxs("div", { className: "toggle-container", children: [_jsx("button", { onClick: () => onToggleView("grid"), children: _jsx(FaThLarge, {}) }), _jsx("div", { className: "toggle-divider", children: _jsx("p", { children: "..........." }) }), _jsx("button", { onClick: () => onToggleView("list"), children: _jsx(FaList, {}) })] })] }), _jsxs("div", { className: "feedback-card", children: [_jsx("h3", { className: "feedback-title", children: "Have a Feedback?" }), _jsx("button", { className: "feedback-button", onClick: onFeedback, children: "We\u2019re Listening!" })] })] }));
};
export default Sidebar;
