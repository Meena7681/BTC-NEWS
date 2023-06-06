import React ,{ useEffect, useState } from "react";
import axios from "axios";

const FetchData = ()=>{
    const [Data,setData] = useState("");
    const fetchData = async () => {
         await axios.get("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=19625187b58b4ba18818e8f434b6bed1")
         .then((data)=>setData(data.articles));
    };

    useEffect(()=>{
      fetchData();
    },[])

	return (
      <div className="container my-4">

      <h3>
        <u> TOP HEADLINES </u>
      </h3>
       <div className="my-2">{Data ? "done":"LOADING....."}</div>
     </div>
	)
};
export default FetchData;