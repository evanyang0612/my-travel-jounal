import React from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import "./index.css";
import data from "./data";

export default function App() {
  const contentData = data.map((item) => {
    return <MainContent item={item} />;
  });

  return (
    <div>
      <Header />
      {contentData}
    </div>
  );
}
