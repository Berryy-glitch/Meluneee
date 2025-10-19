let volume = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");
let title = document.querySelector(".tittle p");
let thumbnail = document.querySelector(".thumbnail img");

let songs = [
  {
    title: "&Team - Wonderful World",
    src: "Song1/song2.mp3",
    thumbnail: "Thumbnail/thumbnail2.jpeg"
  },
  {
    title: "Keenan Te - Scars",
    src: "Song1/song5.mp3",
    thumbnail: "Thumbnail/thumbnail5.jpeg"
  },
   {
    title: "The 1975 - About You",
    src: "Song3/song13.mp3",
    thumbnail: "Thumbnail/thumbnail13.jpeg"
  },
  {
    title: "Daun Jatuh - Sekedar Mengagumi",
    src: "Song1/song1.mp3",
    thumbnail: "Thumbnail/thumbnail1.jpeg"
  },
  {
    title: "Rufus Weinwright - Another Believer ",
    src: "Song1/song3.mp3",
    thumbnail: "Thumbnail/thumbnail3.jpeg"
  },
  {
    title: "Ludovico Einaudi - Experience",
    src: "Song2/song9.mp3",
    thumbnail: "Thumbnail/thumbnail9.jpeg"
  },
  {
    title: "Lauv - Steal The Show",
    src: "Song1/song4.mp3",
    thumbnail: "Thumbnail/thumbnail4.jpeg"
  },
  {
    title: "wave to earth - peach eyes ",
    src: "Song2/song6.mp3",
    thumbnail: "Thumbnail/thumbnail6.png"
  },
  {
    title: "RADWIMPS - Sparkle ",
    src: "Song3/song12.mp3",
    thumbnail: "Thumbnail/thumbnail12.jpeg"
  },
  {
    title: "Lany - you!",
    src: "Song2/song7.mp3",
    thumbnail: "Thumbnail/thumbnail7.jpeg"
  },
   {
    title: "Colde - Star",
    src: "Song3/song11.mp3",
    thumbnail: "Thumbnail/thumbnail11.jpeg"
  },
  {
    title: "Denise Julia - NVMD",
    src: "Song2/song10.mp3",
    thumbnail: "Thumbnail/thumbnail10.jpeg"
  },
  {
    title: "Fujii Kaze - Kirari",
    src: "Song2/song8.mp3",
    thumbnail: "Thumbnail/thumbnail8.jpeg"
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
  ctrlIcon.src = "Song1/s.away.png";
}

  function playPause() {
    if (song.paused) {
      song.play();
      ctrlIcon.src = "Song1/s.away.paused.png";
    } else {
      song.pause();
      ctrlIcon.src = "Song1/s.away.png";
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
  ctrlIcon.src = "Song1/s.away.png";
});

song.addEventListener("pause", () => {
  ctrlIcon.src = "Song1/s.away.pause.png";
});

song.addEventListener("ended", nextSong);


loadSong(currentSong);



