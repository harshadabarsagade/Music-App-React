// src/Search.jsx

import { useState } from "react";
import { searchSongs } from "./MusicApi";


function Search({ playSong }) {

  const [query, setQuery] = useState("");
  const [songs, setSongs] = useState([]);


  const handleSearch = async () => {

    if(query.trim() === ""){
      return;
    }


    const result = await searchSongs(query);

    setSongs(result);

  };


  return (

    <div>

      <h1>Search Songs 🎵</h1>


      <input
        type="text"
        placeholder="Search song..."
        value={query}
        onChange={(e)=>setQuery(e.target.value)}
      />


      <button onClick={handleSearch}>
        Search
      </button>



      {
        songs.map((song)=>(
          
          <div key={song.trackId}>

            <h3>
              {song.trackName}
            </h3>


            <p>
              {song.artistName}
            </p>


            <img
              src={song.artworkUrl100}
              width="100"
            />


            <br/>


            <button
              onClick={()=>playSong(song)}
            >
              ▶ Play
            </button>


          </div>

        ))
      }


    </div>

  );
}


export default Search;