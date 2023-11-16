import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {


protected form:FormGroup;

constructor(private formBuilder: FormBuilder) {
  this.form = this.formBuilder.group({
    name: [null, [Validators.required, Validators.minLength(3)]], 
    age: [null, [Validators.required, Validators.minLength(3)]], 
    genderId: [null, [Validators.required, Validators.minLength(3)]], 
    genderName: [null, [Validators.required, Validators.minLength(3)]]
  });
}

}
