const food = [
    {item: "stuffed eggs", description: "prepared in the style of the devil", price: "1 firstborn"},
    {item: "leafy green salad", description: "freshly forraged by a strange man in the woods", price: "4 copper"},
    {item: "countryman's platter", description: "a fine assortment of bread, cheese, nuts and fruits", price: "6 copper"},
    {item: "meat stew", description: "a hearty stew of roast beast and root vegetables", price: "1 silver"},
    {item: "nutty butter cake", description: "a rich cake with candied nuts served and jam", price: "your figure"},
];

generatePageTwo = function() {

    const content = document.getElementById('content');
    const pageTwo = document.createElement('div');
    pageTwo.setAttribute('id', 'pageTwo');

    const foodMenuContainer = document.createElement('div');
    foodMenuContainer.setAttribute('id', 'foodMenuContainer');

    const headerContainer = document.createElement('div');
    headerContainer.setAttribute('id', 'foodHeader');
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

    const backgroundContainer = document.createElement('div');
    const image = document.createElement('img');
    image.src = '../src/tavern.jpg';
    backgroundContainer.appendChild(image);
    backgroundContainer.setAttribute('id', 'backgroundContainer');
    
    pageTwo.appendChild(foodMenuContainer);
    pageTwo.appendChild(backgroundContainer);

    content.appendChild(pageTwo);
};