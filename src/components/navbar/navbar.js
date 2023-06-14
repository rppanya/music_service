import React, { useEffect, useState } from "react";

import { Button, Avatar, Menu, Input, Modal } from "antd";
import LoginFormContainer from "../auth/loginFormContainer";
import RegistrationFormContainer from "../auth/registretionFormContainer";
import { useNavigate } from "react-router-dom";

const Navbar = (props) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token")
    ? localStorage.getItem("token")
    : null;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [file, setFile] = useState(null);

  const logout = () => {
    props.logoutThunkCreator();
  };

  const showModal = () => {
    console.log("show");
    setIsModalOpen(true);
  };
  const handleOk = () => {
    const formData = new FormData();
    formData.append("file", file);
    console.log("close");
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    console.log("close4");

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
        <Input.Search style={{ width: "400px" }}></Input.Search>
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
          src="https://koshka.top/uploads/posts/2021-12/1638411940_1-koshka-top-p-kota-iz-shreka-s-grustnimi-1.jpg"
        />
        {props.user.username}
      </Button>
      <Button type="link">
        <img
          src={require("../../images/bell-ring.png")}
          style={{ height: "26px" }}
        ></img>
      </Button>
      <Button type="link" onClick={() => logout()} style={{marginLeft: "10px"}}>
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
  }, [props]);

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
        <Input
          type="file"
          accept="audio/*"
          onInput={(e) => setFile(e.target.value)}
        ></Input>
      </Modal>
    </>
  );
};
export default Navbar;
