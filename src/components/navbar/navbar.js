import { Button, Layout, Menu, Input } from "antd";
import LoginFormContainer from "../auth/loginFormContainer";
import RegistrationFormContainer from "../auth/registretionFormContainer";
import { useNavigate } from "react-router-dom";
const { Header } = Layout;

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <Menu
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={["2"]}
      style={{
        backgroundColor: "black",
        display: "flex",
        justifyContent: "flex-end",
        padding: "5px",
        width: "100%"
      }}
    >
      <img src={require("../../images/icon.png")} alt="logo" style={{height: "35px", marginRight: "20px", marginLeft: "20px"}}></img>
      <div
        style={{height: "20px", width: "100%", display: "flex", margin: "0", padding: "0" }}
      >
        <Input.Search style={{ width: "400px" }}></Input.Search>
        <Button type="link" onClick={() => {
          navigate("/profile")
        }}>Home</Button>
      </div>
      <LoginFormContainer></LoginFormContainer>
      <RegistrationFormContainer></RegistrationFormContainer>
    </Menu>
  );
};
export default Navbar;
