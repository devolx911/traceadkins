// ============selectors=========
const newsWrapper = document.getElementById("news-wrapper-js");

const newsInfo = [
    {
        id: "igmfgsmfmsreoprg",
        image: "assets/images/news-images/TraceAdkins_2026_Admat_ALLDATES_-_14-12-2025_12-38-02_medium.avif",
        date: "Dec 16, 2025",
        title: "ANNOUNCING THE 2026 30TH ANNIVERSARY TOUR",
        details: "As an added bonus, presale tickets are available TODAY!"
    },
    {
        id: "fgigmdfoinogmoruir",
        image: "assets/images/news-images/Photo_Sep_30_2025_9_10_39_PM_medium.avif",
        date: "Dec 11, 2025",
        title: "WORLD PREMIERE: YOU'RE MINE MUSIC VIDEO",
        details: "The final installment, You're Mine,is now live on Trace's YouTube channel. Watch and see how our story concludes."
    },
    {
        id: "aroijrgmtptmht",
        image: "assets/images/news-images/Photo_Sep_26_2025_3_40_44_PM_medium.avif",
        date: "Dec 04, 2025",
        title: "WORLD PREMIERE: LIVE IT LONELY MUSIC VIDEO",
        details: "The story continues with the music video for Live It Lonely."
    },
    {
        id: "agiongtmtmwgomgt",
        image: "assets/images/news-images/TA_One_More_Christmas_cover_-_FOR_WEB_1_medium.avif",
        date: "Nov 24, 2025",
        title: "NEW MUSIC COMING THIS FRIDAY: ONE MORE CHRISTMAS",
        details: "Fans can pre-save the song now on their favorite streaming service."
    },
    {
        id: "sbmotrimoitmit",
        image: "assets/images/news-images/Screenshot_2025-11-19_at_12.55.37_PM_medium.png",
        date: "Nov 20, 2025",
        title: "WORLD PREMIERE: IT ALL ADDS UP TO US MUSIC VIDEO",
        details: "You can now watch the world premiere music video for It All Adds Up To Us on Trace's YouTube."
    },
    {
        id: "fiovmfgptgitmnihut",
        image: "assets/images/news-images/Screenshot_2025-10-19_at_1.50.53_PM_medium.png",
        date: "Oct 19, 2025",
        title: "TRACE ADKINS TO HOST & PERFORM ON PBS SALUTE TO SERVICE 2025: A VETERANS DAY CELEBRATION",
        details: "Hosted by Country Music Icon Trace Adkin, The Show Premieres Monday, November 10, 2025 on PBS and Streaming on PBS.org and the PBS app"
    },
    {
        id: "agtopwthmbmhmt",
        image: "assets/images/news-images/Trace_Adkins_CRED_-_Josh_Brasted_CMA_medium.avif",
        date: "Jun 23, 2025",
        title: "TRACE ADKINS TO PERFORM ON CMA FEST PRESENTED BY SOFI",
        details: "CMA Fest presented by SoFi airs Thursday, June 26 at 8/7c on ABC and next day on Hulu."
    },
    {
        id: "gtoipmtpmwtjuihtyih",
        image: "assets/images/news-images/HTB_remix_art_V1-A_medium.avif",
        date: "May 30, 2025",
        title: "NEW HONKY TONK BADONKADONK REMIX",
        details: "This track has got it goin' on like Donkey Kong. It's the perfect party track for summer"
    },
    {
        id: "akimbgoimbgfjgbisn",
        image: "assets/images/news-images/MadeinUSA_f4ae67d6-d949-43ad-bb04-0ed97c9b0de4_medium.avif",
        date: "May 21, 2025",
        title: "LISTEN TO THE MEMORIAL DAY COMPILATION EP",
        details: "Made In The USA will feature six songs to honor those who served and our nation."
    },
    {
        id: "agoptmbeignnviaru",
        image: "assets/images/news-images/Screenshot_2025-04-04_at_11.32.23_AM_medium.avif",
        date: "Apr 04, 2025",
        title: "Trace Adkins Celebrates 20 Years Of Songs About Me With Special SIRIUSXM Session",
        details: "Trace Adkins is celebrating the 20th birthday of his 2X PLATINUM sixth album— Songs About Me —in style."
    },
    {
        id: "roirinprtuinthtr",
        image: "assets/images/news-images/Screenshot_2025-04-04_at_11.32.23_AM_medium.avif",
        date: "Mar 28, 2025",
        title: "Listen to Trace's new song, That Someday",
        details: "Listen to Trace's new song, That Someday, out now!"
    },
    {
        id: "irpeoggtmpgtoiuiw",
        image: "assets/images/news-images/Screenshot_2025-03-27_at_4.52.56_PM_medium.avif",
        date: "Mar 28, 2025",
        title: "Day Of Reckoning - In Theaters Now",
        details: "Get your tickets for Trace's new film, Day Of Reckoning"
    },
    {
        id: "twiopmthyyjngf",
        image: "assets/images/news-images/TraceAdkins_WCYWcover_d7d2f138-10eb-4bd7-b26e-0b8a8cc293c8_medium.avif",
        date: "Mar 05, 2025",
        title: "Premiere: The Official Music Video For What Color's Your Wild",
        details: "The official music video for What Color's Your Wild is here!"
    },
    {
        id: "iopgmtpgtmmyiutg",
        image: "assets/images/news-images/TraceAdkins_WCYWcover_medium.avif",
        date: "Feb 28, 2025",
        title: "New Lyric Video for What Color's Your Wild",
        details: "Trace's new single, What Color's Your Wild is out now! As an added bonus for fans, Trace has also released a lyric video for What Color's Your Wild. Press play and sing along!"
    },
    {
        id: "qreriogntiuor",
        image: "assets/images/news-images/TraceAdkins_WCYWcover_medium.avif",
        date: "Feb 14, 2025",
        title: "New Single, What Color's Your Wild, Coming February 28",
        details: "Pre-save it now on your favorite streaming platform to hear it first."
    },
    {
        id: "giotpngwtuwbnttnow",
        image: "assets/images/news-images/TraceAdkins_WCYWcover_medium.avif", 
        date: "Sep 05, 2024",
        title: "Trace Adkins To Join Blake Shelton's Friends & Heroes Tour in 2025",
        details: "The run will include special appearances by Trace, as well as Craig Morgan and Deana Carter."
    },
    {
        id: "iotrpwmghmuiywhmb",
        image: "assets/images/news-images/Screen_Shot_2024-08-30_at_10.41.41_AM_medium.avif", 
        date: "Aug 30, 2024",
        title: "New Single with Jason Crabb and Zach Williams: God Can Use A Broken Man",
        details: "Trace Adkins teamed up with fellow artists Jason Crabb and Zach Williams to record a new version of Jason's song, God Can Use A Broken Man."
    },
    {
        id: "wtiohwnbititnbtru",
        image: "assets/images/news-images/NightOfSongStories_SocialMedia_1_medium.jpg", 
        date: "Aug 30, 2024",
        title: "A Night Of Songs & Stories for Mattingly Charities",
        details: "On Thursday, November 21, Trace Adkins will perform at Victory Theatre, plus a special Q&A session to benefit Mattingly Charities."
    },
    {
        id: "giotmtiiuuueeewv",
        image: "assets/images/news-images/Screen_Shot_2024-08-30_at_11.57.20_AM_medium.png", 
        date: "Aug 29, 2024",
        title: "Stream Toby Keith: American Icon Tribute Concert on Peacock",
        details: "Toby Keith: American Icon is a star-studded tribute to the life and music of Toby Keith is now streaming on Peacock."
    },
    {
        id: "riombptiwmvntuwo",
        image: "assets/images/news-images/GOO_SaluteTheTroops_IG_Artist_1080x1080ta_medium.jpg", 
        date: "May 21, 2024",
        title: "Trace Adkins To Perform at Grand Ole Opry Opry Salutes The Troops Concert on Tuesday, May 21",
        details: "On Tuesday, May 21st Trace Adkins will perform at the Grand Ole Opry's Opry Salutes The Troops concert."
    },
]

function displayNews(){
    newsWrapper.innerHTML = newsInfo.map((info)=>{
        let {id,image,date,title,details} = info;
        return`
            <div class="news-container">
                <div class="news-image">
                    <img src="${image}" alt="">
                </div>
                <div class="news-writeups">
                    <div class="news-date">
                        <p>${date}</p>
                    </div>
                    <div class="news-title">
                        <h2>$${title}</h2>
                    </div>
                    <div class="news-info">
                        <p>${details}</p>
                    </div>
                </div>
            </div>
        `
    }).join("")
}

displayNews()