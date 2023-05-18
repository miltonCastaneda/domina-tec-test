# domina-tec-tes

Proyecto de Gestión de Tareas y Usuarios con Node.js, MongoDB, Docker y NGINX

Este proyecto es una aplicación de gestión de tareas y usuarios construida con Node.js y MongoDB, junto con el uso de Docker y Docker Compose para la orquestación de contenedores. Además, se utiliza NGINX como servidor proxy para exponer el frontend y los dos microservicios backend.

Características principales:
- Microservicio de tareas: API RESTful para gestionar tareas, permitiendo crear, leer, actualizar y eliminar tareas.
- Microservicio de usuarios: API RESTful para administrar usuarios, incluyendo la creación, autenticación y gestión de perfiles.
- Frontend interactivo: Interfaz de usuario intuitiva construida en React que consume los microservicios de tareas y usuarios.
- Integración de Node.js y MongoDB: Utilización de Node.js para el backend y MongoDB como base de datos para almacenar datos de tareas y usuarios.
- Contenedores Docker: Implementación de la aplicación utilizando contenedores Docker para facilitar la instalación y la portabilidad del entorno de desarrollo.
- Orquestación con Docker Compose: Uso de Docker Compose para gestionar y coordinar los diferentes contenedores de la aplicación.
- Proxy con NGINX: Configuración de NGINX como servidor proxy para permitir el acceso al frontend y los microservicios backend desde un único punto de entrada.

Tecnologías utilizadas:
- Node.js
- MongoDB
- Docker
- Docker Compose
- NGINX

Instrucciones de instalación y uso:
1. Clona este repositorio en tu máquina local.
2. Asegúrate de tener Docker y Docker Compose instalados en tu sistema.
3. Navega hasta el directorio del proyecto.
4. Ejecuta el comando "docker-compose build --no-cache" para construir los contenedores sin utilizar la caché.
5. A continuación, ejecuta el comando "docker-compose up" para ejecutar los contenedores.
6. Accede al frontend en tu navegador a través de http://localhost.
7. Comienza a utilizar la aplicación para gestionar tareas y usuarios.

¡Contribuciones y mejoras son bienvenidas! Si tienes alguna sugerencia o problema, por favor, abre un issue en este repositorio.

Disfruta utilizando esta aplicación de gestión de tareas y usuarios construida con Node.js, MongoDB, Docker y NGINX. ¡Esperamos que sea útil para ti!