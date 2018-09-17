

var change = document.getElementById("newColor");

function change() {
	document.getElementById("newColor").style.backgroundColor = "Black";
};

document.getElementById("clickme").addEventListener('click', function() {
	document.getElementById("newColor").classList.add("mystyle");
});


/*   Slide #page-2 to view */
document.getElementById('Layer_1').addEventListener("click", function() {
	var page_2 = document.getElementById('page-2');
	let classesToAdd = ["animated", "slideInUp", "page-2-intro"];
	page_2.classList.add(...classesToAdd);

	var home_page = document.getElementById('home-page');
	home_page.classList.add("display-none");
});



