import { Card, Avatar, Row } from "antd";
import { AntDesignOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const User = (props) => {
  const navigate = useNavigate();
  return (
    <Card
      style={{ border: "0" }}
      bodyStyle={{ margin: "0", padding: "0" }}
      onClick={() => navigate(`/${props.userInfo.id}`)}
      hoverable
    >
      <Avatar
        size={{ xs: 60, sm: 70, md: 100, lg: 130, xl: 130, xxl: 150 }}
        icon={
          <img
            src={
              props.userInfo.avatar
                ? props.userInfo.avatar
                : props.userInfo.avatarFile
                ? props.userInfo.avatarFile 
                : require("../../images/profile.png")
            }
          ></img>
        }
      />
      <p style={{ margin: "0", fontSize: "15px" }}>{props.userInfo.username}</p>
      <Row style={{ display: "flex", justifyContent: "center" }}>
        <img
          style={{
            margin: "0",
            marginRight: "5px",
            marginLeft: "5px",
            width: "17px",
            height: "17px",
          }}
          src={require("../../images/people.png")}
          alt="ss"
        />
        <b style={{ fontWeight: "normal", fontSize: "12px" }}>
          {props.userInfo.followersCount} followers
        </b>
      </Row>
    </Card>
  );
};
export default User;
