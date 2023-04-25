const fetch = require('node-fetch');


module.exports = async function (context, myQueueItem) {
    context.log('JavaScript queue trigger function processed work item', myQueueItem);

    let response = await fetch('https://imageconverter.cognitiveservices.azure.com/computervision/imageanalysis:analyze?features=caption,read&model-version=latest&language=en&api-version=2023-02-01-preview', {
        method: 'POST',
        headers: {
            'Ocp-Apim-Subscription-Key': env.ocrKey,
            'Content-Type': 'application/json'
        },
        body: `{'url': '${myQueueItem}'}`
    });
    let result = await response.json()

    console.log(result)
    context.bindings.outMsg = {name:result}
};