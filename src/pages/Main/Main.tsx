import { useEffect, useState } from 'react';
import { PostItem } from '../../interfaces/responce.interface';
import { myPosts } from '../../stub';
import { Post } from '../../components/Post/Post';
import { Header } from '../../components/Header/Header';
import classes from './Main.module.css';

export function Main() {
  const [posts, setPosts] = useState<PostItem[]>([]);

  useEffect(() => {
    setPosts(myPosts);
  }, []);

  return (
    <div className={classes.wrapper}>
      <Header />
      <div className={classes.posts}>
        {posts.map((item: PostItem) => {
          return <Post post={item} key={item.id} />;
        })}
      </div>
    </div>
  );
}
