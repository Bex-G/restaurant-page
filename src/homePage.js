const generateHomePage = function () {

    const content = document.getElementById('content');
    const homePage = document.createElement('div');
    homePage.setAttribute('id', 'homePage');

    const welcome = document.createElement('p');
    welcome.setAttribute('id', 'welcome');
    welcome.textContent = ('Welcome, weary traveler, to the');

    const logoContainer = document.createElement('div');
    logoContainer.setAttribute('id', 'logoContainer');
    const text1 = document.createTextNode ('Black ');
    logoContainer.appendChild(text1); 
    const icon = document.createElement('img');
    icon.src  = '../src/icon.png';
    icon.setAttribute('id', 'icon');
    logoContainer.appendChild(icon);
    const text2 = document.createTextNode ('at Café');
    logoContainer.appendChild(text2);
    content.appendChild(logoContainer);

    const offer = document.createElement('p');
    offer.textContent = ('Might I offer you...');

    const buttonContainer = document.createElement('div');
    buttonContainer.setAttribute('id', 'buttonContainer');
    
    const drinkButton = document.createElement('button');
    drinkButton.setAttribute('class', 'menuButton');
    drinkButton.textContent = ('something to drink');

    buttonContainer.appendChild(drinkButton);

    const foodButton = document.createElement('button');
    foodButton.setAttribute('class', 'menuButton');
    foodButton.textContent = ('something to eat');
    buttonContainer.appendChild(foodButton);

    homePage.appendChild(welcome);
    homePage.appendChild(logoContainer);
    homePage.appendChild(offer);
    homePage.appendChild(buttonContainer);

    const citation = document.createElement('div');
    citation.setAttribute('class', 'citation');
    citation.textContent = ('background by Stéphane Juban Unsplash + icon by juicy_fish on flaticon');

    content.appendChild(homePage);
    content.appendChild(citation);
};

export default generateHomePage;