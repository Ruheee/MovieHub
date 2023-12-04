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
      <h1>MovieHub</h1>
      <div className="nav--items">
        <ul>
          <li>
            <Link href={"/"} className="link">
              <div className="nav--category">
                <FaHome className="icon" />
                <p>Home</p>
              </div>
            </Link>
          </li>
          <li>
            <Link href={"/movies"} className="link">
              <div className="nav--category">
                <BiSolidCameraMovie className="icon" />
                <p>Movies</p>
              </div>
            </Link>
          </li>
          <li>
            <Link href={"/tv_shows"} className="link">
              <div className="nav--category">
                <PiTelevisionSimpleFill className="icon" />
                <p>TV Shows</p>
              </div>
            </Link>
          </li>
          <li>
            <Link href={"/movies/trending"} className="link">
              <div className="nav--category">
                <IoIosTrendingUp className="icon" />
                <p>Trending</p>
              </div>
            </Link>
          </li>
          <li>
            <Link href={"/movies/upcoming"} className="link">
              <div className="nav--category">
                <MdOutlineUpcoming className="icon" />
                <p>Upcoming</p>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
