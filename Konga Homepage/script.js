const items = [
    {
        imgSrc: "image/item1.jpg",
        title: "Haier Thermocool Double Door Refrigerator",
        price: "₦460,430",
        oldPrice: "₦713,670",
        discount: "-35%",
        timeLeft: "🕒 7hrs - 15hrs 59mins 17secs",
        sold: "31%",
    },
    {
        imgSrc: "image/item2.jpg",
        title: "Haier Thermocool Double Door Refrigerator",
        price: "₦460,430",
        oldPrice: "₦713,670",
        discount: "-35%",
        timeLeft: "🕒 7hrs - 15hrs 59mins 17secs",
        sold: "31%",
    },
    {
        imgSrc: "image/item3.jpg",
        title: "Haier Thermocool Double Door Refrigerator",
        price: "₦460,430",
        oldPrice: "₦713,670",
        discount: "-35%",
        timeLeft: "🕒 7hrs - 15hrs 59mins 17secs",
        sold: "31%",
    },
    {
        imgSrc: "image/item4.jpg",
        title: "Haier Thermocool Double Door Refrigerator",
        price: "₦460,430",
        oldPrice: "₦713,670",
        discount: "-35%",
        timeLeft: "🕒 7hrs - 15hrs 59mins 17secs",
        sold: "31%",
    },
];

// Select the container
const gridContainer = document.getElementById("grid-container");

// Render items dynamically
items.forEach(item => {
    const gridItem = `
        <div class="grid-items">
            <img id="items" src="${item.imgSrc}" alt="${item.title}">
            <div class="grid-items1">
                <a class="img" href="">
                    <p style="font-size: 15px; font-weight: 200;">${item.title}</p>
                    <hr>
                    <h2 id="imgs">${item.price}</h2>
                    <p id="imgs" style="text-decoration: line-through; color: rgb(167, 161, 161);">${item.oldPrice}</p>
                    <button id="imgs" style="height: 15px; width: 30px; text-align: center; font-size: 10px; border-radius: 5px; color: rgb(253, 5, 46); background-color: pink;">${item.discount}</button>
                    <hr>
                    <p style="font-size: 14px; font-weight: 500;">${item.timeLeft}</p>
                    <hr>
                    <p>Sold: <b>${item.sold}</b></p>
                    <button id="cart-add">Add to Cart</button>
                </a>
            </div>
        </div>
    `;
    gridContainer.innerHTML += gridItem;
});
