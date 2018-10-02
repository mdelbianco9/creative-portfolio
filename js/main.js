

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

var imgArray = [
	{
		id: "art2",
		img: "img/art/art2.png"
	},
	{
		id: "art3",
		img: "img/art/art3.png"
	},
	{
		id: "art4",
		img: "img/art/art4.png"
	},
	{
		id: "art5",
		img: "img/art/art5.png"
	},
	{
		id: "art6",
		img: "img/art/art6.jpg"
	}
]

var counter = 1;
var className = document.getElementsByClassName('artPiece')[0];
var artHeader = document.getElementsByClassName('artHeader')[0];
var artList = document.getElementById('artList');
var artImage = document.getElementById('artImage');

// Create Elements:


 function toggleFunc() {
	counter += 1;

	if(counter % 2 == 0){
		className.classList.add('transitionArt');
		artHeader.classList.add('display-none');
		//Add list items 
		for(i=0; i<imgArray.length; i++){
			var createLi = document.createElement('LI');
			var createImg = document.createElement('IMG');

				createImg.setAttribute('src', imgArray[i].img);
				createImg.classList.add('artSelector');
				let classLi = ['animated', 'fadeInDown', 'li1'];
				createLi.classList.add(...classLi);
				createLi.appendChild(createImg);
				artList.appendChild(createLi);
		}
		var liList = document.getElementsByClassName('li1');
		// add event listener to each li 
		for(i=0; i<liList.length; i++){
			liList[i].addEventListener('click', function(){

				
					artImage.setAttribute('src', imgArray[3].img);
					console.log(liList[i])
				
					
					
				
				
				
				
				
			})
		}
		
	}else{
		className.classList.remove('transitionArt');
		artHeader.classList.remove('display-none');
		// Remove list items
		var li1 = document.getElementsByClassName('li1');
		// for(i=0; i<li1.length; i++){
		// 	li[i].classList.remove('fadeInDown')
		// 	li1[i].classList.add('fadeOutUp');
		// }
		for(i=0; i<li1.length; i++){
			li1[i].style.display = 'none';
		}	

	}
	console.log(counter);
	
};






