async function getSongs(){
    let res = await fetch("http://127.0.0.1:5500/songs/");
    let response = await res.text();
    console.log(response);

    let div = document.createElement("div");
    div.innerHTML = response;

    let as = div.getElementsByTagName("a");
    let songs = [];

    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if(element.title.endsWith(".mp3")){
            songs.push(element.title);
        }
    }

    return songs
}

async function main() {
    let songs = await getSongs();
    let songUL = document.querySelector(".songlist").getElementsByTagName("ul")[0];

    console.log(songUL);
    for(const song of songs) {
      songUL.innerHTML = songUL.innerHTML + `<li>${song}</li>`;
    }
    
}

main()