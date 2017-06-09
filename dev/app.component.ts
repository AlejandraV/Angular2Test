import {Component} from 'angular2/core';

@Component({
    selector: 'app',
    template: `
    	<header>
			<div class="container">
				<h1>
					<a href="#">Angular2</a>
				</h1>

		        <button class="menu-hamburger {{ isClass }}" id="menu-hamburger" (click)="clickMenuHamburguer()">
		          	<span>Toggle menu</span>
		        </button>

		        <nav class="menu-main {{ isClass }}" id="menu-main">
		        	<ul class="full-tableCell">
		        		<li *ngFor="#menuListItem of menuListItems"><a href="{{ menuListItem.link }}" target="{{ menuListItem.target }}" (click)="clickMenuHamburguer()">{{ menuListItem.text }}</a></li>
		        	</ul>
		        </nav>
	      	</div>
		</header>

        <div class="container wrapper-main">
	        <h2>Hello!</h2>
	        <p class="text-description">
	        	Choose an title of image:
	        </p>

	        <ul class="list-images">
	        	<li *ngFor="#imageListItem of imageListItems" (click)="clickItemImage(imageListItem)">{{ imageListItem.name }} = {{ imageListItem.image }}</li>
	        </ul>

	        <form>
	        	<p class="text-description">
		        	Add an image to the list:
		        </p>
	        	<input type="text" placeholder="Name image" #imageListItemName>
	        	<input type="text" placeholder="Src image" #imageListItemSrc>
	        	<button class="btn btn--add" (click)="clickAddImage(imageListItemName, imageListItemSrc)">
	        		Add image
	        	</button>

	        	<p class="text-description">
		        	Search an image of the list:
		        </p>

		        <input type="text" placeholder="Search image for src - Without button" [(ngModel)]="selectedItemImage.image">
		        <input type="text" placeholder="Search image for src - With button" #imageListItemSearch>
	        	<button class="btn btn--main" (click)="clickSearchImage(imageListItemSearch)">
	        		Search image
	        	</button>
	        </form>

	        <div class="wrapper-image">
	        	<img src="src/images/{{ selectedItemImage.image }}">
	    	</div>
    	</div>

    	<footer>
    		<p>Copyright © 2017</p>
    	</footer>
    `,
})

export class AppComponent {

	public isClass;

	public countMenu = false;

	public menuListItems = [
		{text: "HOME", link: "#", target: "_self"},
		{text: "ITEM", link: "#", target: "_self"},
		{text: "OPEN IN NEW TAB", link: "#", target: "_blank"},
		{text: "LAST ITEM", link: "#", target: "_self"}
	];

	public imageListItems = [
		{name: "Horse", image: "horse.jpg"}, 
		{name: "Lights in the night", image: "lights.jpg"}, 
		{name: "The Rain", image: "rain.jpg"}, 
		{name: "Castle", image: "castle.jpg"}, 
		{name: "Bird", image: "bird.jpg"}
	];

	public selectedItemImage = {name: "Horse", image: "horse.jpg"};

	//Open and close menu
	clickMenuHamburguer(){
		if(this.countMenu == false){
			this.isClass = "is-active";
			this.countMenu = true;
		}else{
			this.isClass = "is-hidden";
			this.countMenu = false;
		}
	}

	clickItemImage(imageListItem){
		this.selectedItemImage = imageListItem;
	}

	clickAddImage(imageListItemName, imageListItemSrc){
		this.imageListItems.push({name: imageListItemName.value, image: imageListItemSrc.value});
	}

	clickSearchImage(imageListItemSearch){
		this.selectedItemImage = {image: imageListItemSearch.value};
	}
}


