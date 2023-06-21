import { Button, Popover, Avatar, List } from "antd";

const Notifications = (props) => {
  console.log(props);
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
    console.log(`<p >${text.join(" ")}</p>`);
  
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
                // avatar={
                //   <Avatar
                //     src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`}
                //   />
                // }
                title={<b>{notificationType[item.type]}</b>}
                description={
                  <div
                  style={{margin: "0"}}
                    dangerouslySetInnerHTML={{
                      __html: `${item.text}`,
                    }}
                  ></div>
                }
              />
              {/* {console.log(item.text.split(" ")[1] = "a")} */}
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
