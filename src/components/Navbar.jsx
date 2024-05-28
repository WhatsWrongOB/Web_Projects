"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Hamburger from "hamburger-react";
import { useRouter } from "next/navigation";

// export const Searchbar = ({ searchTerm, setSearchTerm }) => {
//   const router = useRouter();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     router.push(`/search/${searchTerm}`);
//     setSearchTerm("");
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         className="nav_search"
//         type="search"
//         placeholder="Search products"
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//       />
//     </form>
//   );
// };

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <nav>
      <div className="logo">
        <Image
          src="data:image/svg+xml,%3c?xml%20version=%271.0%27%20encoding=%27UTF-8%27%20standalone=%27no%27?%3e%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20aria-label=%27JavaScript%27%20role=%27img%27%20viewBox=%270%200%20512%20512%27%3e%3crect%20width=%27512%27%20height=%27512%27%20rx=%2715%25%27%20fill=%27%23f7df1e%27/%3e%3cpath%20d=%27m324,370c10,17%2024,29%2047,29%2020,0%2033,-10%2033,-24%200,-16%20-13,-22%20-35,-32l-12,-5c-35,-15%20-58,-33%20-58,-72%200,-36%2027,-64%2070,-64%2031,0%2053,11%2068,39l-37,24c-8,-15%20-17,-21%20-31,-21%20-14,0%20-23,9%20-23,21%200,14%209,20%2030,29l12,5c41,18%2064,35%2064,76%200,43%20-34,67%20-80,67%20-45,0%20-74,-21%20-88,-49zm-170,4c8,13%2014,25%2031,25%2016,0%2026,-6%2026,-30V203h48v164c0,50%20-29,72%20-72,72%20-39,0%20-61,-20%20-72,-44z%27/%3e%3c/svg%3e"
          alt="js"
          width={35}
          height={35}
        />
        <h1>
          Java<span>Script</span>
        </h1>
      </div>
      <ul className={toggle ? "menu active" : "menu"}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/projects">Projects</Link>
        </li>
        <li>
          {/* <Searchbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} /> */}
          <Link href="/">Contact</Link>
        </li>
      </ul>
      <div className="ham" onClick={handleToggle}>
        <Hamburger size={22} />
      </div>
    </nav>
  );
};

export default Navbar;
