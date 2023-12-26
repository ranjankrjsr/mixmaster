import axios from "axios";
import React from "react";
import { Link, Navigate, useLoaderData } from "react-router-dom";

import Wrapper from "../assets/wrappers/CocktailPage";
import { useQuery } from "@tanstack/react-query";

const singleCocktailUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const singleCocktailQuery = (id) => {
  return {
    queryKey: ["singleCocktail", id],
    queryFn: async () => {
      const response = await axios.get(`${singleCocktailUrl}${id}`);
      return response.data;
    },
  };
};

export const loader = (queryClient) => async (data) => {
  console.log("data", data);
  const { params } = data;
  const { id } = params;
  console.log(id);

  // const response = await axios.get(`${singleCocktailUrl}${id}`);
  // return { id, data: response.data };
  await queryClient.ensureQueryData(singleCocktailQuery(id));
  return { id };
};

const Cocktail = () => {
  // const { id, data } = useLoaderData();
  const { id } = useLoaderData();

  const { data } = useQuery(singleCocktailQuery(id));

  if (!data) return <Navigate to="/" />;

  const singleDrink = data.drinks[0];
  console.log("sfdfs", singleDrink);

  const validIngredients = Object.keys(singleDrink)
    .filter((item) => {
      return item.startsWith("strIngredient") && singleDrink[item] !== null;
    })
    .map((item) => {
      return singleDrink[item];
    });
  console.log(validIngredients);

  const singleDrinkFormatted = {
    name: singleDrink.strDrink,
    image: singleDrink.strDrinkThumb,
    info: singleDrink.strAlcoholic,
    category: singleDrink.strCategory,
    glass: singleDrink.strGlass,
    instructions: singleDrink.strInstructions,
  };

  console.log(singleDrinkFormatted);

  return (
    <Wrapper>
      <header>
        <Link to="/" className="btn">
          back home
        </Link>
        <h3>{singleDrinkFormatted.name}</h3>
      </header>
      <div className="drink">
        <img
          src={singleDrinkFormatted.image}
          alt={singleDrinkFormatted.name}
          className="img"
        />
        <div className="drink-info">
          <p>
            <span className="drink-data">name :</span>
            {singleDrinkFormatted.name}
          </p>
          <p>
            <span className="drink-data">category :</span>
            {singleDrinkFormatted.category}
          </p>
          <p>
            <span className="drink-data">info :</span>
            {singleDrinkFormatted.info}
          </p>
          <p>
            <span className="drink-data">glass :</span>
            {singleDrinkFormatted.glass}
          </p>
          <p>
            <span className="drink-data">ingredients :</span>
            {validIngredients.map((item, index) => {
              return (
                <span className="ing" key={item}>
                  {item}
                  {index < validIngredients.length - 1 ? " ," : ""}
                </span>
              );
            })}
          </p>
          <p>
            <span className="drink-data">instructions :</span>
            {singleDrinkFormatted.instructions}
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default Cocktail;
