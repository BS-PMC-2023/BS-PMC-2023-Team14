import { useNavigate } from "react-router-dom";

const NavigateButton = () => {
  const navigate = useNavigate();

  return (
    <button
      style={{
        position: "fixed",
        right: "6px",
        bottom: "6px",
        cursor: "pointer",
        height: "80px",
        width: "65px",
      }}
      onClick={() => navigate("/review")}
    >
      Rate the website
    </button>
  );
};

export default NavigateButton;
