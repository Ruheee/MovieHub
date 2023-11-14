import React from "react";

export default function SideFilter() {
  return (
    <div>
      <div>
        <button>Sign In</button>
        {/*Clerk Auth*/}
      </div>
      <div>
        <ul>
          <li>Drama</li>
          <li>Comedy</li>
          <li>Action</li>
          <li>Adventure</li>
          <li>Crime</li>
        </ul>
        <ul>
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
