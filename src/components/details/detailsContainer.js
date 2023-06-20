import { useEffect } from "react";
import MyTracks from "../profile/myTracks";
import MyTracksContainer from "../profile/myTracksContainer";
import UsersContainer from "./usersContainer";
import LikesContainer from "./likesContainer";
import FollowersContainer from "./followersContainer";
import FollowingContainer from "./followingContainer";

const { Row, Col, Avatar, ConfigProvider, Tabs } = require("antd");

const Details = (props) => {
  console.log(props);
  // useEffect(() => {
  //   if (props.avatar) {
  //     musicServiceApi.files.downloadFile(props.avatar).then((data) => {
  //       setAvatar(data);
  //     });
  //   } else {
  //     setAvatar(require("../../images/profile.png"));
  //   }
  // })
  console.log(props)
  const items = [
    {
      key: "1",
      label: <b style={{ fontSize: "17px" }}>Загруженные треки</b>,
      children: <MyTracksContainer userId={props.user.id}></MyTracksContainer>,
    },
    {
      key: "2",
      label: <b style={{ fontSize: "17px" }}>Лайки</b>,
      children: <LikesContainer userId={props.user.id}></LikesContainer>,
    },
    {
      key: "3",
      label: <b style={{ fontSize: "17px" }}>Подписки</b>,
      children: <FollowingContainer userId={props.user.id}></FollowingContainer>,
    },
    {
      key: "4",
      label: <b style={{ fontSize: "17px" }}>Подписчики</b>,
      children: <FollowersContainer userId={props.user.id}></FollowersContainer>,
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
            src={
              props.user.avatarFile
                ? props.user.avatarFile
                : require("../../images/profile.png")
            }
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
            {props.user.username}
          </p>
        </Col>
      </Row>

      <Tabs
        style={{ marginLeft: "30px" }}
        defaultActiveKey="1"
        items={items}
        //onChange={onChange}
      ></Tabs>
    </div>
  );
};

export default Details;
