import { FormEvent, useState } from 'react';
import { Header } from '../../components/Header/Header';
import { postAPI } from '../../services/postService';
import classes from './SignIn.module.css';

export function SignIn() {
  const [user, setUser] = useState('');
  const [signInUsers, { isError }] = postAPI.useLazySignInQuery();

  const submitHandler = async (event: FormEvent) => {
    event.preventDefault();
    await signInUsers(user).unwrap();
    setUser('');
    if (isError) {
      alert('User was not found!!!');
    }
  };

  return (
    <div className={classes.wrapper}>
      <Header />
      <div className={classes.form_container}>
        <form className={classes.form}>
          <h1>Sign In</h1>
          <div className={classes.fields}>
            <input
              type="text"
              placeholder="Username Text Field"
              className={classes.input}
              onChange={(event) => setUser(event.target.value)}
            ></input>
            <button className={classes.button} onClick={submitHandler}>
              Send Button
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
