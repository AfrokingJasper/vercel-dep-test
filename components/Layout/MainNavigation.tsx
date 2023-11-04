import Link from "next/link";
import React from "react";

const MainNavigation = () => {
  return (
    <header className="bg-red-700 py-5 px-20 text-white font-bold ">
      <nav className="flex justify-between items-center">
        <div className="text-3xl">React Meetups</div>
        <ul className="flex gap-10">
          <li>
            <Link href="/">All Meetups</Link>
          </li>
          <li>
            <Link href="/new-meetup">Add New Meetup</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
