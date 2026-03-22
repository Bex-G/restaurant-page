import "./styles.css";
import drinkPage from "./drinks";
import tavern from "./assets/tavern.jpg";

const food = [
  {
    item: "stuffed eggs",
    description: "prepared in the style of the devil",
    price: "1 firstborn",
  },
  {
    item: "leafy green salad",
    description: "freshly forraged by a strange man in the woods",
    price: "4 copper",
  },
  {
    item: "countryman's platter",
    description: "a fine assortment of bread, cheese, nuts and fruits",
    price: "6 copper",
  },
  {
    item: "meat stew",
    description: "a hearty stew of roast beast and root vegetables",
    price: "1 silver",
  },
  {
    item: "nutty butter cake",
    description: "a rich cake with candied nuts and jam",
    price: "your figure",
  },
];

const foodPage = function () {
  const content = document.getElementById("content");

  const menu = document.createElement("div");
  menu.className = "menu";

  const backgroundImg = document.createElement("img");
  backgroundImg.src = tavern;

  const tabContainer = document.createElement("div");
  tabContainer.className = "tab-container";

  const tab1 = document.createElement("button");
  tab1.textContent = "drink";
  tab1.className = "tab";
  tab1.addEventListener("click", () => {
    content.removeChild(menu);
    content.removeChild(backgroundImg);
    drinkPage();
  });

  const tab2 = document.createElement("button");
  tab2.classList.add("active", "tab");
  tab2.textContent = "food";

  tabContainer.append(tab1, tab2);

  const header = document.createElement("h1");
  header.className = "menu-name";
  header.textContent = "PROVISIONS";

  const foodList = document.createElement("ul");
  foodList.className = "food-list";

  for (let i = 0; i < food.length; i++) {
    let li = document.createElement("li");
    let div1 = document.createElement("div");
    let item = document.createElement("p");
    item.textContent = food[i].item;
    item.className = "food-item";
    let description = document.createElement("p");
    description.textContent = food[i].description;
    description.className = "food-description";
    let div2 = document.createElement("div");
    let price = document.createElement("p");
    price.textContent = food[i].price;
    price.className = "food-price";
    div1.append(item, description);
    div2.append(price);
    li.append(div1, div2);
    foodList.append(li);
  }

  menu.append(tabContainer, header, foodList);
  content.append(menu, backgroundImg);

  const citation = document.getElementById("citation");
  citation.textContent =
    "image from https://www.diceanddragons.com/post/a-feast-for-adventurers-the-100-fantastical-foods-you-can-order-from-a-tavern";
};

export default foodPage;
