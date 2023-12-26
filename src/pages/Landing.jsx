import axios from "axios";
import React from "react";

import { useLoaderData } from "react-router-dom";

import CocktailList from "../components/CocktailList";
import SearchForm from "../components/SearchForm";
import { useQuery } from "@tanstack/react-query";

const cocktailSearchUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const searchCocktailsQuery = (searchTerm) => {
  console.log("1");
  return {
    queryKey: ["search", searchTerm || "all"],
    queryFn: async () => {
      console.log("2");
      const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`);
      console.log("response", response);
      return response.data;
    },
  };
};

export const loader = (queryClient) => async (dataReq) => {
  const { request } = dataReq;

  const url = new URL(request.url);

  const searchTerm = url.searchParams.get("search") || "";

  // const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`);

  // console.log(response.data);
  // return { drinks: response.data, searchTerm: searchTerm };
  await queryClient.ensureQueryData(searchCocktailsQuery(searchTerm));
  return { searchTerm };
};

const Landing = () => {
  const dataa = useLoaderData();
  console.log(dataa);
  // const { drinks, searchTerm } = data;

  const { searchTerm } = dataa;
  console.log("searchTerm is", searchTerm);

  const { data } = useQuery(searchCocktailsQuery(searchTerm));
  console.log("final data", data.drinks);

  return (
    <>
      <SearchForm searchTerm={searchTerm} />
      <CocktailList drinks={data.drinks} />
    </>
  );
};

export default Landing;
