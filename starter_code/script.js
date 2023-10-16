const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	str = str.toLowerCase();
	//store the array of matching fruit names to the results variable and filter the fruit array
	const results = fruit.filter(item => {
	//check if the the item contains the string
		return item.toLowerCase().includes(str);
	})
	return results;
}

function searchHandler(e) {
//get the current input value
	const inputVal = input.value;
//call the search function 
	const suggest = search(inputVal);
//show the suggestions
	showSuggestions(suggest, inputVal);
}

function showSuggestions(results, inputVal) {
//clear previous suggestions
	clearSuggestions();
//if input is empty, dont show any suggestions
	if (inputVal === '') return;
	
	for (let result of results) {
//create an li for each matching item from the results array
		const li = document.createElement('li');
//set the text of the new li to the current matching item from results array
		li.textContent = result;
//append the li to the suggestions ul
		suggestions.appendChild(li);
	}
}

function useSuggestion(e) {
	if (e.target.tagName === 'LI') {
//set the input value to the clicked suggestion
		input.value = e.target.textContent;
//clear suggestions when a suggestion is clicked
		clearSuggestions();
	}
}

function highlight(e) {
	if (e.target.tagName === 'LI') {
		e.target.style.backgroundColor = '#fc5203'
		e.target.style.fontWeight = 'bold';
	}
}
function unhighlight(e) {
	if (e.target.tagName === 'LI') {
		e.target.style.backgroundColor = '';
		e.target.style.fontWeight = 'normal';
	}
}


function clearSuggestions() {
	suggestions.innerHTML = '';
}

function clickOutsideHandler(e) {
	//check if the click occured outside of the input and suggestion box
	//if the target is not the input element and the target is not the suggestions ul 
	if (!input.contains(e.target) && !suggestions.contains(e.target)) {
		clearSuggestions();
	}
}

document.addEventListener('click', clickOutsideHandler);

suggestions.addEventListener('mouseover', highlight);
suggestions.addEventListener('mouseout', unhighlight);

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);
