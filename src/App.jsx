import React, { useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-node";

import { getAccessToken } from "./utils/LoginUrlBuilder";
import { useDataLayerValue } from "./DataLayer";
import { Routes } from "./components/Routes";

const App = () => {
  const spotifyApi = new SpotifyWebApi();
  const [{ token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getAccessToken();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });
      spotifyApi.setAccessToken(_token);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token, dispatch]);

  return (
    <div className="App">
      <Routes />
    </div>
  );
};

export default App;
