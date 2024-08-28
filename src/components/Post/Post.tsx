import { PostItem } from '../../interfaces/responce.interface';
import classes from './Post.module.css';

export function Post({ post }: { post: PostItem }) {
  return (
    <div className={classes.post}>
      <div className={classes.post__img}></div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
}
