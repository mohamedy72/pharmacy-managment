import { useEffect, useState } from "react";
import "./widgets.css";

export const Error = ({ duration, error }) => {
  const [showError, setShowError] = useState(true);

  useEffect(() => {
    if (typeof duration !== "number") return;

    const timer = setTimeout(() => {
      setShowError(false);
    }, duration);

    return () => {
      clearTimeout(timer);
    };
  }, [error]);

  return showError ? (
    <div className={`error_container ${showError ? "animate_in" : ""}`}>
      {error.message}
    </div>
  ) : null;
};
