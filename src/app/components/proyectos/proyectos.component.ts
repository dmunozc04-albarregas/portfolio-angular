import { Component, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { Proyecto } from '../../models/proyecto';
import { Tecnologia } from '../../models/tecnologia';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-proyectos',
  imports: [MatCardModule, MatChipsModule, MatIcon],
  templateUrl: './proyectos.component.html',
  styleUrl: './proyectos.component.scss',
})
export class ProyectosComponent {
  indiceProyecto = signal(0);

  proyectos: Proyecto[] = [
    {
      titulo: 'Eventvs Mérida',
      descripcion:
        'Desarrollo de una aplicación de los eventos de Mérida. (Proyecto de TFG, en desarrollo)',
      imagen: 'captura-eventvs.jpg',
      url: 'https://github.com/Null-Pointers-Albarregas/EventvsMerida',
      tecnologias: [
        {
          tecnologia: 'Flutter',
          imagen:
            'https://iconape.com/wp-content/png_logo_vector/flutter-logo.png',
        },
        {
          tecnologia: 'Spring Boot',
          imagen:
            'https://images.seeklogo.com/logo-png/56/1/spring-boot-logo-png_seeklogo-569088.png',
        },
        {
          tecnologia: 'Supabase',
          imagen:
            'https://logowik.com/content/uploads/images/supabase-icon9119.logowik.com.webp',
        },
      ],
    },
    {
      titulo: 'The Witcher en JS',
      descripcion: 'Desarrollo de una versión más simple The Witcher en JS',
      imagen: 'captura-thewitcher.jpeg',
      url: 'https://github.com/dmunozc04-albarregas/videojuego',
      tecnologias: [
        {
          tecnologia: 'HTML',
          imagen:
            'assets/images/html-logo.png',
        },
        {
          tecnologia: 'CSS',
          imagen:
            'assets/images/css-logo.png',
        },
        {
          tecnologia: 'JavaScript',
          imagen:
            'assets/images/js-logo.png',
        },
         {
          tecnologia: 'Bootstrap',
          imagen:
            'assets/images/bootstrap-logo.png',
        },
      ],
    },
    {
      titulo: 'Videojuego en Java FX',
      descripcion:
        'Pequeño videojuego de laberinto desarrollado con Java y Java FX',
      imagen: 'captura-thewitcher.jpeg',
      url: 'https://github.com/dmunozc04-albarregas/videojuego-java-eva-david-java-fx',
      tecnologias: [
        {
          tecnologia: 'Java',
          imagen:
            'assets/images/java-logo.png',
        },
        {
          tecnologia: 'JavaFX',
          imagen:
            'assets/images/javafx-logo.png',
        },
      ],
    },
    {
      titulo: 'Camis-F.C',
      descripcion:
        'Web de venta de camisetas de 1º RFEF. Proyecto hecho para la asignatura de Lenguaje de Marcas.',
      imagen: 'captura-camisfc.png',
      url: 'https://github.com/dmunozc04-albarregas/Camis-F.C',
      tecnologias: [
        {
          tecnologia: 'HTML',
          imagen:
            'assets/images/html-logo.png',
        },
        {
          tecnologia: 'CSS',
          imagen:
            'assets/images/css-logo.png',
        },
        {
          tecnologia: 'JavaScript',
          imagen:
            'assets/images/js-logo.png',
        },
         {
          tecnologia: 'Bootstrap',
          imagen:
            'assets/images/bootstrap-logo.png',
        },
      ],
    },
    {
      titulo: 'Spotify',
      descripcion:
        'Spotify propio desarrollado en Android Studio con conexión a API real de música.',
      imagen: 'captura-thewitcher.jpeg',
      url: '#',
      tecnologias: [
        {
          tecnologia: 'Android',
          imagen:
            'assets/images/android-logo.png',
        },
        {
          tecnologia: 'API REST',
          imagen:
            'assets/images/apirest-logo.png',
        },
      ],
    },
    {
      titulo: 'Web del Santuario de Chandavila',
      descripcion: 'Desarrollo desde 0 de la página web del Santuario.',
      imagen: 'captura-santuario.png',
      url: 'https://santuariochandavila.com',
      tecnologias: [
        {
          tecnologia: 'Wordpress',
          imagen:
            'assets/images/wordpress-logo.png',
        },
        {
          tecnologia: 'Elementor',
          imagen:
            'assets/images/elementor-logo.png',
        },
      ],
    },
    {
      titulo: 'Web de CH Ordenadores',
      descripcion: 'Mantenimiento y mejora del diseño y arquitectura de la web.',
      imagen: 'captura-santuario.png',
      url: 'https://chordenadores.com',
      tecnologias: [
        {
          tecnologia: 'Wordpress',
          imagen:
            'assets/images/wordpress-logo.png',
        },
        {
          tecnologia: 'Elementor',
          imagen:
            'assets/images/elementor-logo.png',
        },
      ],
    },
  ];

  avanzarProyecto() {
    this.indiceProyecto.update((valor) => (valor + 1) % this.proyectos.length);
  }

  retrasarProyecto() {
    this.indiceProyecto.update(
      (valor) => (valor - 1 + this.proyectos.length) % this.proyectos.length
    );
  }
}
