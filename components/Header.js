import React from "react";
import { signOut, useSession } from "next-auth/react";

function Header() {
  const { data: session, status } = useSession();
  return (
    <div className="absolute inset-x-0 top-0 h-1/6 p-10">
      <div className="text-center text-4xl">Spotify Quiz</div>
      <button
        className=" bg-[#18D860] text-white p-2 m-10 text-xl rounded-lg absolute right-0 top-0"
        onClick={() => signOut()}
      >
        Logout
      </button>
    </div>
  );
}

export default Header;
