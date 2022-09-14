import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  
})
export class ListadoComponent  {

  heroes: string[] = ['Spiderman','Ironman','Hulk','Batman'];

  heroeBorrado: string = '';


  borrarHeroe(){
    let heroeBorrado = this.heroes.shift()|| '';
    this.heroeBorrado = heroeBorrado;
    
  }

}
