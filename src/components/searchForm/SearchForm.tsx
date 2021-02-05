import React, { useState, useEffect } from "react";
import { InputAdornment, TextField } from "@material-ui/core";
import { useStyles } from "./searchFormStyles";
import SearchIcon from "@material-ui/icons/Search";
import { useDataLayerValue } from "../../DataLayer";
import SpotifyWebApi from "spotify-web-api-js";
import { MainContent } from "../mainContent/MainContent";

export const SearchForm = () => {
  const [{ token, artist_search_results }, dispatch] = useDataLayerValue();

  const spotifyApi = new SpotifyWebApi();

  useEffect(() => {
    spotifyApi.setAccessToken(token);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  const classes = useStyles();

  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState(artist_search_results);

  const search = (searchTerm) => {
    spotifyApi.searchArtists(searchTerm).then((artist) => {
      setResults(artist.artists.items);

      dispatch({
        type: "SET_ARTIST_ID",
        artistId: artist.artists.items[0].id,
      });

      dispatch({
        type: "SET_ARTIST_NAME",
        artistName: artist.artists.items[0].name,
      });

      dispatch({
        type: "SET_ARTIST_SEARCH_RESULTS",
        artist_search_results: artist.artists.items,
      });
    });
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      search(searchTerm);
    }
  };

  return (
    <div>
      <div className={classes.search}>
        <TextField
          fullWidth
          className={classes.search}
          id="outlined-basic"
          label="Search for an artist..."
          variant="outlined"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          onKeyPress={handleKeyPress}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </div>
      <MainContent results={results} />
    </div>
  );
};
