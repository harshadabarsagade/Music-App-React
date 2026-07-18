// src/Player.jsx

function Player({song}) {


  if(!song){

    return (

      <h3>
        Select a song to play 🎧
      </h3>

    );

  }


  return (

    <div>

      <h2>
        Now Playing:
      </h2>


      <h3>
        {song.trackName}
      </h3>


      <audio
        controls
        autoPlay
        src={song.previewUrl}
      />


    </div>

  );

}


export default Player;