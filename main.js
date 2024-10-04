// Select elements
const changeTextButton = document.getElementById('change-text');
const introText = document.getElementById('intro-text');
const itemInput = document.getElementById('item-input');
const addItemButton = document.getElementById('add-item');
const itemList = document.getElementById('item-list');
const toggleListButton = document.getElementById('toggle-list');

// 1. Change paragraph text when the "Change Text" button is clicked
changeTextButton.addEventListener('click', function() {
    introText.textContent = 'You just changed this text using JavaScript!';
});

// 2. Add new item to the list when "Add Item" button is clicked
addItemButton.addEventListener('click', function() {
    const newItemText = itemInput.value;
    if (newItemText !== '') {
        const newItem = document.createElement('li');
        newItem.textContent = newItemText;
        itemList.appendChild(newItem);

        // Clear the input field after adding item
        itemInput.value = '';
    }
});

// 3. Delete a list item when clicked
itemList.addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
        itemList.removeChild(event.target);
    }
});

// 4. Toggle paragraph background color when clicked
let isBlue = false;
introText.addEventListener('click', function() {
    if (isBlue) {
        introText.style.backgroundColor = 'white';
    } else {
        introText.style.backgroundColor = 'blue';
    }
    isBlue = !isBlue;
});

// 5. Toggle the visibility of the list and change button text
toggleListButton.addEventListener('click', function() {
    if (itemList.classList.contains('hidden')) {
        itemList.classList.remove('hidden');
        toggleListButton.textContent = 'Hide List';
    } else {
        itemList.classList.add('hidden');
        toggleListButton.textContent = 'Show List';
    }
});
