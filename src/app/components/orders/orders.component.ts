import { Component, OnInit,Input } from '@angular/core';
import {Http} from "@angular/http";
import {ActivatedRoute,Router} from '@angular/router';
declare var $: any; 

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

	public data;
  public datasec;
  public loading = false;//loader
  coinName;
  

  constructor(private http: Http,private route:Router) { }

  ngOnInit(): void {
    this.coinName = this.route.url.substring(this.route.url.lastIndexOf("/") + 1);
     this.loading = true;
        this.http.get("https://jsonblob.com/api/jsonBlob/00b3e7ac-ec6d-11e7-becf-55d263295a1f")
        .subscribe((data)=> {
           	this.data = data.json();
             this.datasec = data.json();
            this.loading = false;
        });
    }
    refreshDatatable(){
      if(!$( "#orderTable" ).hasClass("init")){
        $('#orderTable').DataTable();
        $( "#orderTable" ).addClass("init");
      }
    }
    refreshDatatableSec(){
      if(!$( "#orderTableSec" ).hasClass("init")){
        $('#orderTableSec').DataTable();
        $( "#orderTableSec" ).addClass("init");
      }
    }

    
}