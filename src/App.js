import "./App.css";

import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import NavbarContainer from "./components/navbar/navbarContainer";
import ProfileContainer from "./components/profile/profileContainer";
import Details from "./components/details/detailsContainer";
import AuthorContainer from "./components/author/authorContainer";
import Search from "./components/search/search";

import { ConfigProvider, Row, Col, Typography } from "antd";
import SearchContainer from "./components/search/searchContainer";
import DetailsPageContainer from "./components/details/detailsPageContainer";
import { Footer } from "antd/es/layout/layout";
import Player from "./components/player/player";
import PlayerContainer from "./components/player/playerContainer";
const { Text, Link } = Typography;

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
          <Route
            path="/"
            element={
              <div
                style={{
                  // display: "flex",
                  // justifyContent: "space-between",
                  paddingTop: "100px",
                  //width: "auto"
                }}
              >
                <Row
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Col>
                    <img
                      src={require("./images/icon2.png")}
                      style={
                        {
                          //backgroundColor: "purple",
                          //width: "auto",
                          //height: '10%'
                        }
                      }
                    ></img>
                  </Col>
                  <Col style={{ marginTop: "200px" }}>
                    <Text style={{ fontSize: "40px", fontWeight: "bold" }}>
                      HARMONY BEAT
                    </Text>
                    {/* <b >HarmonyBeat</b> */}
                    <Text
                      italic
                      secondary
                      style={{
                        display: "block",
                        //marginTop: "100px",
                        fontSize: "20px",
                      }}
                    >
                      Музыкальное вдохновение на каждом шагу
                    </Text>
                  </Col>

                  <Col>
                    <img
                      src={require("./images/icon1.png")}
                      style={
                        {
                          //backgroundColor: "purple",
                          //width: "80%",
                        }
                      }
                    ></img>
                  </Col>
                </Row>
              </div>
            }
          ></Route>
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
            path="/details/:userId"
            element={
              <div
                style={{
                  marginLeft: "8%",
                  marginRight: "8%",
                  backgroundColor: "white",
                }}
              >
                <DetailsPageContainer></DetailsPageContainer>
              </div>
            }
          ></Route>
          {/* <Route
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
          ></Route> */}
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
          <Route
            path="/:userId"
            element={
              <div>
                <div
                  style={{
                    marginLeft: "8%",
                    marginRight: "8%",
                    backgroundColor: "white",
                  }}
                >
                  <AuthorContainer isMyProfile={false}></AuthorContainer>
                </div>
              </div>
            }
          ></Route>
        </Routes>
        <Footer
          style={{
            position: "absolute",
            bottom: "0",
            width: "100%",
            height: "auto",
            backgroundColor: "white",
            margin: "0",
            padding: "0",
          }}
        >
          <PlayerContainer></PlayerContainer>
        </Footer>
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
