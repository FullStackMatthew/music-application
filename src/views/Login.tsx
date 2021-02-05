import React from "react";
import { useHistory } from "react-router-dom";
import { ArtistSearch } from "./ArtistSearch";
import { LandingPage } from "./LandingPage";

export const Login = () => {
  let history = useHistory();
  return (
    <div>{history?.location.state ? <ArtistSearch /> : <LandingPage />}</div>
  );
};
