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
        avatarBin={props.avatarBin}
        headerImage={props.user.headerImage}
        headerImageBin={props.headerImageBin}
        uploadHeaderImageThunkCreator={props.uploadHeaderImageThunkCreator}
        downloadAvatarAndHeaderThunkCreator={
          props.downloadAvatarAndHeaderThunkCreator
        }
      />
      <ProfileMenu
        followersCount={props.user.followersCount}
        followingCount={props.user.followingCount}
        uploadedSongsCount={props.user.uploadedSongsCount}
        likesCount={props.user.likesCount}
        getUploadedSongsThunkCreator={props.getUploadedSongsThunkCreator}
        uploadedSongs={props.uploadedSongs}
        userId={props.user.id}
      />
    </div>
  );
};

export default Profile;
