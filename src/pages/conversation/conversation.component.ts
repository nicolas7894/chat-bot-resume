import { Component,ViewChild, ElementRef,Input,OnInit} from '@angular/core';
import {BrainService} from '../../services/brain.service';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css']
})
export class ConversationComponent implements OnInit {

 @ViewChild('ConversationList') ConversationList: ElementRef;
	title = 'app';
	Answer: String;
	Response: String;
	state = 'inactive';
	loading: boolean;
	ImageMe:boolean = false;
	Skills:boolean = false;
	ShowCountry:boolean = false;

	constructor(public brainService:BrainService) {}

	 ngOnInit() {
       this.loading = false;
       this.state = 'active'
  }

	SendToTheBrain(question: String){
		this.Response = "";
        this.loading = true; //simule le message 
        this.ImageMe=false;
        this.RestetData();
     
        	
        	this.brainService.PostAnswer(question).subscribe(data => {
        		this.Response = data.robot;
        		this.loading = false;
		this.AfficheContent(data.classification); // permet d'afficher les contenues 
	});
        	this.Answer = "";

     

    }

    addelement(){
    	var para = document.createElement("p");
    	var node = document.createTextNode("This is new.");
    	para.appendChild(node);
    //this.ConversationList.nativeElement.appendChild(para)
    //this.ConversationList.nativeElement.insertBefore(para,this.ConversationList.nativeElement);

}
toggleState(){
	this.state = this.state === 'active' ? 'inactive' : 'active';
   	 //alert(this.state);
   	}
   	RestetData(){ // on reset tout les images
   		this.ImageMe = false;
   		this.Skills = false;
   	}

	AfficheContent(classification){ // on affiche le contenue suiant la classification 
    
		switch(classification) {
			case 'xx':
			this.ImageMe=true;
			break;
			case 'Whatskills':
			this.Skills = true;
			break;
			case 'HowManyCountry':
			this.ShowCountry = true;
			break;
			default:

		}

	}


}