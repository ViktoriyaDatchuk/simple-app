import { useStore } from 'react-redux';
import classes from './Header.module.css';
import { useNavigate } from 'react-router-dom';
import { postAPI } from '../../services/postService';

export function Header() {
  const data = useStore<string>().getState()['postAPI']['queries'];
  const isLogin = Object.keys(data).find((item) => item.includes('signIn'));
  const navigate = useNavigate();
  const user = useStore();

  const clickHandler = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    if (!isLogin) {
      navigate('/signIn');
    } else {
      user.dispatch(postAPI.util.invalidateTags(['signIn']));
    }
  };

  const logoClickHandler = () => {
    navigate('/');
  };

  return (
    <div className={classes.wrapper}>
      <h2 className={classes.logo} onClick={logoClickHandler}>
        Best Application
      </h2>
      <button className={classes.button} onClick={clickHandler}>
        {isLogin ? 'Sign Out' : 'Sign In'}
      </button>
    </div>
  );
}
