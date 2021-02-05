import React from "react";
import { Header } from "../components/header/Header";
import { SearchForm } from "../components/searchForm/SearchForm";

export const ArtistSearch = () => {
  return (
    <React.Fragment>
      <Header title="Spotify Artist Search" />
      <SearchForm />
    </React.Fragment>
  );
};
