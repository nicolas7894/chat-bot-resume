import { Component,ViewChild, ElementRef,Input } from '@angular/core';



import {
	trigger,
	state,
	style,
	animate,
	transition
} from '@angular/animations';



@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	animations: [
	trigger('flyInOut', [
		state('active', style({transform: 'translateX(0)'})),
		transition('active => inactive', [
			style({transform: 'translateX(100%)'}),
			animate(1000)
			]),
		transition('inactive => void', [
			animate(1000, style({transform: 'translateX(-100%)'}))
			])
		])
	]
})
export class AppComponent {
	}


