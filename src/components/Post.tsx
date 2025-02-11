import post from './Post.module.css';

export default function Post(props) {

  return (
    <div className={post.post}>
      <p className={post.author}>{props.author}</p>
      <p className={post.body}>{props.body}</p>
    </div>
  );
}
