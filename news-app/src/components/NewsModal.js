import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const NewsModal = ({ title, content, onClose }) => {
    return (_jsx("div", { className: "fixed inset-0 flex items-center justify-center bg-black bg-opacity-50", children: _jsxs("div", { className: "bg-white p-6 rounded-lg shadow-lg w-1/2", children: [_jsx("h2", { className: "font-bold text-lg", children: title }), _jsx("p", { children: content }), _jsx("button", { onClick: onClose, className: "mt-4 bg-blue-500 text-white px-4 py-2 rounded", children: "Close" })] }) }));
};
export default NewsModal;
