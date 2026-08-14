import "./Loader.css";

const Loader = ({ fullScreen = false }) => {
  return (
    <div className={`loader ${fullScreen ? "loader-fullscreen" : ""}`}>
      <span />
    </div>
  );
};

export default Loader;