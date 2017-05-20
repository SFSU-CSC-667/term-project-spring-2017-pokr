import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {
  email:string;
	errorMessage:string;
	showMessage:string;
  constructor(private router:Router, private api:ApiService) { 
  	this.email="";
  	this.showMessage="";
  	this.errorMessage="";
  }

  ngOnInit() {
  }

  forgot(){
  	this.api.post('main/forgot',{email:this.email})
    .subscribe(
      data=>{
        if(data[0]=='Success'){
          this.showMessage=data[1];
        }
        else{
          this.errorMessage=data[1];
        }
      });
  }

}
