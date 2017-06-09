System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.countMenu = false;
                    this.menuListItems = [
                        { text: "HOME", link: "#", target: "_self" },
                        { text: "ITEM", link: "#", target: "_self" },
                        { text: "OPEN IN NEW TAB", link: "#", target: "_blank" },
                        { text: "LAST ITEM", link: "#", target: "_self" }
                    ];
                    this.imageListItems = [
                        { name: "Horse", image: "horse.jpg" },
                        { name: "Lights in the night", image: "lights.jpg" },
                        { name: "The Rain", image: "rain.jpg" },
                        { name: "Castle", image: "castle.jpg" },
                        { name: "Bird", image: "bird.jpg" }
                    ];
                    this.selectedItemImage = { name: "Horse", image: "horse.jpg" };
                }
                //Open and close menu
                AppComponent.prototype.clickMenuHamburguer = function () {
                    if (this.countMenu == false) {
                        this.isClass = "is-active";
                        this.countMenu = true;
                    }
                    else {
                        this.isClass = "is-hidden";
                        this.countMenu = false;
                    }
                };
                AppComponent.prototype.clickItemImage = function (imageListItem) {
                    this.selectedItemImage = imageListItem;
                };
                AppComponent.prototype.clickAddImage = function (imageListItemName, imageListItemSrc) {
                    this.imageListItems.push({ name: imageListItemName.value, image: imageListItemSrc.value });
                };
                AppComponent.prototype.clickSearchImage = function (imageListItemSearch) {
                    this.selectedItemImage = { image: imageListItemSearch.value };
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'app',
                        template: "\n    \t<header>\n\t\t\t<div class=\"container\">\n\t\t\t\t<h1>\n\t\t\t\t\t<a href=\"#\">Angular2</a>\n\t\t\t\t</h1>\n\n\t\t        <button class=\"menu-hamburger {{ isClass }}\" id=\"menu-hamburger\" (click)=\"clickMenuHamburguer()\">\n\t\t          \t<span>Toggle menu</span>\n\t\t        </button>\n\n\t\t        <nav class=\"menu-main {{ isClass }}\" id=\"menu-main\">\n\t\t        \t<ul class=\"full-tableCell\">\n\t\t        \t\t<li *ngFor=\"#menuListItem of menuListItems\"><a href=\"{{ menuListItem.link }}\" target=\"{{ menuListItem.target }}\" (click)=\"clickMenuHamburguer()\">{{ menuListItem.text }}</a></li>\n\t\t        \t</ul>\n\t\t        </nav>\n\t      \t</div>\n\t\t</header>\n\n        <div class=\"container wrapper-main\">\n\t        <h2>Hello!</h2>\n\t        <p class=\"text-description\">\n\t        \tChoose an title of image:\n\t        </p>\n\n\t        <ul class=\"list-images\">\n\t        \t<li *ngFor=\"#imageListItem of imageListItems\" (click)=\"clickItemImage(imageListItem)\">{{ imageListItem.name }} = {{ imageListItem.image }}</li>\n\t        </ul>\n\n\t        <form>\n\t        \t<p class=\"text-description\">\n\t\t        \tAdd an image to the list:\n\t\t        </p>\n\t        \t<input type=\"text\" placeholder=\"Name image\" #imageListItemName>\n\t        \t<input type=\"text\" placeholder=\"Src image\" #imageListItemSrc>\n\t        \t<button class=\"btn btn--add\" (click)=\"clickAddImage(imageListItemName, imageListItemSrc)\">\n\t        \t\tAdd image\n\t        \t</button>\n\n\t        \t<p class=\"text-description\">\n\t\t        \tSearch an image of the list:\n\t\t        </p>\n\n\t\t        <input type=\"text\" placeholder=\"Search image for src - Without button\" [(ngModel)]=\"selectedItemImage.image\">\n\t\t        <input type=\"text\" placeholder=\"Search image for src - With button\" #imageListItemSearch>\n\t        \t<button class=\"btn btn--main\" (click)=\"clickSearchImage(imageListItemSearch)\">\n\t        \t\tSearch image\n\t        \t</button>\n\t        </form>\n\n\t        <div class=\"wrapper-image\">\n\t        \t<img src=\"src/images/{{ selectedItemImage.image }}\">\n\t    \t</div>\n    \t</div>\n\n    \t<footer>\n    \t\t<p>Copyright \u00A9 2017</p>\n    \t</footer>\n    ",
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFpRUE7Z0JBQUE7b0JBSVEsY0FBUyxHQUFHLEtBQUssQ0FBQztvQkFFbEIsa0JBQWEsR0FBRzt3QkFDdEIsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBQzt3QkFDMUMsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBQzt3QkFDMUMsRUFBQyxJQUFJLEVBQUUsaUJBQWlCLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFDO3dCQUN0RCxFQUFDLElBQUksRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFDO3FCQUMvQyxDQUFDO29CQUVLLG1CQUFjLEdBQUc7d0JBQ3ZCLEVBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFDO3dCQUNuQyxFQUFDLElBQUksRUFBRSxxQkFBcUIsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFDO3dCQUNsRCxFQUFDLElBQUksRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBQzt3QkFDckMsRUFBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUM7d0JBQ3JDLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFDO3FCQUNqQyxDQUFDO29CQUVLLHNCQUFpQixHQUFHLEVBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFDLENBQUM7Z0JBd0JoRSxDQUFDO2dCQXRCQSxxQkFBcUI7Z0JBQ3JCLDBDQUFtQixHQUFuQjtvQkFDQyxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsU0FBUyxJQUFJLEtBQUssQ0FBQyxDQUFBLENBQUM7d0JBQzNCLElBQUksQ0FBQyxPQUFPLEdBQUcsV0FBVyxDQUFDO3dCQUMzQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztvQkFDdkIsQ0FBQztvQkFBQSxJQUFJLENBQUEsQ0FBQzt3QkFDTCxJQUFJLENBQUMsT0FBTyxHQUFHLFdBQVcsQ0FBQzt3QkFDM0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7b0JBQ3hCLENBQUM7Z0JBQ0YsQ0FBQztnQkFFRCxxQ0FBYyxHQUFkLFVBQWUsYUFBYTtvQkFDM0IsSUFBSSxDQUFDLGlCQUFpQixHQUFHLGFBQWEsQ0FBQztnQkFDeEMsQ0FBQztnQkFFRCxvQ0FBYSxHQUFiLFVBQWMsaUJBQWlCLEVBQUUsZ0JBQWdCO29CQUNoRCxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFDLElBQUksRUFBRSxpQkFBaUIsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBQyxDQUFDLENBQUM7Z0JBQzFGLENBQUM7Z0JBRUQsdUNBQWdCLEdBQWhCLFVBQWlCLG1CQUFtQjtvQkFDbkMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEVBQUMsS0FBSyxFQUFFLG1CQUFtQixDQUFDLEtBQUssRUFBQyxDQUFDO2dCQUM3RCxDQUFDO2dCQTNHRjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxLQUFLO3dCQUNmLFFBQVEsRUFBRSxtdEVBMERUO3FCQUNKLENBQUM7O2dDQUFBO2dCQStDRixtQkFBQztZQUFELENBN0NBLEFBNkNDLElBQUE7WUE3Q0QsdUNBNkNDLENBQUEiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdhcHAnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgXHQ8aGVhZGVyPlxuXHRcdFx0PGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuXHRcdFx0XHQ8aDE+XG5cdFx0XHRcdFx0PGEgaHJlZj1cIiNcIj5Bbmd1bGFyMjwvYT5cblx0XHRcdFx0PC9oMT5cblxuXHRcdCAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm1lbnUtaGFtYnVyZ2VyIHt7IGlzQ2xhc3MgfX1cIiBpZD1cIm1lbnUtaGFtYnVyZ2VyXCIgKGNsaWNrKT1cImNsaWNrTWVudUhhbWJ1cmd1ZXIoKVwiPlxuXHRcdCAgICAgICAgICBcdDxzcGFuPlRvZ2dsZSBtZW51PC9zcGFuPlxuXHRcdCAgICAgICAgPC9idXR0b24+XG5cblx0XHQgICAgICAgIDxuYXYgY2xhc3M9XCJtZW51LW1haW4ge3sgaXNDbGFzcyB9fVwiIGlkPVwibWVudS1tYWluXCI+XG5cdFx0ICAgICAgICBcdDx1bCBjbGFzcz1cImZ1bGwtdGFibGVDZWxsXCI+XG5cdFx0ICAgICAgICBcdFx0PGxpICpuZ0Zvcj1cIiNtZW51TGlzdEl0ZW0gb2YgbWVudUxpc3RJdGVtc1wiPjxhIGhyZWY9XCJ7eyBtZW51TGlzdEl0ZW0ubGluayB9fVwiIHRhcmdldD1cInt7IG1lbnVMaXN0SXRlbS50YXJnZXQgfX1cIiAoY2xpY2spPVwiY2xpY2tNZW51SGFtYnVyZ3VlcigpXCI+e3sgbWVudUxpc3RJdGVtLnRleHQgfX08L2E+PC9saT5cblx0XHQgICAgICAgIFx0PC91bD5cblx0XHQgICAgICAgIDwvbmF2PlxuXHQgICAgICBcdDwvZGl2PlxuXHRcdDwvaGVhZGVyPlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXIgd3JhcHBlci1tYWluXCI+XG5cdCAgICAgICAgPGgyPkhlbGxvITwvaDI+XG5cdCAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LWRlc2NyaXB0aW9uXCI+XG5cdCAgICAgICAgXHRDaG9vc2UgYW4gdGl0bGUgb2YgaW1hZ2U6XG5cdCAgICAgICAgPC9wPlxuXG5cdCAgICAgICAgPHVsIGNsYXNzPVwibGlzdC1pbWFnZXNcIj5cblx0ICAgICAgICBcdDxsaSAqbmdGb3I9XCIjaW1hZ2VMaXN0SXRlbSBvZiBpbWFnZUxpc3RJdGVtc1wiIChjbGljayk9XCJjbGlja0l0ZW1JbWFnZShpbWFnZUxpc3RJdGVtKVwiPnt7IGltYWdlTGlzdEl0ZW0ubmFtZSB9fSA9IHt7IGltYWdlTGlzdEl0ZW0uaW1hZ2UgfX08L2xpPlxuXHQgICAgICAgIDwvdWw+XG5cblx0ICAgICAgICA8Zm9ybT5cblx0ICAgICAgICBcdDxwIGNsYXNzPVwidGV4dC1kZXNjcmlwdGlvblwiPlxuXHRcdCAgICAgICAgXHRBZGQgYW4gaW1hZ2UgdG8gdGhlIGxpc3Q6XG5cdFx0ICAgICAgICA8L3A+XG5cdCAgICAgICAgXHQ8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIk5hbWUgaW1hZ2VcIiAjaW1hZ2VMaXN0SXRlbU5hbWU+XG5cdCAgICAgICAgXHQ8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlNyYyBpbWFnZVwiICNpbWFnZUxpc3RJdGVtU3JjPlxuXHQgICAgICAgIFx0PGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tLWFkZFwiIChjbGljayk9XCJjbGlja0FkZEltYWdlKGltYWdlTGlzdEl0ZW1OYW1lLCBpbWFnZUxpc3RJdGVtU3JjKVwiPlxuXHQgICAgICAgIFx0XHRBZGQgaW1hZ2Vcblx0ICAgICAgICBcdDwvYnV0dG9uPlxuXG5cdCAgICAgICAgXHQ8cCBjbGFzcz1cInRleHQtZGVzY3JpcHRpb25cIj5cblx0XHQgICAgICAgIFx0U2VhcmNoIGFuIGltYWdlIG9mIHRoZSBsaXN0OlxuXHRcdCAgICAgICAgPC9wPlxuXG5cdFx0ICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaCBpbWFnZSBmb3Igc3JjIC0gV2l0aG91dCBidXR0b25cIiBbKG5nTW9kZWwpXT1cInNlbGVjdGVkSXRlbUltYWdlLmltYWdlXCI+XG5cdFx0ICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaCBpbWFnZSBmb3Igc3JjIC0gV2l0aCBidXR0b25cIiAjaW1hZ2VMaXN0SXRlbVNlYXJjaD5cblx0ICAgICAgICBcdDxidXR0b24gY2xhc3M9XCJidG4gYnRuLS1tYWluXCIgKGNsaWNrKT1cImNsaWNrU2VhcmNoSW1hZ2UoaW1hZ2VMaXN0SXRlbVNlYXJjaClcIj5cblx0ICAgICAgICBcdFx0U2VhcmNoIGltYWdlXG5cdCAgICAgICAgXHQ8L2J1dHRvbj5cblx0ICAgICAgICA8L2Zvcm0+XG5cblx0ICAgICAgICA8ZGl2IGNsYXNzPVwid3JhcHBlci1pbWFnZVwiPlxuXHQgICAgICAgIFx0PGltZyBzcmM9XCJzcmMvaW1hZ2VzL3t7IHNlbGVjdGVkSXRlbUltYWdlLmltYWdlIH19XCI+XG5cdCAgICBcdDwvZGl2PlxuICAgIFx0PC9kaXY+XG5cbiAgICBcdDxmb290ZXI+XG4gICAgXHRcdDxwPkNvcHlyaWdodCDCqSAyMDE3PC9wPlxuICAgIFx0PC9mb290ZXI+XG4gICAgYCxcbn0pXG5cbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuXG5cdHB1YmxpYyBpc0NsYXNzO1xuXG5cdHB1YmxpYyBjb3VudE1lbnUgPSBmYWxzZTtcblxuXHRwdWJsaWMgbWVudUxpc3RJdGVtcyA9IFtcblx0XHR7dGV4dDogXCJIT01FXCIsIGxpbms6IFwiI1wiLCB0YXJnZXQ6IFwiX3NlbGZcIn0sXG5cdFx0e3RleHQ6IFwiSVRFTVwiLCBsaW5rOiBcIiNcIiwgdGFyZ2V0OiBcIl9zZWxmXCJ9LFxuXHRcdHt0ZXh0OiBcIk9QRU4gSU4gTkVXIFRBQlwiLCBsaW5rOiBcIiNcIiwgdGFyZ2V0OiBcIl9ibGFua1wifSxcblx0XHR7dGV4dDogXCJMQVNUIElURU1cIiwgbGluazogXCIjXCIsIHRhcmdldDogXCJfc2VsZlwifVxuXHRdO1xuXG5cdHB1YmxpYyBpbWFnZUxpc3RJdGVtcyA9IFtcblx0XHR7bmFtZTogXCJIb3JzZVwiLCBpbWFnZTogXCJob3JzZS5qcGdcIn0sIFxuXHRcdHtuYW1lOiBcIkxpZ2h0cyBpbiB0aGUgbmlnaHRcIiwgaW1hZ2U6IFwibGlnaHRzLmpwZ1wifSwgXG5cdFx0e25hbWU6IFwiVGhlIFJhaW5cIiwgaW1hZ2U6IFwicmFpbi5qcGdcIn0sIFxuXHRcdHtuYW1lOiBcIkNhc3RsZVwiLCBpbWFnZTogXCJjYXN0bGUuanBnXCJ9LCBcblx0XHR7bmFtZTogXCJCaXJkXCIsIGltYWdlOiBcImJpcmQuanBnXCJ9XG5cdF07XG5cblx0cHVibGljIHNlbGVjdGVkSXRlbUltYWdlID0ge25hbWU6IFwiSG9yc2VcIiwgaW1hZ2U6IFwiaG9yc2UuanBnXCJ9O1xuXG5cdC8vT3BlbiBhbmQgY2xvc2UgbWVudVxuXHRjbGlja01lbnVIYW1idXJndWVyKCl7XG5cdFx0aWYodGhpcy5jb3VudE1lbnUgPT0gZmFsc2Upe1xuXHRcdFx0dGhpcy5pc0NsYXNzID0gXCJpcy1hY3RpdmVcIjtcblx0XHRcdHRoaXMuY291bnRNZW51ID0gdHJ1ZTtcblx0XHR9ZWxzZXtcblx0XHRcdHRoaXMuaXNDbGFzcyA9IFwiaXMtaGlkZGVuXCI7XG5cdFx0XHR0aGlzLmNvdW50TWVudSA9IGZhbHNlO1xuXHRcdH1cblx0fVxuXG5cdGNsaWNrSXRlbUltYWdlKGltYWdlTGlzdEl0ZW0pe1xuXHRcdHRoaXMuc2VsZWN0ZWRJdGVtSW1hZ2UgPSBpbWFnZUxpc3RJdGVtO1xuXHR9XG5cblx0Y2xpY2tBZGRJbWFnZShpbWFnZUxpc3RJdGVtTmFtZSwgaW1hZ2VMaXN0SXRlbVNyYyl7XG5cdFx0dGhpcy5pbWFnZUxpc3RJdGVtcy5wdXNoKHtuYW1lOiBpbWFnZUxpc3RJdGVtTmFtZS52YWx1ZSwgaW1hZ2U6IGltYWdlTGlzdEl0ZW1TcmMudmFsdWV9KTtcblx0fVxuXG5cdGNsaWNrU2VhcmNoSW1hZ2UoaW1hZ2VMaXN0SXRlbVNlYXJjaCl7XG5cdFx0dGhpcy5zZWxlY3RlZEl0ZW1JbWFnZSA9IHtpbWFnZTogaW1hZ2VMaXN0SXRlbVNlYXJjaC52YWx1ZX07XG5cdH1cbn1cblxuXG4iXX0=
