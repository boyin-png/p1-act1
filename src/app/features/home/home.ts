import { Component } from '@angular/core';
// Importa CommonModule aquí
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  // Añade CommonModule a los imports
  imports: [CommonModule],
  templateUrl: './home.html',
  // Añade la referencia al archivo SCSS
  styleUrl: './home.scss'
})
export class Home {
  // Mueve el arreglo ciudades aquí
  ciudades: Array<any> = [
    { pais: 'México', ciudad: 'Mérida', habitantes: 50000 },
    { pais: 'Colombia', ciudad: 'Valledupar', habitantes: 45000 },
    { pais: 'Canada', ciudad: 'Toronto', habitantes: 60000 },
    { pais: 'México', ciudad: 'Ciudad de México', habitantes: 80000 },
    { pais: 'Brasil', ciudad: 'Brasilia', habitantes: 30000 },
    { pais: 'Estados Unidos', ciudad: 'Nueva York', habitantes: 20000 },
    // Puedes añadir o quitar ciudades para probar
    // { pais: 'España', ciudad: 'Madrid', habitantes: 70000 },
  ];
}
