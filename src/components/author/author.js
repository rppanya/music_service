import ProfileHeader from "../profile/profileHeader";
import ProfileMenu from "../profile/profileMenu";
const Author = (props) => {
  console.log(props);
  return (
    <div>
      <ProfileHeader
        isMyProfile={props.user.id === props.user.id}
        name={props.user.name}
        username={props.user.username}
        surname={props.user.surname}
        city={props.user.city}
        country={props.user.country}
        avatar={props.user.avatar}
        avatarBin={props.user.avatarFile}
        headerImageBin={props.user.headerImageFile}
        headerImage={props.user.headerImage}
      />
      <ProfileMenu
        followersCount={props.user.followersCount}
        followingCount={props.user.followingCount}
        uploadedSongsCount={props.user.uploadedSongsCount}
        likesCount={props.user.likesCount}
        getUploadedSongsThunkCreator={props.getUploadedSongsThunkCreator}
        uploadedSongs={props.uploadedSongs}
        userId={props.user.id}
        userBio={props.user.bio}
        following={props.user.following}
        isMyProfile={props.userId === props.user.id}
      />
    </div>
  );
};

export default Author;
