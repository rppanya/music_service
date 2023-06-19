import { Button, Card, Input, List } from "antd";
import Track from "./track";
import { useEffect, useState } from "react";
import TrackContainer from "./trackContainer";
const { Howl, Howler } = require("howler");

const MyTracks = (props) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [data, setData] = useState([]);
  console.log(props);
  const play = () => {
    if (sound.playing()) {
      sound.stop();
      setIsPlaying(false);
    } else {
      sound.play();
      setIsPlaying(true);
    }
    setIsPlaying(!isPlaying);
  };
  var sound = new Howl({
    src: [props.currentPlaying],
    html5: true,
    id: "song",
  });

  useEffect(() => {
    console.log(sound.playing());
    //sound.playing() ? sound.pause() : sound.play();
    isPlaying ? sound.play() : sound.stop();
  }, [isPlaying, props.currentPlaying]);

  useEffect(() => {
    setData(props.songs != [] && !props.songs.isError ? props.songs : []);
    console.log(props.songs);
  }, [props.songs]);

  return (
    <div style={{ marginRight: "10px", marginBottom: "20px" }}>
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
              onClick={() => {
                play(song.id);
              }}
            >
              <TrackContainer song={song}></TrackContainer>
            </div>
          </List.Item>
        )}
      ></List>
    </div>
  );
};

export default MyTracks;
