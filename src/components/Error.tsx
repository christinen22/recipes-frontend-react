import { useNavigate } from "react-router-dom";

interface ErrorProps {
  message: string;
}

const Error: React.FC<ErrorProps> = ({ message }) => {
  const navigate = useNavigate();
  return (
    <div className="filmCard">
      <h1>Finns icke!</h1>
      <p>{message}</p>

      {/*button for going back */}
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => navigate(-1)}
      >
        Tillbaka
      </button>
    </div>
  );
};

export default Error;
