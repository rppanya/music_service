const { Row, Col, Avatar, Button, Tabs } = require("antd");

const Details = (props) => {
    const items = [
        {
          key: "1",
          label: <b style={{ fontSize: "17px" }}>My tracks</b>,
          children: (
            <Row>
              <Col span={17} style={{ backgroundColor: "" }}>
                {/* //<MyTracks></MyTracks> */}
              </Col>
              {/* //{detailsOwerview} */}
            </Row>
          ),
        }
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
        <Col span={4} style={{ marginLeft: "20px" }}>
          <Avatar
            size={{
              xs: 50,
              sm: 50,
              md: 100,
              lg: 120,
              xl: 120,
              xxl: 150,
            }}
            style={{
              marginTop: "20px",
              marginBottom: "20px",
              boxShadow: "1px 1px 10px 1px rgba(0, 0, 0, .1)",
            }}
            src="https://koshka.top/uploads/posts/2021-12/1638411940_1-koshka-top-p-kota-iz-shreka-s-grustnimi-1.jpg"
          />
        </Col>
        <Col span={2} style={{ marginLeft: "0" }}>
          <p
            style={{
              color: "black",
              width: "max-content",
              fontSize: "30px",
            }}
          >
            Likes by anna
          </p>
        </Col>
      </Row>
      <Tabs
        //tabBarExtraContent={}
        defaultActiveKey="1"
        items={items}
        //onChange={onChange}
      ></Tabs>
    </div>
  );
};

export default Details;
