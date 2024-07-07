let progress = document.getElementById("progress");
let song = document.getElementById("song");
let controlsIcon = document.getElementById("controlsIcon");

let titleElement = document.getElementById("title");
let singerElement = document.getElementById("singer");

const music = [
  {
    musicId:
      "./music/Clean Bandit - Rockabye (feat. Sean Paul & Anne-Marie).mp3",
    title: "Rockabye",
    singer: "Sean Paul & Anne-Marie",
  },
  {
    musicId: "./music/Dua Lipa - Levitating (Solo Version, NO DaBaby).mp3",
    title: "Levitating",
    singer: "Dua Lipa",
  },
  {
    musicId: "./music/Ed Sheeran - Shape Of You .mp3",
    title: "Shape Of You",
    singer: "Ed Sheeran",
  },
  {
    musicId:
      "./music/Enrique Iglesias  -  Bailando ft, Descemer Bueno, Gente De Zona.mp3",
    title: "Enrique Iglesiasu",
    singer: "Bailando - ft.Descemer Bueno, Gente De Zona",
  },
  {
    musicId: "./music/Justin Bieber - Sorry.mp3",
    title: "Sorry",
    singer: "Justin Bieber",
  },
  {
    musicId: "./music/Luis Fonsi(ft.Daddy Yankee)Despacito.mp3",
    title: "Despacito",
    singer: "Luis Fonsi - ft.Daddy Yankee",
  },
  {
    musicId: "./music/Maroon 5( ft. Cardi B) - Girls Like You.mp3",
    title: "Girls Like You",
    singer: "Maroon 5 - ft.Cardi B",
  },
  {
    musicId: "./music/Miley Cyrus - Flowers.mp3",
    title: "Flowers",
    singer: "Miley Cyrus",
  },
  {
    musicId: "./music/Olivia Rodrigo - happier.mp3",
    title: "Happier",
    singer: "Olivia Rodrigo",
  },
  {
    musicId: "./music/Post Malone(ft. Swae Lee) - Sunflower.mp3",
    title: "Sunflower",
    singer: "Post Malone - ft.Swae Lee",
  },
  {
    musicId: "./music/Sean Paul - No Lie ft. Dua Lipa.mp3",
    title: "No Lie",
    singer: "Sean Paul - ft.Dua Lipa",
  },
  {
    musicId: "./music/Taki Taki - DJ Snake, Selena Gomez, Ozuna, Cardi B.mp3",
    title: "Taki Taki",
    singer: "DJ Snake, Selena Gomez, Ozuna, Cardi B",
  },
];

// adding title and singer || playing current song

let currentSongIndex = 0;

function playCurrentSong() {
  progress.value = 0;

  let currentSong = music[currentSongIndex];

  titleElement.innerHTML = currentSong.title;
  singerElement.innerHTML = currentSong.singer;
  song.src = currentSong.musicId;

  controlsIcon.classList.add("fa-pause");
  controlsIcon.classList.remove("fa-play");
  playPause();

  // Metadata Loaded Event:

  song.onloadedmetadata = function () {
    progress.max = song.duration;
  };
}

// Song Ended Event:

song.onended = function () {
  playNext();
};

// Play/Pause Function:

function playPause() {
  if (controlsIcon.classList.contains("fa-pause")) {
    song.pause();
    controlsIcon.classList.remove("fa-pause");
    controlsIcon.classList.add("fa-play");
  } else {
    song.play();
    controlsIcon.classList.add("fa-pause");
    controlsIcon.classList.remove("fa-play");
  }
}

// Play Previous Song

function playPrevious() {
  currentSongIndex = (currentSongIndex - 1 + music.length) % music.length;

  playCurrentSong();
  playPause();
  song.play();
}

// Play Next Song

function playNext() {
  currentSongIndex = (currentSongIndex + 1) % music.length;

  playCurrentSong();
  playPause();
  song.play();
}

// Progress Bar Update:

setInterval(() => {
  if (!isNaN(song.duration)) {
    progress.value = song.currentTime;
  }
}, 500);

// Progress Bar Change Event:

progress.onchange = function () {
  song.play();
  song.currentTime = progress.value;
  controlsIcon.classList.remove("fa-play");
  controlsIcon.classList.add("fa-pause");
};

playCurrentSong();
