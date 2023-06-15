import User from "./user";
const { List } = require("antd");

const UsersContainer = (props) => {
  const data = props.users;
  // ? new Array(props.users.length).fill(null).map((element) => {
  //     console.log(element)
  //     const id = element.id;
  //     return {
  //       label: `Tab`,
  //     };
  //   })
  // : null;

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
        renderItem={(element) => (
          <List.Item>
            <User userInfo={element}></User>
          </List.Item>
        )}
      />
    </div>
  );
};
export default UsersContainer;
