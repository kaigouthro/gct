import React from "react";
import "./App.css";
import ScreenLayout from "./components/ScreenLayout";
import axios from "axios";

function App() {
  const getGCT = async () => {
    const response = await axios.post(
      "http://localhost:5000/gct",
      {},
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const { code, digraph } = response.data;
    console.log(code, digraph);
  };

  getGCT();
  return (
    <ScreenLayout>
      <h1>HI</h1>
    </ScreenLayout>
  );
}

export default App;
