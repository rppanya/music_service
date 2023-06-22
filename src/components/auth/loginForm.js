import { Button, Form, Input, Modal } from "antd";
import FormItem from "antd/es/form/FormItem";
import { useEffect, useState } from "react";
import { CaretLeftOutlined } from "@ant-design/icons";
import { loginThunkCreator } from "../../store/reducers/userReducer";
import { useNavigate } from "react-router-dom";

const LoginForm = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [confirmEmail, setConfirmEmail] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    setIsModalOpen(props.open);
  }, []);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const navigate = useNavigate();

  useEffect(() => {
    if (!props.user.user.isError && !isModalOpen) setIsModalOpen(false);
  }, [props.user.user]);

  const signIn = () => {
    props.loginThunkCreator({ email: email, password: password });
   // setIsModalOpen(false);
  };

  const [form] = Form.useForm();

  return (
    <>
      <Button type="link" style={{ color: "white" }} onClick={showModal}>
        Войти
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
        <h2 style={{ textAlign: "center" }}>Добро пожаловать!</h2>

        <Form
          layout="vertical"
          form={form}
          style={{ display: confirmEmail ? "none" : "block" }}
          onFinish={() => setConfirmEmail(true)}
        >
          <FormItem
            name="email"
            rules={[
              {
                required: true,
                type: "email",
                message: "Введите email!",
              },
            ]}
          >
            <Input
              placeholder="example@example.com"
              onInput={(e) => {
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
            htmlType="submit"
          >
            Продолжить
          </Button>
        </Form>

        <Form
          style={{ display: !confirmEmail ? "none" : "block" }}
          onFinish={() => {
            signIn();
          }}
        >
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
          <FormItem
            name="password"
            rules={[
              {
                required: true,
                message: "Введите пароль!",
              },
            ]}
          >
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
            htmlType="submit"
          >
            Войти
          </Button>
          <p style={{ margin: "0", textAlign: "center", color: "red" }}>
            {props.user.user.isError ? "Неправильный email или пароль!" : null}
          </p>
        </Form>
      </Modal>
    </>
  );
};

export default LoginForm;
