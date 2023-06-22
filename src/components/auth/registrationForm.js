import { Button, Form, Input, Modal, Select } from "antd";
import FormItem from "antd/es/form/FormItem";
import { useState, useEffect } from "react";
import { CaretLeftOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
const { Option } = Select;

const RegistrationForm = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [confirmEmail, setConfirmEmail] = useState(false);
  const [email, setEmail] = useState("");
  const [form] = Form.useForm();
  const [emailForm] = Form.useForm();

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

  useEffect(() => {
    if (!props.user.user.isError && !isModalOpen) setIsModalOpen(false);
  }, [props.user.user]);

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Зарегистрироватсья
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
          form={emailForm}
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
            htmlType="submit"
          >
            Продолжить
          </Button>
        </Form>

        <Form
          layout="vertical"
          style={{ display: !confirmEmail ? "none" : "block" }}
          form={form}
          onFinish={() => {
            const data = form.getFieldsValue();
            data.email = email;
            props.registrationThunkCreator(data);
            // setIsModalOpen(false);
          }}
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

          <FormItem
            label="Имя пользователя"
            name="username"
            rules={[
              {
                required: true,
                message: "Поле обязательно для заполнения!",
              },
            ]}
          >
            <Input placeholder="username777"></Input>
          </FormItem>

          <Form.Item
            name="age"
            label="Возраст"
            rules={[
              {
                required: true,
                message: "Поле обязательно для заполнения!",
              },
            ]}
          >
            <Input
              type="number"
              min="0"
              onChange={(e) => {
                e.target.value[0] === "-"
                  ? (e.target.value = form.setFieldValue(
                      "age",
                      e.target.value.substr(1, e.target.value.length)
                    ))
                  : (e.target.value = form.setFieldValue(
                      "age",
                      e.target.value
                    ));
              }}
              value={form.getFieldValue("age")}
            />
          </Form.Item>
          <Form.Item
            name="gender"
            label="Пол"
            rules={[
              {
                required: true,
                message: "Поле обязательно для заполнения!",
              },
            ]}
          >
            <Select
              // placeholder="Select a option and change input text above"
              allowClear
            >
              <Option value="MALE">Мужской</Option>
              <Option value="FEMALE">Женский</Option>
              {/* <Option value="other">other</Option> */}
            </Select>
          </Form.Item>

          <FormItem
            label="Пароль"
            name="password"
            rules={[
              {
                required: true,
                message: "Поле обязательно для заполнения!",
              },
            ]}
          >
            <Input.Password placeholder="password"></Input.Password>
          </FormItem>
          <FormItem
            label="Подтверждение пароля"
            name="confirmPassword"
            rules={[
              {
                required: true,
                message: "Поле обязательно для заполнения!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error("Пароли не совпадают!"));
                },
              }),
            ]}
          >
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
            htmlType="submit"
          >
            Зарегистрироваться
          </Button>
          <p style={{ margin: "0", textAlign: "center", color: "red" }}>
            {props.user.user.isError ? "Ошибка!" : null}
          </p>
        </Form>
      </Modal>
    </>
  );
};

export default RegistrationForm;
