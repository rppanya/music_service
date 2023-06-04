import { Row, Col, Image } from "antd";
import { HeartFilled, WechatFilled } from "@ant-design/icons";

const Track = (props) => {
  return (
    <Row>
      <Col span={7} style={{ height: "max-content", marginTop: "15px" }}>
        <Image
          style={{}}
          width={60}
          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
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
        <p style={{ color: "darkgrey", margin: "0" }}>Name</p>
        <p style={{ margin: "0", color: "black" }}>name2</p>
        <Row styl={{ margin: "0", padding: "0" }}>
          <HeartFilled
            style={{ marginTop: "5px", marginRight: "5px", marginLeft: "0px" }}
          />
          <p style={{ margin: "0", marginRight: "20px" }}>9.86M</p>
          <WechatFilled
            style={{ margin: "5px", marginRight: "8px", marginLeft: "0px" }}
          />
          <p style={{ margin: "0" }}>9.86M</p>
        </Row>
      </Col>
    </Row>
  );
};

export default Track;
