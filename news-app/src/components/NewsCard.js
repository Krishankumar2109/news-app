import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./NewsCard.css";
const NewsCard = ({ article, onClick }) => {
    return (_jsxs("div", { className: "news-card", onClick: onClick, children: [article.urlToImage && _jsx("img", { src: article.urlToImage, alt: article.title }), _jsx("h3", { children: article.title }), _jsx("p", { children: article.description }), _jsx("a", { href: article.url, target: "_blank", rel: "noopener noreferrer", children: "Read more" })] }));
};
export default NewsCard;
