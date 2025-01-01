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
      songUL.innerHTML = songUL.innerHTML + `
    <li>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
            <circle cx="6.5" cy="18.5" r="3.5" stroke="currentColor" stroke-width="1.5" />
            <circle cx="18" cy="16" r="3" stroke="currentColor" stroke-width="1.5" />
            <path d="M10 18.5L10 7C10 6.07655 10 5.61483 10.2635 5.32794C10.5269 5.04106 11.0175 4.9992 11.9986 4.91549C16.022 4.57222 18.909 3.26005 20.3553 2.40978C20.6508 2.236 20.7986 2.14912 20.8993 2.20672C21 2.26432 21 2.4315 21 2.76587V16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M10 10C15.8667 10 19.7778 7.66667 21 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <div class="info">
            <div>${song.split(" - ")[0]}</div>
            <div>${song.split(" - ")[1].replace(".mp3","")}</div>
        </div>
        <svg class="greenplayicon" fill="rgb(225, 40, 159)" viewBox="-5.6 -5.6 67.20 67.20" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0" transform="translate(17.92,17.92), scale(0.36)"><rect x="-5.6" y="-5.6" width="67.20" height="67.20" rx="33.6" fill="#ffffff" strokewidth="0"></rect></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M 27.9999 51.9063 C 41.0546 51.9063 51.9063 41.0781 51.9063 28 C 51.9063 14.9453 41.0312 4.0937 27.9765 4.0937 C 14.8983 4.0937 4.0937 14.9453 4.0937 28 C 4.0937 41.0781 14.9218 51.9063 27.9999 51.9063 Z M 23.7109 37.0469 C 22.6327 37.7031 21.4140 37.1875 21.4140 36.0625 L 21.4140 19.9375 C 21.4140 18.8594 22.7030 18.3906 23.7109 18.9766 L 36.8827 26.7812 C 37.8436 27.3437 37.8671 28.6797 36.8827 29.2656 Z"></path></g></svg>
    </li>`;
    }
    
}

main()