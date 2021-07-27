const Post = ({ children }) => {
  return (
    <div
      style={{
        border: "1px solid red",
      }}
    >
      {children}
    </div>
  );
};

export default Post;
