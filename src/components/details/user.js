import { Card, Avatar, Row } from "antd";
import { AntDesignOutlined } from "@ant-design/icons";

const User = (props) => {
  return (
    <Card
      style={{ border: "0" }}
      bodyStyle={{ margin: "0", padding: "0" }}
      
    >
      <Avatar
        size={{ xs: 90, sm: 100, md: 120, lg: 150, xl: 180, xxl: 70 }}
        icon={<AntDesignOutlined style={{ margin: "0", padding: "0" }} />}
      />
      <p style={{ margin: "0", fontSize: "15px" }}>name</p>
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
        <b style={{ fontWeight: "normal", fontSize: "12px" }}>120 followers</b>
      </Row>
    </Card>
  );
};
export default User;
