import logo from './logo.svg';
import './App.css';
import LoginForm from './components/auth/loginForm';
import RegistrationForm from './components/auth/registrationForm';
import EditProfileForm from './components/profile/editProfileForm';

function App() {
  return (
    <div className="App">
      Hello
      <EditProfileForm></EditProfileForm>
    </div>
  );
}

export default App;
