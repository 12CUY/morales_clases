import { Component } from '@angular/core';
import { user } from 'src/app/models/user.interface';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
    // declaracion de variable
    people:user;
    person:any;

    constructor (){
        // incializacion de la variable de "people"
      this.people={
        name : "wiliam",
        age :2,
        genderId : 1,
        genderName : ""
      }

    // declaracion de un array people con un objeto
    const people=[
    {
      name : "wiliam",
      age :2,
      genderId : 1,
      genderName : ""
    }

    ]
    // uso del array map 
    //transformar el objeto people
  this.person = people.map(person => {

      if(person.genderId==1){
          person.genderName="sr"
        }
        else{
          person.genderName="sra"
        }

        return person;


  })
 // imprimie la consola el resultado
  console.log(this.person);
  }
}
