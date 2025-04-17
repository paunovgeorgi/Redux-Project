import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../store/index';
import classes from './Auth.module.css';

const Auth = () => {

  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get('email')
    dispatch(authActions.login(email));
  }

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={(e) => handleLogin(e)}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' name='email'/>
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
