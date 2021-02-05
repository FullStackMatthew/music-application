export const initialState = {
  // user: null,
  artistId: "",
  artistName: "",
  token: null,
  artist_search_results: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    //Might be useful later
    // case "SET_USER":
    //   return {
    //     ...state,
    //     user: action.user,
    //   };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_ARTIST_ID":
      return {
        ...state,
        artistId: action.artistId,
      };
    case "SET_ARTIST_NAME":
      return {
        ...state,
        artistName: action.artistName,
      };
    case "SET_ARTIST_SEARCH_RESULTS":
      return {
        ...state,
        artist_search_results: action.artist_search_results,
      };
    default:
      return state;
  }
};
