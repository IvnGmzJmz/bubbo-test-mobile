## Bubbo Mobile App

Esta aplicación se ha desarrollado para cumplir con la prueba tecnica realizada por Bubbo.

La aplicación se ha creado utilizando react-native y fetch, sin ninguna librería ni paquete externo. Sigue un comportamiento responsive, adaptable a todos los tamaños. Se ha testado en iOS.

La aplicación permite ver el listado de libros disponibles mediante scroll, eliminar, editar y crear nuevos libros.

### Home Screen

Lo primero que verá el usuario al entrar en la app será la siguiente pantalla:

![bubo_home_screen](https://github.com/IvnGmzJmz/bubbo-test-mobile/assets/128293461/e54be82a-2558-4003-843f-4af066623b51)

El scroll permite ver toda la lista completa. 
El botón de arriba a la derecha nos va a permitir añadir nuevos elementos. Por otro lado, para ver los detalles del libro, podremos hacer tab en cualquier punto de la card.

### Detail Screen

![simulator_screenshot_5BE30C25-3386-4346-B7EF-EC9C41E35EB6](https://github.com/IvnGmzJmz/bubbo-test-mobile/assets/128293461/5409a201-6d2c-4703-a6ee-cf1675726424)

### Edit Screen
![bubbok_edit](https://github.com/IvnGmzJmz/bubbo-test-mobile/assets/128293461/13847911-ebd4-494f-b4fc-3c4d84d6667f)

### Create Screen

![bubbook_create](https://github.com/IvnGmzJmz/bubbo-test-mobile/assets/128293461/6cd2e721-84a4-4ae9-9b4d-207ccb1958d6)

### Desarrollos futuros

- Implementación de filtros y soluciono como la paginación para evitar scroll infinito. Si mantenemos el scroll, sería interesante realizar cargas dinámicas mientras se va scrolleando, para no cargar todo el contenido a la vez.
- Creación de usuarios y sistema de Leido/No Leido y/o puntuaciones, incluiría el login, registro, etc...
- Mejora los estilos y las animaciones.
