import React, { Component } from "react";
import RecipeReviewCard from "./components/RecipeReviewCard";
import MenuAppBar from "./components/MenuAppBar";


class App extends Component {
  render() {
    return (
      <div>
        <MenuAppBar />
        <br />
        <RecipeReviewCard />
      </div>
    );
  }
}

export default App;
