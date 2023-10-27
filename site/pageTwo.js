import drinkPage from "./pageOne";

const food = [
    {item: "stuffed eggs", description: "prepared in the style of the devil", price: "1 firstborn"},
    {item: "leafy green salad", description: "freshly forraged by a strange man in the woods", price: "4 copper"},
    {item: "countryman's platter", description: "a fine assortment of bread, cheese, nuts and fruits", price: "6 copper"},
    {item: "meat stew", description: "a hearty stew of roast beast and root vegetables", price: "1 silver"},
    {item: "nutty butter cake", description: "a rich cake with candied nuts and jam", price: "your figure"},
];

const foodPage = function() {

    const content = document.getElementById('content');
    const pageTwo = document.createElement('div');
    pageTwo.setAttribute('id', 'pageTwo');

    const foodMenuContainer = document.createElement('div');
    foodMenuContainer.setAttribute('id', 'foodMenuContainer');

    const tabContainer = document.createElement('div');
    tabContainer.setAttribute('id', 'tabContainer');

    const drinkTab = document.createElement('button');
    drinkTab.setAttribute('id', 'inactiveTab');
    drinkTab.setAttribute('class', 'tabs');
    drinkTab.textContent = ('drink')
    drinkTab.addEventListener('click', () => {
        content.removeChild(pageTwo);
        content.removeChild(citation);
        drinkPage()});

    const foodTab = document.createElement('button');
    foodTab.setAttribute('id', 'activeTab');
    foodTab.setAttribute('class', 'tabs');
    foodTab.textContent = ('food');

    tabContainer.appendChild(drinkTab);
    tabContainer.appendChild(foodTab);
    foodMenuContainer.appendChild(tabContainer);

    const headerContainer = document.createElement('div');
    headerContainer.setAttribute('class', 'header-container');

    const icon = document.createElement('img');
    icon.src  = '../src/icon.png';
    icon.setAttribute('id', 'icon');
    headerContainer.appendChild(icon);

    const foodHeader = document.createElement('h1');
    foodHeader.setAttribute('class', 'menu-name');
    foodHeader.textContent = 'PROVISIONS';
    headerContainer.appendChild(foodHeader);
    foodMenuContainer.appendChild(headerContainer);

    const foodList = document.createElement('div');
    foodList.setAttribute('id', 'foodList');

    for (let i = 0; i < food.length; i++) {
        
        let leftDiv = document.createElement('div');
        leftDiv.setAttribute('class', 'menu-left')
        
        let newItem = document.createElement('p');
        newItem.setAttribute('class', 'food-item');
        newItem.textContent = (food[i].item);

        let newDescription = document.createElement('p');
        newDescription.setAttribute('class', 'food-description');
        newDescription.textContent = (food[i].description);

        leftDiv.appendChild(newItem);
        leftDiv.appendChild(newDescription);
        foodList.appendChild(leftDiv);
    };

    for (let i = 0; i < food.length; i++) {

    let rightDiv = document.createElement('div');
    rightDiv.setAttribute('class', 'menu-right')

    let newPrice = document.createElement('p');
    newPrice.setAttribute('class', 'food-price');
    newPrice.textContent = ("cost: " + food[i].price);

    rightDiv.appendChild(newPrice);
    foodList.appendChild(rightDiv);
    };

    foodMenuContainer.appendChild(foodList);
    pageTwo.appendChild(foodMenuContainer);
    content.appendChild(pageTwo);

    const citation = document.createElement('div');
    citation.setAttribute('class', 'citation');
    citation.textContent = ("image from https://www.diceanddragons.com/post/a-feast-for-adventurers-the-100-fantastical-foods-you-can-order-from-a-tavern");
    content.appendChild(citation);
};

export default foodPage;