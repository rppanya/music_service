import { Button, Popover, Badge, List } from "antd";

const Notifications = (props) => {
  const notificationType = {
    LIKE_SONG: "Лайк",
    FOLLOW: "Подписка",
  };

  const data = props.notifications;
  for (let i = 0; i < data.length; i++) {
    const notification = data[i];
    let text = notification.text.split(" ");
    text[1] = `<a href=${notification.perfomerId}>${text[1]}</a>`;
    text[text.length - 1] = `<a href=${notification.userId}>${
      text[text.length - 1]
    }</a>`;

    data[i].text = `<b>${text.join(" ")}</b>`;
  }
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
                title={<b>{notificationType[item.type]}</b>}
                description={
                  <div
                    style={{ margin: "0" }}
                    dangerouslySetInnerHTML={{
                      __html: item.text,
                    }}
                  ></div>
                }
              />
            </List.Item>
          </div>
        )}
      />
    </div>
  );

  const loadNotifications = () => {
    props.getNotificationsThunkCreator();
    props.readNotificationThunkCreator();
  };
  return (
    <Popover
      placement="bottomRight"
      title={text}
      content={content}
      trigger="click"
    >
      <Badge count={props.count} offset={[-10, 7]} size="small">
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
      </Badge>
    </Popover>
  );
};
export default Notifications;
