import User from "./user";
const { List } = require("antd");

const UsersContainer = (props) => {
  const data = [
    {
      title: "Title 1",
    },
    {
      title: "Title 2",
    },
    {
      title: "Title 3",
    },
    {
      title: "Title 4",
    },
    {
      title: "Title 5",
    },
    {
      title: "Title 6",
    },
    {
        title: "Title 7",
      },
  ];
  return (
    <div style={{ marginRight: "30px", marginBottom: "20px" }}>
      <List
        grid={{
          gutter: 10,
          xs: 3,
          sm: 4,
          md: 5,
          lg: 5,
          xl: 5,
          xxl: 3,
        }}
        dataSource={data}
        renderItem={() => (
          <List.Item>
            <User></User>
          </List.Item>
        )}
      />
    </div>
  );
};
export default UsersContainer;
