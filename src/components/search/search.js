import { Tabs, ConfigProvider } from "antd";
import UsersContainer from "../details/usersContainer";
import MyTracks from "../profile/myTracks";

const Search = (props) => {
  return (
    <div style={{ marginLeft: "20px", fontSize: "20px" }}>
      <p style={{ textAlign: "start" }}>Результаты поиска по "aaa"</p>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "purple",
          },
        }}
      >
        <Tabs
          tabPosition="left"
          type="card"
          
          items={[
            {
              label: "Пользователи",
              key: "1",
              children: <UsersContainer></UsersContainer>,
            },
            {
              label: "Песни",
              key: "2",
              children: <MyTracks></MyTracks>,
            },
            
          ]}
        />
      </ConfigProvider>
    </div>
  );
};

export default Search;
