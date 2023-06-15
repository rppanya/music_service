import ProfileHeader from "../profile/profileHeader";
import ProfileMenu from "../profile/profileMenu";
const Author = (props) => {
  return (
    <div>
      <ProfileHeader
        // name={props.user.username}
        // city={props.user.city}
        // country={props.user.country}
        // avatar={props.user.avatar}
        // headerImage={props.user.headerImage}
        // uploadHeaderImageThunkCreator={props.uploadHeaderImageThunkCreator}
      />
      <ProfileMenu
        // followersCount={props.user.followersCount}
        // followingCount={props.user.followingCount}
        // uploadedSongsCount={props.user.uploadedSongsCount}
        // likesCount={props.user.likesCount}
      />
    </div>
  );
};

export default Author
