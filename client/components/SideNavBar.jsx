import Link from "next/link";

//import icons
import { BiSolidCameraMovie } from "react-icons/bi";
import { FaHome } from "react-icons/fa";
import { PiTelevisionSimpleFill } from "react-icons/pi";
import { MdOutlineUpcoming } from "react-icons/md";
import { IoIosTrendingUp } from "react-icons/io";

import "../styles/nav.scss";

export default function SideNavBar() {
  return (
    <nav>
      <h1>Movie Hub</h1>
      <div className="nav--items">
        <Link href={"/"} className="link">
          <FaHome className="icon" />
          <p>Home</p>
        </Link>
        <Link href={"/movies"} className="link">
          <BiSolidCameraMovie className="icon" />
          <p>Movies</p>
        </Link>
        <Link href={"/tv_shows"} className="link">
          <PiTelevisionSimpleFill className="icon" />
          <p>TV Shows</p>
        </Link>
        <Link href={"/movies/trending"} className="link">
          <IoIosTrendingUp className="icon" />
          <p>Trending</p>
        </Link>
        <Link href={"/movies/upcoming"} className="link">
          <MdOutlineUpcoming className="icon" />
          <p>Upcoming</p>
        </Link>
      </div>
    </nav>
  );
}
