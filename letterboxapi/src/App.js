import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./Header.js";
import axios from "axios";
function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `http://www.omdbapi.com/?i=tt0133093&apikey=6b9b2ba0`
      );
      console.log(result.data);
      console.log("hello");
    };
    fetchItems();
  }, []);

  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
