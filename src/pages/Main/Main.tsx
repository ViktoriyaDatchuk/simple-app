import { PostItem } from '../../interfaces/responce.interface';
import { Post } from '../../components/Post/Post';
import { Header } from '../../components/Header/Header';
import classes from './Main.module.css';
import { postAPI } from '../../services/postService';

export function Main() {
  const { data: posts, error, isLoading } = postAPI.useFetchAllPostsQuery(8);

  return (
    <div className={classes.wrapper}>
      <Header />
      {isLoading && <h1 className={classes.title}>Loading...</h1>}
      {error && <h1 className={classes.title}>Error occurred!</h1>}
      <div className={classes.posts}>
        {posts &&
          posts.map((item: PostItem) => {
            return <Post post={item} key={item.id} />;
          })}
      </div>
    </div>
  );
}
