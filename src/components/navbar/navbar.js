import React, { useEffect, useState } from "react";
import { Button, Avatar, Menu, Input, Modal, Form } from "antd";
import LoginFormContainer from "../auth/loginFormContainer";
import RegistrationFormContainer from "../auth/registretionFormContainer";
import { useNavigate } from "react-router-dom";
import Upload from "antd/es/upload/Upload";
import TextArea from "antd/es/input/TextArea";
import FormItem from "antd/es/form/FormItem";

const Navbar = (props) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token")
    ? localStorage.getItem("token")
    : null;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [song, setSong] = useState(null);
  const [cover, setCover] = useState(null);
  const [form] = Form.useForm();

  const logout = () => {
    props.logoutThunkCreator();
  };

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    const formDataSong = new FormData();
    const formDataCover = new FormData();
    formDataSong.append("file", song);
    formDataCover.append("file", cover);

    props.addSongThunkCreator(
      form.getFieldsValue(),
      props.user.user.id,
      formDataSong,
      formDataCover
    );

    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const authorizeMenu = (
    <Menu
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={["2"]}
      style={{
        backgroundColor: "black",
        display: "flex",
        justifyContent: "flex-end",
        padding: "5px",
        width: "100%",
      }}
    >
      <img
        src={require("../../images/icon.png")}
        alt="logo"
        style={{ height: "35px", marginRight: "20px", marginLeft: "20px" }}
      ></img>
      <div
        style={{
          height: "20px",
          width: "100%",
          display: "flex",
          margin: "0",
          padding: "0",
        }}
      >
        <Input.Search
          style={{ width: "400px" }}
          onSearch={(value) => {
            if (value) {
              navigate(`/search?searchString=${value}`);
            }
          }}
        ></Input.Search>
      </div>
      <Button type="link" onClick={showModal} style={{ color: "white" }}>
        <img
          src={require("../../images/upload.png")}
          style={{ height: "26px" }}
        ></img>
      </Button>

      <Button
        type="link"
        onClick={() => {
          navigate("/profile");
        }}
        style={{ margin: "0", padding: "0" }}
      >
        <Avatar
          size={34}
          style={{
            margin: "0",
            boxShadow: "1px 1px 10px 1px rgba(0, 0, 0, .4)",
          }}
          src={props.avatarBin ? props.avatarBin : require("../../images/profile.png")}
        />
      </Button>
      <Button type="link">
        <img
          src={require("../../images/bell-ring.png")}
          style={{ height: "26px" }}
        ></img>
      </Button>
      <Button
        type="link"
        onClick={() => logout()}
        style={{ marginLeft: "10px" }}
      >
        <img
          src={require("../../images/logout.png")}
          style={{ height: "24px" }}
        ></img>
      </Button>
    </Menu>
  );
  const unauthorizeMenu = (
    <Menu
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={["2"]}
      style={{
        backgroundColor: "black",
        display: "flex",
        justifyContent: "flex-end",
        padding: "5px",
        width: "100%",
      }}
    >
      <img
        src={require("../../images/icon.png")}
        alt="logo"
        style={{ height: "35px", marginRight: "20px", marginLeft: "20px" }}
      ></img>
      <div
        style={{
          height: "20px",
          width: "100%",
          display: "flex",
          margin: "0",
          padding: "0",
        }}
      >
        <Input.Search style={{ width: "400px" }}></Input.Search>
      </div>
      <LoginFormContainer></LoginFormContainer>
      <RegistrationFormContainer></RegistrationFormContainer>
    </Menu>
  );

  const [currentMenu, setMenu] = useState(<></>);
  useEffect(() => {
    if (token) {
      setMenu(authorizeMenu);
    } else {
      setMenu(unauthorizeMenu);
      navigate("/");
    }
  }, [props, token]);
  console.log(props)

  useEffect(() => {
    if (token) {
      props.getProfileInfoThunkCreator();
    }
  }, []);

  return (
    <>
      {currentMenu}
      <Modal
        title="Загрузить музыку"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form form={form}>
          <Upload
            type="file"
            accept="audio/*"
            onChange={(e) => {
              //console.log(e);
              setSong(e.file.originFileObj);
            }}
          >
            <Button style={{ marginBottom: "20px" }}>Загрузить песню</Button>
          </Upload>
          <Upload
            type="file"
            accept="image/*"
            onChange={(e) => {
              //console.log(e);
              setCover(e.file.originFileObj);
            }}
          >
            <Button style={{ marginBottom: "20px" }}>Загрузить обложку</Button>
          </Upload>
          <FormItem label="Название" name="name">
            <Input></Input>
          </FormItem>
          <FormItem label="Описание" name="description">
            <TextArea></TextArea>
          </FormItem>
        </Form>
      </Modal>
    </>
  );
};
export default Navbar;
