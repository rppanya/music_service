import User from "./user";
import { connect } from "react-redux";

const { List } = require("antd");

const Users = (props) => {
  const data = props.users;
  return (
    <div style={{ marginRight: "30px", marginBottom: "20px" }}>
      <List
        grid={{
          gutter: 10,
          xs: 3,
          sm: 4,
          md: 4,
          lg: 4,
          xl: 5,
          xxl: 5,
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

function mapStateToProps(state) {
  return {
    follow: state.follow 
  }
}

const UsersContainer = connect(mapStateToProps)(Users)

export default UsersContainer;
