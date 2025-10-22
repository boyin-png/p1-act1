import { Routes } from '@angular/router';
// Asegúrate de que aquí diga 'Home'
import { Home } from './features/home/home';

export const routes: Routes = [
  // Asegúrate de que aquí diga 'Home' y no 'Home2'
  { path: '', component: Home },
  // más rutas...
];
