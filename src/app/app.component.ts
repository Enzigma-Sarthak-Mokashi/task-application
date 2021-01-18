import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
   //        OR
 // template: '<h1> Hii Angular </h1>',

 // styleUrls: ['./app.component.scss']
  styles : [`h1 {color : red}`]
 // styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'task-application';

  pipeRoute = "pipes";                          // Routing using member variables
  tableRoute = "app-table";
  ngForRoute = "ngfor-demo";
  ngIfRoute = "ngif-demo";
  dataBindingRoute = "data-binding";
  parentRoute = "parent";
  viewEncapsulationRoute = "test-encapsulation";

  // routes =[
  //   { linkName: 'Pipes' , url: 'pipes'},
  //   { linkName: 'Table' , url: 'app-table'}
  // ];
}
