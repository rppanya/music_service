import React, { useEffect } from "react";

import { connect } from "react-redux";
import {
  getProfileInfoThunkCreator,
  logoutThunkCreator,
} from "../../store/reducers/userReducer";
import { addSongThunkCreator } from "../../store/reducers/songsReducer";
import Navbar from "./navbar";

function MiddleNavbarContainer(props) {
  return <Navbar {...props} />;
}

function mapStateToProps(state) {
  return { user: state.user, avatarBin: state.user.avatarBin };
}

const NavbarContainer = connect(mapStateToProps, {
  getProfileInfoThunkCreator,
  logoutThunkCreator,
  addSongThunkCreator,
})(MiddleNavbarContainer);

export default NavbarContainer;
