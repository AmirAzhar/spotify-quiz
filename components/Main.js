// Lib
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { shuffle } from "lodash";

// Code
import ArtistOption from "./ArtistOption";
import useSpotify from "../hooks/useSpotify";

function Main() {
  const spotifyApi = useSpotify();
  const { data: session, status } = useSession();
  const [artistsData, setArtistsData] = useState([]);
  const playListId = "37i9dQZEVXbNG2KDcFcKOF?si=e467e026c3474ac4";

  useEffect(() => {
    if (spotifyApi.getAccessToken()) {
      spotifyApi
        .getPlaylist(playListId)
        .then((data) => {
          const ids = _.shuffle(data.body.tracks.items)
            .slice(0, 2)
            .map((song) => song.track.artists[0].id);
          return ids;
        })
        .then((ids) =>
          spotifyApi.getArtists(ids).then((data) => {
            setArtistsData(data.body.artists);
          })
        );
    }
  }, [session, spotifyApi]);

  return (
    <div className="absolute inset-x-0 top-32 h-[calc(100vh-30%)]">
      <div className="flex justify-around items-center h-full">
        <ArtistOption artist={artistsData[0]} />
        <ArtistOption artist={artistsData[1]} />
      </div>
    </div>
  );
}

export default Main;
