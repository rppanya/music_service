import { Button, Popover, Avatar, List } from "antd";

const Notifications = (props) => {
  console.log(props);
  // {
  //   id: "",
  //   type: "",
  //   text: "",
  //   userId: "",
  //   sendDate: "",
  // },

  const notificationType = {
    "LIKE_SONG": "Лайк",
    "FOLLOW": "Подписка",
  };
  const data = props.notifications;
  const text = <span style={{ color: "purple" }}>Уведомления</span>;
  const content = (
    <div style={{ width: "400px" }}>
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item, index) => (
          <div>
            <p style={{ fontSize: "12px", margin: "0", textAlign: "end" }}>
              {item.sendDate}
            </p>

            <List.Item style={{ marginTop: "0", paddingTop: "0" }}>
              <List.Item.Meta
                // avatar={
                //   <Avatar
                //     src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`}
                //   />
                // }
                title={<a href="https://ant.design">{notificationType[item.type]}</a>}
                description={item.text}
              />
            </List.Item>
          </div>
        )}
      />
    </div>
  );

  const loadNotifications = () => {
    props.getNotificationsThunkCreator();
  };
  return (
    <Popover
      placement="bottomRight"
      title={text}
      content={content}
      trigger="click"
    >
      <Button
        type="link"
        onClick={() => {
          loadNotifications();
        }}
      >
        <img
          src={require("../../images/bell-ring.png")}
          style={{ height: "26px" }}
        ></img>
      </Button>
    </Popover>
  );
};
export default Notifications;
