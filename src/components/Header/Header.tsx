import { useStore } from 'react-redux';
import classes from './Header.module.css';

export function Header() {
  const data = useStore<string>().getState()['postAPI']['queries'];
  const isLogin = Object.keys(data).find((item) => item.includes('signIn'));

  return (
    <div className={classes.wrapper}>
      <h2 className={classes.logo}>Best Application</h2>
      <button className={classes.button}>{isLogin ? 'Sign Out' : 'Sign In'}</button>
    </div>
  );
}
