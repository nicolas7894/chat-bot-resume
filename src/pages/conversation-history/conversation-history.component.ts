import { Component, OnInit } from '@angular/core';
import {BrainService} from '../../services/brain.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-conversation-history',
  templateUrl: './conversation-history.component.html',
  styleUrls: ['./conversation-history.component.css']
})
export class ConversationHistoryComponent implements OnInit {
  conversation: Array<any>;
  constructor( private location: Location , public brainService:BrainService) { }

  ngOnInit() {
  this.getConversation();
  }

   getConversation(): void {
    this.brainService.GetConversation()
    .subscribe(conversation => this.conversation = conversation);
  }
  goBack(){
  	this.location.back();

  }

}
