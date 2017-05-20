import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.css']
})
export class VerifyComponent implements OnInit {
	verifyCode:string;
	errorMsg:string;
	showEmail:string;

  constructor(private api:ApiService, private router:Router) { 
  	this.errorMsg="";
  	this.verifyCode="";
  	this.showEmail="";
  }

  ngOnInit() {
  }

  verify(){
  	this.showEmail="";
  	this.api.post('/user/verify',{verifyCode:this.verifyCode})
  	.subscribe(data=>{
  		if(data[0]=="Success"){
  			this.router.navigate(['/game']);
  		}
  		else{
  			this.errorMsg=data[1];
		  }
  	});
  }

  resend(){
  	this.errorMsg="";
  	this.api.getAll('/user/resend')
  	.subscribe(data=>{
		if(data[0]=='Success'){
			this.showEmail=data[1];
		}
		else{
			this.errorMsg=data[1];
		}
  	});
  }

}
