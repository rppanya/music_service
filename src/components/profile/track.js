import { Row, Col, Image, Button, Card } from "antd";
import {
  HeartFilled,
  PauseOutlined,
  CaretRightOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { useEffect, useState } from "react";
import { Howl, Howler } from "howler";
import { useNavigate } from "react-router-dom";

const Track = (props) => {
  const navigate = useNavigate();
  const [play, setPlay] = useState(false);
  console.log(props);

  const playSong = () => {
    setPlay(!play);
    if (!props.song.file) {
      props.getAudioThunkCreator(props.song.fileId, props.song.id, true);
    }
  };
  const like = () => {
    props.song.liked
      ? props.deleteLikeThunkCreator(props.song.id, props.userId)
      : props.addLikeThunkCreator(props.song.id, props.userId);
  };

  const deleteSong = () => {
    props.deleteSongThunkCreator(props.song.id, props.userId);
  };

  return (
    <Card
      style={{ border: "0", marginTop: "5px", cursor: "default" }}
      bodyStyle={{ margin: "0", padding: "0", border: "0" }}
      hoverable
    >
      <Row
        style={{
          borderRadius: "10px",
          marginTop: "0",
        }}
      >
        <Col
          span={4}
          style={{ height: "max-content", marginTop: "0px", display: "flex" }}
        >
          <Image
            style={{ borderRadius: "50%", objectFit: "cover" }}
            width={50}
            height={50}
            src={props.song.cover}
            preview={false}
          />
        </Col>
        <Col
          span={9}
          style={{
            lineHeight: "45px",
            fontSize: "17px",
            color: "purple",
            textAlign: "start",
          }}
        >
          {props.song.name}
        </Col>
        <Col
          span={props.song.authorId === props.userId ? 6 : 8}
          style={{
            lineHeight: "45px",
            fontSize: "15px",
            color: "purple",
            textAlign: "start",
          }}
        >
          <Button
            type="link"
            style={{ color: "purple" }}
            onClick={(e) => { 
              e.preventDefault();
              e.stopPropagation();
              navigate(`/${props.song.authorId}`);
            }}
          >
            {props.song.authorUsername}
          </Button>
        </Col>
        <Col span={3} style={{ paddingRight: "10px" }}>
          <HeartFilled
            style={{
              marginTop: "15px",
              marginRight: "5px",
              color: props.song.liked ? "purple" : "darkGrey",
              fontSize: "17px",
            }}
            hoverable
            onClick={() => {
              like();
            }}
          />
          <b
            style={{
              margin: "0",
              padding: "0",
              color: "darkgray",
              fontWeight: "normal",
            }}
          >
            {props.song.likesCount}
          </b>
        </Col>
        <Col
          span={2}
          style={{
            display: props.song.authorId === props.userId ? "block" : "none",
          }}
        >
          <DeleteOutlined
            style={{
              marginTop: "15px",
              color: "darkGrey",
              fontSize: "17px",
            }}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              deleteSong();
            }}
          />
        </Col>
        <Button
          icon={
            !play ? (
              <CaretRightOutlined style={{ fontSize: "40px" }} />
            ) : (
              <PauseOutlined style={{ fontSize: "40px" }} />
            )
          }
          style={{
            position: "absolute",
            color: "white",
            fontSize: "20px",
            left: "5px",
            opacity: "80%",
            //zIndex: "-1"
          }}
          onClick={() => {
            playSong();
          }}
          type="link"
        ></Button>
      </Row>
    </Card>
  );
};

export default Track;
