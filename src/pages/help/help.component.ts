import { Component, OnInit } from '@angular/core';
import {BrainService} from '../../services/brain.service';
@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {
  data : {};
  Response: string; 
  constructor(public brainService:BrainService) { 
  	this.data ={email:"",
          message:""};}

  ngOnInit() {
  }

  sendDataEmail(){
  	this.brainService.PostDataEmail(this.data).subscribe(data => {
        		this.Response = data.robot;
        	
		
	});

  }

}
