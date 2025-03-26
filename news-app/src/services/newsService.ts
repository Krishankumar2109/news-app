export const fetchNews = async (page = 1) => {
    try {
      const API_KEY = "7427f95f49494eb7a8914063c0db982c";
      const BASE_URL = "https://newsapi.org/v2/top-headlines?country=us&pageSize=10";
      
      const response = await fetch(`${BASE_URL}&page=${page}&apiKey=${API_KEY}`);
      if (!response.ok) throw new Error("API request failed");
      
      const data = await response.json();
      console.log("News API Data:", data); // Debugging Log
      
      return {
        articles: data.articles || [], // Ensure articles is always an array
        totalPages: Math.ceil((data.totalResults || 0) / 10), // Calculate total pages
      };
    } catch (error) {
      console.error("Error fetching news:", error);
      return { articles: [], totalPages: 1 }; // Prevent crashes
    }
  };
  