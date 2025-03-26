import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import NewsCard from "./NewsCard";
import "./NewsSection.css";
const NewsSection = ({ news, viewType }) => {
    const itemsPerPage = 6;
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(news.length / itemsPerPage);
    const paginatedNews = news.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
    return (_jsxs("div", { className: "news-container", children: [_jsx("div", { className: viewType === "grid" ? "news-grid" : "news-list", children: paginatedNews.map((article, index) => (_jsxs("div", { className: "news-item", children: [_jsx(NewsCard, { article: article }), _jsx("button", { className: "delete-btn", onClick: () => console.log("Delete"), children: "\u2716" })] }, index))) }), _jsx("div", { className: "pagination", children: Array.from({ length: totalPages }, (_, index) => (_jsx("button", { className: `page-btn ${currentPage === index + 1 ? "active" : ""}`, onClick: () => setCurrentPage(index + 1), children: index + 1 }, index + 1))) })] }));
};
export default NewsSection;
