import { Avatar, Row, Col, Button, Modal, Input } from "antd";
import { EditOutlined } from "@ant-design/icons";
import { useState } from "react";

const ProfileHeader = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [file, setFile] = useState(null);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    const formData = new FormData();
    formData.append("file", file);

    props.uploadHeaderImageThunkCreator(formData);
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

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
        <Col span={15} style={{ marginLeft: "0" }}>
          <p
            style={{
              backgroundColor: "rgba(0, 0, 0, .7)",
              color: "white",
              width: "max-content",
              fontSize: "30px",
              marginTop: "50px",
              marginLeft: "20px",
              marginBottom: "8px",
              padding: "6px",
            }}
          >
            {props.name}
          </p>
          <p
            style={{
              backgroundColor: "rgba(0, 0, 0, .7)",
              color: "lightgrey",
              width: "max-content",
              fontSize: "15px",
              marginTop: "1px",
              marginLeft: "20px",
              padding: "5px",
            }}
          >
            {props.city && props.country
              ? `${props.city}, ${props.country}`
              : "City, Country"}
          </p>
        </Col>
        <Col
          style={{
            marginRight: "0",
            display: "flex",
            alignItems: "flex-end",
            marginBottom: "10px",
          }}
        >
          <Button
            style={{
              color: "white",
              marginTop: "4px",
            }}
            type="link"
            onClick={showModal}
          >
            <img
              src={require("../../images/camera.png")}
              style={{ width: "25px" }}
            ></img>
          </Button>
          <Modal
            title="Изменить фон"
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <Input
              type="file"
              accept="image/*"
              onInput={(e) => setFile(e.target.value)}
            ></Input>
          </Modal>
        </Col>
      </Row>
    </div>
  );
};

export default ProfileHeader;
