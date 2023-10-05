const hotDrinks = [
    {item: 'latté', small: '$3.25', large: '$4.00'},
    {item: 'americano', small: '$2.75', large: '$3.50'},
    {item: 'mocha', small: '$3.75', large: '$4.50'},
    {item: 'cappuccino', small: '$3.00', large: '$3.50'},
    {item: 'chai', small: '$3.00', large: '$3.75'},
    {item: 'hot chocolate', small: '$3.25', large: '$4.00'},
];

const icedDrinks = [
    {item: 'cold brew', small: '$3.75', large: '$4.25'},
    {item: 'iced tea', small: '$2.50', large: '$3.00'},
    {item: 'italian soda', small: '$3.00', large: '$3.75'},
    {item: 'lemonade', small: '$3.00', large: '$3.75'},
    {item: 'fresh orange juice', small: '$4.00', large: '$5.00'},
];

const espressoDrinks = [
    {item: 'doppio espresso', price: '$1.75'},
    {item: 'cortado', price: '$2.25'},
    {item: 'macchiato', price: '$3.25'},
];

const addOns = [
    {item: 'add flavor', price: '$0.50'},
    {item: 'add doubleshot', price: '$0.75'},
];

const generatePageOne = function() {

    const content = document.getElementById('content'); 

    const pageOne = document.createElement('div');
    pageOne.setAttribute('id', 'pageOne');

    const drinkMenuContainer = document.createElement('div');
    drinkMenuContainer.setAttribute('id', 'drinkMenuContainer');

    const headerContainer = document.createElement('div');
    headerContainer.setAttribute('id', 'drinkHeader');
    const drinkHeader = document.createElement('h1');
    drinkHeader.setAttribute('class', 'menu-name');
    drinkHeader.textContent = 'LIBATIONS';
    headerContainer.appendChild(drinkHeader);
    drinkMenuContainer.appendChild(headerContainer);

    const tableContainer = document.createElement('div');
    tableContainer.setAttribute('id', 'tableContainer')

     // generate hotTable with values
    
    const hotTable = document.createElement('table');
    hotTable.setAttribute('id', 'hotTable');

    const hotHeaderRow = document.createElement('tr');
    
    const hotHeader = document.createElement('th');
    hotHeader.textContent = ('hot or iced');

    const smallHotHeader = document.createElement('th');
    smallHotHeader.textContent = ('12 oz');

    const largeHotHeader = document.createElement('th');
    largeHotHeader.textContent = ('16 oz');

    hotHeaderRow.appendChild(hotHeader);
    hotHeaderRow.appendChild(smallHotHeader);
    hotHeaderRow.appendChild(largeHotHeader);
    hotTable.appendChild(hotHeaderRow);
    
    for (let i = 0; i < hotDrinks.length; i++) {
        let newRow = hotTable.insertRow();
        newRow.setAttribute('id', [i]);
        newRow.setAttribute('class', 'row');
    
        let newCell1 = newRow.insertCell();
        newCell1.setAttribute('class', 'drink-item');
        newCell1.textContent = (hotDrinks[i].item);
        
        let newCell2 = newRow.insertCell();
        newCell2.setAttribute('class', 'drink-size');
        newCell2.textContent = (hotDrinks[i].small);

        let newCell3 = newRow.insertCell();
        newCell3.setAttribute('class', 'drink-size');
        newCell3.textContent = (hotDrinks[i].large);
    };

    tableContainer.appendChild(hotTable);

     // generate icedTable with values
    
     const icedTable = document.createElement('table');
     icedTable.setAttribute('id', 'icedTable');
 
     const icedHeaderRow = document.createElement('tr');
     
     const icedHeader = document.createElement('th');
     icedHeader.textContent = ('served over ice');
 
     const smallIcedHeader = document.createElement('th');
     smallIcedHeader.textContent = ('12 oz');
 
     const largeIcedHeader = document.createElement('th');
     largeIcedHeader.textContent = ('16 oz');

     icedHeaderRow.appendChild(icedHeader);
     icedHeaderRow.appendChild(smallIcedHeader);
     icedHeaderRow.appendChild(largeIcedHeader);
     icedTable.appendChild(icedHeaderRow);
     
     for (let i = 0; i < icedDrinks.length; i++) {
        let newRow = icedTable.insertRow();
        newRow.setAttribute('id', [i]);
        newRow.setAttribute('class', 'row');
    
        let newCell1 = newRow.insertCell();
        newCell1.setAttribute('class', 'drink-item');
        newCell1.textContent = (icedDrinks[i].item);
        
        let newCell2 = newRow.insertCell();
        newCell2.setAttribute('class', 'drink-size');
        newCell2.textContent = (icedDrinks[i].small);

        let newCell3 = newRow.insertCell();
        newCell3.setAttribute('class', 'drink-size');
        newCell3.textContent = (icedDrinks[i].large);
    };
 
     tableContainer.appendChild(icedTable);
 
     // generate espressoTable with values

     const espressoHeaderRow = document.createElement('tr');
    
     const espressoHeader = document.createElement('th');
     espressoHeader.textContent = ('keep it classic');

    const espressoTable = document.createElement('table');
    espressoTable.setAttribute('id', 'espressoTable');

    espressoHeaderRow.appendChild(espressoHeader);
    espressoTable.appendChild(espressoHeaderRow);

    for (let i = 0; i < espressoDrinks.length; i++) {
        let newRow = espressoTable.insertRow();
        newRow.setAttribute('id', [i]);
        newRow.setAttribute('class', 'row');
    
        let newCell1 = newRow.insertCell();
        newCell1.setAttribute('class', 'drink-item');
        newCell1.textContent = (espressoDrinks[i].item);
        
        let newCell2 = newRow.insertCell();
        newCell2.setAttribute('class', 'drink-size');
        newCell2.textContent = (espressoDrinks[i].price);
    };

    tableContainer.appendChild(espressoTable);

    // generate addOn table with values

    const addOnHeaderRow = document.createElement('tr');
    
    const addOnHeader = document.createElement('th');
    addOnHeader.textContent = ('extras');

   const addOnTable = document.createElement('table');
   addOnTable.setAttribute('id', 'addOnTable');

   addOnHeaderRow.appendChild(addOnHeader);
   addOnTable.appendChild(addOnHeaderRow);

   for (let i = 0; i < addOns.length; i++) {
       let newRow = addOnTable.insertRow();
       newRow.setAttribute('id', [i]);
       newRow.setAttribute('class', 'row');
   
       let newCell1 = newRow.insertCell();
       newCell1.setAttribute('class', 'drink-item');
       newCell1.textContent = (addOns[i].item);
       
       let newCell2 = newRow.insertCell();
       newCell2.setAttribute('class', 'drink-size');
       newCell2.textContent = (addOns[i].price);
   };

    // append to containers

    tableContainer.appendChild(addOnTable);
    drinkMenuContainer.appendChild(tableContainer);
    pageOne.appendChild(drinkMenuContainer);
    content.appendChild(pageOne);

    const citation = document.createElement('div');
    citation.setAttribute('class', 'citation');
    citation.textContent = ("image from https://www.enterthearcverse.com/post/101-d-d-tavern-ideas");
    content.appendChild(citation);
}

export default generatePageOne;