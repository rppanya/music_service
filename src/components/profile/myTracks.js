import { Button, Card, Spin, List } from "antd";
import Track from "./track";
import { useEffect, useState } from "react";
import TrackContainer from "./trackContainer";
const { Howl, Howler } = require("howler");

const MyTracks = (props) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  console.log(props);

  useEffect(() => {
    setData(props.songs != [] && !props.songs.isError ? props.songs : []);
    console.log(props.songs);
  }, [props.songs]);

  return (
    <div style={{ marginRight: "10px", marginBottom: "20px" }}>
      <Spin spinning={loading}></Spin>
      <List
        grid={{
          gutter: 1,
          xs: 1,
          sm: 1,
          md: 1,
          lg: 1,
          xl: 1,
          xxl: 1,
        }}
        dataSource={data}
        renderItem={(song) => (
          <List.Item style={{ margin: 0 }}>
            <div
              
            >
              <TrackContainer
                song={song}
                isPlaying = {song.id === props.currentPlaying.id}
              ></TrackContainer>
            </div>
          </List.Item>
        )}
      ></List>
    </div>
  );
};

export default MyTracks;
