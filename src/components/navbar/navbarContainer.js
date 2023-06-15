import React, { useEffect } from "react";

import { connect } from "react-redux";
import {
  getProfileInfoThunkCreator,
  logoutThunkCreator,
} from "../../store/reducers/userReducer";
import Navbar from "./navbar";

function MiddleNavbarContainer(props) {
  return <Navbar {...props} />;
}

function mapStateToProps(state) {
  return { user: state.user.user, avatarBin: state.user.avatarBin };
}

const NavbarContainer = connect(mapStateToProps, {
  getProfileInfoThunkCreator,
  logoutThunkCreator,
})(MiddleNavbarContainer);

export default NavbarContainer;
