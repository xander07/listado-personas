import { EventEmitter, Injectable } from "@angular/core";
import { DataServices } from "./data.services";
import { LogginService } from "./logginService.service";
import { Persona } from "./persona.model";


@Injectable()
export class PersonaService {
    personas: Persona[] = [];

    saludar = new EventEmitter<number>();

    constructor(private logginService: LogginService,
                private dataServices: DataServices
        ) { }


    setPersonas (personas: Persona[]) {
        this.personas = personas;
    }
    
    obtenerPersonas () {
        return this.dataServices.cargarPersonas();
    }

    agregarPersona(persona: Persona) {
        this.logginService.enviaMensajeAConsola('Se agregó una persona');
        if(this.personas == null) {
            this.personas = [];
        }
        this.personas.push(persona);
        this.dataServices.guardarPersonas(this.personas);
    }

    encontrarPersona(index: number) {
        let persona = this.personas[index];
        return persona
    }

    modificarPersona(index: number, persona: Persona) {
        let persona1 = this.personas[index];
        persona1.nombre = persona.nombre;
        persona1.apellido = persona.apellido;
        this.dataServices.modificarPersona(index,persona);
    }

    eliminarPersona(index: number) {
        this.personas.splice(index, 1);
        this.dataServices.eliminarPersona(index);
        // Regenerar indices en la bd
        this.modificarPersonas();
    }

    modificarPersonas() {
        if(this.personas != null) {
            this.dataServices.guardarPersonas(this.personas);
        }
    }
}
