# 📁 Portfolio de David Muñoz

![Angular](https://img.shields.io/badge/Angular-19.x-red?logo=angular) ![SCSS](https://img.shields.io/badge/SCSS-Enabled-cc6699?logo=sass)

## Descripción

Este es el portfolio personal de **David Muñoz**, desarrollado con Angular y diseñado con temática de investigación/expediente. Aquí muestro mis proyectos, habilidades y experiencia como desarrollador multiplataforma.

## 🚀 Demo

> _Puedes ver una demo local ejecutando el servidor de desarrollo (ver abajo)._

## 🛠️ Tecnologías principales

- [Angular 19.x](https://angular.io/)
- SCSS (Sass)
- Angular Material
- HTML5 + TypeScript
- Responsive Design

## 📂 Estructura del proyecto

```
src/
  app/
    components/
      hero/
      sobre-mi/
      proyectos/
    assets/
      images/
  styles.scss
  index.html
angular.json
package.json
README.md
```

## ⚡ Instalación y uso

1. Instala dependencias:
   ```bash
   npm install
   ```
2. Inicia el servidor de desarrollo:
   ```bash
   ng serve
   ```
   Luego abre [http://localhost:4200](http://localhost:4200) en tu navegador.

## 🧩 Comandos útiles

- Crear un nuevo componente:
  ```bash
  ng generate component nombre-componente
  ```
- Construir para producción:
  ```bash
  ng build --configuration production
  ```
- Ejecutar tests unitarios:
  ```bash
  ng test
  ```

## 🧪 Tests

- **Unitarios:** Karma + Jasmine (`ng test`)
- **E2E:** Puedes añadir Cypress, Playwright o Protractor según tus preferencias.