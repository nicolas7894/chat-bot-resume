import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// pages //////////////
import { ShowImagesComponent } from '../pages/show-images/show-images.component';
import { SkillsComponent } from '../pages/skills/skills.component';
import { CountryVisitedComponent } from '../pages/country-visited/country-visited.component';
import { ConversationHistoryComponent } from '../pages/conversation-history/conversation-history.component';
import { AppRoutingModule } from './/app-routing.module';
import { ConversationComponent } from '../pages/conversation/conversation.component';


import { BrainService } from '../services/brain.service';
import { HelpComponent } from '../pages/help/help.component';



@NgModule({
  declarations: [
    AppComponent,
    ShowImagesComponent,
    SkillsComponent,
    CountryVisitedComponent,
    ConversationHistoryComponent,
    ConversationComponent,
    HelpComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [BrainService],
  bootstrap: [AppComponent]
})
export class AppModule { }
