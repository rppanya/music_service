import { Avatar, Row, Col } from "antd";

const ProfileHeader = (props) => {
  return (
    <div
      style={{
        backgroundImage:
          "url(https://koshka.top/uploads/posts/2021-12/1638411940_1-koshka-top-p-kota-iz-shreka-s-grustnimi-1.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "max-content",
        marginLeft: "0px",
        marginRight: "0px",
      }}
    >
      <Row>
        <Col span={8} style={{ marginLeft: "20px" }}>
          <Avatar
            size={{
              xs: 100,
              sm: 130,
              md: 220,
              lg: 300,
              xl: 270,
              xxl: 100,
            }}
            style={{
              marginTop: "20px",
              marginBottom: "20px",
              boxShadow: "1px 1px 10px 1px rgba(0, 0, 0, .4)",
            }}
            src="https://koshka.top/uploads/posts/2021-12/1638411940_1-koshka-top-p-kota-iz-shreka-s-grustnimi-1.jpg"
          />
        </Col>
        <Col span={5} style={{ marginLeft: "0" }}>
          <p
            style={{
              backgroundColor: "black",
              color: "white",
              width: "max-content",
              fontSize: "20px",
              marginTop: "50px",
              marginLeft: "20px",
            }}
          >
            name
          </p>
          <p
            style={{
              backgroundColor: "black",
              color: "lightgrey",
              width: "max-content",
              fontSize: "15px",
              marginTop: "10px",
              marginLeft: "20px",
            }}
          >
            Tomsk, Russian Federation
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default ProfileHeader;
