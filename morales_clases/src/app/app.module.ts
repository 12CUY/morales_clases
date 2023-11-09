import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  // Otras rutas aquí...
  { path: '', redirectTo: '/usuario', pathMatch: 'full' },
  { path: 'usuario', component: UserComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(routes)  // Configuración de las rutas principales
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
