import React from "react";
import  Link  from "next/link";

import "../styles/nav.scss"
export default function SideNavBar() {
  return (
    <nav>
      <h1>Movie Hub</h1>
      <Link href={'/'} className="link">Home</Link>
      <Link href={'/movies'} className="link">Movies</Link>
      <Link href={'/tv_shows'} className="link">TV Shows</Link>
      <Link href={'/movies/trending'} className="link">Trending</Link>
      <Link href={'/movies/upcoming'} className="link">Upcoming</Link>
    </nav>
  );
}
