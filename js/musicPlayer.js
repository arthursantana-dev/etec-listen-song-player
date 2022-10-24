
const player = document.createElement('audio');
const playPauseButton = document.querySelector('.play-pause-button')
const previousSongButton = document.querySelector('.previous-song-button')
const nextSongButton = document.querySelector('.next-song-button')

const imgTocarUrl = "https://github.com/arthursantana-dev/musicas-etec-listen/raw/main/tocar.png" 
const imgPausarUrl = "https://github.com/arthursantana-dev/musicas-etec-listen/raw/main/pausar.png"

const songCards = document.querySelectorAll('.song-card');

const playerSongName = document.querySelector('.player__song-name')
const playerSongAuthor = document.querySelector('.player__song-author')
const playerSongImage = document.querySelector('.player__song-img')
const playerSongYTButton = document.querySelector('.player__yt-button')
const playerSongDuration = document.getElementById('song__final-time-value')
const playerSongCurrentTime = document.querySelector('#song__current-time-value')
const playerSongRangeInput = document.querySelector('input[name="player__song-current-time-i"]')


let currentSongId = 0

previousSongButton.addEventListener('click', () => {
	playSong(currentSongId - 1)
	console.log(songList[currentSongId - 1]);
})

nextSongButton.addEventListener('click', () => {
	playSong(currentSongId + 1)
})

songCards.forEach(card => {
	card.addEventListener('click', () => {
		playSong(card.dataset.songId)
	})
})

const songList = [
	{
		name: "Don't Throw Out My Legos",
		author: "AJR",
		source: "https://github.com/arthursantana-dev/musicas-etec-listen/raw/main/AJR%20-%20Don't%20Throw%20Out%20My%20Legos.mp3",
		cover: "https://github.com/arthursantana-dev/musicas-etec-listen/raw/main/img-musicas/ajr-dtoml.jpg",
		youTubeUrl: "https://www.youtube.com/watch?v=pdOIHNF2vJc",
		duration: '4:11'
	},
	{
		name: "World's Smallest Violin",
		author: "AJR",
		source: "https://github.com/arthursantana-dev/musicas-etec-listen/raw/main/AJR%20-%20World's%20Smallest%20Violin%20(Lyrics)%20(128%20kbps).mp3",
		cover: "https://github.com/arthursantana-dev/musicas-etec-listen/raw/main/img-musicas/ajr-wsv.jpg",
		youTubeUrl: "https://github.com/arthursantana-dev/musicas-etec-listen/blob/main/AJR%20-%20World's%20Smallest%20Violin%20(Lyrics)%20(128%20kbps).mp3",
		duration: '3:07'
	},
	{
		name: "Can You Feel My Heart",
		author: "Bring Me The Horizon",
		source: "https://github.com/arthursantana-dev/musicas-etec-listen/raw/main/Bring%20Me%20The%20Horizon%20-%20Can%20You%20Feel%20My%20Heart%20(128%20kbps).mp3",
		cover: "https://github.com/arthursantana-dev/musicas-etec-listen/raw/main/img-musicas/cyfmh.jpg",
		youTubeUrl: "https://www.youtube.com/watch?v=H8Wx8GV1Oiw",
		duration: '3:48'
	},
	{
		name: "I Ain’t Worried",
		author: "OneRepublic",
		source: "https://github.com/arthursantana-dev/musicas-etec-listen/raw/main/OneRepublic%20-%20I%20Ain%E2%80%99t%20Worried%20(Lyrics).mp3",
		cover: "https://github.com/arthursantana-dev/musicas-etec-listen/raw/main/img-musicas/71DB-YFF9PL._SS500_.jpg",
		youTubeUrl: "https://www.youtube.com/watch?v=mNEUkkoUoIA",
		duration: '2:28'
	},
	{
		name: "Treat You Better",
		author: "Shawn Mendes",
		source: "https://github.com/arthursantana-dev/etec-musicas-listen/raw/main/Shawn%20Mendes%20-%20Treat%20You%20Better%20(Lyrics).mp3",
		cover: "https://github.com/arthursantana-dev/etec-musicas-listen/raw/main/img-musicas/t-y-b.jpg",
		youTubeUrl: "https://www.youtube.com/watch?v=eiG_DUXD8YQ",
		duration: '3:08'
	},
	{
		name: "Smells Like Teen Spirit",
		author: "Nirvana",
		source: "https://github.com/arthursantana-dev/musicas-etec-listen/raw/main/Nirvana%20-%20Smells%20Like%20Teen%20Spirit%20(128%20kbps)%20(1).mp3",
		cover: "https://github.com/arthursantana-dev/musicas-etec-listen/raw/main/img-musicas/slts.jpg",
		youTubeUrl: "https://www.youtube.com/watch?v=3u2YbzQHT14",
		duration: '5:01'
	},
	{
		name: "Another Love",
		author: "Tom Odell",
		source: "https://github.com/arthursantana-dev/musicas-etec-listen/raw/main/Another%20Love%20(128%20kbps).mp3",
		cover: "https://github.com/arthursantana-dev/musicas-etec-listen/raw/main/img-musicas/to-ao.jpg",
		youTubeUrl: "https://www.youtube.com/watch?v=MwpMEbgC7DA",
		duration: '4:07'
	},
	{
		name: "Dandelions",
		author: "Ruth B.",
		source: "https://github.com/arthursantana-dev/musicas-etec-listen/raw/main/Ruth%20B.%20-%20Dandelions%20(Audio)%20(128%20kbps).mp3",
		cover: "https://github.com/arthursantana-dev/musicas-etec-listen/raw/main/img-musicas/d.png",
		youTubeUrl: "https://www.youtube.com/watch?v=W8a4sUabCUo",
		duration: '3:55'
	},
	{
		name: "Royalty",
		author: "Egzod & Maestro Chives",
		source: "https://github.com/arthursantana-dev/musicas-etec-listen/raw/main/Egzod%20%26%20Maestro%20Chives%20-%20Royalty%20(ft.%20Neoni)%20%5BOfficial%20Lyric%20Video%5D.mp3",
		cover: "https://github.com/arthursantana-dev/musicas-etec-listen/raw/main/img-musicas/41Xpw3DEF1L._UXNaN_FMjpg_QL85_.jpg",
		youTubeUrl: "https://www.youtube.com/watch?v=lW9ep22YmlM",
		duration: '3:44'
	},
	{
		name: "Yellow",
		author: "Coldplay",
		source: "https://github.com/arthursantana-dev/etec-musicas-listen/raw/main/Coldplay%20-%20Yellow.mp3",
		cover: "https://github.com/arthursantana-dev/etec-musicas-listen/raw/main/img-musicas/c-y.jpg",
		youTubeUrl: "https://www.youtube.com/watch?v=tdVAqxNLXiw",
		duration: '4:27'
	},
	{
		name: "Make You Mine",
		author: "PUBLIC",
		source: "https://github.com/arthursantana-dev/etec-musicas-listen/raw/main/Make%20You%20Mine%20-%20PUBLIC.mp3",
		cover: "https://github.com/arthursantana-dev/etec-musicas-listen/raw/main/img-musicas/m-y-m.jpg",
		youTubeUrl: "https://www.youtube.com/watch?v=QQPgk_MkK4k",
		duration: '3:53'
	}
]

function minsToSec(mins) {
	const [min, sec] = mins.split(':')
	console.log(`Convertendo ${mins} para ${Number.parseInt(min) * 60 + Number.parseInt(sec)}`);
	return Number.parseInt(min) * 60 + Number.parseInt(sec)
}

function secToMins(sec) {
	const min = Math.floor(sec / 60)
	const sec2 = parseInt(sec % 60)

	return sec2 > 9 ? `${min}:${sec2}` : `${min}:0${sec2}`
	
}

player.addEventListener('timeupdate', () => {
	playerSongCurrentTime.textContent = secToMins(player.currentTime)
	playerSongRangeInput.value = player.currentTime / player.duration * 100
})


function playSong(songId) {

	songId = parseInt(songId)

	currentSongId = songId
	playPauseButton.src = imgPausarUrl

	if (songId == -1) {
		songId = songList.length - 1
		currentSongId = songId
	}

	if (songId == songList.length) {
		songId = 1
		currentSongId = songId
	}

	

	console.log(songList[songId]);
	console.log(typeof songId);
	console.log(songList[songId].source);


	player.src = songList[songId].source
	
	playerSongName.textContent = songList[songId].name
	playerSongAuthor.textContent = songList[songId].author
	playerSongImage.src = songList[songId].cover

	playerSongDuration.innerHTML = songList[songId].duration

	
	playerSongYTButton.removeEventListener('click', () => { window.open(songList[currentSongId].youTubeUrl) })
	playerSongYTButton.addEventListener('click', () => { window.open(songList[currentSongId].youTubeUrl) })

	console.log(currentSongId);

	player.play()

}

playPauseButton.addEventListener('click', () => {

	if (playPauseButton.src == imgTocarUrl) {
		playPauseButton.src = imgPausarUrl
		player.play()
	} else {
		playPauseButton.src = imgTocarUrl
		player.pause()
	}

})

function inputSongTime(value) {
	console.log(value);
	player.currentTime = player.duration / 100 * value
}
