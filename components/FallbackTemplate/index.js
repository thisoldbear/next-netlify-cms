const FallbackTemplate = ({ children }) => {
  return (
    <div
      style={{
        border: "1px solid blue",
      }}
    >
      {children}
    </div>
  );
};

export default FallbackTemplate;
