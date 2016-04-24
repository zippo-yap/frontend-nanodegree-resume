var moonWalkers = [
	"Neil Armstrong",
	"Buzz Aldrin",
	"Pete Conrad",
	"Alan Bean",
	"Alan Shepard",
	"Edgar Mitchell",
	"David Scott",
	"James Irwin",
	"John Young",
	"Charles Duke",
	"Eugene Cernan",
	"Harrison Schmitt"
];

function alphabetizer(names) {
	var array = names;
	var newArray = [];
	//Loop through each item in the array and split each string by " " and reverse then join back and push to new array.
	for (var name in array){
			newArray.push(array[name].split(" ").reverse().join(", "));
	}
	// Sort items in array alphabetically
	newArray.sort();
	return newArray;
}

// Try logging your results to test your code!
console.log(alphabetizer(moonWalkers));