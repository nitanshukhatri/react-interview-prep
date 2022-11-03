import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useWindowResize } from "./hooks/useWindowResize";
import TreeStruct from "./tree-structure";
import Timer from "./components/timer";
import Counter from "./components/counter";
import data from "./mock/mock-data.json";
import ImageSlider from "./components/ImageSlider";
import { SliderData } from "./mock/slider-data";
const files = {
  type: "folder",
  name: "parent",
  data: [
    {
      type: "folder",
      name: "root",
      data: [
        {
          type: "folder",
          name: "src",
          data: [
            {
              type: "file",
              name: "index.js",
            },
          ],
        },
        {
          type: "folder",
          name: "public",
          data: [
            {
              type: "file",
              name: "index.ts",
            },
          ],
        },
        {
          type: "file",
          name: "index.html",
        },
        {
          type: "folder",
          name: "data",
          data: [
            {
              type: "folder",
              name: "images",
              data: [
                {
                  type: "file",
                  name: "image.png",
                },
                {
                  type: "file",
                  name: "image2.webp",
                },
              ],
            },
            {
              type: "file",
              name: "logo.svg",
            },
          ],
        },
        {
          type: "file",
          name: "style.css",
        },
      ],
    },
  ],
};
function App() {
  console.log(data);
  const [query, setQuery] = useState("");
  const windowSize = useWindowResize();

  if (windowSize.width < 100) {
    console.log("small screen");
  }

  const onSearch = (author: any) => {
    console.log(author);
    setQuery(author);
  };
  return (
    <div className="App">
      <div>
        <TreeStruct files={files}></TreeStruct>
        <Timer onComplete={() => console.log("done")}></Timer>
        <Counter></Counter>
        <ImageSlider slides={SliderData} />;
        <div className="search-container">
          <div className="search-inner">
            <input placeholder="Enter Post Title" value={query} onChange={(event) => setQuery(event.target.value)} />
          </div>

          <div className="dropdown">
            {query &&
              data
                .filter((item) => {
                  if (item.author.toLowerCase().includes(query.toLowerCase())) {
                    //returns filtered array
                    return item && item.author.toLowerCase() !== query.toLowerCase();
                  }
                })
                .slice(0, 10)
                .map((item) => (
                  <div onClick={() => onSearch(item.author)} className="dropdown-row" key={item.id}>
                    <div className="box" key={item?.id}>
                      {/* <p>{item?.title}</p> */}
                      <p>{item?.author}</p>
                    </div>
                  </div>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
