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

     // generate logo

     const content = document.getElementById('content');
    
     const logoContainer = document.createElement('div');
     logoContainer.setAttribute('id', 'logoContainer');
 
     const text1 = document.createTextNode ('Black ');
     logoContainer.appendChild(text1); 
     const image = document.createElement('img');
     image.src  = '../src/icon.png';
     image.setAttribute('class', 'logo');
     logoContainer.appendChild(image);
     const text2 = document.createTextNode ('at Café');
     logoContainer.appendChild(text2);
     content.appendChild(logoContainer);
     
     // add structure

    const parentContainer = document.createElement('div');
    parentContainer.setAttribute('id', 'parentContainer');

    const tableContainer = document.createElement('div');
    tableContainer.setAttribute('id', 'tableContainer')

     // generate hotTable with values
    
    const hotTable = document.createElement('table');
    hotTable.setAttribute('id', 'hotTable');

    const hotHeaderRow = document.createElement('tr');
    
    const hotHeader = document.createElement('th');
    const hotHeaderText = document.createTextNode('served hot or iced');
    hotHeader.appendChild(hotHeaderText);

    const smallHotHeader = document.createElement('th');
    const smallHotHeaderText = document.createTextNode('12 oz');
    smallHotHeader.appendChild(smallHotHeaderText);

    const largeHotHeader = document.createElement('th');
    const largeHotHeaderText = document.createTextNode('16 oz');
    largeHotHeader.appendChild(largeHotHeaderText);

    hotHeaderRow.appendChild(hotHeader);
    hotHeaderRow.appendChild(smallHotHeader);
    hotHeaderRow.appendChild(largeHotHeader);
    hotTable.appendChild(hotHeaderRow);
    
    for (let i = 0; i < hotDrinks.length; i++) {
        let newRow = hotTable.insertRow();
        newRow.setAttribute('id', [i]);
        newRow.setAttribute('class', 'row');
    
        let newCell1 = newRow.insertCell();
        newCell1.setAttribute('class', 'menu-item');
        let newText1 = document.createTextNode(hotDrinks[i].item);
        newCell1.appendChild(newText1);
        
        let newCell2 = newRow.insertCell();
        newCell2.setAttribute('class', 'menu-size');
        let newText2 = document.createTextNode(hotDrinks[i].small);
        newCell2.appendChild(newText2);

        let newCell3 = newRow.insertCell();
        newCell3.setAttribute('class', 'menu-size');
        let newText3 = document.createTextNode(hotDrinks[i].large);
        newCell3.appendChild(newText3);
    };

    tableContainer.appendChild(hotTable);

     // generate icedTable with values
    
     const icedTable = document.createElement('table');
     icedTable.setAttribute('id', 'icedTable');
 
     const icedHeaderRow = document.createElement('tr');
     
     const icedHeader = document.createElement('th');
     const icedHeaderText = document.createTextNode('served over ice');
     icedHeader.appendChild(icedHeaderText);
 
     const smallIcedHeader = document.createElement('th');
     const smallIcedHeaderText = document.createTextNode('12 oz');
     smallIcedHeader.appendChild(smallIcedHeaderText);
 
     const largeIcedHeader = document.createElement('th');
     const largeIcedHeaderText = document.createTextNode('16 oz');
     largeIcedHeader.appendChild(largeIcedHeaderText);
 
     icedHeaderRow.appendChild(icedHeader);
     icedHeaderRow.appendChild(smallIcedHeader);
     icedHeaderRow.appendChild(largeIcedHeader);
     icedTable.appendChild(icedHeaderRow);
     
     for (let i = 0; i < icedDrinks.length; i++) {
         let newRow = icedTable.insertRow();
         newRow.setAttribute('id', [i]);
         newRow.setAttribute('class', 'row');
     
         let newCell1 = newRow.insertCell();
         newCell1.setAttribute('class', 'menu-item');
         let newText1 = document.createTextNode(icedDrinks[i].item);
         newCell1.appendChild(newText1);
         
         let newCell2 = newRow.insertCell();
         newCell2.setAttribute('class', 'menu-size');
         let newText2 = document.createTextNode(icedDrinks[i].small);
         newCell2.appendChild(newText2);
 
         let newCell3 = newRow.insertCell();
         newCell3.setAttribute('class', 'menu-size');
         let newText3 = document.createTextNode(icedDrinks[i].large);
         newCell3.appendChild(newText3);
     };
 
     tableContainer.appendChild(icedTable);
 
     // generate espressoTable with values

     const espressoHeaderRow = document.createElement('tr');
    
     const espressoHeader = document.createElement('th');
     const espressoHeaderText = document.createTextNode('keep it classic');
     espressoHeader.appendChild(espressoHeaderText);

    const espressoTable = document.createElement('table');
    espressoTable.setAttribute('id', 'espressoTable');

    espressoHeaderRow.appendChild(espressoHeader);
    espressoTable.appendChild(espressoHeaderRow);

    for (let i = 0; i < espressoDrinks.length; i++) {
        let newRow = espressoTable.insertRow();
        newRow.setAttribute('id', [i]);
        newRow.setAttribute('class', 'row');
    
        let newCell1 = newRow.insertCell();
        newCell1.setAttribute('class', 'menu-item');
        let newText1 = document.createTextNode(espressoDrinks[i].item);
        newCell1.appendChild(newText1);
        
        let newCell2 = newRow.insertCell();
        newCell2.setAttribute('class', 'menu-size');
        let newText2 = document.createTextNode(espressoDrinks[i].price);
        newCell2.appendChild(newText2);
    };

    tableContainer.appendChild(espressoTable);

    // generate addOn table with values

    const addOnHeaderRow = document.createElement('tr');
    
    const addOnHeader = document.createElement('th');
    const addOnHeaderText = document.createTextNode('extras');
    addOnHeader.appendChild(addOnHeaderText);

   const addOnTable = document.createElement('table');
   addOnTable.setAttribute('id', 'addOnTable');

   addOnHeaderRow.appendChild(addOnHeader);
   addOnTable.appendChild(addOnHeaderRow);

   for (let i = 0; i < addOns.length; i++) {
       let newRow = addOnTable.insertRow();
       newRow.setAttribute('id', [i]);
       newRow.setAttribute('class', 'row');
   
       let newCell1 = newRow.insertCell();
       newCell1.setAttribute('class', 'menu-item');
       let newText1 = document.createTextNode(addOns[i].item);
       newCell1.appendChild(newText1);
       
       let newCell2 = newRow.insertCell();
       newCell2.setAttribute('class', 'menu-size');
       let newText2 = document.createTextNode(addOns[i].price);
       newCell2.appendChild(newText2);
   };

   // append to containers

   tableContainer.appendChild(addOnTable);
   parentContainer.appendChild(tableContainer);
   content.appendChild(parentContainer);
}

export default generatePageOne;