import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { HeroComponent } from "../../components/hero/hero.component";
import { SobreMiComponent } from "../../components/sobre-mi/sobre-mi.component";
import { ProyectosComponent } from "../../components/proyectos/proyectos.component";
import { ExperienciaComponent } from "../../components/experiencia/experiencia.component";

@Component({
  selector: 'app-inicio',
  imports: [NavbarComponent, HeroComponent, SobreMiComponent, ProyectosComponent, ExperienciaComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

}
