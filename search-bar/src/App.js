import "./App.css";

import Search from "./components/Search";
import { useState, useEffect } from "react";
import Results from "./components/Results";
import axios from "axios";

function App() {
  const [text, setText] = useState("");
  const [allData, setAllData] = useState([]);
  const [filteredData, setFilteredData] = useState(allData);
  const [didQuery, setDidQuery] = useState(false);
  async function getAnime(name) {
    console.log("Fetching anime");
    // axios(`https://api.jikan.moe/v3/search/anime?q=${name}&page=1`)
    await axios(`https://api.jikan.moe/v3/search/anime?q=${name}`)
      .then((response) => {
        // console.log(response);
        // console.log(response.data.results);
        setAllData(response.data.results);
        setFilteredData(response.data.results);
      })
      .catch((err) => {
        console.log("Error getting anime data " + err);
      });
  }

  function wait(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }
  useEffect(() => {
    if (text.split(" ").join("").length >= 3) {
      setTimeout(() => getAnime(text), 350);
    }
  }, [text]);

  return (
    <div className="container">
      <Search onChange={setText} value={text} />

      <Results text={text} animeData={filteredData} />
    </div>
  );
}

export default App;
