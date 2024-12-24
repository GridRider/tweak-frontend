import React, { useState } from "react";
import "./ProgressButton.css";

const ProgressButton = ({ onClick,disabled=false,children }) => {
  const [state, setState] = useState("idle"); // idle, loading, success, failed

  const handleClick = async () => {
    console.log(children);
    setState("loading");
    try {
      const response = await onClick(); // Perform the async action
      
      // Check for specific error codes or success conditions
      if (response?.status === "failed") {
        setState("failed");
      } else {
        setState("success");
      }
    } catch (error) {
      console.error("Action failed:", error);
      setState("failed");
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={state === "loading"}
      style={{
        width:"100px",
        height:'50px',
        padding: "10px 20px",
        fontSize: "16px",
        color: "#fff",
        backgroundColor:
          state === "success"
            ? "green"
            : state === "failed"
            ? "red"
            : state === "loading"
            ? "#007bff"
            : "#007bff",
        border: "none",
        borderRadius: "5px",
        cursor: state === "loading" ? "not-allowed" : "pointer",
        transition: "background-color 0.3s ease",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
      }}
    >
      {state === "loading" && (
        <span
          className="spinner"
          style={{
            border: "4px solid #f3f3f3",
            borderTop: "4px solid #007bff",
            borderRadius: "50%",
            width: "16px",
            height: "16px",
            animation: "spin 1s linear infinite",
          }}
        />
      )}
      {state === "success"
        ? "Success"
        : state === "failed"
        ? "Failed"
        : state === "loading"
        ? ""
        : children}
    </button>
  );
};

export default ProgressButton;
