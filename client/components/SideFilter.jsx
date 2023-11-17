import React from "react";

export default function SideFilter() {
  return (
    <div className="sideFilter">
      <div>
        <button>Sign In</button>
        {/*Clerk Auth*/}
      </div>
      <div>
        <p>Genres</p>
        <p>Uncheck All</p>
      </div>
      <div>
        <ul className="genre--list">
          <li>Drama</li>
          <li>Comedy</li>
          <li>Action</li>
          <li>Adventure</li>
          <li>Crime</li>
        </ul>
        <div>
          <p>Services</p>
          <p>Uncheck All</p>
        </div>
        <ul className="streaming--list">
          <li>Google</li>
          <li>Apple Tv</li>
          <li>Amazon</li>
          <li>Disney</li>
          <li>Starz</li>
        </ul>
      </div>
    </div>
  );
}
