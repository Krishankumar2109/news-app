import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import NewsSection from "../components/NewsSection";
import Pagination from "../components/Pagination";
import FeedbackForm from "../components/FeedbackForm";
import NewsModal from "../components/NewsModal";
import { fetchNews } from "../services/newsService";
import "./Home.css";

const Home = () => {
  const [news, setNews] = useState<any[]>([]);
  const [viewType, setViewType] = useState<"grid" | "list">("list");
  const [selectedNews, setSelectedNews] = useState<any | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [showFeedback, setShowFeedback] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getNews = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetchNews(currentPage);
        if (response && response.articles) {
          setNews(response.articles);
          setTotalPages(response.totalPages || 1);
        } else {
          setNews([]);
        }
      } catch (err) {
        setError("Failed to fetch news. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    getNews();
  }, [currentPage]);

  return (
    <div className="home-container">
      <Sidebar onToggleView={setViewType} onFeedback={() => setShowFeedback(true)} />
      <div className="main-content">
        {loading ? (
          <p className="loading-text">Loading news...</p>
        ) : error ? (
          <p className="error-text">{error}</p>
        ) : (
          <NewsSection news={news} viewType={viewType}  />
        )}
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
      </div>
    
      {showFeedback && <FeedbackForm onClose={() => setShowFeedback(false)} />}
    </div>
  );
};
export default Home;