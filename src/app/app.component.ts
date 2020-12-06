import {Component, OnInit, ViewChild, ElementRef, AfterViewInit} from '@angular/core';
import {MenuItem} from "primeng/api";
import {ActivatedRoute, Router} from "@angular/router";

declare var jQuery :any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularDgEu';

  menuItems: MenuItem[];
    miniMenuItems: MenuItem[];


    constructor(private router : Router) {

    }

    ngOnInit() {

      let handleSelected = function(event) {
        let allMenus = jQuery(event.originalEvent.target).closest('ul');
        let allLinks = allMenus.find('.menu-selected');

        allLinks.removeClass("menu-selected");
        let selected = jQuery(event.originalEvent.target).closest('a');
        selected.addClass('menu-selected');
      }

      this.menuItems = [
        {label: 'Welcome', icon: 'fa fa-home', routerLink: ['/welcome'], command: (event) => handleSelected(event)},
        {label: 'sales', icon: 'fa fa-calendar', routerLink: ['/sales'], command: (event) => handleSelected(event)},
        {label: 'Add New Product', icon: 'fa fa-clock-o', routerLink: ['/products/add'], command: (event) => handleSelected(event)}
      ]

      this.miniMenuItems = [];
      this.menuItems.forEach( (item : MenuItem) => {
        let miniItem = { icon: item.icon, routerLink: item.routerLink }
        this.miniMenuItems.push(miniItem);
      })

    }

    selectInitialMenuItemBasedOnUrl() {
      let path = document.location.pathname;
      let menuItem = this.menuItems.find( (item) => { return item.routerLink[0] == path });
      if (menuItem) {
        let iconToFind = '.' + menuItem.icon.replace('fa ', ''); // make fa fa-home into .fa-home
        let selectedIcon = document.querySelector(`${iconToFind}`);
        jQuery(selectedIcon).closest('li').addClass('menu-selected');
      }
    }

    ngAfterViewInit() {
      this.selectInitialMenuItemBasedOnUrl();
    }


}
