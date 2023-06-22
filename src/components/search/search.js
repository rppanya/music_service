import { Tabs, ConfigProvider } from "antd";
import UsersContainer from "../details/usersContainer";
import MyTracks from "../profile/myTracks";
import { useLocation } from "react-router-dom";
import React, { useEffect } from "react";

const Search = (props) => {
  const query = useLocation().search;

  return (
    <div style={{ marginLeft: "20px", fontSize: "20px" }}>
      <p style={{ textAlign: "start" }}>
        Результаты поиска по "{props.searchString}"
      </p>

      <Tabs
        tabPosition="left"
        type="card"
        items={[
          {
            label: <b>Пользователи</b>,
            key: "1",
            children: (
              <UsersContainer
                users={props.users}
              ></UsersContainer>
            ),
          },
          {
            label: <b>Песни</b>,
            key: "2",
            children: (
              <MyTracks
                songs={props.songs}
                currentPlaying={props.currentPlaying}
              ></MyTracks>
            ),
          },
        ]}
      />
    </div>
  );
};

export default Search;
