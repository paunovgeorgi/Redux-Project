import { useSelector } from 'react-redux';
import classes from './UserProfile.module.css';

const UserProfile = () => {
  const usernamne = useSelector(state => state.auth.username);

  return (
    <main className={classes.profile}>
      <h2>My User Profile</h2>
      <h3>{usernamne}</h3>
    </main>
  );
};

export default UserProfile;
