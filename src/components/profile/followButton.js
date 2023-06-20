import { Button } from "antd";

const FollowButton = (props) => {
  console.log(props);
  return props.following ? (
    <Button
      onClick={() => {
        console.log("unfollow");
        props.unfollowThunkCreator(props.userId);
      }}
      danger
      type="text"
    >
      Отписаться
    </Button>
  ) : (
    <Button
      onClick={() => {
        console.log("follow");

        props.followThunkCreator(props.userId);
      }}
      type="text"
    >
      Подписаться
    </Button>
  );
};

export default FollowButton;
