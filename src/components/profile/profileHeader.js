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
        <Col span={7} style={{ marginLeft: "20px" }}>
          <Avatar
            size={{
              xs: 100,
              sm: 130,
              md: 200,
              lg: 280,
              xl: 250,
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
              backgroundColor: "rgba(0, 0, 0, .8)",
              color: "white",
              width: "max-content",
              fontSize: "30px",
              marginTop: "50px",
              marginLeft: "20px",
              marginBottom: "8px",
              padding: "6px", 
            }}
          >
            name
          </p>
          <p
            style={{
              backgroundColor: "rgba(0, 0, 0, .8)",
              color: "lightgrey",
              width: "max-content",
              fontSize: "15px",
              marginTop: "1px",
              marginLeft: "20px",
              padding: "5px"
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
