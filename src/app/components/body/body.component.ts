import { Component } from '@angular/core';

@Component({
    selector: 'app-body',
    templateUrl:'./body.component.html'
})
export class BodyComponent{

    frase:any = {
        mensaje: "Un gran poder conlleva una gran responsabilidad",
        autor: "Ben Parker, tío de peter parker"
    };

    mostrar:boolean = true;

    personajes:string[] = ["Spiderman", "Venom", "Octopus"];

}