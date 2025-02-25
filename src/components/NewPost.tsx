import classes from './NewPost.module.css';
import {useState} from 'react';

export default function NewPost() {

  const [name, setName] = useState('');
  const [body, setBody] = useState('');
  const changeNameHandler = (event) => {
    setName(event.target.value);
  }

  const changeBodyHandler = (event) => {
    setBody(event.target.value);
  }

  return (<form className={classes.newPost}>
    <label htmlFor="name"></label>
    <input type="text" id="name" placeholder="Your name" className={classes.author} onChange={changeNameHandler}
           required/>
    <label htmlFor="body"></label>
    <textarea id="body" placeholder="Here goes the body" className={classes.body} required rows={3}
              onChange={changeBodyHandler}/>
    <div className={classes.actions}>
      <button type="button">Cancel</button>
      <button type="submit">Submit</button>
    </div>
  </form>);
}
