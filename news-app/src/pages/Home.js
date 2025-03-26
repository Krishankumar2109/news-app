import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import NewsSection from "../components/NewsSection";
import Pagination from "../components/Pagination";
import FeedbackForm from "../components/FeedbackForm";
import { fetchNews } from "../services/newsService";
import "./Home.css";
const Home = () => {
    const [news, setNews] = useState([]);
    const [viewType, setViewType] = useState("list");
    const [selectedNews, setSelectedNews] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [showFeedback, setShowFeedback] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const getNews = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await fetchNews(currentPage);
                if (response && response.articles) {
                    setNews(response.articles);
                    setTotalPages(response.totalPages || 1);
                }
                else {
                    setNews([]);
                }
            }
            catch (err) {
                setError("Failed to fetch news. Please try again later.");
            }
            finally {
                setLoading(false);
            }
        };
        getNews();
    }, [currentPage]);
    return (_jsxs("div", { className: "home-container", children: [_jsx(Sidebar, { onToggleView: setViewType, onFeedback: () => setShowFeedback(true) }), _jsxs("div", { className: "main-content", children: [loading ? (_jsx("p", { className: "loading-text", children: "Loading news..." })) : error ? (_jsx("p", { className: "error-text", children: error })) : (_jsx(NewsSection, { news: news, viewType: viewType })), _jsx(Pagination, { currentPage: currentPage, totalPages: totalPages, onPageChange: setCurrentPage })] }), showFeedback && _jsx(FeedbackForm, { onClose: () => setShowFeedback(false) })] }));
};
export default Home;
