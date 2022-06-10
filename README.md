# Creando un bot en Telegram con conexión a Dialogflow.
En este repositorio, se encuentran dos proyectos:
  1. **API** : Proyecto en el que he desarrollado el api que conectara con nuestro Agente de Dialogflow y devolverá una respuesta al bot de telegram
  2. **BOT** : Proyecto en el que se encuentra el código del bot de telegram.

### Pre-Requisitos
  1. Tener instalado Node JS. 
  2. Descargar los proyectos y ejectuar `npm install` en cada uno de ellos para instalar las dependencias
  3. Tener un agente creado en Dialogflow con su clave de servicio, que utilizaremos para conectar con nuestro agente.
  4. Tener un agente creado en el BotFather de Telegram para obtener el token del bot para conectarnos a él.
  5. Introducir las variables requeridas en los archivos `.env`
  6. En la carpeta del api, ejecutamos `npm run devserver` para levantar el proyecto
  7. En la carpeta del bot, ejecutamos `npm run devserver` para levantar el otro proyecto.

### Utilizar en Telegram
En Telegram, localizamos nuestro bot a partir del nombre que le hemos dado y pulsamos en el botón iniciar.
Esto hará que nuestro bot nos muestre el mensaje de bienvenida establecido junto con el menú de opciones.
  
  
