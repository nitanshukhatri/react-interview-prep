import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import configureStore from "./store";
import { Provider } from "react-redux";
import MyErrorBoundary from "./components/errorBoundary";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
const store = configureStore();
export type AppDispatch = typeof store.dispatch;

// const ReduxContext = React.createContext("redux");

// const Provider = ({ store, children }: { store: any;children: any }) => (
//   <ReduxContext.Provider value={store}>{children}</ReduxContext.Provider>
// );

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <MyErrorBoundary>
        <App />
      </MyErrorBoundary>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
