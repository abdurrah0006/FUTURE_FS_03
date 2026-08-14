import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import "./NotFound.css";

const NotFound = () => {
  return (
    <main className="not-found">
      <span className="not-found-code">404</span>

      <h1>Looks like you're lost.</h1>

      <p>
        The page you're looking for doesn't exist or may have moved.
      </p>

      <Link to="/" className="btn btn-primary">
        <FiArrowLeft />
        Back Home
      </Link>
    </main>
  );
};

export default NotFound;