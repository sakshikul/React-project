import React from "react";
import ReactDOM from "react-dom";
import SearchParams from "./SearchParam";

const App = () => {
  return (
    <div>
      <h1 id="something-important">Adopt me</h1>
     <SearchParams />
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));
