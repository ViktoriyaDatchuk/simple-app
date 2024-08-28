import classes from './Header.module.css';

export function Header() {
  return (
    <div className={classes.wrapper}>
      <h1 className={classes.logo}>Best Application</h1>
      <button className={classes.button}>Sign In</button>
    </div>
  );
}
