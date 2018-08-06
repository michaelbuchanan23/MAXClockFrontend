import { Component, OnInit } from '@angular/core';
import { MenuItemComponent } from '../menu-item/menu-item.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

	menudata = [
	{ href:"/classes/list", display: "Classes"}//,
	// { href:"/about", display: "About"},
	// { href:"/users/list", display: "User"},
	// { href:"/vendors/list", display: "Vendor"},
	// { href:"/products/list", display: "Product"},
	// { href: "/purchaserequests/list", display: "Purchase Request"},
	// { href: "/purchaserequests/review", display: "Review" },
	// { href: "/users/login", display: "Login/Logout"}
	 ];
	
  constructor() { }

  ngOnInit() { }

}

