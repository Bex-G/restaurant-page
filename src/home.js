import "./styles.css";
import iconImg from "./assets/icon.png";
import drinkPage from "./drinks";
import foodPage from "./food";

function generateHomePage() {
  const content = document.getElementById("content");
  const homePage = document.createElement("div");
  homePage.id = "homePage";

  const welcome = document.createElement("p");
  welcome.textContent = "Welcome, weary traveler, to the";

  const logoContainer = document.createElement("div");
  logoContainer.id = "logoContainer";
  const text1 = document.createTextNode("Black ");
  logoContainer.append(text1);
  const icon = document.createElement("img");
  icon.src = iconImg;
  logoContainer.append(icon);
  const text2 = document.createTextNode("at Café");
  logoContainer.append(text2);
  content.append(logoContainer);

  const offer = document.createElement("p");
  offer.textContent = "Might I offer you...";

  const btnContainer = document.createElement("div");
  btnContainer.className = "btn-container";

  const btn1 = document.createElement("button");
  btn1.className = "menu-btn";
  btn1.textContent = "something to drink";
  btn1.addEventListener("click", () => {
    content.removeChild(homePage);
    drinkPage();
  });

  const btn2 = document.createElement("button");
  btn2.className = "menu-btn";
  btn2.textContent = "something to eat";
  btn2.addEventListener("click", () => {
    content.removeChild(homePage);
    foodPage();
  });

  btnContainer.append(btn1, btn2);

  homePage.append(welcome, logoContainer, offer, btnContainer);
  content.append(homePage);

  const citation = document.getElementById("citation");
  citation.textContent =
    "background by Stéphane Juban Unsplash + icon by juicy_fish on flaticon";
}

export default generateHomePage;
