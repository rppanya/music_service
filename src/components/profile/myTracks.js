import { Button, Card, Input } from "antd";
import Track from "./track";
import { useEffect } from "react";

const MyTracks = (props) => {
  useEffect(() => {
    props.getUploadedSongsThunkCreator(props.userId);
  }, []);
  console.log(props);
  return (
    <div style={{ marginRight: "10px", marginBottom: "20px" }}>
      {props.songs
        ? props.songs.map((song) => {
            return <Track song={song}></Track>;
          })
        : null}
    </div>
  );
};

export default MyTracks;
