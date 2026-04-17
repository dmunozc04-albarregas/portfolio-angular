import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { HeroComponent } from "../../components/hero/hero.component";
import { SobreMiComponent } from "../../components/sobre-mi/sobre-mi.component";
import { ProyectosComponent } from "../../components/proyectos/proyectos.component";
import { ExperienciaComponent } from "../../components/experiencia/experiencia.component";
import { HabilidadesComponent } from "../../components/habilidades/habilidades.component";
import { ContactoComponent } from "../../components/contacto/contacto.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-inicio',
  imports: [NavbarComponent, HeroComponent, SobreMiComponent, ProyectosComponent, ExperienciaComponent, HabilidadesComponent, ContactoComponent, FooterComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

}
