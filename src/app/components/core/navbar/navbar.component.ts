import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule, FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {

  name: string = "";

  constructor(private router: Router) { }

  enviarDatosSearch() {
    if (this.name.length != 0) {
      // Guardamos en una cookie el nombre de la pelicula/serie que se quiere buscar
      sessionStorage.setItem('nameSearch', this.name);
      this.router.navigateByUrl("/search");
      this.name = "";
    }
  }
}
