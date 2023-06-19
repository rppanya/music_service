import { Button, Form, Input, Modal, Row, Col, Avatar } from "antd";
import FormItem from "antd/es/form/FormItem";
import { useEffect, useState } from "react";
import { EditOutlined } from "@ant-design/icons";
import Upload from "antd/es/upload/Upload";

const EditProfileForm = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();
  const [file, setFile] = useState(null);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    if (file != null) {
      const formData = new FormData();
      formData.append("file", file);
      props.editProfileThunkCreator(form.getFieldsValue(), formData);
    } else {
      props.editProfileThunkCreator(form.getFieldsValue(), null);
    }

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

  return (
    <>
      <Button icon={<EditOutlined />} onClick={showModal}>
        Редактировать
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
        okText="Сохранить изменения"
        cancelText="Отмена"
      >
        <h2
          style={{
            textAlign: "center",
            borderBottom: "1px solid maroon",
            marginBottom: "20px",
            paddingBottom: "3px",
          }}
        >
          Редактировать профиль
        </h2>

        <Form layout="vertical" form={form}>
          <Row>
            <Col span={8}>
              <Avatar
                size={{ xs: 140, sm: 140, md: 140, lg: 140, xl: 140, xxl: 140 }}
                src={props.user.avatarBin}
              ></Avatar>
              <Upload {...uploadProps}>
                <Button style={{ marginTop: "2px" }} icon={<EditOutlined />}>
                  Выбрать аватар
                </Button>
              </Upload>
            </Col>
            <Col span={16}>
              <FormItem label="Username" name="username">
                <Input
                  placeholder="username"
                  defaultValue={props.user.user.username}
                  initialValue={props.user.user.username}
                ></Input>
              </FormItem>
              <Row style={{ display: "flex", justifyContent: "space-between" }}>
                <Col span={12}>
                  <FormItem
                    layout="inline"
                    label="Имя"
                    name="name"
                    style={{ marginRight: "5px" }}
                  >
                    <Input
                      placeholder="name"
                      defaultValue={props.user.user.name}
                      initialValue={props.user.user.name}
                    ></Input>
                  </FormItem>
                </Col>
                <Col span={12}>
                  <FormItem
                    layout="inline"
                    label="Фамилия"
                    name="surname"
                    style={{ marginLeft: "5px" }}
                  >
                    <Input
                      placeholder="surname"
                      defaultValue={props.user.user.surname}
                      initialValue={props.user.user.surname}
                    ></Input>
                  </FormItem>
                </Col>
              </Row>

              <Row style={{ display: "flex", justifyContent: "space-between" }}>
                <Col span={12}>
                  <FormItem
                    layout="inline"
                    label="Город"
                    name="city"
                    style={{ marginRight: "5px" }}
                  >
                    <Input
                      placeholder="city"
                      defaultValue={props.user.user.city}
                      initialValue={props.user.user.city}

                    ></Input>
                  </FormItem>
                </Col>
                <Col span={12}>
                  <FormItem
                    layout="inline"
                    label="Страна"
                    name="country"
                    style={{ marginLeft: "5px" }}
                  >
                    <Input
                      placeholder="country"
                      defaultValue={props.user.user.country}
                      initialValue={props.user.user.country}

                    ></Input>
                  </FormItem>
                </Col>
              </Row>
              <FormItem label="Bio" name="bio">
                <Input.TextArea
                  placeholder="Описание профиля"
                  defaultValue={props.user.user.bio}
                  штшешфдValue={props.user.user.bio}

                ></Input.TextArea>
              </FormItem>
            </Col>
          </Row>
        </Form>
      </Modal>
    </>
  );
};

export default EditProfileForm;
