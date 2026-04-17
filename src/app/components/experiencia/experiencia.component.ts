import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

interface ExperienciaItem {
  empresa: string;
  puesto: string;
  periodo: string;
  ubicacion: string;
  descripcion: string;
  logo: string;
  tecnologias: string[];
  logros: string[];
}

@Component({
  selector: 'app-experiencia',
  imports: [MatCardModule],
  templateUrl: './experiencia.component.html',
  styleUrl: './experiencia.component.scss',
})
export class ExperienciaComponent {
  experiencias: ExperienciaItem[] = [
    {
      empresa: 'Plexus Tech',
      puesto: 'Desarrollador de software (Prácticas)',
      periodo: '03/2026 - Actualmente',
      ubicacion: 'Mérida (Badajoz), España',
      descripcion:
        'Participacion en tareas de desarrollo y mantenimiento de aplicaciones web, con foco en interfaz y logica de negocio.',
      logo: '../../../assets/images/logo-plexus.png',
      tecnologias: ['Java', 'Spring Boot', 'JavaScript', 'SQL'],
      logros: [
        'Implementacion de mejoras en pantallas y validaciones.',
        'Correccion de incidencias en modulos existentes.',
        'Colaboracion en tareas de testing y despliegue interno.',
      ],
    },
    {
      empresa: 'Plexus Tech',
      puesto: 'Desarrollador de software (Prácticas)',
      periodo: '05/2025 - 06/2025',
      ubicacion: 'Mérida (Badajoz), España',
      descripcion:
        'Participacion en tareas de desarrollo y mantenimiento de aplicaciones web, con foco en interfaz y logica de negocio.',
      logo: '../../../assets/images/logo-plexus.png',
      tecnologias: ['Java', 'Spring Boot', 'JavaScript', 'SQL'],
      logros: [
        'Implementacion de mejoras en pantallas y validaciones.',
        'Correccion de incidencias en modulos existentes.',
        'Colaboracion en tareas de testing y despliegue interno.',
      ],
    },
    {
      empresa: 'FMTS Group Salerno',
      puesto: 'Técnico en sistemas microinformáticos (Prácticas Erasmus+)',
      periodo: '02/2024 - 06/2024',
      ubicacion: 'Salerno, Italia',
      descripcion:
        'Participacion en tareas de desarrollo y mantenimiento de aplicaciones web, con foco en interfaz y logica de negocio.',
      logo: '../../../assets/images/logo-fmts.png',
      tecnologias: ['Java', 'Spring Boot', 'JavaScript', 'SQL'],
      logros: [
        'Implementacion de mejoras en pantallas y validaciones.',
        'Correccion de incidencias en modulos existentes.',
        'Colaboracion en tareas de testing y despliegue interno.',
      ],
    },
    {
      empresa: 'CH Ordenadores',
      puesto: 'Técnico en sistemas microinformáticos (Prácticas)',
      periodo: '02/2024 - 06/2024',
      ubicacion: 'Mérida (Badajoz), España',
      descripcion:
        'Participacion en tareas de desarrollo y mantenimiento de aplicaciones web, con foco en interfaz y logica de negocio.',
      logo: 'https://chordenadores.es/wp-content/uploads/2022/11/logo-ch-ordenadores.jpeg',
      tecnologias: ['Java', 'Spring Boot', 'JavaScript', 'SQL'],
      logros: [
        'Implementacion de mejoras en pantallas y validaciones.',
        'Correccion de incidencias en modulos existentes.',
        'Colaboracion en tareas de testing y despliegue interno.',
      ],
    },
    {
      empresa: 'CH Ordenadores',
      puesto: 'Técnico en sistemas microinformáticos (Prácticas)',
      periodo: '12/2023 - 02/2024',
      ubicacion: 'Mérida (badajoz), España',
      descripcion:
        'Participacion en tareas de desarrollo y mantenimiento de aplicaciones web, con foco en interfaz y logica de negocio.',
      logo: 'https://chordenadores.es/wp-content/uploads/2022/11/logo-ch-ordenadores.jpeg',
      tecnologias: ['HTML', 'CSS', 'JS', 'Wordpress', 'RustDesk'],
      logros: [
        'Reparacion de equipos informáticos y telefonos móviles.',
        'Soporte remoto con incidencias en equipos informáticos.',
        'Instalación de diferentes equipos informáticos o sistema de redes.',
      ],
    },
    {
      empresa: 'CH Ordenadores',
      puesto: 'Técnico en sistemas microinformáticos (Prácticas)',
      periodo: '04/2023 - 06/2023',
      ubicacion: 'Mérida (badajoz), España',
      descripcion:
        'Participacion en tareas de desarrollo y mantenimiento de aplicaciones web, con foco en interfaz y logica de negocio.',
      logo: 'https://chordenadores.es/wp-content/uploads/2022/11/logo-ch-ordenadores.jpeg',
      tecnologias: ['HTML', 'CSS', 'JS', 'Wordpress', 'RustDesk'],
      logros: [
        'Reparacion de equipos informáticos y telefonos móviles.',
        'Soporte remoto con incidencias en equipos informáticos.',
        'Instalación de diferentes equipos informáticos o sistema de redes.',
      ],
    },
  ];
}
