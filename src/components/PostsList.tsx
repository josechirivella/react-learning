import Post from './Post.tsx';
import postslist from './PostsList.module.css';
import Modal from './Modal.tsx';
import NewPost from './NewPost.tsx';
import {useState} from 'react';

const posts = [{author: 'John Doe', body: 'Hello there!'}, {author: 'Jane Doe', body: 'Hello jane doe'}];

export default function PostsList() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModalHandler = () => {
    setModalIsOpen(true);
  }
  return (
    <>
      {modalIsOpen && (<Modal onClose={setModalIsOpen}>
        <NewPost/>
      </Modal>)}
      <div className={postslist.posts}>
        {posts.map((post, idx) => (
          <Post key={idx} author={post.author} body={post.body}/>
        ))}
      </div>
    </>
  );
}
