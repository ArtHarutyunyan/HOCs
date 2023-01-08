function Comment({ comment }, key) {
  console.log(key);
  return <li key={key}>{comment}</li>;
}

export default Comment;
