import { PostItem } from '../../interfaces/responce.interface';
import './Post.css';

export function Post({ post }: { post: PostItem }) {
  return (
    <div className="post">
      <div className="post__img"></div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
}
