import { Row, Col, Image } from "antd";
import { HeartFilled, WechatFilled } from "@ant-design/icons";

const Track = (props) => {
  return (
    <Row>
      <Col span={7} style={{ height: "max-content", marginTop: "15px" }}>
        <Image
          style={{ borderRadius: "10px" }}
          width={50}
          preview={false}
          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        />
      </Col>
      <Col
        span={7}
        style={{
          textAlign: "start",
          marginTop: "15px",
          fontSize: "14px",
          color: "darkgrey",
        }}
      >
        <p style={{ color: "darkgrey", margin: "0" }}>Name</p>
        <p style={{ margin: "0", color: "black" }}>name2</p>
      </Col>
      <Col span={10} style={{ color: "darkgrey", lineHeight: "60px", paddingTop: "5px" }}>
        <HeartFilled
          style={{
            marginTop: "5px",
            marginRight: "5px",
            marginLeft: "0px",
          }}
        />
        <b style={{ margin: "0", fontWeight: "normal" }}>9.86M</b>
      </Col>
    </Row>
  );
};

export default Track;
