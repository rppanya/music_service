import { Button, Form, Input, Modal, Row, Col, Avatar } from "antd";
import FormItem from "antd/es/form/FormItem";

import { useState } from "react";
import { EditOutlined } from "@ant-design/icons";
const EditProfileForm = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    props.editProfileThunkCreator(form.getFieldsValue());
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Button icon={<EditOutlined />} onClick={showModal}>
        Edit
      </Button>
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        cancelButtonProps={{ style: {} }}
        okButtonProps={{
          disabled: false,
          style: { backgroundColor: "purple" },
        }}
        okText="Save changes"
      >
        <h2
          style={{
            textAlign: "center",
            borderBottom: "1px solid maroon",
            marginBottom: "20px",
            paddingBottom: "3px",
          }}
        >
          Edit your Profile
        </h2>

        <Form layout="vertical" form={form}>
          <Row>
            <Col span={8}>
              <Avatar
                size={{ xs: 140, sm: 140, md: 140, lg: 140, xl: 140, xxl: 300 }}
                src="https://koshka.top/uploads/posts/2021-12/1638411940_1-koshka-top-p-kota-iz-shreka-s-grustnimi-1.jpg"
              ></Avatar>
              <Button style={{ marginTop: "2px" }} icon={<EditOutlined />}>
                Change avatar
              </Button>
            </Col>
            <Col span={16}>
              <FormItem label="Username" name="username">
                <Input placeholder="username" defaultValue={props.user.user.username}></Input>
              </FormItem>
              <Row style={{ display: "flex", justifyContent: "space-between" }}>
                <Col span={12}>
                  <FormItem
                    layout="inline"
                    label="First name"
                    name="name"
                    style={{ marginRight: "5px" }}
                  >
                    <Input placeholder="name" defaultValue={props.user.user.name}></Input>
                  </FormItem>
                </Col>
                <Col span={12}>
                  <FormItem
                    layout="inline"
                    label="Last name"
                    name="surname"
                    style={{ marginLeft: "5px" }}
                  >
                    <Input placeholder="surname" defaultValue={props.user.user.surname}></Input>
                  </FormItem>
                </Col>
              </Row>

              <Row style={{ display: "flex", justifyContent: "space-between" }}>
                <Col span={12}>
                  <FormItem
                    layout="inline"
                    label="City"
                    name="city"
                    style={{ marginRight: "5px" }}
                  >
                    <Input placeholder="city" defaultValue={props.user.user.city}></Input>
                  </FormItem>
                </Col>
                <Col span={12}>
                  <FormItem
                    layout="inline"
                    label="Country"
                    name="country"
                    style={{ marginLeft: "5px" }}
                  >
                    <Input placeholder="country" defaultValue={props.user.user.country}></Input>
                  </FormItem>
                </Col>
              </Row>
              <FormItem label="Bio" name="bio">
                <Input.TextArea placeholder="bio" defaultValue={props.user.user.bio}></Input.TextArea>
              </FormItem>
            </Col>
          </Row>
        </Form>
      </Modal>
    </>
  );
};

export default EditProfileForm;
