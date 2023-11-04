import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Recipe from "./components/Recipe";
import Container from "@mui/material/Container";
import Header from "./components/Header";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [input, setInput] = useState("");
  const [finalquery, setFinalquery] = useState("chicken");

  function handleIp(e) {
    setInput(e.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setFinalquery(input);
    //console.log(finalquery);
    setInput("");
  }

  const getRecipes = async () => {
    const response = await axios.get(`http://localhost:5000/${finalquery}`);
    console.log("sucess");
    console.log(response.data);
    setRecipes(response.data);
  };

  useEffect(() => {
    getRecipes();
    console.log(finalquery);
    // eslint-disable-next-line
  }, [finalquery]);

  return (
    <div className="App">
      <Header />
      <Container fixed>
        <div className="inputform">
          <form onSubmit={handleSubmit}>
            <input
              className="foodip"
              type="text"
              placeholder="Enter Recipe Name"
              value={input}
              onChange={handleIp}
            />
            <button className="formbtn" type="submit">
              Submit
            </button>
          </form>
        </div>
      </Container>

      <div className="recipes">
        {recipes.map((singlerecipe) => (
          <Recipe
            id={singlerecipe.recipe.label}
            image={singlerecipe.recipe.image}
            label={singlerecipe.recipe.label}
            key={singlerecipe.recipe.label}
            url={singlerecipe.recipe.url}
            ingredients={singlerecipe.recipe.ingredientLines}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
