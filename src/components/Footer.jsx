import React from "react";
import next from "../../public/next.svg";
import Image from "next/image";
import Link from "next/link";
import git from "../../public/git.png";
import insta from "../../public/insta.png";
import link from "../../public/link.png";

export default function Footer() {
  return (
    <div className="footer">
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
      <p className="footer_para">
        This site was made with
        <Image src={next} alt="react" height={10} width={100} />
        alot of ❤️
      </p>
      <div className="social_links">
        <Link href="/">
          <Image src={git} alt="react" height={30} width={100} />
        </Link>
        <Link href="/"></Link>
        <Image src={insta} alt="react" height={30} width={100} />
        <Link href="/">
          <Image src={link} alt="react" height={30} width={100} />
        </Link>
      </div>
    </div>
  );
}
