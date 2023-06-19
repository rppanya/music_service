import { Button, Form, Input, Modal, Select } from "antd";
import FormItem from "antd/es/form/FormItem";
import { useState } from "react";
import { CaretLeftOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
const { Option } = Select;

const RegistrationForm = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [confirmEmail, setConfirmEmail] = useState(false);
  const [email, setEmail] = useState("");
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setConfirmEmail(false);
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setConfirmEmail(false);
    setIsModalOpen(false);
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Create account
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
        <h2 style={{ textAlign: "center" }}>Создать новый аккаунт</h2>

        <Form
          layout="vertical"
          style={{ display: confirmEmail ? "none" : "block" }}
        >
          <FormItem>
            <Input
              placeholder="Your email adress"
              onInput={(e) => setEmail(e.target.value)}
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
            Продолжить
          </Button>
        </Form>

        <Form
          layout="vertical"
          style={{ display: !confirmEmail ? "none" : "block" }}
          form={form}
        >
          <Button
            style={{
              width: "100%",
              marginBottom: "15px",
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

          <FormItem label="Username" name="username">
            <Input placeholder="username"></Input>
          </FormItem>

          <Form.Item name="age" label="Возраст">
            <Input type="number" />
          </Form.Item>
          <Form.Item name="gender" label="Пол">
            <Select
              // placeholder="Select a option and change input text above"
              allowClear
            >
              <Option value="MALE">Мужской</Option>
              <Option value="FEMALE">Женский</Option>
              {/* <Option value="other">other</Option> */}
            </Select>
          </Form.Item>

          <FormItem label="Пароль" name="password">
            <Input.Password placeholder="password"></Input.Password>
          </FormItem>
          <FormItem label="Подтверждение пароля" name="confirmPassword">
            <Input.Password placeholder="password"></Input.Password>
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
              const data = form.getFieldsValue();
              data.email = email;
              //console.log(data);
              props.registrationThunkCreator(data);
              setIsModalOpen(false);
            }}
          >
            Зарегистрироваться
          </Button>
        </Form>
      </Modal>
    </>
  );
};

export default RegistrationForm;
