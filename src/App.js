import logo from "./logo.svg";
import "./App.css";
//import LoginForm from './components/auth/loginForm';
//import RegistrationForm from './components/auth/registrationForm';
import EditProfileForm from "./components/profile/editProfileForm";
import ProfileHeader from "./components/profile/profileHeader";
import ProfileMenu from "./components/profile/profileMenu";
import { Card } from "antd";

function App() {
  return (
    <div className="App" style={{}}>
      <div style={{marginLeft: "120px", marginRight: "120px", backgroundColor: "white"}}>
        <ProfileHeader></ProfileHeader>
        <ProfileMenu></ProfileMenu>
      </div>
    </div>
  );
}

export default App;
