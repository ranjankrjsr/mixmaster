import React from "react";
import Wrapper from "../assets/wrappers/CocktailList";
import CocktailCard from "./CocktailCard";

const CocktailList = (props) => {
  const { drinks } = props;
  //   console.log("frf", drinks);
  const drinkss = drinks;
  if (!drinkss) {
    return (
      <h4 style={{ textAlign: "center" }}>No matching cocktails found....</h4>
    );
  }
  const formattedDrinks = drinkss.map((item) => {
    return {
      id: item.idDrink,
      name: item.strDrink,
      image: item.strDrinkThumb,
      info: item.strAlcoholic,
      glass: item.strGlass,
    };
  });
  return (
    <Wrapper>
      {formattedDrinks.map((item) => {
        return <CocktailCard key={item.id} {...item} />;
      })}
    </Wrapper>
  );
};

export default CocktailList;
