let volume = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");
let title = document.querySelector(".tittle p");
let thumbnail = document.querySelector(".thumbnail img");

let songs = [
  {
    title: "Daun Jatuh - Sekedar Mengagumi",
    src: "Song/song1.mp3",
    thumbnail: "Song/thumbnail1.jpeg"
  },
  {
    title: "Keenan Te - Scars",
    src: "Song/song5.mp3",
    thumbnail: "Song/thumbnail5.jpeg"
  },
  {
    title: "&Team - Wonderful World",
    src: "Song/song2.mp3",
    thumbnail: "Song/thumbnail2.jpeg"
  },
  {
    title: "Rufus Weinwright - Another Believer ",
    src: "Song/song3.mp3",
    thumbnail: "Song/thumbnail3.jpeg"
  },
  {
    title: "Ludovico Einaudi - Experience",
    src: "Song/song9.mp3",
    thumbnail: "Song/thumbnail9.jpeg"
  },
  {
    title: "Lauv - Steal The Show",
    src: "Song/song4.mp3",
    thumbnail: "Song/thumbnail4.jpeg"
  },
  {
    title: "wave to earth - peach eyes ",
    src: "Song/song6.mp3",
    thumbnail: "Song/thumbnail6.png"
  },
  {
    title: "Lany - you!",
    src: "Song/song7.mp3",
    thumbnail: "Song/thumbnail7.jpeg"
  },
  {
    title: "Denise Julia - NVMD",
    src: "Song/song10.mp3",
    thumbnail: "Song/thumbnail10.jpeg"
  },
  {
    title: "Fujii Kaze - Kirari",
    src: "Song/song8.mp3",
    thumbnail: "Song/thumbnail8.jpeg"
  },
];

  let currentSong = 0;
  let isSeeking = false;

  function loadSong(index) {
  currentSong = index;
  const s = songs[index];
  song.src = s.src;
  title.textContent = s.title;
  thumbnail.src = s.thumbnail;
  progress.value = 0;
  song.play();
  ctrlIcon.src = "Song/s.away.png";
}

  function playPause() {
    if (song.paused) {
      song.play();
      ctrlIcon.src = "Song/s.away.paused.png";
    } else {
      song.pause();
      ctrlIcon.src = "Song/s.away.png";
    }
  }

  function nextSong() {
  currentSong = (currentSong + 1) % songs.length;
  loadSong(currentSong);
}

function prevSong() {
  currentSong = (currentSong - 1 + songs.length) % songs.length;
  loadSong(currentSong);
}


  song.addEventListener("timeupdate", () => {
  if (!isSeeking && song.duration) {
    progress.value = (song.currentTime / song.duration) * 100;
  }
});

  progress.addEventListener("input", () => {
  isSeeking = true;
});

progress.addEventListener("change", () => {
  if (song.duration) {
    song.currentTime = (progress.value / 100) * song.duration;
  }
  isSeeking = false;
});

song.addEventListener("play", () => {
  ctrlIcon.src = "Song/s.away.png";
});

song.addEventListener("pause", () => {
  ctrlIcon.src = "Song/s.away.pause.png";
});

song.addEventListener("ended", nextSong);

loadSong(currentSong);