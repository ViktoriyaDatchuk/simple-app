import classes from './Header.module.css';

export function Header() {
  return (
    <div className={classes.wrapper}>
      <h2 className={classes.logo}>Best Application</h2>
      <button className={classes.button}>Sign In</button>
    </div>
  );
}
