import "./styles.css";
import foodPage from "./food";
import drinkUp from "./assets/drinkUp.jpg";

const hotDrinks = [
  ["hot or iced", "12oz", "16oz"],
  { item: "latté", small: "$3.25", large: "$4.00" },
  { item: "americano", small: "$2.75", large: "$3.50" },
  { item: "mocha", small: "$3.75", large: "$4.50" },
  { item: "cappuccino", small: "$3.00", large: "$3.50" },
  { item: "chai", small: "$3.00", large: "$3.75" },
  { item: "hot chocolate", small: "$3.25", large: "$4.00" },
];

const icedDrinks = [
  ["over ice", "16oz", "20oz"],
  { item: "cold brew", small: "$3.75", large: "$4.25" },
  { item: "iced tea", small: "$2.50", large: "$3.00" },
  { item: "lemonade", small: "$3.00", large: "$3.75" },
];

const espressoDrinks = [
  ["keep it classic"],
  { item: "doppio espresso", price: "$1.75" },
  { item: "cortado", price: "$2.25" },
  { item: "macchiato", price: "$3.25" },
];

const addOns = [
  ["extras"],
  { item: "flavor", price: "$0.50" },
  { item: "doubleshot", price: "$0.75" },
];

const drinkItems = [hotDrinks, icedDrinks, espressoDrinks, addOns];

const drinkPage = function () {
  const content = document.getElementById("content");

  const menu = document.createElement("div");
  menu.className = "menu";

  const backgroundImg = document.createElement("img");
  backgroundImg.src = drinkUp;

  const tabContainer = document.createElement("div");
  tabContainer.className = "tab-container";

  const tab1 = document.createElement("button");
  tab1.classList.add("active", "tab");
  tab1.textContent = "drink";

  const tab2 = document.createElement("button");
  tab2.className = "tab";
  tab2.textContent = "food";
  tab2.addEventListener("click", () => {
    content.removeChild(menu);
    content.removeChild(backgroundImg);
    foodPage();
  });

  tabContainer.append(tab1, tab2);

  const header = document.createElement("h1");
  header.className = "menu-name";
  header.textContent = "LIBATIONS";

  const drinkTables = document.createElement("div");
  drinkTables.classList = "drink-tables";

  let i;
  let j;
  let k;

  for (i = 0; i < drinkItems.length; i++) {
    let table = document.createElement("table");
    let headerRow = document.createElement("tr");
    for (j = 0; j < drinkItems[i][0].length; j++) {
      // gets header(s) from the first item in category [i]
      let tableHeader = document.createElement("th");
      tableHeader.textContent = drinkItems[i][0][j];
      headerRow.append(tableHeader);
    }
    table.append(headerRow);
    for (k = 1; k < drinkItems[i].length; k++) {
      // iterates over remaining items' objects in category [i]
      if ("small" in drinkItems[i][k]) {
        let newRow = table.insertRow();
        newRow.className = "row";

        let cell1 = newRow.insertCell();
        cell1.textContent = drinkItems[i][k].item;

        let cell2 = newRow.insertCell();
        cell2.textContent = drinkItems[i][k].small;

        let cell3 = newRow.insertCell();
        cell3.textContent = drinkItems[i][k].large;
      } else {
        let newRow = table.insertRow();
        newRow.className = "row";

        let cell1 = newRow.insertCell();
        cell1.textContent = drinkItems[i][k].item;

        let cell2 = newRow.insertCell();
        cell2.textContent = drinkItems[i][k].price;
      }
    }
    drinkTables.append(table);
  }

  menu.append(tabContainer, header, drinkTables);
  content.append(menu, backgroundImg);

  const citation = document.getElementById("citation");
  citation.textContent =
    "image from https://www.enterthearcverse.com/post/101-d-d-tavern-ideas";
};

export default drinkPage;
