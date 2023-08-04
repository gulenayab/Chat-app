//first make an array of the elements and stuff you want to include in menu card
const menuItems = [{
        id: 1,
        item: "Burgers and FingerChips",
        oneLiner: "We Offer Zinger Burger , Chicken Burger , French Burger",
        img: "food1.jpg",
        price: "Meet Us @",
        desc: ` bOoK yOuR oRdEr nOw <br> &#9743 : 0333-9856742 <br> &#9993: manager1890@gmail.com`,

    },
    {
        id: 2,
        item: "Biryani",
        oneLiner: "We Offer Karachi Biryani , DamPokh , and Daal Chawal",
        img: "food2.jpg",
        price: "Meet Us @",
        desc: `  bOoK yOuR oRdEr nOw <br> &#9743 : 0333-9856742 <br> &#9993: manager1890@gmail.com`,

    },
    {
        id: 3,
        item: "Chai Samosa",
        oneLiner: "We Offer Karak Chai With Samosa",
        img: "food3.jpg",
        price: "Meet Us @",
        desc: ` bOoK yOuR oRdEr nOw <br> &#9743 : 0333-9856742 <br> &#9993: manager1890@gmail.com`

    },

    {
        id: 4,
        item: "Icecream",
        oneLiner: "We Offer chocolate flavour , Vanilla , Strawberry and other flavour icreams",
        img: "food6.jpg",
        price: " Meet Us @",
        desc: ` bOoK yOuR oRdEr nOw <br> &#9743 : 0333-9856742 <br> &#9993: manager1890@gmail.com`

    }
]
console.log(menuItems[1]);

//making the website responsive
const item = document.getElementById("item");
const oneLiner = document.getElementById("oneLiner");
const img = document.getElementById("img");
const price = document.getElementById("price");
const desc = document.getElementById("desc ");
const prev = document.getElementById("prev");
const random = document.getElementById("random");
const next = document.getElementById("next");

let currentMenu = 0; //mean start from index 0
window.addEventListener("DOMContentLoaded", function() {
    allMenu(currentMenu);
});
const allMenu = () => {
    let menu = menuItems[currentMenu];
    item.textContent = menu.item;
    oneLiner.textContent = menu.oneLiner;
    img.src = menu.img;
    price.textContent = menu.price;
    desc.textContent = menu.desc;
};

//menu btn
random.addEventListener('click', () => {
    currentMenu = Math.floor(Math.random() * menuItems.length);
    allMenu(currentMenu);
});

//prevous Button
prev.addEventListener('click', () => {
    currentMenu++;
    if (currentMenu > menuItems.length - 1) {

    }
    allMenu(currentMenu);
})
next.addEventListener('click', () => {
    currentMenu--;
    if (currentMenu < 0) {
        currentMenu = menuItems.length - 1;
    }
    allMenu(currentMenu);
})