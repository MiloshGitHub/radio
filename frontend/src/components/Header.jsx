import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <h1>🎧 My Online Radio</h1>
      <nav>
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/exhibition">Exhibition</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
    </header>
  );
}
