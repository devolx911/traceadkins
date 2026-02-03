// ===============selectors============
const tourWrapper = document.getElementById("tour-wrapper-js");

let tourInfo = [
    {
        id:"riljkfdbfafng",
        date: "Mar 7, 2026",
        location: "Billy Bob's Texas",
        venue: "Fort Worth, TX"
    },
    {
        id: "rufdfnjlkfa",
        date: "Mar 8, 2026",
        location: "Live! Casino & Hotel Louisiana",
        venue: "Bossier City, LA"
    },
    {
        id: "rginmuifndgot",
        date: "Mar 27, 2026",
        location: "Coushatta Casino Resort",
        venue: "Kinder, LA"
    },
    {
        id: "rginmuifndgot",
        date: "Mar 28, 2026",
        location: "Rattlesnake Rodeo",
        venue: "Opp, AL"
    },
    {
        id: "wgvtnttwr",
        date: "Apr 16, 2026",
        location: "The St. Augustine Amphitheatre",
        venue: "St. Augustine, FL"
    },
    {
        id: "dfjgkfkvnknfkjg",
        date: "Apr 18, 2026",
        location: "Sea World Orlando",
        venue: "Orlando, FL"
    },
    {
        id: "njksflnfjdgntsng",
        date: "Apr 23, 2026",
        location: "Brown County Music Center",
        venue: "Nashville, IN"
    },
    {
        id: "fgvnfdkngtnjkf",
        date: "Apr 24, 2026",
        location: "Island Resort & Casino",
        venue: "Harris, MI"
    },
    {
        id: "eruirgvnjrn",
        date: "Apr 25, 2026",
        location: "Island Resort & Casino",
        venue: "Harris, MI"
    },
    {
        id: "kfjdngjkrngt",
        date: "May 14, 2026",
        location: "Miles City Bucking Horse Sale",
        venue: "Miles City, MT"
    },
    {
        id: "nsfjdjgntugnt",
        date: "May 15, 2026",
        location: "Deadwood Mountain Grand",
        venue: "Deadwood, SD"
    },
    {
        id: "agnjutivfgtbtu",
        date: "May 16, 2026",
        location: "Prairie Knights Casino and Resort",
        venue: "Fort Yates, ND"
    },
    {
        id: "riogjtpjuitrwng",
        date: "May 22, 2026",
        location: "Ryman Auditorium",
        venue: "Nashville, TN"
    },
    {
        id: "gtuihngtgtq",
        date: "May 23, 2026",
        location: "Ryman Auditorium",
        venue: "Nashville, TN"
    },
    {
        id: "rtiungtwtu",
        date: "Jun 19, 2026",
        location: "Blue Gate Performing Arts Center",
        venue: "Shipshewana, IN"
    },
    {
        id: "rgituugtong",
        date: "Jun 20, 2026",
        location: "Renfro Valley Entertainment Center",
        venue: "Mount Vernon, KY"
    },
    {
        id: "goitmgpittu",
        date: "Jun 21, 2026",
        location: "Alabama Theatre",
        venue: "North Myrtle Beach, SC"
    },
    {
        id: "rgkjkjgngvirirr",
        date: "Jun 22, 2026",
        location: "Cheyenne Frontier Days",
        venue: "Cheyenne, WY"
    },
    {
        id: "rgjoitngtttter",
        date: "Jun 24, 2026",
        location: "Douglas County Fair & Rodeo",
        venue: "Castle Rock, CO"
    },
    {
        id: "riuiruignnnvrnp",
        date: "Jul 25, 2026",
        location: "Wayne County Fair",
        venue: "Wayne, NE"
    },
    {
        id: "qqqwqnnnrbbrrrrr",
        date: "Sep 11, 2026",
        location: "Kansas State Fair",
        venue: "Hutchinson, KS"
    },
    {
        id: "ritngnnueurepqwnv",
        date: "Sep 17, 2026",
        location: "American Music Theatre",
        venue: "Lancaster, PA"
    },
    {
        id: "riotjmgtjguitthg",
        date: "Sep 18, 2026",
        location: "Carteret Performing Arts and Events Center",
        venue: "Carteret, NJ"
    },
    {
        id: "riotjmgtjguitthg",
        date: "Sep 19, 2026",
        location: "Hollywood Casino at Charles Town Races",
        venue: "Charles Town, WV"
    },
]

export const getFirstFourTour = tourInfo.slice(0,4);

export function dispalyTour(html,tourList){
    html.innerHTML = tourList.map((details)=>{
        let {id,date,location,venue} = details;
        return `
            <div class="tour-container">
                <div class="data-location">
                    <h2>${date}</h2>
                    <p id="location">${location}</p>
                </div>
                <div class="venue">
                    <p>${venue}</p>
                </div>
                <div class="links">
                    <button class="get-ticket" data-id="${id}">GET TICKETS</button>
                </div>
            </div>
        `
    }).join("")
}

dispalyTour(tourWrapper,tourInfo)

const getTicket = document.querySelectorAll(".get-ticket");

getTicket.forEach((button)=>{

    button.addEventListener("click", ()=>{
        const  ticketId = button.dataset.id;

        const matchingId = tourInfo.find((x)=>x.id === ticketId)

        if(!matchingId) return

        const location = matchingId.location;
        const data = matchingId.date;

        let templateMessage = `Hi! i'm interested in getting tickets for the Trace Adkins Show at ${location} on ${data} .Please let me know the availability and pricing. Thanks!`;

        let url = `https://t.me/MY_OLX?text=${encodeURIComponent(templateMessage)}`;

        window.open(url, "_blank")
    })
})