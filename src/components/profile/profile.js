import ProfileHeader from "./profileHeader";
import ProfileMenu from "./profileMenu";

const Profile = (props) => {
  console.log(props);
  return (
    <div>
      <ProfileHeader />
      <ProfileMenu />
    </div>
  );
};

export default Profile;
