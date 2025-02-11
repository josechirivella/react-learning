export default function NewPost() {
  return (<form>
      <label htmlFor="name"></label>
      <input type="text" id="name" required/>
      <label htmlFor="body"></label>
      <textarea id="body" required rows={3}/>
    </form>);
}
