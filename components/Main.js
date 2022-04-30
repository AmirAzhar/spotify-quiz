import React from "react";
import ArtistOption from "./ArtistOption";

function Main() {
  return (
    <div className="absolute inset-x-0 top-32 h-[calc(100vh-30%)]">
      <div className="flex justify-around items-center h-full">
        <ArtistOption />
        <ArtistOption />
      </div>
    </div>
  );
}

export default Main;
