var elem = document.getElementById("comments_container");
let currentPic;
const pictures = [{name: "demon.jpg", 					genre: "Fantasy", 		desc: "Don't look at this one too long. They're watching you."},
					{name: "pink.jpg", 					genre: "Abstract", 		desc: "She's all out of bubblegum."},
					{name: "blue.jpg", 					genre: "Abstract", 		desc: "She's blue, dabba dee dabba die."},
					{name: "black.jpg", 				genre: "Abstract", 		desc: "She wants to paint it black."},
					{name: "tree.jpg", 					genre: "Nature", 		desc: "Ultra high definition image of tree bark."},
					{name: "moon.jpg", 					genre: "Nature", 		desc: "Kinda far away."},
					{name: "bell.jpg", 					genre: "Realistic", 	desc: "Ring a ding a ling."},
					{name: "Rainy Days.jpg", 			genre: "Realistic", 	desc: "You can't outrun the rain."}, 
					{name: "Day and Night.jpg", 		genre: "Abstract", 		desc: "Torn between two worlds."}, 
					{name: "Deadly Boquet.jpg", 		genre: "Still Life", 	desc: "Belladonna: more than just a pretty name."}, 
					{name: "Angelic Demon.jpg", 		genre: "Fantasy", 		desc: "Fallen angels can still fly."}, 
					{name: "Birds of a Feather.jpg",  	genre: "Nature", 		desc: "Gregarious birds greet the morning with gusto."}, 
					{name: "Deadly Flourish.jpg", 		genre: "Still Life", 	desc: "Wilting petals, shed like desiccated tears."},
					{name: "Deer.jpg", 					genre: "Abstract", 		desc: "There are deer."}, 
					{name: "Earth's Core.jpg", 			genre: "Sci-Fi", 		desc: "It's sci-fi, but he has a claymore sword, because why not?"}, 
					{name: "fammarion.png", 			genre: "Fantasy", 		desc: "The land of Fammarion is a very silly place."}, 
					{name: "Latern Lit Town.jpg", 		genre: "Fantasy", 		desc: "The baron of this town banned the electric light in a fit of rage at a busted light bulb."}, 
					{name: "Natures Call.jpg", 			genre: "Nature", 		desc: "When nature calls, it sounds suspiciously like wolves."}, 
					{name: "Natures Escape.jpg", 		genre: "Landscape", 	desc: "A rustic cottage that simply screams, 'Your quest begins here...'"},
					{name: "samurai.jpg", 				genre: "Realistic", 	desc: "Did anyone here watch Moon Knight? This guy is like that, probably."}, 
					{name: "watercolorwoman.jpg", 		genre: "Realistic", 	desc: "She doesn't have time for any of your nonsense."}, 
					{name: "Winter Wonders.jpg", 		genre: "Landscape", 	desc: "Ain't no globe like a snowglobe."},
					{name: "alien.jpg", 				genre: "Sci-Fi", 		desc: "It's better without the context."},
					{name: "friends.jpg", 				genre: "Nature", 		desc: "Two trickster spirits. One unbreakable friendship."},
					{name: "horse.jpg", 				genre: "Fantasy", 		desc: "He rode upon a midnight steed."},
					{name: "man.gif", 					genre: "Realistic", 	desc: "What a creep."},
					{name: "pokemon.gif", 				genre: "Sci-Fi", 		desc: "Pokemon is totally sci-fi."},
					{name: "robot.jpg", 				genre: "Sci-Fi", 		desc: "One of Dr. Octopus' experiments went haywire."},
					{name: "seat.png", 					genre: "Abstract", 		desc: "A seat with a view."}];

$(document).ready(function() {
	let i;
	let pageNumber = 1;
	
	$(".container form input").on("click", function() {
		alert("Your response has been submitted.");
	});
	$("#img_fs img").attr("src", `images/${localStorage.getItem("myCurrentPic")}`);
	$("#imgTitle").text(`${localStorage.getItem("myCurrentPicTitle")}`);
	$("#imgDetails").text(`${localStorage.getItem("myCurrentPicDesc")}`);
	$("#productCard img").attr("src", `images/${localStorage.getItem("myCurrentPic")}`);
	$("#productCard h3").text(`${localStorage.getItem("myCurrentPicTitle")}`);
	$("#productDesc").text(`${localStorage.getItem("myCurrentPicDesc")}`);
	
	for (i = 1; i <= 6; i++) {
		$(`#img${i}`).attr("src", `images/${pictures[i-1].name}`);
		$(`#category${i}`).html(pictures[i-1].genre);
		$(`#title${i}`).html(pictures[i-1].name.substring(0, pictures[i-1].name.length-4));
		$(`#details${i}`).html(pictures[i-1].desc);
	}
		
	$("#postbtn").click(function() {
		var msg = document.getElementById("c_section").value;
		elem.innerHTML += `<p>${msg}</p>`;
		$("#comments_container").css("border", "1px solid black");
	});
	
	$(".picture").click(function() {
		let pictureSrc = $(this).attr("src").substring(7);
		let pictureTitle = pictureSrc.substring(0, pictureSrc.length - 4);
		let pictureDesc = pictures.find(function(picture) { return picture.name === pictureSrc; }).desc;
		localStorage.setItem("myCurrentPic", `${pictureSrc}`);
		localStorage.setItem("myCurrentPicTitle", `${pictureTitle}`);
		localStorage.setItem("myCurrentPicDesc", `${pictureDesc}`);
		location.assign("click-into-image.html");
	});
	
	$(".clickIntoImageLink").click(function() {
		let pictureSrc = $(this).attr("src").substring(7);
		let pictureTitle = pictureSrc.substring(0, pictureSrc.length - 4);
		let pictureDesc = pictures.find(function(picture) { return picture.name === pictureSrc; }).desc;
		localStorage.setItem("myCurrentPic", `${pictureSrc}`);
		localStorage.setItem("myCurrentPicTitle", `${pictureTitle}`);
		localStorage.setItem("myCurrentPicDesc", `${pictureDesc}`);
		location.assign("click-into-image.html");
	});
	
	$(".DisplayedPicture").click(function() {
		let pictureSrc = $(this).attr("src").substring(7);
		let pictureTitle = pictureSrc.substring(0, pictureSrc.length - 4);
		let pictureDesc = pictures.find(function(picture) { return picture.name === pictureSrc; }).desc;
		localStorage.setItem("myCurrentPic", `${pictureSrc}`);
		localStorage.setItem("myCurrentPicTitle", `${pictureTitle}`);
		localStorage.setItem("myCurrentPicDesc", `${pictureDesc}`);
		location.assign("click-into-image.html");
	});
/*
	$("#img_fs img").on("load", function() {
		$(this).attr("src", `images/${localStorage.getItem("myCurrentPic")}`);
	});
*/	
	$("#buyBtn").on("click", function() {
		location.assign("checkout.html");
	});
	
	$(".previousround").click(function() {
		for (i = 1; i <= 6; i++) {
			$(`#categoryDiv${i}`).css("display", "flex");
			$(`#img${i}`).attr("src", `images/${pictures[i-1].name}`);
			$(`#category${i}`).html(pictures[i-1].genre);
			$(`#title${i}`).html(pictures[i-1].name.substring(0, pictures[i-1].name.length-4));
			$(`#details${i}`).html(pictures[i-1].desc);
		}
		pageNumber = 1;
	});
	
	$(".previous").click(function() {
		for (i -= 1; i >= ((pageNumber * 6) - 6); i--) {
			$(`#categoryDiv${(i % 6) + 1}`).css("display", "flex");
			$(`#img${(i % 6) + 1}`).attr("src", `images/${pictures[(i - 6)].name}`);
			$(`#category${(i % 6) + 1}`).html(pictures[(i - 6)].genre);
			$(`#title${(i % 6) + 1}`).html(pictures[(i - 6)].name.substring(0, pictures[(i - 6)].name.length-4));
			$(`#details${(i % 6) + 1}`).html(pictures[(i - 6)].desc);
		}
		if (pageNumber > 1) {
			pageNumber -= 1;
		}
	});
	
	$(".next").click(function() {
		for (i; i <= ((pageNumber + 1) * 6); i++) {
			if (i <= pictures.length) {
				$(`#img${((i - 1) % 6) + 1}`).attr("src", `images/${pictures[i-1].name}`);
				$(`#category${((i - 1) % 6) + 1}`).html(pictures[i-1].genre);
				$(`#title${((i - 1) % 6) + 1}`).html(pictures[i-1].name.substring(0, pictures[i-1].name.length-4));
				$(`#details${((i - 1) % 6) + 1}`).html(pictures[i-1].desc);
			} else {
				$(`#categoryDiv${((i - 1) % 6) + 1}`).css("display", "none");
			}
		}
		if (pageNumber < Math.ceil(pictures.length / 6)) {
			pageNumber += 1;
		}
	});
	
	$(".nextround").click(function() {
		pageNumber = Math.ceil(pictures.length / 6);
		for (i = (pictures.length - (pictures.length - ((pageNumber - 1) * 6))); i <= (pageNumber * 6); i++) {
			if (i <= pictures.length) {
				$(`#img${((i - 1) % 6) + 1}`).attr("src", `images/${pictures[i-1].name}`);
				$(`#category${((i - 1) % 6) + 1}`).html(pictures[i-1].genre);
				$(`#title${((i - 1) % 6) + 1}`).html(pictures[i-1].name.substring(0, pictures[i-1].name.length-4));
				$(`#details${((i - 1) % 6) + 1}`).html(pictures[i-1].desc);
			} else {
				$(`#categoryDiv${((i - 1) % 6) + 1}`).css("display", "none");
			}
		}
	});
});

// Click-Into-Image View JS
	// Displaying posted comments
/*
function post_comment() {
	
	var elem = document.getElementById("comments_container");
	var msg = document.getElementById("c_section").value;
	
	elem.innerHTML += `<p>${msg}</p>`;
} 
*/
// End of Click-Into-Image

// Category filter JS
const filterContainer = document.querySelector(".gallery-filter");
const galleryItems = document.querySelectorAll(".gallery-item");

if (filterContainer) {
	filterContainer.addEventListener("click", (event) =>{
		if(event.target.classList.contains("filter-item")){
	 
		  // deactivate existing active 'filter-item'
		 filterContainer.querySelector(".active").classList.remove("active");
	 
		  // activate new 'filter-item'
		 event.target.classList.add("active");
	 
		 const filterValue = event.target.getAttribute("data-filter");
	 
		 galleryItems.forEach((item) =>{
	 
			if(item.classList.contains(filterValue) || filterValue === 'all'){
			 item.classList.remove("hide");
			  item.classList.add("show");
			}
	 
			else{
			 item.classList.remove("show");
			 item.classList.add("hide");
			}
	 
		  });
		}
	});
}
  // END OF CATEGORY FILTER JS