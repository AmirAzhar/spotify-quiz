import React from "react";
import { signOut, useSession } from "next-auth/react";

const Header = () => {
  const { data: session, status } = useSession();
  return (
    <div className="absolute inset-x-0 top-0 h-32 flex items-center justify-center">
      <div className="text-center text-4xl ml-auto">Spotify Quiz</div>
      <button
        className="ml-auto bg-[#18D860] text-white p-2 m-5 rounded-lg"
        onClick={() => signOut()}
      >
        Logout
      </button>
    </div>
  );
};

export default Header;
