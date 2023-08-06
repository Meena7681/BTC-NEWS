import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../index.css";

const FetchData = () => {
  const [Data, setData] = useState("");
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=19625187b58b4ba18818e8f434b6bed1"
      );
      console.log("response", response);
      setData(response.data.articles);
    } catch (error) {
      console.error("Error fetching data:", error);
      setData([]);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container my-4">
      <h3>
        <u className="card-header"> TOP HEADLINES </u>
      </h3>
      <div className="card-container d-flex justify-content-center align-items-center flex-column my-3">
        {Data
          ? Data.map((items, index) => (
              <>
                <div className="card my-3" style={{ width: "500px" }}>
                  <h5>{items.title}</h5>
                  <img src={items.urlToImage} alt="/" className="card-header" />
                  <p className="card-content">{items.content}</p>
                  <Link to={items.url}>View more</Link>
                </div>
              </>
            ))
          : "Loading..."}
      </div>
    </div>
  );
};

export default FetchData;
