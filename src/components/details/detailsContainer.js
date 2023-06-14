import MyTracks from "../profile/myTracks";
import UsersContainer from "./usersContainer";

const { Row, Col, Avatar, ConfigProvider, Tabs } = require("antd");

const Details = (props) => {
  const items = [
    {
      key: "1",
      label: <b style={{ fontSize: "17px" }}>My tracks</b>,
      children: <MyTracks></MyTracks>,
    },
    {
      key: "2",
      label: <b style={{ fontSize: "17px" }}>Likes</b>,
      children: <MyTracks></MyTracks>,
    },
    {
      key: "3",
      label: <b style={{ fontSize: "17px" }}>Following</b>,
      children: <UsersContainer></UsersContainer>,
    },
    {
      key: "4",
      label: <b style={{ fontSize: "17px" }}>Followers</b>,
      children: <UsersContainer></UsersContainer>,
    },
  ];
  return (
    <div
      style={{
        backgroundSize: "cover",
        height: "max-content",
        marginLeft: "0px",
        marginRight: "0px",
      }}
    >
      <Row>
        <Col span={6} style={{ marginLeft: "20px" }}>
          <Avatar
            size={{
              xs: 100,
              sm: 90,
              md: 150,
              lg: 150,
              xl: 150,
              xxl: 150,
            }}
            style={{
              marginTop: "10px",
              boxShadow: "1px 1px 10px 1px rgba(0, 0, 0, .1)",
            }}
            src="https://koshka.top/uploads/posts/2021-12/1638411940_1-koshka-top-p-kota-iz-shreka-s-grustnimi-1.jpg"
          />
        </Col>
        <Col span={2} style={{ marginLeft: "0", lineHeight: "100px" }}>
          <p
            style={{
              color: "black",
              width: "max-content",
              fontSize: "30px",
            }}
          >
            Likes by anna
          </p>
        </Col>
      </Row>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "purple",
          },
        }}
      >
        <Tabs
          style={{ marginLeft: "30px" }}
          defaultActiveKey="1"
          items={items}
          //onChange={onChange}
        ></Tabs>
      </ConfigProvider>
    </div>
  );
};

export default Details;
