# Creando un bot en Telegram con conexión a Dialogflow.
En este repositorio, se encuentran dos proyectos:
  API : Proyecto en el que he desarrollado el api que conectara con nuestro Agente de Dialogflow y devolverá una respuesta al bot de telegram
  BOT: Proyecto en el que se encuentra el código del bot de telegram.

### Pre-Requisitos
  1. Descargar los proyectos y ejectuar `npm install` en cada uno de ellos para instalar las dependencias
  2. Tener un agente creado en Dialogflow con su clave de servicio, que utilizaremos para conectar con nuestro agente.
  3. Tener un agente creado en el BotFather de Telegram para obtener el token del bot para conectarnos a él.
  4. Introducir las variables requeridas en los archivos `.env`
  5. En la carpeta del api, ejecutamos `npm run devserver` para levantar el proyecto
  6. En la carpeta del bot, ejecutamos `npm run devserver` para levantar el otro proyecto.

### Utilizar en telegram
En Telegram, localizamos nuestro bot a partir del nombre que le hemos dado y pulsamos en el boton iniciar.
Esto hará que nuestro bot nos muestr el mensaje de bienvenida junto con el menú de opciones.
  
  
