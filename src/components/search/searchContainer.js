import React, { useEffect } from "react";

import { connect } from "react-redux";
import { searchUsersThunkCreator } from "../../store/reducers/userReducer";
import { songsSearchThunkCreator } from "../../store/reducers/songsReducer";
import Search from "./search";
import { useLocation } from "react-router-dom";

function MiddleSearchContainer(props) {
  const query = useLocation().search;

  useEffect(() => {
    props.searchUsersThunkCreator(
      new URLSearchParams(query).get("searchString")
    );
    props.songsSearchThunkCreator(
      new URLSearchParams(query).get("searchString")
    );
  }, [query]);
  return (
    <Search
      {...props}
      searchString={new URLSearchParams(query).get("searchString")}
    />
  );
}

function mapStateToProps(state) {
  return { users: state.user.usersSearch, songs: state.songs.songsSearch };
}

const SearchContainer = connect(mapStateToProps, {
  searchUsersThunkCreator,
  songsSearchThunkCreator,
})(MiddleSearchContainer);

export default SearchContainer;
