// ===========selectors============
const mainStoreItemsWrapper = document.getElementById("main-store-items-wrapper-js");



// ============items details
let itemsDetails = [
    {
        id: "1",
        image: "assets/images/storeimages/image1.webp",
        detail: "2026 Wall Calendar",
        price: 25
    },
    {
        id: "2",
        image: "assets/images/storeimages/image2.webp",
        detail: "Honky Tonk Badonkadonk - Throwback Tee",
        price: 40
    },
    {
        id: "3",
        image: "assets/images/storeimages/image3.png",
        detail: "Charcoal Horse Tee",
        price: 40
    },
    {
        id: "4",
        image: "assets/images/storeimages/image4.webp",
        detail: "Autographed - Limited Edition - Trace Adkins Guitar",
        price: 500
    },
    {
        id: "5",
        image: "assets/images/storeimages/image5.jpg",
        detail: "Trace Adkins Signed Cowboy Hat",
        price: 199
    },
    {
        id: "6",
        image: "assets/images/storeimages/image6.png",
        detail: "Somewhere in America Tour Tee",
        price: 45
    },
    {
        id: "7",
        image: "assets/images/storeimages/image7.jpg",
        detail: "Hat Blk Trucker",
        price: 40
    },
    {
        id: "8",
        image: "assets/images/storeimages/image9.png",
        detail: "Koozie Neon Badonk",
        price: 5
    },
    {
        id: "9",
        image: "assets/images/storeimages/image10.jpg",
        detail: "American Man Tee",
        price: 40
    },
    {
        id: "10",
        image: "assets/images/storeimages/image12.jpg",
        detail: "Rough & Ready Black Tee",
        price: 40
    },
    {
        id: "11",
        image: "assets/images/storeimages/image13.jpg",
        detail: "Married to One Hot Mama Tee",
        price: 40
    },
    {
        id: "12",
        image: "assets/images/storeimages/image14.jpg",
        detail: "2023 Flag Tour Tee",
        price: 40
    },
    {
        id: "13",
        image: "assets/images/storeimages/image15.jpg",
        detail: "Trace Adkins Eagle Raglan",
        price: 40
    },
    {
        id: "14",
        image: "assets/images/storeimages/image16.jpg",
        detail: "The Way I Wanna Go Double CD",
        price: 17
    },
    {
        id: "15",
        image: "assets/images/storeimages/image17.png",
        detail: "The Way I Wanna Go Album T-Shirt",
        price: 18
    },
    {
        id: "16",
        image: "assets/images/storeimages/image18.jpg",
        detail: "Ladies Navy One Hot Mama Tee",
        price: 40
    },
    {
        id: "17",
        image: "assets/images/storeimages/image19.jpg",
        detail: "Trace Adkins Gift Card",
        price: 10
    },
]

if(mainStoreItemsWrapper){
    displayItems(mainStoreItemsWrapper,itemsDetails)
}

export const getFirstFourItems = itemsDetails.splice(0,4)
// ============function to display items==========
export function displayItems(container,list){
    container.innerHTML = list.map((item)=>{
        let {id,image,detail,price} = item;
        return`
            <div class="item" data-id="${id}">
                    <div class="image-container">
                        <img src="${image}" alt="${detail}">
                    </div>
                    <div class="item-writeup">
                        <p>${detail}</p>
                        <h2>$${price}.00 USD</h2>
                    </div>
            </div>
        `
    }).join("")
}



const items = document.querySelectorAll(".item");

items.forEach((item)=>{

    item.addEventListener("click", ()=>{
        const itemId = item.dataset.id;
    
        const matchingItemId = itemsDetails.find((x)=>x.id === itemId);

        const itemName = matchingItemId.detail;

        let templateMessage = `Hi! i'm interested in getting the ${itemName} .Please let me know the availability.Thanks!`;
        
        let url = `https://t.me/MY_OLX?text=${encodeURIComponent(templateMessage)}`;

        window.open(url, "_blank")
        
    })
})