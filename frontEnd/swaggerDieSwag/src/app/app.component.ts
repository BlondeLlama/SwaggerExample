import { Component, OnInit } from '@angular/core';
import { GeneratedModels } from '../generated';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  
  ngOnInit(){
    let client = new GeneratedModels.Client('http://localhost:16938');
    console.log('nog niet vastgelopen...');
    client.apiValuesByIdGet(2, (result) => console.log('success: ' +  result), (exception, reason) => exception + ': ' + reason);
  };
}
