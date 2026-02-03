// ===========selectors============
const musicCoverWrapper = document.getElementById("music-cover-wrapper-js");

const musicCoverInfo = [
    {
        image: "assets/images/music-image/image1.webp",
        link: "One More Christmas",
        date: "11/28/25"
    },
    {
        image: "assets/images/music-image/image2.avif",
        link: "What Color's Your Wild",
        date: ""
    },
    {
        image: "assets/images/music-image/image3.webp",
        link: "Naughty List",
        date: "11/29/2024"
    },
    {
        image: "assets/images/music-image/image4.webp",
        link: "A country Boy Can Survive-Single from Monarch on Fox",
        date: "12/10/21"
    },
    {
        image: "assets/images/music-image/image5.webp",
        link: "The Way i Wann Go Album",
        date: "8/27/21"
    },
    {
        image: "assets/images/music-image/image6.webp",
        link: "Empty Chair Single",
        date: "5/28/21"
    }
]

function displayMusicCover(){
    musicCoverWrapper.innerHTML = musicCoverInfo.map((details)=>{
        let {image,link,date} = details;
        return `
            <div class="music-cover-container">
                <img src="${image}">
                <p class="hover-text">${link}</p>
                <span class="hover-date">${date}</span>
            </div>
        `
    }).join("")
}

displayMusicCover()