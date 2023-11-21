import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  userData: any = {};

  constructor(private http: HttpClient) { }

  submitForm() {
    console.log('Datos enviados:', this.userData);

    this.http.post('http://localhost:3000/api/user', this.userData)
      .subscribe(response => {
        console.log('Respuesta del servidor:', response);
        // Mostrar un mensaje de éxito al usuario
        alert('Datos enviados con éxito');
        // Limpiar el formulario después de enviar con éxito
        this.userData = {};
      }, error => {
        console.error('Error al enviar los datos:', error);
        // Mostrar un mensaje de error al usuario
        alert('Error al enviar los datos');
      });
  }
}
