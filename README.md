# RindeCountries

### Requisitos técnicos 
-  npm: 10.2.4
- node: 20.11.1
### Proceso de inicialización del proyecto

- ### Paso 1: Instalación de dependencias
    `npm i` o `npm install`
- ### Paso 2: Inicio de la plataforma
    `npm run dev`


#### El componente de software fue diseñado siguiendo una estructura organizada en archivos por función, adaptándose a los requerimientos específicos. Para ello, se establecieron cuatro carpetas principales:

- Landing: Contiene dos subcarpetas, pages y components. En pages, se alberga la vista principal de la plataforma, mientras que components guarda los componentes que estructuran dicha vista.
- Router: Incluye las rutas y la navegación de la aplicación, centralizando la gestión de los diferentes accesos y vistas.
- Services: Alberga la lógica para la conexión con la API, específicamente utilizando el endpoint https://restcountries.com/v3.1/all para obtener los datos requeridos.
- Components: Destinada a los componentes globales, que en este contexto se limitan a NavBar, proporcionando una barra de navegación consistente a través de la aplicación.

#### Adicionalmente, todos los componentes están debidamente comentados para facilitar su comprensión y asegurar un entendimiento claro de sus funcionalidades y estructuras. Esta documentación interna promueve un mantenimiento más eficiente y una colaboración efectiva dentro del equipo de desarrollo.

### Nota: Dado las sugerencias de diseño proporcionados por W3C y por temas de eficiencia, no se incorporó un botón de búsqueda en filtro de búsqueda por nombre, ya que este es dinámico y no existe necesidad de Trigger para ejecutar la acción.