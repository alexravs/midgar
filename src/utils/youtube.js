import axios from 'axios';

function fetchMp3FromVideoId(youtubeVideoId) {
  return axios.get(
    ` http://www.youtubeinmp3.com/fetch/?format=JSON&video=
      https://www.youtube.com/watch?v=${youtubeVideoId}`
    ).then((response) => response.data.link);
}

const youtube = {
  fetchMp3FromVideoId
};

export default youtube;
