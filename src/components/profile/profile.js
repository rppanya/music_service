import ProfileHeader from "./profileHeader";
import ProfileMenu from "./profileMenu";

const Profile = (props) => {
  return (
    <div>
      <ProfileHeader
        username={props.user.user.username}
        name={props.user.user.name}
        surname={props.user.user.surname}
        city={props.user.user.city}
        country={props.user.user.country}
        avatar={props.user.user.avatar}
        avatarBin={props.avatarBin}
        headerImage={props.user.user.headerImage}
        headerImageBin={props.headerImageBin}
        uploadHeaderImageThunkCreator={props.uploadHeaderImageThunkCreator}
        downloadAvatarAndHeaderThunkCreator={
          props.downloadAvatarAndHeaderThunkCreator
        }
        isMyProfile={true}
      />
      <ProfileMenu
        followersCount={props.user.user.followersCount}
        followingCount={props.user.user.followingCount}
        uploadedSongsCount={props.user.user.uploadedSongsCount}
        likesCount={props.user.user.likesCount}
        getUploadedSongsThunkCreator={props.getUploadedSongsThunkCreator}
        uploadedSongs={props.uploadedSongs}
        userId={props.user.user.id}
        userBio={props.user.user.bio}
        following={props.user.user.following}
        isMyProfile={true}
      />
    </div>
  );
};

export default Profile;
