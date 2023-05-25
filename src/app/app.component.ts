import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ejercicio-angular';

  productArray: string[] = ['Pera', 'Manzana', 'Banano', 'Mango', 'Piña'];
}
