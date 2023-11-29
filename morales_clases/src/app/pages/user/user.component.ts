import { Component, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  @ViewChild('myForm') myForm!: NgForm;
  userData: any = {};
  generos: string[] = ['Masculino', 'Femenino', 'H'];
  mensajeError: { [key: string]: string } = {};

  constructor(private http: HttpClient) { }
// trim: elimina campos
  submitForm() {
    // Verificar la validez del campo 'nombre'
    if (!this.userData.nombre || this.userData.nombre.trim() === '') {
      this.mensajeError['nombre'] = 'Nombre es un campo requerido.';
    } else if (this.userData.nombre.length > 10) {
      this.mensajeError['nombre'] = 'Nombre no puede tener más de 10 caracteres.';
    } else {
      this.mensajeError['nombre'] = ''; // Limpiar el mensaje de error si es válido
    }

    // Verificar la validez del campo 'apellido'
    if (!this.userData.apellido || this.userData.apellido.trim() === '') {
      this.mensajeError['apellido'] = 'Apellido es un campo requerido.';
    } else if (this.userData.apellido.length > 10) {
      this.mensajeError['apellido'] = 'Apellido no puede tener más de 10 caracteres.';
    } else {
      this.mensajeError['apellido'] = ''; // Limpiar el mensaje de error si es válido
    }

      // Verificar la validez del campo 'email'
      if (!this.userData.email || this.userData.email.trim() === '') {
        this.mensajeError['email'] = 'email es un campo requerido.';
      } else if (this.userData.apellido.length > 10) {
        this.mensajeError['email'] = 'email no puede tener más de 10 caracteres.';
      } else {
        this.mensajeError['email'] = ''; // Limpiar el mensaje de error si es válido
      }

      // Verificar la validez del campo 'telefono'
      if (!this.userData.telefono || this.userData.telefono.trim() === '') {
        this.mensajeError['telefono'] = 'telefono es un campo requerido.';
      } else if (this.userData.apellido.length > 10) {
        this.mensajeError['telefono'] = 'telefono no puede tener más de 10 caracteres.';
      } else {
        this.mensajeError['telefono'] = ''; // Limpiar el mensaje de error si es válido
      }
      
     // Verificar la validez del campo 'direccion'
    if (!this.userData.direccion || this.userData.direccion.trim() === '') {
      this.mensajeError['direccion'] = 'direccion es un campo requerido.';
    } else if (this.userData.apellido.length > 10) {
      this.mensajeError['direccion'] = 'direccion no puede tener más de 10 caracteres.';
    } else {
      this.mensajeError['direccion'] = ''; // Limpiar el mensaje de error si es válido
    }





    // Verificar si el formulario es válido
    if (this.myForm.valid) {
      console.log('Datos enviados:', this.userData);

      this.http.post('http://localhost:3000/api/user', this.userData)
        .subscribe(response => {
          console.log('Respuesta del servidor:', response);
          alert('Datos enviados con éxito');
          this.myForm.resetForm();
          this.mensajeError = {};
        }, error => {
          console.error('Error al enviar los datos:', error);
          alert('Error al enviar los datos');
        });
    }
  }
}
