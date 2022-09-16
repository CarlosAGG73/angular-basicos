import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  
})
export class MainPageComponent {


//personajes: Personaje[] = [];

nuevo: Personaje = {
    nombre:'Maestro Rshi', 
    poder: 18500
  
}




 constructor(){
  // inyectamos el servicio DbzService dentro del constructor de main-page.component
  //this.personajes = this.dbzService.personajes;
 }

 

}


