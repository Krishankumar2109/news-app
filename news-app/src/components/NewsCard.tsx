import React from "react";
import "./NewsCard.css"; 

interface NewsCardProps {
  article: {
    title: string;
    description: string;
    url: string;
    urlToImage: string | null;
  };
  onClick: () => void;
}

const NewsCard: React.FC<NewsCardProps> = ({ article, onClick }) => {
  return (
    <div className="news-card" onClick={onClick}>
      {article.urlToImage && <img src={article.urlToImage} alt={article.title} />}
      <h3>{article.title}</h3>
      <p>{article.description}</p>
      <a href={article.url} target="_blank" rel="noopener noreferrer">
        Read more
      </a>
    </div>
  );
};

export default NewsCard;
