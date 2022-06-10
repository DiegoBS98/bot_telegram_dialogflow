require('dotenv').config(); //Requerimos el modulo para tener acceso a las variables de entorno, en este caso el id del bot de telegram
const { Telegraf } = require("telegraf"); //Importamos api de telegram
const axios = require("axios"); // Importamos la libreria para hacer peticiones HTTP a nuestro api, con el que obtendremos la respuesta de Dialogflow
const bot = new Telegraf(process.env.BOT_TOKEN); //Instancia del api de telegram
const url ="http://localhost:3000/detectintent/"; //Url del api que desarrollamos para atacar a dialogflow 


//Frases del bot
const BIENVENIDA = 'Bienvenido al bot de telegram! Puedes probarme con las diferentes opciones:';
const HOLA_DESDE_TELEGRAM = "Hola desde el bot de telegram";

//Función que responderá al comando de inicio
bot.command('start',(ctx) =>{
    sendStartMessage(ctx); //Ejecutamos la funcion que da la bienvenida y 
});

//Funcion que procesara cualquier tipo de texto y se lo enviara al asistente virtual de dialogflow para obtener una respuesta
bot.on('text', async function (ctx) {
    console.log(ctx.message.text);
    var urlDetectIntent = url+ctx.message.text;
    await axios.get(urlDetectIntent).then(res=>{
        ctx.reply(res.data);
    });
} )

//Funcion para mostrar el menu de inicio
function sendStartMessage(ctx){
    bot.telegram.sendMessage(ctx.chat.id, BIENVENIDA, {
        reply_markup: {
            inline_keyboard: [
                [{
                    text:"Frase desde telegram", callback_data: "frase"
                }], 
                [{
                    text:"Conexion con Dialogflow", callback_data: 'conexionDialogflow'
                }]
            ]
        }
    });
}

//cuando pulsen en el boton con callback "frase", responderemos con el mensaje especificado en reply()
bot.action('frase',  ctx =>{
    ctx.answerCbQuery();
    ctx.reply(HOLA_DESDE_TELEGRAM)
});


//Al pulsar en conexion con dialogflow, conectara a través de un hola para empezar la conversacion con el asistente conversacional
bot.action('conexionDialogflow', async (ctx) => {
    ctx.answerCbQuery();
    var urlDetectIntent = url+'hola';
    await axios.get(urlDetectIntent).then(res=>{
        ctx.reply(res.data);
    });
})

bot.launch(); //Funcion para poner el bot en ejecución