import { Component, OnInit,ElementRef,ViewChild  } from '@angular/core';

declare const google;

@Component({
  selector: 'app-country-visited',
  templateUrl: './country-visited.component.html',
  styleUrls: ['./country-visited.component.css']
})
export class CountryVisitedComponent implements OnInit {
 @ViewChild('map') mapElement: ElementRef;
 drawElement;
 


  constructor() { 
  
}


  ngOnInit() {
  this.drawElement = this.mapElement.nativeElement;
  this.InitMap(this.drawElement);
 

  }

  InitMap(mapElement){
  	  google.charts.load('current', {
        'packages':['geochart'],
        'mapsApiKey': 'AIzaSyDyR2hY0ffw9XQFqSrLMR7vUnKP_XWJPwk'
      });
      google.charts.setOnLoadCallback(drawRegionsMap);

      function drawRegionsMap() {
        var data = google.visualization.arrayToDataTable([
          ['Country'],
          ['spain'],
          ['United States'],
          ['thailand'],
          ['maroco'],
          ['germany'],
          ['malaisia'],
          ['United Arab Emirates'],
          ['senegal'],
          ['costa rica'],
          ['cuba'],
          ['Singapore'],
          ['bali'],
          ['Mexico'],
          ['tunisia']

        ]);

        var options = {
        	defaultColor: '#3ca0d4'
        };

        var chart = new google.visualization.GeoChart(mapElement);

        chart.draw(data, options);
      }
  }

}
