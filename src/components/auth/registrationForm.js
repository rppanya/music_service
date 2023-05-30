import { Button, Form, Input, Modal, Select } from "antd";
import FormItem from "antd/es/form/FormItem";
import { useState } from "react";
import { CaretLeftOutlined } from "@ant-design/icons";
const { Option } = Select;

const RegistrationForm = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [confirmEmail, setConfirmEmail] = useState(false);
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
        <h2 style={{ textAlign: "center" }}>Create your account</h2>

        <Form
          layout="vertical"
          style={{ display: confirmEmail ? "none" : "block" }}
        >
          <FormItem>
            <Input placeholder="Your email adress or profile url"></Input>
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

        <Form
          layout="vertical"
          style={{ display: !confirmEmail ? "none" : "block" }}
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
            merpp
          </Button>

          <Form.Item name="age" label="Age">
            <Input />
          </Form.Item>
          <Form.Item name="gender" label="Gender">
            <Select
              placeholder="Select a option and change input text above"
              allowClear
            >
              <Option value="male">male</Option>
              <Option value="female">female</Option>
              <Option value="other">other</Option>
            </Select>
          </Form.Item>

          <FormItem label="Password">
            <Input.Password placeholder="password"></Input.Password>
          </FormItem>
          <FormItem label="Confirm password">
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
          >
            Sign up
          </Button>
        </Form>
      </Modal>
    </>
  );
};

export default RegistrationForm;
