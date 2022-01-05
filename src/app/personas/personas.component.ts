import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogginService } from '../logginService.service';
import { Persona } from '../persona.model';
import { PersonaService } from '../persona.service';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {

  personas: Persona[] = [];

  constructor(private personasService: PersonaService,
              private router: Router) { }

  ngOnInit(): void {
    this.personasService.obtenerPersonas()
    .subscribe(
      (personas: Persona[]) => {
        this.personas = personas;
        this.personasService.setPersonas(personas);
      }
    );
  }

  agregar() {
    this.router.navigate(['personas/agregar']);
  }
}
