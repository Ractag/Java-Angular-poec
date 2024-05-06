import { Component } from '@angular/core';
import { Onomatopeia } from './models/Onomatopeia.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'java-angular-poec';

  // créer type Onomatopeia { name: string } ✅
  // Configurer le comp enfant => output() + methode pour catch la valeur qu'on veut transmettre 
  // Configurer le html de l'enfant pour que la valeur entrée soit catch
  // Envoyer vers le parent
  // Configurer le parent avec une méthode pour recevoir les données + les afficher
  // Configurer html parent pour display la data

  onomatopeiaList: Onomatopeia[] = [];

  catchNewOnomatopeia(event: Onomatopeia) {
    this.onomatopeiaList.push(event)
    console.log("new onomatopeia:", event)
  }

}
