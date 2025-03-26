import React, { useState } from "react";
import NewsCard from "./NewsCard";
import "./NewsSection.css";
interface NewsSectionProps {
  news: any[];
  viewType: "grid" | "list";
}
const NewsSection: React.FC<NewsSectionProps> = ({ news, viewType }) => {
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(news.length / itemsPerPage);
  const paginatedNews = news.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  return (
    <div className="news-container">
      <div className={viewType === "grid" ? "news-grid" : "news-list"}>
        {paginatedNews.map((article, index) => (
          <div key={index} className="news-item">
            <NewsCard article={article} onClick={() => console.log("News clicked")} />
            <button className="delete-btn" onClick={() => console.log("Delete")}>✖</button>
          </div>
        ))}
      </div>
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button key={index + 1} className={`page-btn ${currentPage === index + 1 ? "active" : ""}`} onClick={() => setCurrentPage(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};
export default NewsSection;
