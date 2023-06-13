import "./App.css";

import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import NavbarContainer from "./components/navbar/navbarContainer";
import ProfileContainer from "./components/profile/profileContainer";

function App() {
  return (
    <div className="App">
      <div style={{ width: "100%", marginRight: "0"}}>
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
                  marginLeft: "120px",
                  marginRight: "120px",
                  backgroundColor: "white",
                }}
              >
                <ProfileContainer />
              </div>
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
