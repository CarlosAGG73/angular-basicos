import { Component } from '@angular/core'





@Component({
selector: 'app-contador',
template:`
    <h1> {{titulo}}</h1> 
    <h3>la base es: <strong> {{base}} </strong></h3>
    <button (click)="operar(base)"> + {{base}} </button>
    <span>{{numero}}</span>
    <button (click)="operar(-base)"> - {{base}} </button>
`

})



export class ContadorComponent{
    
    titulo: string = 'Contador App';
    numero: number = 10;
    base: number = 5;
  
    operar( valor:number){
      this.numero += valor;
    }
}


