// src/MusicApi.jsx

const API_URL = "https://itunes.apple.com/search";


export async function searchSongs(songName) {

  const response = await fetch(
    `${API_URL}?term=${songName}&media=music&limit=10`
  );

  const data = await response.json();

  return data.results;

}