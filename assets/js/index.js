// ===========selectors============
const storeItemsWrapper = document.getElementById("store-items-wrapper-js");

// ============items details
const itemsDetails = [
    {
        id: "sbkvnfbjntibnrw",
        image: "assets/images/2026_TraceAdkins_front_cover_comp_grande.webp",
        detail: "2026 Wall Calendar",
        price: 11000
    },
    {
        id: "owgimhmbptrhmbirt",
        image: "assets/images/TA_HONKYTONK_RINGS_MOCK_grande.png",
        detail: "Honky Tonk Badonkadonk - Throwback Tee",
        price: 79000
    },
    {
        id: "wpoowmvwmtiotwth",
        image: "assets/images/TAHorseBandonkF_BWeb_grande.webp",
        detail: "Charcoal Horse Tee",
        price: 200000
    },
    {
        id: "iojtptonitmninbtw",
        image: "assets/images/TA-guitar-reviesd_grande.webp",
        detail: "Autographed - Limited Edition - Trace Adkins Guitar",
        price: 112000
    }
]


// ============function to display items==========
function displayItems(){
    storeItemsWrapper.innerHTML = itemsDetails.map((item)=>{
        let {id,image,detail,price} = item;
        return`
            <div class="item">
                <a href="https://t.me/MY_OLX" target="_blank" rel="noopener noreferrer">
                    <div class="image-container">
                        <img src="${image}" alt="${detail}">
                    </div>
                    <div class="item-writeup">
                        <p>${detail}</p>
                        <h2>$ ${price}</h2>
                    </div>
                </a>
            </div>
        `
    }).join("")
}

displayItems()