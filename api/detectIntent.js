const dialogflow =  require("dialogflow");
var config = {
    credentials: {
      private_key: "PON TU PRIVATE KEY AQUI",
      client_email: "PON TU CLIENT_EMAIL AQUI"
    }
}
const sessionId = '123456789';
const languageCode = 'es-ES';

const sessionClient = new dialogflow.SessionsClient(config);
const sessionPath = sessionClient.sessionPath(process.env.PROJECT_ID, sessionId);

async function _detectIntent(msg){
    //Cremaos objeto de solicitud
    const request = {
        session: sessionPath,
        queryInput: {
            text: {
                text: msg,
                languageCode: languageCode,
            },
        },
    };
    //Enviamos solicitud a dialogflow
    var result = await sessionClient.detectIntent(request).then(responses => {
        //En caso de que detectemos un intent y la conexion con sea satisfactoria...
        console.log('Intent Detectado');
        const result = responses[0].queryResult;
        console.log(`  Pregunta: ${result.queryText}`);
        console.log(`  Respuesta: ${result.fulfillmentText}`);
        if (result.intent) {
            console.log(`  Intent: ${result.intent.displayName}`);
        } else {
            console.log(`  No se ha matcheado ningun intent.`);
        }
        console.log(result.fulfillmentText);
        return result.fulfillmentText; //Guardamos la respuesta en la variable result
    }).catch(err => {
        console.log(`  No se ha matcheado ningun intent.`);
        return `  No se ha matcheado ningun intent.`;
    });  
    return result; //Devolvemos respuesta al bot de telegram
}

module.exports = _detectIntent;