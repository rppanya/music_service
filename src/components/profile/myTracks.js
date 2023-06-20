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
  const play = () => {
    // if (sound.playing()) {
    //   sound.pause();
    //   setIsPlaying(false);
    // } else {
    //   sound.play();
    //   setIsPlaying(true);
    // }
    setIsPlaying(!isPlaying);
  };
  var sound = new Howl({
    src: [props.currentPlaying],
    html5: true,
    id: "song",
  });

  useEffect(() => {
    props.currentPlaying === "" && isPlaying
      ? setLoading(true)
      : setLoading(false);
  }, [isPlaying, props.currentPlaying]);

  useEffect(() => {
    console.log(isPlaying, sound.playing());
    if (isPlaying && !sound.playing()) {
      console.log("play");
      sound.play();
    } else {
      console.log("pause");

      sound.stop();
    }
    //isPlaying ? sound.play() : sound.pause();
  }, [isPlaying, props.currentPlaying]);

  console.log(isPlaying);
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
              onClick={(e) => {
                console.log("songgg");
                play(song.id);
              }}
            >
              <TrackContainer
                song={song}
                // onClick={(e) => {
                //   console.log("songgg")
                //   play(song.id);
                // }}
              ></TrackContainer>
            </div>
          </List.Item>
        )}
      ></List>
    </div>
  );
};

export default MyTracks;
