import axios from "axios";

const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY
const PLAYLIST_ID = "PLF9nSOO5SmunZVbDYXotvPiZX3D8RwOjY";
const CHANNEL_ID = "UCjGcnm6uamUtmvG4pGPgigA";

export const getVideos = async () => {
  return (await axios.get(
    "https://www.googleapis.com/youtube/v3/playlistItems",
    {
      params: {
        part: "snippet",
        key: API_KEY,
        playlistId: PLAYLIST_ID,
        maxResults: 50
      }
    }
  )).data.items;
};
