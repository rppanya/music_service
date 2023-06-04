import { Row, Col, Avatar, Button } from "antd";
import {
  HeartFilled,
  WechatFilled,
  AntDesignOutlined,
} from "@ant-design/icons";

const Follower = (props) => {
  return (
    <Row>
      <Col span={7} style={{ height: "max-content", marginTop: "15px" }}>
        <Avatar
          size={{ xs: 24, sm: 32, md: 40, lg: 50, xl: 60, xxl: 70 }}
          icon={<AntDesignOutlined />}
        />
      </Col>
      <Col
        span={15}
        style={{
          textAlign: "start",
          marginTop: "15px",
          fontSize: "14px",
          color: "darkgrey",
        }}
      >
        <p style={{ margin: "0", color: "black" }}>name2</p>
        <Row styl={{ margin: "0", padding: "0" }}>
          <img
            src="https://cdn0.iconfinder.com/data/icons/social-media-glyph-1/64/Facebook_Social_Media_User_Interface-38-512.png"
            style={{ marginTop: "2px", marginRight: "5px", marginLeft: "0px", width: "20px", marginBottom: "2px" }}
          />
          <p style={{ margin: "0", marginRight: "20px", marginTop: "2px" }}>9.86M</p>
          <WechatFilled
            style={{ margin: "5px", marginRight: "8px", marginLeft: "0px", marginTop: "7px", color: "black" }}
          />
          <p style={{ margin: "0", marginTop: "2px" }}>9.86M</p>
          <Button style={{height: "24px", marginRight: "auto", width: "100%", padding: "0", marginBottom: "10px"}}>Following</Button>
        </Row>
      </Col>
    </Row>
  );
};

export default Follower;
