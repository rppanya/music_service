import ProfileHeader from "../profile/profileHeader";
import ProfileMenu from "../profile/profileMenu";
const Author = (props) => {
  console.log(props);
  return (
    <div>
      <ProfileHeader
        isMyProfile={props.isMyProfile}
        name={props.user.anotherUser.name}
        username={props.user.anotherUser.username}
        surname={props.user.anotherUser.surname}
        city={props.user.anotherUser.city}
        country={props.user.anotherUser.country}
        avatar={props.user.anotherUser.avatar}
        avatarBin={props.user.anotherUser.avatarFile}
        headerImageBin={props.user.anotherUser.headerImageFile}
        headerImage={props.user.anotherUser.headerImage}
      />
      <ProfileMenu
        followersCount={props.user.anotherUser.followersCount}
        followingCount={props.user.anotherUser.followingCount}
        uploadedSongsCount={props.user.anotherUser.uploadedSongsCount}
        likesCount={props.user.anotherUser.likesCount}
        getUploadedSongsThunkCreator={props.getUploadedSongsThunkCreator}
        uploadedSongs={props.uploadedSongs}
        userId={props.user.anotherUser.id}
        userBio={props.user.anotherUser.bio}
        isMyProfile={false}
      />
    </div>
  );
};

export default Author;
