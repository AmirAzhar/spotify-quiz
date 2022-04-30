import React from "react";
import { signOut, useSession } from "next-auth/react";

const Header = () => {
  const { data: session, status } = useSession();
  console.log(session);
  return (
    <div className="absolute inset-x-0 top-0 h-32 flex items-center justify-center text-center text-4xl">
      <h1>Spotify Quiz</h1>
    </div>
  );
};

export default Header;
