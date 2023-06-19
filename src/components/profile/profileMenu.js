import { Tabs, Button, Row, Col, Image, ConfigProvider } from "antd";
import { HeartFilled, EditOutlined } from "@ant-design/icons";
import Track from "./trackInMenu";
import Follower from "./followerInMenu";
import EditProfileFormContainer from "./editProfileFormContainer";
import MyTracks from "./myTracks";
import { useNavigate } from "react-router-dom";
import MyTracksContainer from "./myTracksContainer";
import FollowButton from "./followButton";
import FollowButtonContainer from "./followButtonContainer";

const ProfileMenu = (props) => {
  const onChange = (key) => {
    //console.log(key);
  };
  const navigate = useNavigate();
  const detailsOwerview = (
    <Col span={7} style={{ borderLeft: "1px solid #F0F0F0" }}>
      <Row style={{ paddingLeft: "10px" }}>
        <Col span={8} style={{ borderRight: "1px solid #F0F0F0" }}>
          <p
            style={{
              margin: "0",
              fontSize: "14px",
              color: "darkgray",
              textAlign: "start",
              paddingLeft: "8px",
            }}
          >
            Подписчики
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
            {props.followersCount}
          </p>
        </Col>
        <Col span={8} style={{ borderRight: "1px solid #F0F0F0" }}>
          <p
            style={{
              margin: "0",
              fontSize: "14px",
              color: "darkgray",
              textAlign: "start",
              paddingLeft: "8px",
            }}
          >
            Подписки
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
            {props.followingCount}
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
            Моя музыка
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
            {props.uploadedSongsCount}
          </p>
        </Col>
      </Row>
      <Row>
        <p style={{ marginLeft: "20px" }}>{props.userBio}</p>
      </Row>
      <Row
        style={{
          marginTop: "25px",
          marginLeft: "8px",
          fontSize: "16px",
          color: "darkgray",
          textAlign: "center",
          display: "flex",
          borderBottom: "1px solid #F0F0F0",
          paddingLeft: "10px",
        }}
      >
        <HeartFilled
          style={{
            margin: "auto",
            marginRight: "8px",
            marginLeft: "0px",
            color: "darkgrey",
          }}
        />
        <p>{props.likesCount}</p>
        <Button
          type="text"
          style={{
            margin: "auto",
            marginRight: "0px",
            color: "darkgrey",
            fontSize: "15px",
          }}
          onClick={() => {
            navigate(`/details/${props.userId}`);
          }}
        >
          Смотреть все
        </Button>
      </Row>
      {/* <div style={{marginLeft: "10px"}}>
        <MyTracksContainer userId={props.userId}></MyTracksContainer>
      </div> */}

      <Row
        style={{
          marginTop: "25px",
          marginLeft: "8px",
          fontSize: "16px",
          color: "darkgray",
          textAlign: "center",
          display: "flex",
          borderBottom: "1px solid #F0F0F0",
          paddingLeft: "10px",
        }}
      >
        <img
          style={{
            margin: "auto",
            marginRight: "8px",
            marginLeft: "0px",
            width: "30px",
            height: "29px",
          }}
          src={require("../../images/people.png")}
          alt="ss"
        />
        <p>{props.followingCount} подписок</p>
        <Button
          type="text"
          style={{
            margin: "auto",
            marginRight: "0px",
            color: "darkgrey",
            fontSize: "15px",
          }}
          onClick={() => {
            navigate(`/details/${props.userId}`);
          }}
        >
          Смотреть все
        </Button>
      </Row>
      {/* <Follower></Follower>
      <Follower></Follower>
      <Follower></Follower> */}
    </Col>
  );
  const items = [
    {
      key: "1",
      label: <b style={{ fontSize: "17px" }}>Моя музыка</b>,
      children: (
        <Row>
          <Col span={17} style={{ backgroundColor: "" }}>
            <MyTracksContainer userId={props.userId}></MyTracksContainer>
          </Col>
          {detailsOwerview}
        </Row>
      ),
    },
  ];
  const OperationsSlot = {
    right: props.isMyProfile ? (
      <EditProfileFormContainer></EditProfileFormContainer>
    ) : (
      <FollowButtonContainer userId={props.userId} following={props.following}></FollowButtonContainer>
    ),
  };
  return (
    <div style={{ marginLeft: "30px", marginRight: "30px" }}>
      <Tabs
        tabBarExtraContent={OperationsSlot}
        defaultActiveKey="1"
        items={items}
        onChange={onChange}
        style={{ color: "black" }}
      ></Tabs>
    </div>
  );
};

export default ProfileMenu;
