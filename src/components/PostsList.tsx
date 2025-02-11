import Post from './Post.tsx';
import postslist from './PostsList.module.css';

const posts = [{author: 'John Doe', body: 'Hello there!'}, {author: 'Jane Doe', body: 'Hello jane doe'}];

export default function PostsList() {
  return (
    <div className={postslist.posts}>
      {posts.map((post, idx) => (
        <Post key={idx} author={post.author} body={post.body}/>
      ))}
    </div>
  );
}
