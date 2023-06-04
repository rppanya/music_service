import { Tabs, Button, Row, Col, Image } from "antd";
import { HeartFilled, EditOutlined } from "@ant-design/icons";
import Track from "./trackInMenu";
import Follower from "./followerInMenu";

const ProfileMenu = () => {
  const onChange = (key) => {
    console.log(key);
  };
  const detailsOwerview = (
    <Col span={7} style={{ borderLeft: "1px solid lightgrey" }}>
      <Row style={{ paddingLeft: "10px" }}>
        <Col span={8} style={{ borderRight: "1px solid lightgrey" }}>
          <p
            style={{
              margin: "0",
              fontSize: "14px",
              color: "darkgray",
              textAlign: "start",
              paddingLeft: "8px",
            }}
          >
            Followers
          </p>
          <p
            style={{
              margin: "0",
              fontSize: "20px",
              color: "darkgray",
              textAlign: "start",
              paddingLeft: "8px",
            }}
          >
            1
          </p>
        </Col>
        <Col span={8} style={{ borderRight: "1px solid lightgrey" }}>
          <p
            style={{
              margin: "0",
              fontSize: "14px",
              color: "darkgray",
              textAlign: "start",
              paddingLeft: "8px",
            }}
          >
            Following
          </p>
          <p
            style={{
              margin: "0",
              fontSize: "20px",
              color: "darkgray",
              textAlign: "start",
              paddingLeft: "8px",
            }}
          >
            1
          </p>
        </Col>
        <Col span={8}>
          <p
            style={{
              margin: "0",
              fontSize: "14px",
              color: "darkgray",
              textAlign: "start",
              paddingLeft: "8px",
            }}
          >
            Tracks
          </p>
          <p
            style={{
              margin: "0",
              fontSize: "20px",
              color: "darkgray",
              textAlign: "start",
              paddingLeft: "8px",
            }}
          >
            1
          </p>
        </Col>
      </Row>
      <Row
        style={{
          marginTop: "25px",
          marginLeft: "8px",
          fontSize: "16px",
          color: "darkgray",
          textAlign: "center",
          display: "flex",
          borderBottom: "1px solid lightgrey",
          paddingLeft: "10px",
        }}
      >
        <HeartFilled
          style={{
            margin: "auto",
            marginRight: "8px",
            marginLeft: "0px",
            color: "black",
          }}
        />
        <p>159 likes</p>
        <Button
          type="text"
          style={{
            margin: "auto",
            marginRight: "0px",
            color: "darkgrey",
            fontSize: "15px",
          }}
        >
          View all
        </Button>
      </Row>
      <Track></Track>
      <Track></Track>
      <Track></Track>

      <Row
        style={{
          marginTop: "25px",
          marginLeft: "8px",
          fontSize: "16px",
          color: "darkgray",
          textAlign: "center",
          display: "flex",
          borderBottom: "1px solid lightgrey",
          paddingLeft: "10px",
        }}
      >
        <img
          style={{
            margin: "auto",
            marginRight: "8px",
            marginLeft: "0px",
            width: "30px",
          }}
          src="https://cdn0.iconfinder.com/data/icons/social-media-glyph-1/64/Facebook_Social_Media_User_Interface-38-512.png"
          alt="ss"
        />
        <p>2 following</p>
        <Button
          type="text"
          style={{
            margin: "auto",
            marginRight: "0px",
            color: "darkgrey",
            fontSize: "15px",
          }}
        >
          View all
        </Button>
      </Row>
      <Follower></Follower>
      <Follower></Follower>
      <Follower></Follower>
    </Col>
  );
  const items = [
    {
      key: "1",
      label: <b style={{ fontSize: "17px" }}>My tracks</b>,
      children: (
        <Row>
          <Col span={17} style={{ backgroundColor: "" }}></Col>
          {detailsOwerview}
        </Row>
      ),
    },
    {
      key: "2",
      label: <b style={{ fontSize: "17px" }}>Following</b>,
      children: (
        <Row>
          <Col span={17} style={{ backgroundColor: "" }}></Col>
          {detailsOwerview}
        </Row>
      ),
    },
    {
      key: "3",
      label: <b style={{ fontSize: "17px" }}>Playlists</b>,
      children: (
        <Row>
          <Col span={17} style={{ backgroundColor: "" }}></Col>
          {detailsOwerview}
        </Row>
      ),
    },
    {
      key: "4",
      label: <b style={{ fontSize: "17px" }}>Likes</b>,
      children: (
        <Row>
          <Col span={17} style={{ backgroundColor: "" }}></Col>
          {detailsOwerview}
        </Row>
      ),
    },
  ];
  const OperationsSlot = {
    right: <Button icon={<EditOutlined />}>Edit</Button>,
  };
  return (
    <div style={{ marginLeft: "30px", marginRight: "30px" }}>
      <Tabs
        tabBarExtraContent={OperationsSlot}
        defaultActiveKey="1"
        items={items}
        onChange={onChange}
      ></Tabs>
    </div>
  );
};

export default ProfileMenu;
