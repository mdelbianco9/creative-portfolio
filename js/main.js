

var change = document.getElementById("newColor");
// Work Experience options page 
var page_2 = document.getElementById('page-2');
// Home page
var home_page = document.getElementById('home-page');
var web_dev_page = document.getElementById('web-dev-page');
var artPage = document.getElementById('artPage');


// Change color of elements on ? button
function change() {
	document.getElementById("newColor").style.backgroundColor = "Black";
};

document.getElementById("clickme").addEventListener('click', function() {
	document.getElementById("newColor").classList.add("mystyle");
});




/*   Slide #page-2 to view */
document.getElementById('Layer_1').addEventListener("click", function() {
	let classesToAdd = ["animated", "fadeIn", "display-block"];
	page_2.classList.add(...classesToAdd);
	home_page.classList.add("display-none");
});



// Show web-dev-page on click of Web Development option in work experences
document.getElementById('web-dev').addEventListener('click', function() {
	let classesToAdd = ["display-block", "animated", "fadeIn"];
	web_dev_page.classList.add(...classesToAdd);
	page_2.classList.remove("display-block");
	page_2.classList.add("display-none");
});

// closes the web-dev-page X on web-dev-page
document.getElementById('close').addEventListener('click', function() {
	web_dev_page.classList.remove("display-block");
	page_2.classList.add("display-block");
});


// SHow art page
document.getElementById("goToArt").addEventListener("click", function() {
	let classesToAdd = ["animated", "fadeIn", "slow", "display-block"];
	artPage.classList.add(...classesToAdd);
	page_2.classList.remove("display-block");
})

// closes the web-dev-page X on web-dev-page
document.getElementById('back').addEventListener('click', function() {
	artPage.classList.remove("display-block");
	page_2.classList.add("display-block");
});

// SLide button -> transforms img to be larger
var counter = 1;
var className = document.getElementsByClassName('artPiece')[0];
var artHeader = document.getElementsByClassName('artHeader')[0];

 function toggleFunc() {
	counter += 1;
	if(counter % 2 == 0){
		className.classList.add('transitionArt');
		artHeader.classList.add('display-none');	
	}else{
		className.classList.remove('transitionArt');
		artHeader.classList.remove('display-none');	
	}
	console.log(counter);
	
};






