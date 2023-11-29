import { Component, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

interface MensajeError {
  nombre?: string;
  apellido?: string;
  email?: string;
  telefono?: string;
  direccion?: string;
  genero?: string;
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  @ViewChild('myForm') myForm!: NgForm;
  userData: any = {};
  generos: string[] = ['Masculino', 'Femenino', 'H'];
  mensajeError: MensajeError = {};

  clearError(field: keyof MensajeError) {
    this.mensajeError[field] = '';
  }

  // Función para verificar si un campo es requerido
  isRequired(field: string): boolean {
    return this.myForm.controls[field].hasError('required');
  }

  // Función para verificar validez del campo después de la interacción del usuario
  validateField(field: keyof MensajeError) {
    if (this.myForm.controls[field].dirty) {
      if (this.isRequired(field)) {
        this.mensajeError[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} es un campo requerido.`;
      } else if (this.userData[field].length > 10) {
        this.mensajeError[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} no puede tener más de 10 caracteres.`;
      } else {
        this.mensajeError[field] = '';
      }
    }
  }

  // Función para validar el campo de género
  validateGenero() {
    if (this.myForm.controls['genero'].dirty) {
      if (this.isRequired('genero')) {
        this.mensajeError['genero'] = 'Género es un campo requerido.';
      } else {
        this.mensajeError['genero'] = '';
      }
    }
  }

  constructor(private http: HttpClient) { }

  submitForm() {
    this.validateField('nombre');
    this.validateField('apellido');
    this.validateField('email');
    this.validateField('telefono');
    this.validateField('direccion');
    this.validateGenero(); // Validar el campo de género

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
