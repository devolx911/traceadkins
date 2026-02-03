import { displayItems, getFirstFourItems } from "./store.js";
import { dispalyTour, getFirstFourTour } from "./tour.js";


const storeItemsWrapper = document.getElementById("store-items-wrapper-js");
const tourWrapper = document.getElementById("tour-wrapper-js");

displayItems(storeItemsWrapper, getFirstFourItems)

dispalyTour(tourWrapper,getFirstFourTour)

const items = document.querySelectorAll(".item");

items.forEach((item)=>{

    item.addEventListener("click", ()=>{
        const itemId = item.dataset.id;
    
        const matchingItemId = getFirstFourItems.find((x)=>x.id === itemId);

        const itemName = matchingItemId.detail;

        let templateMessage = `Hi! i'm interested in getting the ${itemName} .Please let me know the availability.Thanks!`;
        
        let url = `https://t.me/MY_OLX?text=${encodeURIComponent(templateMessage)}`;

        window.open(url, "_blank")
        
    })
})

const getTicket = document.querySelectorAll(".get-ticket");

getTicket.forEach((button)=>{

    button.addEventListener("click", ()=>{
        const  ticketId = button.dataset.id;

        const matchingId = getFirstFourTour.find((x)=>x.id === ticketId)

        if(!matchingId) return

        const location = matchingId.location;
        const data = matchingId.date;

        let templateMessage = `Hi! i'm interested in getting tickets for the Trace Adkins Show at ${location} on ${data} .Please let me know the availability and pricing. Thanks!`;

        let url = `https://t.me/MY_OLX?text=${encodeURIComponent(templateMessage)}`;

        window.open(url, "_blank")
    })
})