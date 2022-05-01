import React, { useState, useEffect } from "react";

function ArtistOption({ artist }) {
  artist = artist
    ? artist
    : { name: "", images: [{ url: "http://placehold.jp/640x640.png" }] };
  return (
    <div className="flex flex-col items-center">
      <img
        src={artist.images[0].url}
        className="h-72 w-72 rounded-full border-2 hover:scale-110 transition duration-300 cursor-pointer "
      />
      <div className="text-2xl p-5">{artist["name"]}</div>
    </div>
  );
}

export default ArtistOption;
