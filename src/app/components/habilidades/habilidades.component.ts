import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { MatProgressBar } from '@angular/material/progress-bar';

import {
  MatCard,
  MatCardContent,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle,
} from '@angular/material/card';

@Component({
  selector: 'app-habilidades',
  imports: [
    MatCardContent,
    MatCard,
    MatCardTitle,
    MatCardHeader,
    MatCardSubtitle,
    MatProgressBar,
    NgFor
],
  templateUrl: './habilidades.component.html',
  styleUrl: './habilidades.component.scss',
})
export class HabilidadesComponent {
  skills = [
    {
      nombre: 'Java',
      nivel: 'medio-alto',
      descripcion: 'Lenguaje orientado a objetos usado para backend y aplicaciones de escritorio.',
    },
    {
      nombre: 'Spring Boot',
      nivel: 'medio',
      descripcion: 'Framework para crear APIs REST y servicios backend en Java de forma rápida.',
    },
    {
      nombre: 'Flutter',
      nivel: 'medio',
      descripcion: 'Framework multiplataforma para desarrollar apps móviles con una sola base de código.',
    },
    {
      nombre: 'Android',
      nivel: 'medio-alto',
      descripcion: 'Desarrollo de aplicaciones nativas Android con enfoque en interfaces y consumo de APIs.',
    },
    {
      nombre: 'JavaScript',
      nivel: 'bajo',
      descripcion: 'Lenguaje clave para añadir interactividad y lógica en aplicaciones web.',
    },
    {
      nombre: 'Wordpress',
      nivel: 'medio',
      descripcion: 'Gestión y personalización de sitios web con plantillas, plugins y contenidos dinámicos.',
    },
  ];

  nivelAProgreso(nivel: string): number {
    const normalizado = nivel.toLowerCase();

    if (normalizado.includes('alto')) {
      return 90;
    }
    if (normalizado.includes('medio')) {
      return 70;
    }
    if (normalizado.includes('bajo')) {
      return 40;
    }

    return 50;
  }
}
