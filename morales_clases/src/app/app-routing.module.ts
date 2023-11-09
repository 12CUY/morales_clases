import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';

// Definición de las rutas
const routes: Routes = [
    { path: '', redirectTo: '/usuario', pathMatch: 'full' },
    { path: 'usuario', component: UserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Configuración de las rutas principales
  exports: [RouterModule]
})
export class AppRoutingModule { }