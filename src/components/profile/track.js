import { Row, Col, Image, Button } from "antd";
import {
  HeartFilled,
  WechatFilled,
  PlayCircleOutlined,
} from "@ant-design/icons";

const Track = (props) => {
  return (
    <Row
      style={{
        border: "solid 1px darkgrey",
        borderRadius: "10px",
        marginTop: "15px",
      }}
    >
      <Col span={3} style={{ height: "max-content", marginTop: "10px" }}>
        <Image
          style={{}}
          width={60}
          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        />
      </Col>
      <Col
        span={18}
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
      <Col span={3}>
        <Button style={{width: "20px", marginTop: "15px"}} icon={<PlayCircleOutlined style={{ fontSize: "40px"}} />} type="link"></Button>
      </Col>
    </Row>
  );
};

export default Track;
