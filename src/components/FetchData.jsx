import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../index.css";

const FetchData = () => {
  const [data, setData] = useState([]);
  const [articleCount, setArticleCount] = useState(20); // Change this count as needed

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=19625187b58b4ba18818e8f434b6bed1"
      );
      setData(response.data.articles);
    } catch (error) {
      console.error("Error fetching data:", error);
      setData([]);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const displayedArticles = data.slice(0, articleCount);

  return (
    <div className="container my-4">
      <h3>
        <u className="card-header"> TOP HEADLINES </u>
      </h3>
      <div className="card-container d-flex justify-content-center align-items-center flex-column my-3">
        {displayedArticles.length > 0 ? (
          displayedArticles.map((item, index) => (
            <div className="card my-3" style={{ width: "500px" }} key={index}>
              <h5>{item.title}</h5>
              <img src={item.urlToImage} alt="/" className="card-header" />
              <p className="card-content">{item.content}</p>
              <Link to={item.url}>View more</Link>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <button onClick={() => setArticleCount(articleCount + 5)}>
        Load More
      </button>
    </div>
  );
};

export default FetchData;
