const Wrapper = (props: { children: JSX.Element }) => {
  return <div style={{ padding: "30px", maxWidth: "640px", margin: "0 auto" }}>{props.children}</div>;
};

export default Wrapper;
