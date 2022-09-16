import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";



@Injectable()
export class DbzService{

    private _personajes: Personaje[] =[
        {
          nombre:'Goku', 
          poder: 15000
        },
        {
          nombre:'Vegeta', 
          poder: 8500
        }
      ];

    get personajes():Personaje[]{
        return [...this._personajes];
    }
 
    //set personajes():Personaje[]
   
   
   
    constructor(){
        console.log('Servicio cargado');
    }

    agregarNuevoPersonaje(argumento: Personaje){
         this._personajes.push(argumento);
           
      }

}

