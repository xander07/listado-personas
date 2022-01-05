import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from './persona.model';

@Injectable()
export class DataServices {

    url : string = 'https://listado-personas-971da-default-rtdb.firebaseio.com/datos.json';

    constructor( private httpClient: HttpClient ) { }

    cargarPersonas() {
        return this.httpClient.get<Persona[]>(this.url)
    }

    //guardar Personas
    guardarPersonas(personas: Persona[]) {
        this.httpClient.put(this.url, personas)
        .subscribe(
            response => console.log('Resultado de guardar Personas' + response),
            error => console.log('Error al guardar Personas' + error)
        );
    }

    modificarPersona(index: number, persona: Persona) {
        let url : string;
        url = 'https://listado-personas-971da-default-rtdb.firebaseio.com/datos/' + index + '.json';
        this.httpClient.put(url,persona)
        .subscribe(
            response => console.log('Resultado de modificar Persona:' + response),
            error => console.log('Error al modificar Persona:' + error)
        );
    }

    eliminarPersona(index: number) {
        let url : string;
        url = 'https://listado-personas-971da-default-rtdb.firebaseio.com/datos/' + index + '.json';
        this.httpClient.delete(url)
        .subscribe(
            response => console.log('Resultado de eliminar Persona:' + response),
            error => console.log('Error al eliminar Persona:' + error)
        );
    }
}