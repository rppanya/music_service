import { Avatar, Row, Col, Button, Modal, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { musicServiceApi } from "../../api/musicServiceApi";

const ProfileHeader = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [file, setFile] = useState(null);
  const [avatar, setAvatar] = useState(null);
  const [headerImage, setHeaderImage] = useState(null);

  console.log(props);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    const formData = new FormData();
    formData.append("file", file);
    //props.downloadAvatarAndHeaderThunkCreator(props.avatar, props.headerImage);
    props.uploadHeaderImageThunkCreator(formData);
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const uploadProps = {
    name: "file",
    onChange(info) {
      setFile(info.file.originFileObj);
    },
  };

  useEffect(() => {
    if (props.headerImage) {
      musicServiceApi.files.downloadFile(props.headerImage).then((data) => {
        setHeaderImage(data);
      });
    }
    if (props.avatar) {
      musicServiceApi.files.downloadFile(props.avatar).then((data) => {
        setAvatar(data);
      });
    } else {
      setAvatar(require("../../images/profile.png"));
    }
  });

  return (
    <div
      style={{
        backgroundColor: "darkgrey",
        backgroundImage: `url(${headerImage})`,
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
              backgroundColor: "white",
            }}
            src={avatar}
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
            <Upload {...uploadProps}>
              <Button icon={<UploadOutlined></UploadOutlined>}>
                Загрузить
              </Button>
            </Upload>
          </Modal>
        </Col>
      </Row>
    </div>
  );
};

export default ProfileHeader;
