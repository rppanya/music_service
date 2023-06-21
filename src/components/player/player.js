import useSound from "use-sound";
import music from "./maksim-nauchus-letat.mp3";
import { useEffect, useState } from "react";
import "./player.css";
import { Howl } from "howler";
import {
  HeartFilled,
  PauseOutlined,
  CaretRightOutlined,
  VerticalAlignBottomOutlined,
} from "@ant-design/icons";
import { Avatar, Row, Button, Col } from "antd";

const Player = (props) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [play, { pause, duration, sound }] = useSound(
    props.currentPlaying.file ? props.currentPlaying.file : music
  );
  useEffect(() => {
    if (!props.userId) {
      pause();
      setIsPlaying(false);
    }
  }, [props.userId]);

  const playingButton = () => {
    if (isPlaying) {
      pause();
      setIsPlaying(false);
    } else {
      play();
      setIsPlaying(true);
    }
  };

  const [currTime, setCurrTime] = useState({
    min: "",
    sec: "",
  });

  const [seconds, setSeconds] = useState(); // текущая позиция звука в секундах

  const sec = duration / 1000;
  const min = Math.floor(sec / 60);
  const secRemain = Math.floor(sec % 60);
  const time = {
    min: min,
    sec: secRemain,
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (sound) {
        setSeconds(sound.seek([])); // устанавливаем состояние с текущим значением в секундах
        const min = Math.floor(sound.seek([]) / 60);
        const sec = Math.floor(sound.seek([]) % 60);
        setCurrTime({
          min,
          sec,
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [sound]);

  const like = () => {
    props.currentPlaying.liked
      ? props.deleteLikeThunkCreator(props.currentPlaying.id, props.userId)
      : props.addLikeThunkCreator(props.currentPlaying.id, props.userId);
  };

  return (
    <>
      <Row>
        <input
          type="range"
          min="0"
          max={duration / 1000}
          default="0"
          value={seconds}
          style={{ width: "100%", height: "3px" }}
          onChange={(e) => {
            sound.seek([e.target.value]);
          }}
        />
      </Row>
      <Row>
        <Col span={4}>
          <Button
            type="text"
            style={{
              margin: "0",
              padding: "0",
              color: "purple",
              //marginLeft: "100px",
              width: "auto",
              height: "auto",
              marginTop: "10px",
            }}
            icon={
              !isPlaying ? (
                <CaretRightOutlined style={{ fontSize: "40px" }} />
              ) : (
                <PauseOutlined style={{ fontSize: "40px" }} />
              )
            }
            onClick={playingButton}
          ></Button>
        </Col>
        <Col span={2}>
          {" "}
          <Avatar
            size={50}
            src={props.currentPlaying.cover}
            style={{
              margin: "5px",
              padding: "0",
              //marginLeft: "100px"
            }}
          ></Avatar>
        </Col>

        <Col span={4}>
          <p
            style={{
              margin: "0",
              //marginLeft: "20px",
              marginTop: "12px",
              padding: "0",
              fontSize: "15px",
              fontWeight: "bold",
            }}
          >
            {props.currentPlaying.name}
          </p>
          <p
            style={{
              margin: "0",
              marginLeft: "-5px",
              padding: "0",
              fontSize: "13px",
              color: "purple",
            }}
          >
            {props.currentPlaying.authorUsername}
          </p>
        </Col>
        <Col
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginRight: "0",
            width: "auto",
          }}
          span={14}
        >
          <Button
            type="link"
            style={{ marginTop: "12px" }}
            onClick={() => {
              like();
            }}
          >
            <HeartFilled
              style={{
                marginRight: "35px",
                color: props.currentPlaying.liked ? "purple" : "darkgray",
                fontSize: "22px",
              }}
              hoverable
            />
          </Button>
          {/* <img
            style={{
              marginTop: "15px",
              marginRight: "25px",
              color: "purple",
              fontSize: "22px",
              height: "26px",
            }}
            hoverable
            src={require("../../images/medium-volume.png")}
          ></img> */}
          <Button
            type="link"
            style={{ marginTop: "12px" }}
            download={`${props.currentPlaying.name}.mp4`}
            href={props.currentPlaying.file}
          >
            <VerticalAlignBottomOutlined
              style={{
                marginRight: "25px",
                color: "purple",
                fontSize: "22px",
              }}
              hoverable
            ></VerticalAlignBottomOutlined>
          </Button>
        </Col>
      </Row>
    </>
  );
};
export default Player;
