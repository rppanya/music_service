import "./App.css";

import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import NavbarContainer from "./components/navbar/navbarContainer";
import ProfileContainer from "./components/profile/profileContainer";
import Details from "./components/details/detailsContainer";
import Author from "./components/author/author";
import Search from "./components/search/search";
import { ConfigProvider } from "antd";
import SearchContainer from "./components/search/searchContainer";

function App() {
  return (
    <div className="App">
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "purple",
          },
        }}
      >
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
          <Route
            path="/author"
            element={
              <div>
                <div
                  style={{
                    marginLeft: "8%",
                    marginRight: "8%",
                    backgroundColor: "white",
                  }}
                >
                  <Author></Author>
                </div>
              </div>
            }
          ></Route>
          <Route
            path="/search"
            element={
              <div>
                <div
                  style={{
                    marginLeft: "8%",
                    marginRight: "8%",
                    backgroundColor: "white",
                    paddingTop: "20px",
                    paddingBottom: "20px",
                  }}
                >
                  <SearchContainer></SearchContainer>
                </div>
              </div>
            }
          ></Route>
        </Routes>
      </ConfigProvider>
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
