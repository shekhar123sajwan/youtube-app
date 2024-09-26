const API_KEY = "AIzaSyC2Rvn6LU0c3lFxLe-nklVFOyHgIe9jH8Q";

export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=" +
  API_KEY;

export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt";

export const YOUTUBE_SEARCH_SUGGESTION_API =
  "https://www.googleapis.com/youtube/v3/search?part=snippet&chart=mostPopular&regionCode=IN&key=" +
  API_KEY;
