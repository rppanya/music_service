import { Row, Col, Image, Button, Card } from "antd";
import {
  HeartFilled,
  WechatFilled,
  PlayCircleOutlined,
} from "@ant-design/icons";

const Track = (props) => {
  return (
    <Card
      style={{ border: "0", margin: "5px" }}
      bodyStyle={{ margin: "0", padding: "0", border: "0" }}
      hoverable
    >
      <Row
        style={{
          borderRadius: "10px",
          marginTop: "0",
        }}
      >
        <Col span={3} style={{ height: "max-content", marginTop: "10px" }}>
          <Image
            style={{ borderRadius: "10px" }}
            width={60}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            preview={false}
          />
        </Col>
        <Col
          span={10}
          style={{
            lineHeight: "75px",
            fontSize: "17px",
            color: "purple",
            textAlign: "start",
          }}
        >
          name
        </Col>
        <Col
          span={9}
          style={{
            lineHeight: "75px",
            fontSize: "15px",
            color: "purple",
            textAlign: "start",
          }}
        >
          name
        </Col>
        <Col span={2} style={{ paddingRight: "10px" }}>
          <HeartFilled
            style={{
              marginTop: "18px",

              color: "darkGrey",
              fontSize: "17px",
            }}
          />
          <p style={{ margin: "0", padding: "0", color: "darkgray" }}>9.86M</p>
        </Col>
      </Row>
    </Card>
  );
};

export default Track;
