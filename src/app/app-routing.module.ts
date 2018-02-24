import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConversationHistoryComponent } from '../pages/conversation-history/conversation-history.component';
import { ConversationComponent } from '../pages/conversation/conversation.component';
import { HelpComponent } from '../pages/help/help.component';

const routes: Routes = [
  { path: '', redirectTo: '/Conversation', pathMatch: 'full' },
  { path: 'ConversationHistory', component: ConversationHistoryComponent },
  { path: 'Conversation', component: ConversationComponent },
  { path: 'help', component: HelpComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule {}