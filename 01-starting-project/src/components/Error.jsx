import React from "react";

export default function Error({ title, message }) {
  return (
    <div className="center">
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  );
}