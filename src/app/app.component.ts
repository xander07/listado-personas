import { Component, OnInit } from '@angular/core';
import { LogginService } from './logginService.service';
import { Persona } from './persona.model';
import { PersonaService } from './persona.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  titulo = 'Listado de personas';
  personas: Persona[] = [];

  constructor(private logginService: LogginService,
              private personasService: PersonaService) { }

  ngOnInit(): void {
    this.personas = this.personasService.personas;
  }
  
  
}
