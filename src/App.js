import logo from './logo.svg';
import './App.css';
// import RegistrationForm from './components/auth/registrationForm';
// import EditProfileForm from './components/profile/editProfileForm';
// import ProfileHeader from './components/profile/profileHeader';
// import ProfileMenu from './components/profile/profileMenu';
import LoginForm from './components/auth/loginForm';
import LoginFormContainer from './components/auth/loginFormContainer';
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <LoginFormContainer></LoginFormContainer>
    </div>
  );
}


const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppWrapper;
