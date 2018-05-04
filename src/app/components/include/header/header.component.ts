import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../services/common.service';
import { UrlConfig } from '../../../services/urlProviders';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private service:CommonService, private rotuer:Router) { }

  ngOnInit() {
  }

  logout(){
  	// getting sid from localStorage
  	var temp = JSON.parse(localStorage.getItem('user'));
  	var data = {
  		sid: temp.id
  	}
  	// logout request to the server
  	this.service.logout(UrlConfig.users.logout).subscribe((data)=>{
  		localStorage.clear();
  		this.rotuer.navigate(['/login']);
  	})
  }
}
