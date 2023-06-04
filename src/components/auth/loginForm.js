import { Button, Form, Input, Modal } from "antd";
import FormItem from "antd/es/form/FormItem";
import { useState } from "react";
import { CaretLeftOutlined } from "@ant-design/icons";
import { loginThunkCreator } from "../../store/reducers/userReducer";

const LoginForm = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [confirmEmail, setConfirmEmail] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log(props)
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const signIn = () => {
    console.log({ email: email, password: password });
    props.loginThunkCreator({ email: email, password: password })
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal with async logic
      </Button>
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        cancelButtonProps={{ style: { display: "none" } }}
        okButtonProps={{
          style: { display: "none" },
        }}
      >
        <h2 style={{ textAlign: "center" }}>Welcome back!</h2>

        <Form
          layout="vertical"
          style={{ display: confirmEmail ? "none" : "block" }}
        >
          <FormItem>
            <Input
              placeholder="Your email adress or profile url"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            ></Input>
          </FormItem>
          <Button
            style={{
              width: "100%",
              marginBottom: "10px",
              height: "auto",
              backgroundColor: "purple",
              color: "white",
            }}
            onClick={() => setConfirmEmail(true)}
          >
            Continue
          </Button>
        </Form>

        <Form style={{ display: !confirmEmail ? "none" : "block" }}>
          <Button
            style={{
              width: "100%",
              marginBottom: "10px",
              textAlign: "start",
              fontSize: "16px",
              height: "auto",
            }}
            icon={<CaretLeftOutlined />}
            type="text"
            onClick={() => setConfirmEmail(false)}
          >
            {email}
          </Button>
          <FormItem>
            <Input.Password
              placeholder="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            ></Input.Password>
          </FormItem>
          <Button
            style={{
              width: "100%",
              marginBottom: "10px",
              height: "auto",
              backgroundColor: "purple",
              color: "white",
            }}
            onClick={() => {
              signIn();
            }}
          >
            Sign in
          </Button>
        </Form>
      </Modal>
    </>
  );
};

export default LoginForm;
