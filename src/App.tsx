import React, { createContext, useReducer, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useWindowResize } from "./hooks/useWindowResize";
import TreeStruct from "./tree-structure";
import Timer from "./components/timer";
import Counter from "./components/counter";
import data from "./mock/mock-data.json";
import ImageSlider from "./components/ImageSlider";
import { SliderData } from "./mock/slider-data";
import DogCard from "./components/dogCard";
import { Container } from "@mui/material";
import SimpleCard from "./components/exampleCard";
import { Modal } from "./components/modal";
import InputField from "./components/input";

import { reducer, initialState } from "./ducks/reducers/countReducer";
import IncrementCounter from "./components/IncrementCounter";
import { CounterContextType } from "./types/counter.types";
export const CounterContext = createContext<CounterContextType>({ state: initialState });

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
  const styles = {
    root: {
      textAlign: "center",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      height: "100vh",
    },
  };
  const [query, setQuery] = useState("");
  const [showModal, setShowModal] = useState(false);
  const windowSize = useWindowResize();
  const openModal = () => {
    setShowModal(true);
  };

  if (windowSize.width < 100) {
    console.log("small screen");
  }

  const onSearch = (author: any) => {
    console.log(author);
    setQuery(author);
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      <div>
        <TreeStruct files={files}></TreeStruct>
        <Timer onComplete={() => console.log("done")}></Timer>
        <Counter></Counter>
        <button onClick={openModal}>Open Modal</button>
        {showModal ? <Modal setShowModal={setShowModal}> From Children</Modal> : null}
        <InputField type="text" name="onlyText" label="Name" />
        <CounterContext.Provider value={{ state, dispatch }}>
          <IncrementCounter></IncrementCounter>
        </CounterContext.Provider>
        {/* <ImageSlider slides={SliderData} />; */}
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
        <Container sx={styles.root}>
          <SimpleCard />
          <DogCard />
        </Container>
      </div>
    </div>
  );
}

export default App;
