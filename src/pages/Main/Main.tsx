import { useEffect, useState } from 'react';
import { PostItem } from '../../interfaces/responce.interface';
import { myPosts } from '../../stub';
import { Post } from '../../components/Post/Post';
import './Main.css';

export function Main() {
  const [posts, setPosts] = useState<PostItem[]>([]);

  useEffect(() => {
    setPosts(myPosts);
  }, []);

  return (
    <div className="wrapper">
      <div>Hi</div>
      <div className="posts">
        {posts.map((item: PostItem) => {
          return <Post post={item} key={item.id} />;
        })}
      </div>
    </div>
  );
}
