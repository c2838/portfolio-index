import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate()
  useEffect(() => {
    setTimeout(() => {
      navigate("/portfolio-index/portfolio");
    }, 1000);
  }, [navigate]);
}