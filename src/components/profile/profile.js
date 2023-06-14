import ProfileHeader from "./profileHeader";
import ProfileMenu from "./profileMenu";

const Profile = (props) => {
  return (
    <div>
      <ProfileHeader
        name={props.user.username}
        city={props.user.city}
        country={props.user.country}
        avatar={props.user.avatar}
        headerImage={props.user.headerImage}
        uploadHeaderImageThunkCreator={props.uploadHeaderImageThunkCreator}
      />
      <ProfileMenu
        followersCount={props.user.followersCount}
        followingCount={props.user.followingCount}
        uploadedSongsCount={props.user.uploadedSongsCount}
        likesCount={props.user.likesCount}
         />
    </div>
  );
};

export default Profile;
