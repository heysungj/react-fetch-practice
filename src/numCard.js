import "./numCard.css";
import { useEffect, useState } from "react";

export default function NumCard({ url, title }) {
  return (
    <div className="container">
      <h1>{title}</h1>
      <img src={url} alt="img" />
    </div>
  );
}
