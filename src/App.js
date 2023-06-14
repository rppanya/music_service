import "./App.css";

import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import NavbarContainer from "./components/navbar/navbarContainer";
import ProfileContainer from "./components/profile/profileContainer";
import Details from "./components/details/detailsContainer";

function App() {
  return (
    <div className="App">
      <div style={{ width: "100%", marginRight: "0" }}>
        <NavbarContainer></NavbarContainer>
      </div>

      <Routes>
        <Route path="/" element={<div>Wellcome</div>}></Route>
        <Route
          path="/profile"
          element={
            <div>
              <div
                style={{
                  marginLeft: "8%",
                  marginRight: "8%",
                  backgroundColor: "white",
                }}
              >
                <ProfileContainer />
              </div>
            </div>
          }
        ></Route>
        <Route
          path="/details"
          element={
            <div
              style={{
                marginLeft: "8%",
                marginRight: "8%",
                backgroundColor: "white",
              }}
            >
              <Details></Details>
            </div>
          }
        ></Route>
      </Routes>
    </div>
  );
}

const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppWrapper;
