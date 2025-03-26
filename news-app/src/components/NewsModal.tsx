import React from "react";

interface NewsModalProps {
  title: string;
  content: string;
  onClose: () => void;
}

const NewsModal: React.FC<NewsModalProps> = ({ title, content, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/2">
        <h2 className="font-bold text-lg">{title}</h2>
        <p>{content}</p>
        <button onClick={onClose} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Close</button>
      </div>
    </div>
  );
};

export default NewsModal;